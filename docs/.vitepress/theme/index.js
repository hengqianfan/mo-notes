// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
// 引入样式
import './style/index.css'

// 引入组件
// import gloalComponemnts from './components/index.js'
import page1 from './components/page_one/index.vue'




/** @type {import('vitepress').Theme} */
export default {
  lastUpdated: true,
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('pageOne', page1)
    // app.use(gloalComponemnts)
    // console.log(gloalComponemnts);
  },

}
