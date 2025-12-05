import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '郭容刚 - 直播中场控',
  description: '个人简历网站 - 直播中场控郭容刚的个人简历',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}

