try {
    # 檢查 Node 伺服器
    $nodeProc = Get-Process -Name "node" -ErrorAction SilentlyContinue
    if (-not $nodeProc) {
        Write-Host "Starting Node server..." -ForegroundColor Yellow
        Start-Process -FilePath "node" -ArgumentList "server.js" -WorkingDirectory $PSScriptRoot -WindowStyle Hidden
        Start-Sleep -Seconds 2
    }

    # 檢查 Cloudflare Tunnel 是否運作中
    $cloudflaredProc = Get-Process -Name "cloudflared" -ErrorAction SilentlyContinue
    if (-not $cloudflaredProc) {
        Write-Host "Cloudflare Tunnel is not running. Starting new tunnel..." -ForegroundColor Yellow
        & "$PSScriptRoot\start_tunnel.ps1"
    }

    $myIp = "127.0.0.1"
    try {
        $ipObj = Get-NetIPAddress -AddressFamily IPv4 -ErrorAction SilentlyContinue | Where-Object { $_.IPAddress -notlike "127.*" -and $_.IPAddress -notlike "169.254.*" -and $_.InterfaceAlias -notlike "*vEthernet*" } | Select-Object -First 1
        if ($ipObj -and $ipObj.IPAddress) { $myIp = $ipObj.IPAddress }
    } catch {}

    $localUrl = "http://" + $myIp + ":8085"

    $tunnelUrl = ""
    if (Test-Path "$PSScriptRoot\tunnel.log") {
        $content = Get-Content "$PSScriptRoot\tunnel.log" -Raw -ErrorAction SilentlyContinue
        if ($content -match "(https://[a-zA-Z0-9-]+\.trycloudflare\.com)") {
            $tunnelUrl = $matches[1]
        }
    }

    Write-Host "======================================================" -ForegroundColor Cyan
    Write-Host "   Travel App - Mobile PWA Installer" -ForegroundColor Yellow
    Write-Host "======================================================" -ForegroundColor Cyan

    if ($tunnelUrl) {
        Write-Host "Global HTTPS URL (For Outside / 4G / 5G / Roaming):" -ForegroundColor Green
        Write-Host "👉  $tunnelUrl" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Home Local Wi-Fi URL:" -ForegroundColor Gray
        Write-Host "👉  $localUrl" -ForegroundColor Gray
        Write-Host "======================================================" -ForegroundColor Cyan
        Start-Process $tunnelUrl
    } else {
        Write-Host "Tunnel URL not ready. Please use Local Wi-Fi URL:" -ForegroundColor Red
        Write-Host "👉  $localUrl" -ForegroundColor Yellow
        Write-Host "======================================================" -ForegroundColor Cyan
        Start-Process $localUrl
    }
} catch {
    Write-Host "Error occurred: $_" -ForegroundColor Red
    Pause
}


