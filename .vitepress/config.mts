import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "maotu",
  description: "maotu使用文档",
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },
  themeConfig: {
    logo: '/favicon.svg',
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
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'author', content: 'yaolunmao' }]
  ],
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
      items: [
        {
          text: '导入图形库',
          items: [
            { text: '导入svg文件', link: '/guide/base/import-svg' },
            { text: '导入vue组件', link: '/guide/base/import-vue' },
            { text: '导入自定义svg', link: '/guide/base/import-custom-svg' },
            { text: '导入图片', link: '/guide/base/import-img' },
            { text: '导入本地文件', link: '/guide/base/import-file' }
          ]
        },
        { text: '导入细节', link: '/guide/base/import-details' }
      ]
    }
  ]
}