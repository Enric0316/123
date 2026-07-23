$nodeProc = Get-Process -Name "node" -ErrorAction SilentlyContinue
if (-not $nodeProc) {
    Start-Process -FilePath "node" -ArgumentList "server.js" -WorkingDirectory $PSScriptRoot -WindowStyle Hidden
    Start-Sleep -Seconds 2
}

$myIp = (Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.IPAddress -notlike "127.*" -and $_.IPAddress -notlike "169.254.*" -and $_.InterfaceAlias -notlike "*vEthernet*" } | Select-Object -First 1).IPAddress
if (-not $myIp) { $myIp = "127.0.0.1" }
$localUrl = "http://" + $myIp + ":8085"

Write-Host "======================================================" -ForegroundColor Cyan
Write-Host "   Travel App Server Started Successfully!" -ForegroundColor Yellow
Write-Host "   URL: http://localhost:8085" -ForegroundColor Green
Write-Host "   LAN: $localUrl" -ForegroundColor Yellow
Write-Host "======================================================" -ForegroundColor Cyan

Start-Process "http://localhost:8085"
