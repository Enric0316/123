@echo off
chcp 65001 >nul
title 📱 點我下載到手機離線 (夢幻旅遊手帳 PWA)
powershell -ExecutionPolicy Bypass -File "%~dp0一鍵手機離線下載.ps1"
pause
