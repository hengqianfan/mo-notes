<template>
    <div class="page-articles-all">

        <div class="pa-navbar">
            <div class="pa-navbar-search">search</div>
            <div class="pa-navbar-tabbar">
                <div class="pa-navbar-tabbar-tab" v-for="item in all_tags">
                    {{ item }}

                </div>
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

//  获取文章索引信息 （该文件是通过脚本生成的）
import data from '../../../../data/ArticleDatabase.json'

// 定义 tag 数组 
let all_tags = ref([])

// 从数据中提取所有的 tag 放入 tag 数组中
const getALLTags = () => {
    // 临时存放数据的数组
    let temp_arr = []
    // 遍历原始数据，把所有 tag 添加到 临时数组中
    for (let i = 0; i < data.length; i++) {

        // 先判断是否存在 信息中是否存在 tag ⭐

        if (data[i].tag) {
            // 获取当前文章的 tag 数组
            let now_tagarr = data[i].tag
            // 解构数组后，再添加到临时数组中
            temp_arr.push(...now_tagarr)
        }

    }
    // 临时数组去重（因为文章的 tag 重复率高）
    temp_arr = Array.from(new Set(temp_arr))

    // 最后，把临时数组的数据赋值给外部数组
    all_tags.value = temp_arr

}
// 初始化 tag 数据
getALLTags()

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
            display: flex;
            flex-direction: row;
            align-items: center;

            .pa-navbar-tabbar-tab {
                background-color: #f7f5f5;
                width: 120px;
                height: 30px;
                line-height: 30px;
                text-align: center;
            }
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
                font-family: "剑豪体";
            }

            .pa-article-card-zoid {
                margin-top: 15px;
                padding: 0 5px;
                background-color: white;
                box-shadow: 2px 2px 2px #bebebe,
                    -5px -5px 5px #f7f5f5;

                color: gray;

            }
        }

    }
}
</style>