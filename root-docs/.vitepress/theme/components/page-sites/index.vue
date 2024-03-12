<template>
    <div class="page-sites-all">

        <div class="page-sites-nav">
            <div v-for="item in siteClassList" class="sites-nav-item" @click="sort_sites(item)">{{ item }}</div>
        </div>
            
    

        <div class="page-sites-main">


            <div v-for="item in sites_showed" class="block-by-siteClass">

                <div class="siteClass_title">{{ item.title }}</div>

                <div class="sites-by-siteClass">

                    <div v-for="item2 in item.items" class="site-card">

                        <img :src="withBase(gain_icon(item2.icon))" class="site-icon">

                        <div class="site-info">

                            <div @click="tosite(item2.link)" class="site-title">{{ item2.title }}</div>

                            <div class="site-intro">{{ item2.intro }}</div>

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
// 获取网址的原始信息
const sites = ref(sites_data)
// 定义导航菜单的数组
const siteClassList = ref([])
// 提取数据到菜单数组
siteClassList.value = sites.value.map((item,index)=>{return item.title})

// 页面动态展示的网址数据
let sites_showed = ref([])
// 当前选中的分类
let now_class = ref('')

// 动态产生展示数据
let sort_sites = (class_name)=>{
    now_class.value = class_name
    sites_showed.value = sites.value.filter(item => item.title == class_name)
}
// 默认展示的数据
sort_sites(sites_data[0].title)






const gain_icon = (momo) => {
    return `/icon/png/${momo}.png`
    // return `/icon/svg/${momo}.svg`
}

const tosite = (momo) => {
    window.open(momo)
}
</script>

<style src="./style.scss" lang="scss"  scoped></style>

