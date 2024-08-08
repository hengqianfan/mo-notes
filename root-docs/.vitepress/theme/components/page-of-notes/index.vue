<template>
    <div class="page-notes-all">

        <div class="pn-nav">
            <div class="pn-nav-item" v-for="item in menu_list" @click="getShowData(item)">
                {{ item }}
            </div>
        </div>


        <div class="pn-content">
            <div class="pn-show-card" v-for="item in now_show_data">

                <img :src="withBase(getIcon(item.icon))" alt="" class="pn-show-card-icon">


                <a :href="withBase(`${item.link}`)" class="pn-show-card-title">{{ item.text }}</a>





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

const getIcon = (momo) => {
    if (momo) {
        return `/icon/png/${item.icon}.png`
    }
    return `/icon/png/note.png`
}


</script>

<style lang="scss" scoped>
.page-notes-all {
    height: 90vh;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: row;

    .pn-nav {
        height: 100%;
        width: 15%;
        background-color: aliceblue;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-self: start;

        .pn-nav-item {
            margin: 30px 0;
            background-color: white;
            height: 50px;
            line-height: 50px;
            text-align: center;
            width: 140px;
            border-radius: 10px;


        }
    }

    .pn-content {
        display: flex;
        flex-direction: row;

        .pn-show-card {
            margin: 20px;
            width: 220px;
            height: 280px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;


            background-color: gray;

            box-shadow: 5px 5px 5px #bebebe,
                -5px -5px 5px #ffffff;

            .pn-show-card-icon {
                width: 150px;
                height: 150px;
                padding: 5px;
                background-color: antiquewhite;
            }

            .pn-show-card-title {
                min-width: 140px;
                height: 40px;
                line-height: 40px;
                padding: 0 10px;
                background-color: black;
                text-align: center;

                font-family: '金刚体';
                color: white;

            }
        }
    }
}
</style>