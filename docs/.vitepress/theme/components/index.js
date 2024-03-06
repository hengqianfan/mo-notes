import page1 from './page_one/index.vue'

const allGlobalComponents = { page1 }

export default {
    install(app) {
        Object.keys(allGlobalComponents).forEach(key => {
            app.component(key, allGlobalComponents[key])
        })

    }
}