@echo off
chcp 65001 >nul
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0一鍵手機離線下載.ps1"
timeout /t 3