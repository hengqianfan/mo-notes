<template>
    <div class="mysearch-all">

        <div class="search_box">
            <img class="search_engine" :src="withBase(gain_icon(now_engine.icon))" @click="is_show = true">

            <input class="search_keyword" v-model="keyword" @keyup.enter="search_start" type="text">

            <img class="search_icon" :src="withBase(gain_icon('search'))" @click="search_start">
        </div>

        <div class="engine_select" v-if="is_show">

            <img class="searchEngineIcon" :src="withBase(gain_icon(item.icon))" v-for="item in engine_list"
                @click="changeEngine(item)">
        </div>
    </div>
</template>

<script setup >
import { ref } from 'vue'
import { withBase, useData } from 'vitepress'
import { engine_list ,default_engine} from '/data/engine'
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
const keyword = ref('')

const search_start = () => {
    if (keyword.value == '') {
        alert('请输入')
    } else {
        window.open(`${now_engine.value.baseurl}` + `${keyword.value}`,'_blank')
    }
}
</script>

<style lang="scss" scoped>

.mysearch-all{
    background-color: aliceblue;
    display: flex;
    position: relative;
    border-radius: 35px;

    .search_box {
        height: 70px;
        width: 1200px;
        border-radius: 35px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;


        .search_engine {
            margin-left: 25px;
            width: 50px;
            height: 50px;
            border-radius: 25px;
            background-color: whitesmoke;
            padding: 2px;
        }

        .search_keyword {
            background-color: burlywood;
            width: 950px;
            height: 50px;
            border-radius: 10px;
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
        height: 70px;
        width: 1200px;
        background-color: beige;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        border-radius: 35px;

        .searchEngineIcon {
            margin: 0 25px;
            width: 50px;
            height: 50px;
            border-radius: 25px;
        }
    }
}
</style>