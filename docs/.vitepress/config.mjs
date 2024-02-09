import { defineConfig } from 'vitepress'
import { set_sidebar } from './autosidebar'

export default defineConfig({
  lang: 'cn',
  title: "mo-notes",
  description: "A VitePress Site",
  // gitee 打包
  // base: '/mo_notes/',
  // github 打包
  // base: '/mo-notes/',
  base: '/',


  // srcDir: 'docs',
  // lastUpdated: true,
  themeConfig: {
    logo: '/icon/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '电脑知识', link: '/repo/computerKnowledge/01 硬件知识/00 前言' },
      { text: '聚合指南', link: '/pages/聚合指南' },
      {
        text: '博客建站', items: [
          { text: '全流程', link: '/repo/buildSite/00 建站知识/00 避坑指引' },
          { text: 'vitepress', link: '/repo/vitepress/01 可跳过的题外话' }
        ]
      },

      {
        text: "编程笔记", items: [
          { text: 'HTML', link: '/repo/programming/html/00 前置准备' },
          { text: 'CSS', link: '/repo/programming/css/01 基础知识/00 简述' },
          { text: 'JavaScript', link: '/repo/programming/javascript/01 基础部分/01 简述' },
          { text: 'Node.js', link: '/repo/programming/nodejs/nodejs' },
          { text: 'Vue', link: '/repo/programming/vue/00 简述' },
          { text: 'Uniapp', link: '/repo/programming/uniapp/uniapp' },
          { text: 'Docker', link: '/repo/programming/docker/docker' },


        ]
      },
      { text: '待处理问题', link: '/pages/issue' },
      { text: 'workbench', link: 'http://localhost:19972' },
      {
        text: '笔记备份', items: [
          { text: 'Github', link: 'https://hengqianfan.github.io/mo-notes/' },
          { text: 'Github-x', link: 'https://hengqianfan.github.io/mo-notes-x/' },

        ]
      },


    ],
    sidebar: {
      '/repo/programming/html': set_sidebar('/repo/programming/html'),
      '/repo/programming/css': set_sidebar('/repo/programming/css'),
      '/repo/programming/javascript': set_sidebar('/repo/programming/javascript'),
      '/repo/programming/nodejs': set_sidebar('/repo/programming/nodejs'),
      '/repo/programming/vue': set_sidebar('/repo/programming/vue'),
      '/repo/vitepress': set_sidebar('/repo/vitepress'),

      '/repo/computerKnowledge': set_sidebar('/repo/computerKnowledge', false),
      '/repo/computerKnowledge/03 扩展知识/02 虚拟机': set_sidebar('/repo/computerKnowledge/03 扩展知识/02 虚拟机'),

      '/repo/buildSite': set_sidebar('/repo/buildSite'),

      '/repo/vscode': set_sidebar('/repo/vscode'),
      '/repo/github': set_sidebar('/repo/github'),






    },
    // outline: [1, 6],
    outline: {
      label: "目录",
      // 因为要占用h1做网页副标题
      level: [2, 6],
    },
    // lastUpdated: true,
    search: {
      provider: 'local'
      // provider: 'algolia'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hengqianfang' }
    ],

    returnToTopLabel: '回到顶部'
  },

  // markdown: {
  //   config: (md) => {
  //     md.use(tool_video)
  //   }
  // }

})
