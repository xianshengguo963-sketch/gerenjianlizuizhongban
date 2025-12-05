# 部署指南

## 本地开发

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 访问 http://localhost:3000

## 部署到 Vercel

### 方法 1: 通过 Vercel Dashboard（推荐）

1. 将代码推送到 GitHub 仓库
2. 访问 [Vercel](https://vercel.com) 并登录
3. 点击 "New Project"
4. 导入你的 GitHub 仓库
5. Vercel 会自动检测 Next.js 项目
6. 点击 "Deploy" 即可

### 方法 2: 通过 Vercel CLI

1. 安装 Vercel CLI：
```bash
npm i -g vercel
```

2. 在项目根目录运行：
```bash
vercel
```

3. 按照提示完成配置

## 配置邮件服务（可选）

要启用联系表单的邮件发送功能：

### 使用 SendGrid

1. 注册 [SendGrid](https://sendgrid.com) 账号
2. 创建 API Key
3. 在 Vercel 项目设置中添加环境变量：
   - `SENDGRID_API_KEY`: 你的 SendGrid API Key
4. 修改 `app/api/contact/route.ts`，取消注释 SendGrid 相关代码

### 使用 Resend（推荐）

1. 注册 [Resend](https://resend.com) 账号
2. 创建 API Key
3. 在 Vercel 项目设置中添加环境变量：
   - `RESEND_API_KEY`: 你的 Resend API Key
4. 安装 Resend：
```bash
npm install resend
```
5. 修改 `app/api/contact/route.ts`，使用 Resend API

### 使用 Nodemailer + SMTP

1. 安装 Nodemailer：
```bash
npm install nodemailer
```
2. 在 Vercel 项目设置中添加环境变量：
   - `SMTP_HOST`: SMTP 服务器地址
   - `SMTP_PORT`: SMTP 端口
   - `SMTP_USER`: SMTP 用户名
   - `SMTP_PASS`: SMTP 密码
3. 修改 `app/api/contact/route.ts`，配置 Nodemailer

## 生成静态 HTML 文件

如果需要生成静态 HTML 文件（不包含 API 路由）：

1. 修改 `next.config.js`，取消注释 `output: 'export'`
2. 运行构建命令：
```bash
npm run build
```
3. 静态文件将生成在 `out` 目录中

**注意**：静态导出模式下，API 路由将不可用。如果需要联系表单功能，请使用 Vercel 部署而不是静态导出。

## 环境变量

在 Vercel 项目设置中可以配置以下环境变量：

- `SENDGRID_API_KEY`: SendGrid API Key（如果使用 SendGrid）
- `RESEND_API_KEY`: Resend API Key（如果使用 Resend）
- `SMTP_HOST`: SMTP 服务器地址（如果使用 Nodemailer）
- `SMTP_PORT`: SMTP 端口（如果使用 Nodemailer）
- `SMTP_USER`: SMTP 用户名（如果使用 Nodemailer）
- `SMTP_PASS`: SMTP 密码（如果使用 Nodemailer）

## 自定义域名

1. 在 Vercel 项目设置中，点击 "Domains"
2. 添加你的自定义域名
3. 按照提示配置 DNS 记录

## 故障排除

### API 路由不工作

- 确保没有启用 `output: 'export'`（静态导出不支持 API 路由）
- 检查 Vercel 函数日志
- 确保 API 路由文件路径正确：`app/api/contact/route.ts`

### 邮件发送失败

- 检查环境变量是否正确配置
- 查看 Vercel 函数日志
- 确认邮件服务 API Key 有效
- 检查发送邮箱地址是否已验证（某些服务要求验证发送邮箱）

### 样式不显示

- 确保 CSS 文件已正确导入
- 检查浏览器控制台是否有错误
- 清除浏览器缓存


