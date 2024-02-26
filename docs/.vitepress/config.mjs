import { defineConfig } from 'vitepress'
import markdownItFootnote from 'markdown-it-footnote'
import markdownItTaskLists from 'markdown-it-task-lists'
import { pre_create } from './my_script/create_sidebar'




export default defineConfig({
  lang: 'cn',
  title: "魔笔记",
  description: "A VitePress Site",
  // gitee 打包
  // base: '/mo_notes/',
  // github 打包
  base: '/mo-notes/',
  head: [
    ['link', { rel: 'icon', href: './favicon.ico' }]
  ],


  // srcDir: 'docs',
  // lastUpdated: true,
  themeConfig: {
    siteTitle: 'mo-notes',
    logo: '/icon/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '0.4.5.', link: '/repo/computerKnowledge/01 硬件知识/00 前言' },
      { text: '电脑知识 💻', link: '/repo/computer/01 硬件知识/00 前言' },
      { text: '聚合指南 🧭', link: '/pages/聚合指南' },
      {
        text: '博客建站 🌐', items: [
          { text: '全流程', link: '/repo/buildSite/00 建站知识/00 避坑指引' },
          { text: 'vitepress', link: '/repo/vitepress/01 可跳过的题外话' }
        ]
      },

      {
        text: "Web语言 📚", items: [

          {
            text: '基础部分', items: [
              { text: 'HTML', link: '/repo/programming/html/00 前置准备' },
              { text: 'CSS', link: '/repo/programming/css/01 基础知识/00 简述' },
              { text: 'JavaScript', link: '/repo/programming/javascript/00 题外话' },
            ]
          },

          {
            text: '进阶知识', items: [
              { text: 'Node.js', link: '/repo/programming/nodejs/01 前置准备/00 简述' },
              { text: 'TypeScript', link: '/repo/programming/typescript/01 基础内容/01 介绍与安装' },
              { text: 'React', link: '/repo/programming/react/00 简述' },
              { text: 'Vue', link: '/repo/programming/vue/00 简述' },

            ]
          },
          {
            text: '应用阶段', items: [
              { text: 'Uniapp', link: '/repo/programming/uniapp/uniapp' },
              { text: 'Electron', link: '/repo/programming/electron/00 简述' },
              { text: 'Docker', link: '/repo/programming/docker/docker' },
              { text: 'SQL数据库', link: '/repo/programming/mysql/00 简述' },

            ]
          }




        ]
      },
      {
        text: 'C语言 📓', items: [
          { text: 'C# ', link: '/repo/programming/c-sharp/00 题外话' }
        ]
      },
      { text: '待处理问题 🛠️', link: '/pages/issue' },
      {
        text: '备份与测试 ☁️', items: [
          { text: 'Github', link: 'https://hengqianfan.github.io/mo-notes/' },
          { text: 'Github-x', link: 'https://hengqianfan.github.io/mo-notes-x/' },
          { text: 'workbench ⛔', link: 'http://localhost:19972' },
          { text: 'sites ⛔', link: '/pages/网址大全' },
          { text: 'mo-workbench ⛔', link: 'https://hengqianfan.github.io/mo-workbench/' },






        ]
      },


    ],

    sidebar: pre_create([
      ['/repo/buildSite', 1],
      ['/repo/computer', 1],



      ['/repo/programming/html', 1],
      ['/repo/programming/css', 1],
      ['/repo/programming/javascript', 1],
      ['/repo/programming/typescript', 1],
      ['/repo/programming/nodejs', 1],

      ['/repo/programming/react', 1],
      ['/repo/programming/vue', 1],

      ['/repo/programming/mysql', 1],


      ['/repo/programming/electron', 1],
      ['/repo/programming/uniapp', 1],

      ['/repo/programming/docker', 1],

      ['/repo/vitepress', 1],
      ['/repo/github', 1],
      ['/repo/vscode', 1],




    ]),

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

  markdown: {
    config: (md) => {
      md.use(markdownItFootnote)
      md.use(markdownItTaskLists)
    }
  }

})
