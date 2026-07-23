# ======================================================
# 📱 旅遊手帳 PWA - 100% 手機離線下載輔助腳本
# ======================================================

Clear-Host
Write-Host "======================================================" -ForegroundColor Cyan
Write-Host "   📱 夢幻旅遊手帳 - 手機離線 APP 下載助手" -ForegroundColor Yellow
Write-Host "======================================================" -ForegroundColor Cyan

# 自動搜尋區域網路 IPv4
$myIp = (Get-NetIPAddress -AddressFamily IPv4 | Where-Object { 
    $_.IPAddress -notlike "127.*" -and 
    $_.IPAddress -notlike "169.254.*" -and 
    $_.InterfaceAlias -notlike "*vEthernet*" 
} | Select-Object -First 1).IPAddress

if (-not $myIp) {
    $myIp = "127.0.0.1"
}

$myUrl = "http://" + $myIp + ":8085"

# 檢查 Node.js 伺服器
$serverProc = Get-Process -Name "node" -ErrorAction SilentlyContinue
if (-not $serverProc) {
    Write-Host "[*] 正在為您啟動本地私密伺服器..." -ForegroundColor Gray
    Start-Process -FilePath "node" -ArgumentList "server.js" -WorkingDirectory $PSScriptRoot -WindowStyle Hidden
    Start-Sleep -Seconds 1
}

Write-Host ""
Write-Host "📲 請在手機 (iPhone Safari / Android Chrome) 輸入以下網址：" -ForegroundColor Green
Write-Host "👉  $myUrl" -ForegroundColor Yellow
Write-Host ""
Write-Host "------------------------------------------------------" -ForegroundColor DarkGray
Write-Host "💡 100% 離線下載至手機 3 步驟：" -ForegroundColor Cyan
Write-Host "  1. 確保手機與電腦連在【同一個 Wi-Fi 或手機熱點】" -ForegroundColor White
Write-Host "  2. 用手機 Safari/Chrome 開啟網址：$myUrl" -ForegroundColor White
Write-Host "  3. 點擊 Safari 底部「分享按鈕 📤」 ➔ 點選「加入主畫面」" -ForegroundColor Green
Write-Host "     (Android 請點右上角「三點選單」 ➔ 「新增至主畫面」)" -ForegroundColor Green
Write-Host ""
Write-Host "🎉 完成！手機桌面上將出現專屬 App 圖標，出國就算零網路也能 100% 離線使用！" -ForegroundColor Yellow
Write-Host "======================================================" -ForegroundColor Cyan

Start-Process $myUrl