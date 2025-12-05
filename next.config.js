/** @type {import('next').NextConfig} */
const nextConfig = {
  // 注释掉 output: 'export' 以支持 API 路由
  // 如果需要静态导出，可以取消注释，但 API 路由将不可用
  // output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig

