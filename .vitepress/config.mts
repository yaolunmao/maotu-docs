import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "maotu",
  description: "maotu使用文档",
  themeConfig: {
    logo: '/logo.svg',
    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
    },
    footer: {
      copyright: 'Copyright © 2023-present 咬轮猫'
    },
    outline:[0,3],
    outlineTitle: '内容',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yaolunmao/maotu-docs' }
    ],
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  },
  lastUpdated:false
})
function nav() {
  return [
    { text: '指南', link: '/guide/get-started-quickly/install', activeMatch: '/guide/' },
    {
      text: '在线预览',
      items: [
        { text: 'mt-edit', link: 'http://mt-edit.yaolm.top/' },
      ]
    },
  ]
}
function sidebarGuide() {
  return [
    {
      text: '快速上手',
      items: [
        { text: '安装与集成', link: '/guide/get-started-quickly/install' }
      ]
    },
    {
      text: '基础',
      items: []
    }
  ]
}