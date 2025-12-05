# 个人简历网站

一个现代化的响应式个人简历网站，使用 Next.js 构建，支持一键部署到 Vercel。

## 功能特性

- ✅ 响应式设计（移动端优先）
- ✅ 平滑滚动导航
- ✅ 项目经历展示
- ✅ 教育背景展示
- ✅ 技能进度条展示
- ✅ 社交媒体链接
- ✅ 联系表单（支持邮件发送）
- ✅ 现代化 UI 设计

## 技术栈

- **前端框架**: Next.js 14 (React)
- **样式**: CSS3 (自定义样式)
- **部署**: Vercel
- **后端**: Vercel Serverless Functions

## 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建项目

```bash
npm run build
```

构建完成后，可以运行 `npm start` 启动生产服务器。

**注意**：如果需要生成静态 HTML 文件，需要修改 `next.config.js` 启用 `output: 'export'`，但这会使 API 路由不可用。详情请参考 `DEPLOYMENT.md`。

## 部署到 Vercel

### 方法 1: 通过 Vercel CLI

1. 安装 Vercel CLI:
```bash
npm i -g vercel
```

2. 在项目根目录运行:
```bash
vercel
```

### 方法 2: 通过 GitHub

1. 将代码推送到 GitHub 仓库
2. 在 [Vercel](https://vercel.com) 中导入项目
3. Vercel 会自动检测 Next.js 项目并部署

## 配置邮件服务（可选）

要启用联系表单的邮件发送功能，需要配置邮件服务：

1. 在 Vercel 项目设置中添加环境变量：
   - `SENDGRID_API_KEY` (如果使用 SendGrid)
   - 或其他邮件服务的 API 密钥

2. 修改 `app/api/contact/route.ts` 文件，取消注释邮件发送代码并配置相应的服务。

### 推荐的邮件服务

- **SendGrid**: 免费套餐每月 100 封邮件
- **Resend**: 免费套餐每月 3,000 封邮件
- **Nodemailer**: 使用 SMTP 服务

## 项目结构

```
.
├── app/
│   ├── layout.tsx          # 根布局
│   ├── page.tsx            # 主页面
│   └── globals.css         # 全局样式
├── components/
│   ├── Navigation.tsx      # 导航栏组件
│   ├── Home.tsx            # 首页组件
│   ├── Projects.tsx        # 项目展示组件
│   ├── Education.tsx       # 教育背景组件
│   ├── Skills.tsx          # 技能展示组件
│   ├── SocialMedia.tsx     # 社交媒体组件
│   └── Contact.tsx         # 联系表单组件
├── app/
│   └── api/
│       └── contact/
│           └── route.ts    # 联系表单 API
├── next.config.js          # Next.js 配置
├── vercel.json             # Vercel 配置
└── package.json            # 项目依赖
```

## 自定义内容

要修改个人信息，请编辑以下文件：

- `components/Home.tsx` - 个人信息和联系方式
- `components/Projects.tsx` - 项目经历
- `components/Education.tsx` - 教育背景
- `components/Skills.tsx` - 技能展示
- `components/SocialMedia.tsx` - 社交媒体链接

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)
- 移动端浏览器

## 许可证

MIT License

## 联系方式

如有问题或建议，请通过联系表单或发送邮件至 zhangwei@example.com

