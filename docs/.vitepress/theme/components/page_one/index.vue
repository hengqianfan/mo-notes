<template>
    <div class="pageone-all">
        <div class="tool">
            <div>网址聚合</div>
            <div>笔记聚合</div>
        </div>
        <div class="main">
            <div v-for="item in sites" class="class">

                <div class="class_title">{{ item.title }}</div>

                <div class="sites">
                    <div v-for="item2 in item.items" class="site">
                        <img :src="withBase(gain_icon(item2.icon))" class="imgsite">
                        <div>
                            <div @click="tosite(item2.link)">{{ item2.title }}</div>
                            <div>{{ item2.intro }}</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { sites_data } from '/data/sites'
import { withBase, useData } from 'vitepress'


const sites = ref(sites_data)


const gain_icon = (momo) => {
    return `/icon/svg/${momo}.svg`
}

const tosite = (momo) => {
    window.open(momo)
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

    .main {
        display: flex;
        flex-direction: column;
        overflow-y: scroll;

        .class {
            .class_title {
                background-color: aliceblue;
            }

            .sites {
                background-color: antiquewhite;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;

                .site {
                    background-color: antiquewhite;
                    width: 300px;
                    height: 120px;
                    background-color: burlywood;
                    margin: 10px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;

                    .imgsite {
                        width: 60px;
                        height: 60px;
                    }
                }
            }
        }


    }
}
</style>