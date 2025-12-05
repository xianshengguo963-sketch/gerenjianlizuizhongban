# 启动开发服务器脚本
$env:PATH = $env:PATH + ";C:\Program Files\nodejs"
Write-Host "正在启动开发服务器..." -ForegroundColor Green
Write-Host "服务器启动后，请在浏览器中访问: http://localhost:3000" -ForegroundColor Yellow
Write-Host "按 Ctrl+C 可以停止服务器" -ForegroundColor Cyan
Write-Host ""
npm.cmd run dev


