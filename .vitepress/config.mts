import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "maotu",
  titleTemplate:"maotu-web组态引擎库",
  description: "maotu-web组态引擎库使用文档",
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

    outline: [0, 3],
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
  lastUpdated: false
})
function nav() {
  return [
    { text: '指南', link: '/guide/get-started-quickly/install', activeMatch: '/guide/' },
    {
      text: '在线预览',
      items: [
        { text: 'mt-edit', link: 'http://mt-edit.yaolm.top/' },
        { text: '集成至若依', link: 'http://101.200.230.128:8888/' },
      ]
    },
    {
      text: '集成示例源码',
      items: [
        { text: 'vue3', link: 'https://github.com/yaolunmao/maotu-docs/tree/main/example/vue3' },
        { text: '集成至若依', link: 'https://github.com/yaolunmao/maotu-ry.git' },
      ]
    },
    {
      text: '商务合作',
      link: '/cooperation', activeMatch: '/cooperation/'
    },
    {
      text: '问题反馈',
      link: 'https://github.com/yaolunmao/maotu-docs/issues'
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
        {
          text: '配置说明', items: [
            { text: '导入细节', link: '/guide/base/import-details' },
            { text: '默认执行事件', link: '/guide/base/import-details-events' },
            { text: '自定义吸附点位置', link: '/guide/base/import-details-ports' },
          ]
        },
      ]
    },
    {
      text: '功能',
      items: [
        {
          text: '基本操作',
          link: '/guide/function/base'
        },
        { text: '快捷键', link: '/guide/function/shortcut-key' },
      ]
    },
    {
      text: '名词解释',
      items: [
        {
          text: '全局事件',
          link: '/guide/definition/global-events'
        }
      ]
    },
    {
      text: '组件属性与事件',
      items: [
        {
          text: 'mt-edit',
          link: '/guide/attr-event/mt-edit'
        },
        { text: 'mt-preview', link: '/guide/attr-event/mt-preview' },
      ]
    },
    {
      text: '进阶场景',
      items: [
        {
          text: '加载已有数据',
          link: '/guide/advanced/load-data'
        },
        {
          text: '设备绑定',
          link: '/guide/advanced/device-bind'
        },
        { text: '外部控制图形属性', link: '/guide/advanced/outter-control' },
        { text: '回调外部项目函数', link: '/guide/advanced/outter-callback' },
        { text: '引用echarts', link: '/guide/advanced/echarts' }
      ]
    },
    {
      text: '拓展功能',
      items: [
        { text: '生成缩略图', link: '/guide/expansion/gen-thumb' },
        { text: '连线编辑模式', link: '/guide/expansion/draw-line' },
        { text: '使用缩略图进行二次编辑', link: '/guide/expansion/thumb-second-edit' },
      ]
    },
  ]
}