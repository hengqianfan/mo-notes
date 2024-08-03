<template>
    <div class="page-articles-all">

        <div class="pa-navbar">
            <div class="pa-navbar-search">search</div>
            <div class="pa-navbar-tabbar">
                <div class="pa-navbar-tabbar-tab">12</div>
            </div>
        </div>

        <div class="pa-content">

            <div class="pa-article-card" v-for="item in data">

                <img :src="withBase(getIcon(item.icon))" alt="" class="pa-article-card-icon">

                <a class="pa-article-card-title" :href="withBase(item.link)">{{ getTitle(item.title) }}</a>

                <div class="pa-article-card-zoid">{{ item.zoid }}</div>

            </div>

        </div>

        81
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { withBase, useData } from 'vitepress'
//  获取文章索引信息
import data from '../../../../data/ArticleDatabase.json'

let alltag = ref([])

const getALLTag = () => {
    let temp_arr = []

    for (let i = 0; i < data.length; i++) {
        let now_tagarr = data[i].tag
        temp_arr.push(...now_tagarr)


    }
    // 数组去重
    temp_arr = Array.from(new Set(temp_arr))

    // 赋值给外部
    alltag.value = temp_arr

}

getALLTag()

const getIcon = (momo) => {
    if (momo) {
        return `/icon/png/${momo}.png`
    }
    return `/icon/png/article.png`
}

const getTitle = (momo) => {
    // 去掉文件的后缀名
    let res = momo.split('.md')[0]
    return res
}

const toPage = (momo) => {
    open(`/mo-notes/articles/${momo}`)
}


</script>

<style lang="scss" scoped>
.page-articles-all {

    width: 100%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;

    .pa-navbar {
        background-color: aliceblue;
        height: 50px;
        width: 100%;

        display: flex;
        flex-direction: row;

        .pa-navbar-search {

            width: 15%;
        }

        .pa-navbar-tabbar {
            background-color: antiquewhite;
            width: 85%;
        }

    }

    .pa-content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        min-height: 60vh;
        width: 100%;
        background-color: aliceblue;


        .pa-article-card {
            background-color: white;
            margin: 30px;
            width: 180px;
            height: 240px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            box-shadow: 5px 5px 15px #bebebe,
                -5px -5px 15px #ffffff;

            .pa-article-card-icon {
                margin-top: 20px;
                padding: 10px;
                width: 100px;
                height: 100px;
                background-color: white;
                box-shadow: 5px 5px 5px #bebebe,
                    -5px -5px 5px #ffffff,


            }

            .pa-article-card-title {
                margin-top: 20px;

                background-color: white;
                text-align: center;

                font-size: 18px;
                font-weight: 800;
            }

            .pa-article-card-zoid {
                margin-top: 10px;
                padding: 0 5px;
                background-color: white;
                box-shadow: 5px 5px 5px #bebebe inset,
                    -5px -5px 5px #ffffff inset;
            }
        }

    }
}
</style>