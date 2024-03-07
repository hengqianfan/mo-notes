import PageOne from './page-one/index.vue'

const allGlobalComponents = { PageOne }

export default {
    install(app) {
        Object.keys(allGlobalComponents).forEach(key => {
            app.component(key, allGlobalComponents[key])
        })

    }
}

