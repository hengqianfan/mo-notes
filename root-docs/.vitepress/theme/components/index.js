
import MySearch from './my-search/index.vue'
import LayoutOne from './layout-one/index.vue'

import PageSites from './page-of-sites/index.vue'

import PageTopic from './page-of-topic/index.vue'

import PageNotes from './page-of-notes/index.vue'

import PageArticles from './page-of-articles/index.vue'


const allGlobalComponents = { PageSites, MySearch, LayoutOne, PageTopic, PageNotes, PageArticles }

export default {
    install(app) {
        Object.keys(allGlobalComponents).forEach(key => {
            app.component(key, allGlobalComponents[key])
        })

    }
}

