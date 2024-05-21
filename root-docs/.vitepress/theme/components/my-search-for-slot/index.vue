<template>
    <div class="mysearch-all">


        <div class="search_box">
            <img class="search_engine" :src="withBase(gain_icon(now_engine.icon))" @click="is_show = true">

            <input class="search_keyword" v-model="keyword" @keyup.enter="search_start" type="text">
        </div>

        <div class="engine_select" v-if="is_show" @click="closeSelectMenu">

            <img class="searchEngineIcon" :src="withBase(gain_icon(item.icon))" v-for="item in engine_list"
                @click="changeEngine(item)">
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { withBase, useData } from 'vitepress'
import { engine_list, default_engine } from '/data/engine'
// 选择菜单的出现与消失
const is_show = ref(false)
// 获取图标
const gain_icon = (momo) => {
    return `/icon/png/${momo}.png`
}


let now_engine = ref(default_engine)


const changeEngine = (mo) => {
    is_show.value = false
    now_engine.value = mo
}

// 实现搜索功能
const keyword = ref('站外搜索')

const search_start = () => {
    if (keyword.value == '') {
        alert('请输入')
    } else {
        window.open(`${now_engine.value.baseurl}` + `${keyword.value}`, '_blank')
        keyword.value = ''
    }
}

// 优化点击逻辑
const closeSelectMenu = () => {
    is_show.value = false
}
</script>

<style lang="scss" scoped>
$search_max_height: 40px;
$search_max_width: 150px;


.mysearch-all {
    border: 1px solid aliceblue;
    margin: 0 20px;
    background-color: aliceblue;
    display: flex;
    position: relative;
    border-radius: 10px;


    .search_box {
        height: $search_max_height;
        width: $search_max_width;
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;



        .search_engine {
            margin-left: 10px;
            width: 30px;
            height: 30px;
            border-radius: 15px;
            background-color: whitesmoke;
            padding: 2px;
        }

        .search_keyword {
            margin-right: 10px;
            background-color: white;
            width: 80px;
            height: 30px;
            border-radius: 10px;
            padding-left: 10px;
            color: gray;
        }

        .search_keyword:hover {
            color: black;
        }

        .search_icon {
            margin-right: 25px;
            width: 50px;
            height: 50px;
            border-radius: 25px;
            background-color: whitesmoke;
            padding: 2px;
        }
    }

    .engine_select {
        position: absolute;
        height: $search_max_height;
        width: $search_max_width;
        border-radius: 10px;
        background-color: beige;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;


        .searchEngineIcon {
            margin: 5px 0;
            background-color: wheat;
            width: 30px;
            height: 30px;
            padding: 1px;
            border-radius: 15px;
        }
    }
}

.mysearch-all:hover {
    border: 1px solid rgb(36, 52, 173);
}

// 屏幕小于1000px 去除外站搜索栏
@media (min-width: 0) and (max-width: 1000px) {
    .mysearch-all {
        height: 0;
        width: 0;
        display: none;
        background-color: aqua;
    }
}
</style>