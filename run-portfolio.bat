@echo off
title My Portfolio - Dev Server
color 0A

echo.
echo  ============================================
echo   Muhammad Abdullah - Portfolio Dev Server
echo  ============================================
echo.

for /f "tokens=2*" %%A in ('reg query "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v PATH 2^>nul') do set "MACHINE_PATH=%%B"
for /f "tokens=2*" %%A in ('reg query "HKCU\Environment" /v PATH 2^>nul') do set "USER_PATH=%%B"
set "PATH=%MACHINE_PATH%;%USER_PATH%"

where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js not found. Please restart your PC after installation.
    pause
    exit /b 1
)

echo [OK] Node.js detected:
node --version

cd /d "%~dp0"

if not exist "node_modules" (
    echo.
    echo [INFO] Installing dependencies...
    npm install
)

echo.
echo [INFO] Launching Vite dev server...
echo [INFO] Portfolio will open at: http://localhost:5173
echo.

start "" cmd /c "timeout /t 3 /nobreak >nul && start http://localhost:5173"

npm run dev

pause