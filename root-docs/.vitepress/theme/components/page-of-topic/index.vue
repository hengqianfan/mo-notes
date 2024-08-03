<template>
    <div class="page-webdesign-all">

        <div class="pw-nav">
            <div class="pw-nav-item" v-for="item in menu_list" @click="getShowData(item)">
                {{ item }}
            </div>
        </div>


        <div class="pw-content">

            <div class="pw-show-card" v-for="item in now_show_data">

                <img :src="withBase(`/icon/png/${item.icon}.png`)" alt="你的网络状态不好" class="pw-show-card-icon">

                <div class="pw-show-card-name">
                    <a :href="withBase(`${item.link}`)">{{ item.text }}</a>
                </div>



            </div>
        </div>



    </div>
</template>

<script setup>
import { ref } from 'vue'
import { withBase, useData } from 'vitepress'
// 外部数据的接口 外部的父组件使用 momo 属性传值
const props = defineProps(['momo'])

let data = ref(props.momo)

// 生成菜单
let menu_list = data.value.map((item, index) => { return item.text })

// content中展示的内容
let now_show_data = ref()

// 根据点击的菜单 动态变动数据

const getShowData = (momo) => {

    // 注意结果返回的是数组
    let res = data.value.filter((item, index) => item.text == momo)[0]

    now_show_data.value = res.items


    console.log(now_show_data);

}

// 先运行初始化一次 不然页面内容为空
getShowData(props.momo[0].text)



</script>

<style lang="scss" scoped>
.page-webdesign-all {
    height: 90vh;
    width: 100%;
    // background-color: antiquewhite;
    display: flex;
    flex-direction: row;

    .pw-nav {
        height: 100%;
        width: 15%;
        background-color: aliceblue;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-self: start;

        .pw-nav-item {
            margin: 30px 0;
            background-color: white;
            height: 50px;
            line-height: 50px;
            text-align: center;
            width: 140px;
            border-radius: 10px;


        }
    }

    .pw-content {
        display: flex;
        flex-direction: row;
        background-color: white;

        .pw-show-card {
            margin: 20px;
            width: 180px;
            height: 220px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;


            background-color: rgb(196, 231, 245);

            .pw-show-card-icon {
                width: 110px;
                height: 110px;
                padding: 5px;
                background-color: antiquewhite;
            }

            .pw-show-card-name {
                background-color: aliceblue;
                width: 120px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                justify-content: center;
                align-items: center;
                font-size: 14px;
            }
        }
    }
}
</style>