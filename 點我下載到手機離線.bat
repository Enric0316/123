@echo off
chcp 950 >nul
powershell.exe -ExecutionPolicy Bypass -File "%~dp0一鍵手機離線下載.ps1"
pause