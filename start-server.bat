@echo off
echo 正在启动开发服务器...
echo 服务器启动后，请在浏览器中访问: http://localhost:3000
echo 按 Ctrl+C 可以停止服务器
echo.
set PATH=%PATH%;C:\Program Files\nodejs
call npm.cmd run dev
pause

