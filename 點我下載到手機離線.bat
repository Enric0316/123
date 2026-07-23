@echo off
chcp 65001 >nul
title 夢幻旅遊手帳 - 離線下載助手
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0一鍵手機離線下載.ps1"
pause
