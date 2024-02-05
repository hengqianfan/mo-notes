import { defineConfig } from 'vitepress'
import { set_sidebar } from './autosidebar'

export default defineConfig({
  lang: 'cn',
  title: "mo-notes",
  description: "A VitePress Site",
  base: '/mo-notes/',
  // lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '电脑知识', link: '/computerKnowledge/index' },
      { text: '聚合指南', link: '/pages/聚合指南' },
      {
        text: '博客建站', items: [
          { text: '全流程', link: '/siteBuilding/00 建站知识/00 避坑指引' },
          { text: 'vitepress', link: '/programming/vitepress/01 可跳过的题外话' }
        ]
      },

      {
        text: "编程笔记", items: [
          { text: 'HTML', link: '/programming/html/00 前置准备' },
          { text: 'CSS', link: '/programming/css/01 基础知识/00 简述' },
          { text: 'JavaScript', link: '/programming/javascript/01 基础部分/01 简述' },
          { text: 'Node.js', link: '/programming/nodejs/nodejs' },
          { text: 'Vue', link: '/programming/vue/00 简述' },
          { text: 'Uniapp', link: '/programming/uniapp/uniapp' },
          { text: 'Docker', link: '/programming/docker/docker' },


        ]
      },
      { text: '待处理问题', link: 'issue/issue' },
      { text: 'workbench', link: 'http://localhost:19972' },
      {
        text: '笔记备份', items: [
          { text: 'Github', link: 'https://hengqianfan.github.io/mo-notes/' },
          { text: 'Github-x', link: 'https://hengqianfan.github.io/mo-notes-x/' },

        ]
      },


    ],
    sidebar: {
      '/programming/html': set_sidebar('/programming/html'),
      '/programming/css': set_sidebar('/programming/css'),
      '/programming/javascript': set_sidebar('/programming/javascript'),
      '/programming/nodejs': set_sidebar('/programming/nodejs'),
      '/programming/vue': set_sidebar('/programming/vue'),
      '/programming/vitepress': set_sidebar('/programming/vitepress'),

      '/computerKnowledge': set_sidebar('/computerKnowledge', false),
      '/computerKnowledge/03 扩展知识/02 虚拟机/02 VMware': set_sidebar('/computerKnowledge/03 扩展知识/02 虚拟机/02 VMware'),

      '/siteBuilding': set_sidebar('/siteBuilding'),

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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },

  // markdown: {
  //   config: (md) => {
  //     md.use(tool_video)
  //   }
  // }

})
