@echo off
chcp 65001 >nul
title 夢幻旅遊手帳 - 伺服器啟動器
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0啟動私密伺服器.ps1"
pause
