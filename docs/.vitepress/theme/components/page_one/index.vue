<template>
    <div class="pageone-all">
        <div class="tool">
            <div>网址聚合</div>
            <div>笔记聚合</div>
        </div>
        <div class="main">
            {{ sites }}
            <!-- <img :src="gain_icon(sites[0].items[0].icon)" alt=""> -->
            <img :src="withBase(gain_icon(sites[0].items[0].icon))" alt="">
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { sites_data } from '/data/sites'
import { withBase, useData } from 'vitepress'

const ni = '/icon/123.png'

const sites = ref(sites_data)

// console.log(sites.value[0]);

const gain_icon = (momo) => {
    console.log(`/icon/${momo}.png`);
    return `/icon/${momo}.png`
}
</script>

<style lang="scss" scoped>
.pageone-all {
    width: 100%;
    height: 90vh;
    background-color: antiquewhite;
    display: flex;
    flex-direction: column;
    // align-items: center;

    // padding: 10px;
    .tool {
        background-color: aliceblue;
        width: 300px;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        text-align: center;

        div {
            width: 100px;
            height: 30px;
            line-height: 30px;
            background-color: aqua;
        }
    }
}
</style>