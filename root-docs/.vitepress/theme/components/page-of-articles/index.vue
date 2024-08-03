<template>
    <div class="page-articles-all">

        <div class="pa-navbar">
            <div class="pa-navbar-search">search</div>
            <div class="pa-navbar-tabbar">
                <div class="pa-navbar-tabbar-tab">12</div>
            </div>
        </div>

        <div class="pa-content">
            <div class="" v-for="item in data">
                {{ item.title }}
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




</script>

<style lang="scss" scoped>
.page-articles-all {
    background-color: red;
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
            background-color: aquamarine;
            width: 15%;
        }

        .pa-navbar-tabbar {
            background-color: antiquewhite;
            width: 85%;
        }

    }
}
</style>