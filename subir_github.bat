@echo off
setlocal
title Subir Imantek a GitHub
color 0b
cd /d "%~dp0"

set "REMOTE_URL=https://github.com/Harveyjnz31/Imantek.git"

echo ===================================================
echo     CONFIGURACION Y SUBIDA A GITHUB - IMANTEK
echo ===================================================
echo.
echo Repositorio: %REMOTE_URL%
echo.

git rev-parse --is-inside-work-tree >nul 2>nul
if errorlevel 1 (
    echo Error: Esta carpeta no parece ser un repositorio Git.
    echo.
    pause
    exit /b 1
)

echo Vinculando repositorio remoto sin guardar tokens...
git remote get-url origin >nul 2>nul
if errorlevel 1 (
    git remote add origin "%REMOTE_URL%"
) else (
    git remote set-url origin "%REMOTE_URL%"
)

echo.
echo Asegurando rama principal main...
git branch -M main
if errorlevel 1 (
    echo Error: No se pudo preparar la rama main.
    echo.
    pause
    exit /b 1
)

echo.
echo Estado actual de cambios locales:
git status --short
echo.
echo Nota: este script sube commits existentes. Si ves archivos con M o ??,
echo primero guarda los cambios con git add y git commit.
echo.
set /p CONFIRM="Continuar con git push -u origin main? (S/N): "
if /i not "%CONFIRM%"=="S" (
    echo Operacion cancelada.
    echo.
    pause
    exit /b 0
)

echo.
echo Subiendo a GitHub...
echo Git Credential Manager puede pedir inicio de sesion o token en una ventana segura.
git push -u origin main
if errorlevel 1 (
    echo.
    echo ===================================================
    echo  ERROR: No se pudo subir el proyecto.
    echo  Verifica el acceso al repositorio y tus credenciales de GitHub.
    echo ===================================================
    echo.
    pause
    exit /b 1
)

echo.
echo ===================================================
echo  EXITO: El proyecto se subio correctamente.
echo ===================================================
echo.
pause
