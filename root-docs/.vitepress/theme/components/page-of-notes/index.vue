<template>
    <div class="page-webdesign-all">

        <div class="pw-nav">
            <div class="pw-nav-item" v-for="item in menu_list" @click="getShowData(item)">
                {{ item }}
            </div>
        </div>


        <div class="pw-content">
            <div class="pw-show-card" v-for="item in now_show_data">

                <img :src="withBase(`/icon/png/${item.icon}.png`)" alt="" class="pw-show-card-icon">

                <a :href="withBase(`${item.link}`)">{{ item.text }}</a>

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
    background-color: white;
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

        .pw-show-card {
            margin: 20px;
            width: 150px;
            height: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;


            background-color: skyblue;

            .pw-show-card-icon {
                width: 100px;
                height: 100px;
                padding: 5px;
                background-color: antiquewhite;
            }
        }
    }
}
</style>