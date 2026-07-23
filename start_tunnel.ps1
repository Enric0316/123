# Kill any old node server or cloudflared processes
Get-Process -Name "node", "cloudflared" -ErrorAction SilentlyContinue | Where-Object { $_.MainWindowTitle -eq "" -or $_.ProcessName -eq "cloudflared" } | Stop-Process -Force -ErrorAction SilentlyContinue

Remove-Item -Path "tunnel.log" -ErrorAction SilentlyContinue

Write-Host "Starting Node HTTP server on port 8085..."
Start-Process -FilePath "node" -ArgumentList "server.js" -WindowStyle Hidden

Start-Sleep -Seconds 2

if (-not (Test-Path "cloudflared.exe")) {
    Write-Host "Downloading cloudflared..."
    Invoke-WebRequest -Uri "https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.exe" -OutFile "cloudflared.exe"
}

Write-Host "Starting Cloudflare tunnel..."
Start-Process -FilePath ".\cloudflared.exe" -ArgumentList "tunnel", "--url", "http://127.0.0.1:8085" -RedirectStandardError "tunnel.log" -WindowStyle Hidden

Write-Host "Waiting for TryCloudflare HTTPS URL..."
$url = ""
for ($i=0; $i -lt 25; $i++) {
    Start-Sleep -Seconds 1
    if (Test-Path "tunnel.log") {
        $content = Get-Content "tunnel.log" -Raw
        if ($content -match "(https://[a-zA-Z0-9-]+\.trycloudflare\.com)") {
            $url = $matches[1]
            break
        }
    }
}

if ($url) {
    Write-Host "=========================================="
    Write-Host "SUCCESS_URL: $url"
    Write-Host "=========================================="
} else {
    Write-Host "FAILED to get URL. Check tunnel.log"
}
