import { defineConfig } from 'vitepress'
// 插件
import markdownItFootnote from 'markdown-it-footnote'

// 自己的脚本
import { setAllSidebars } from './fans-tools/tools/autoSidebar'


// 文章索引生成
import { createArticleDatabase } from './fans-tools/tools/setArticleDatabase'

createArticleDatabase()






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
    siteTitle: 'mo-notes',
    logo: '/icon/png/logo.png',
    nav: [
      {
        text: '网址聚合 🚀', items: [
          { text: '阅览模式', link: '/pages/all-sites' },
          // { text: '搜索模式', link: '/pages/all-sites-search' }
          { text: '搜索模式', link: '/pages/test' }

        ]
      },

      { text: '文章聚合 📰', link: '/pages/all-articles' },

      { text: '笔记聚合 📚', link: '/pages/all-notes' },

      {
        text: '专题聚合', items: [
          { text: '前端生态圈', link: '/pages/topic-web-design.md' },
          { text: '建站专题', link: '/repo/build-site/00 简述' }
        ]
      },



      {
        text: '其他杂项 🎰', items: [
          { text: '更新日志 ⚙', link: '/pages/history-updated/01 建设计划与进度' },
          { text: '版权声明 📣', link: '/pages/copyright' },
          { text: '游戏世界 🎮', link: '/repo/game/00 简述' },

          { text: '法律笔记 📓', link: 'https://hengqianfan.github.io/mo-notes-for-law/' },
          { text: '测试页面 🎨', link: '/pages/test' },

          { text: '本站地址 GP', link: 'https://hengqianfan.github.io/mo-notes/' },
          { text: '其他项目与计划', link: 'pages/plans' },






        ]
      },


    ],

    sidebar: setAllSidebars([

      ['/repo/computer-init', 1],


      ['/repo/build-site', 1],
      ['/repo/computer', 1],



      ['/repo/programming/html', 1],
      ['/repo/programming/scss', 1],
      ['/repo/programming/javascript', 0],
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

      ['/repo/cocos-creator', 1],

      ['/pages/history-updated', 1],

      ['/repo/game', 1],

      ['/repo/component-library', 1]











    ]),

    // outline: [1, 6],
    outline: {
      label: "页面目录",
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
