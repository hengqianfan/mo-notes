import PageSites from './page-of-sites/index.vue'
import MySearch from './my-search/index.vue'
import LayoutOne from './layout-one/index.vue'


const allGlobalComponents = { PageSites, MySearch, LayoutOne }

export default {
    install(app) {
        Object.keys(allGlobalComponents).forEach(key => {
            app.component(key, allGlobalComponents[key])
        })

    }
}

