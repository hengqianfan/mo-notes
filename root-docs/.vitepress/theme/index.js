// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
// 引入样式
import './style/index.scss'

// 引入全局组件
import gloalComponemnts from './components/index.js'

// import MyLayout from './MyLayout.vue'
// import slotSearch from './components/slot-search/index.vue'
import slotSearch from './components/my-search-for-slot/index.vue'

/** @type {import('vitepress').Theme} */
export default {
  lastUpdated: true,
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-before': () => h(slotSearch)
    })
  },
  // Layout:MyLayout,
  enhanceApp({ app, router, siteData }) {
    // 全局组件的注册
    app.use(gloalComponemnts)
  },
}

