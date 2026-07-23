@echo off
chcp 65001 >nul
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0啟動私密伺服器.ps1"
timeout /t 3