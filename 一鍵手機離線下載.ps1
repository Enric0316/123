# Travel App PWA Offline Installer
$nodeProc = Get-Process -Name "node" -ErrorAction SilentlyContinue
if (-not $nodeProc) {
    Start-Process -FilePath "node" -ArgumentList "server.js" -WorkingDirectory $PSScriptRoot -WindowStyle Hidden
    Start-Sleep -Seconds 2
}

$myIp = (Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.IPAddress -notlike "127.*" -and $_.IPAddress -notlike "169.254.*" -and $_.InterfaceAlias -notlike "*vEthernet*" } | Select-Object -First 1).IPAddress
if (-not $myIp) { $myIp = "127.0.0.1" }
$localUrl = "http://" + $myIp + ":8085"

$tunnelUrl = ""
if (Test-Path "$PSScriptRoot\tunnel.log") {
    $content = Get-Content "$PSScriptRoot\tunnel.log" -Raw -ErrorAction SilentlyContinue
    if ($content -match "(https://[a-zA-Z0-9-]+\.trycloudflare\.com)") {
        $tunnelUrl = $matches[1]
    }
}

if (-not $tunnelUrl) {
    $tunnelUrl = "https://injection-assistant-explosion-december.trycloudflare.com"
}

Write-Host "======================================================" -ForegroundColor Cyan
Write-Host "   Travel App - Mobile PWA Installer" -ForegroundColor Yellow
Write-Host "======================================================" -ForegroundColor Cyan
Write-Host "Global HTTPS URL (For Outside / 4G / 5G / Roaming):" -ForegroundColor Green
Write-Host "👉  $tunnelUrl" -ForegroundColor Yellow
Write-Host ""
Write-Host "Home Local Wi-Fi URL:" -ForegroundColor Gray
Write-Host "👉  $localUrl" -ForegroundColor Gray
Write-Host "======================================================" -ForegroundColor Cyan

Start-Process $tunnelUrl
