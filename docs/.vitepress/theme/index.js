// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import moImg from './mo-img.vue'
import moNone from './mo-none.vue'
import MoSites from './mo-sites.vue'
// import page1 from './mo-page-for-one.vue'
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
    app.component('moImg', moImg)
    app.component('moNone', moNone)
    app.component('MoSites', MoSites)
    app.component('pageOne', page1)

  }
}
