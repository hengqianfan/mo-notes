import { defineConfig } from 'vitepress'
// 插件
import markdownItFootnote from 'markdown-it-footnote'

// 自己的脚本
import { pre_create } from './my_script/create_sidebar'
// const {pre_create} = require('fans-tools')




export default defineConfig({
  lang: 'cn',
  title: "魔笔记",
  description: "A VitePress Site",
  // gitee 打包请替换为/mo_notes/避免样式错误
  base: '/mo-notes/',
  head: [
    ['link', { rel: 'icon', href: './favicon.ico' }]
  ],


  // srcDir: 'docs',
  // lastUpdated: true,
  themeConfig: {
    siteTitle: 'mo-notes-0.7.9',
    logo: '/icon/png/logo.png',
    nav: [
      { text: '网址聚合 🚀', link: '/pages/all-sites' },

      { text: '文章聚合 📰', link: '/pages/all-articles' },

      { text: '笔记聚合 📚', link: '/pages/all-notes' },

      {
        text: '建站专题 🌐', items: [
          { text: '全流程', link: '/repo/build-site/00 简述' },
          { text: 'vitepress', link: '/repo/vitepress/00 简述' }
        ]
      },

      {
        text: "前端专题 📚", items: [

          {
            text: '1️⃣ 基础部分', items: [
              { text: 'HTML', link: '/repo/programming/html/00 简述' },
              { text: 'CSS', link: '/repo/programming/css/00 简述' },
              { text: 'JavaScript', link: '/repo/programming/javascript/00 简述' },
              { text: 'network-request', link: '/repo/programming/network-request/01 axios/00 简述' },

            ]
          },

          {
            text: '2️⃣ 进阶知识', items: [
              { text: 'Node.js', link: '/repo/programming/nodejs/00 简述' },
              { text: 'TypeScript', link: '/repo/programming/typescript/01 基础内容/01 介绍与安装' },
              { text: 'React', link: '/repo/programming/react/00 简述' },
              { text: 'Vue', link: '/repo/programming/vue/00 简述' },

            ]
          },
          {
            text: '3️⃣ 应用阶段', items: [
              { text: 'Uniapp', link: '/repo/programming/uniapp/uniapp' },
              { text: 'Electron', link: '/repo/programming/electron/00 简述' },
              { text: 'Docker', link: '/repo/programming/docker/00 简述' },
              { text: 'SQL数据库', link: '/repo/programming/mysql/00 简述' },
              { text: 'cocos', link: '/repo/cocos-creator/00 简述' }

            ]
          }




        ]
      },
      // {
      //   text: 'C语言 📓', items: [
      //     { text: 'C# ', link: '/repo/programming/c-sharp/00 简述' }
      //   ]
      // },
      // {
      //   text: '爬虫 📓', items: [
      //     { text: 'python', link: '/repo/programming/python/00 简述' }
      //   ]
      // },



      {
        text: '其他杂项 🎰', items: [
          { text: '更新日志 ✒', link: '/pages/history-updated' },
          { text: '问题记录 🛠️', link: '/pages/issue' },
          { text: '外站搜索 🔍', link: '/pages/search' },
          { text: '测试页面 🎨', link: '/pages/test' },

          { text: 'Github', link: 'https://hengqianfan.github.io/mo-notes/' },
          { text: 'Github-x', link: 'https://hengqianfan.github.io/mo-notes-x/' },






        ]
      },


    ],

    sidebar: pre_create([
      ['/repo/computer-init', 1],


      ['/repo/build-site', 1],
      ['/repo/computer', 1],



      ['/repo/programming/html', 1],
      ['/repo/programming/css', 1],
      ['/repo/programming/javascript', 1],
      ['/repo/programming/typescript', 1],
      ['/repo/programming/nodejs', 1],
      ['/repo/programming/network-request', 1],



      ['/repo/programming/react', 1],
      ['/repo/programming/vue', 1],

      ['/repo/programming/mysql', 1],


      ['/repo/programming/electron', 1],
      ['/repo/programming/uniapp', 1],

      ['/repo/programming/docker', 1],

      ['/repo/vitepress', 1],
      ['/repo/github', 1],
      ['/repo/vscode', 1],


      ['/repo/programming/python', 1],

      ['/repo/cocos-creator', 1]







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
      { icon: 'github', link: 'https://github.com/hengqianfan/mo-notes' }
    ],

    returnToTopLabel: '回到顶部'
  },

  markdown: {
    config: (md) => {
      md.use(markdownItFootnote)
    }
  }

})
