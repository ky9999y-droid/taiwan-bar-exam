@echo off
chcp 65001 >nul
echo ========================================================
echo   ⚖️ 台灣律師考試第一試平台 - 一鍵推送到 GitHub 部署
echo ========================================================
echo.
cd /d "C:\Users\USER\Desktop\刑事訴訟法"
echo 正在推送到 GitHub (https://github.com/ky9999y-droid/taiwan-bar-exam)...
echo.
git push -u origin main
echo.
echo ========================================================
echo   推送完成！請回 GitHub 檢查 Actions 部署狀態。
echo ========================================================
pause
