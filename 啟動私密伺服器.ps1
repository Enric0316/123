Set-Location -Path $PSScriptRoot

Write-Host "======================================================" -ForegroundColor Gold
Write-Host "🚀 正在啟動 100% 私密區域網路旅遊手帳伺服器..." -ForegroundColor Cyan
Write-Host "======================================================" -ForegroundColor Gold

node server.js
