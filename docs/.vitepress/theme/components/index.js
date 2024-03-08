import PageSites from './page-sites/index.vue'

const allGlobalComponents = { PageSites }

export default {
    install(app) {
        Object.keys(allGlobalComponents).forEach(key => {
            app.component(key, allGlobalComponents[key])
        })

    }
}

