<template>

    <div class="page-sites-all">

        <div class="ps-nav">
            <div class="ps-nav-item" v-for="item in level_1_classlist" @click="get_sites(item)">{{ item }}</div>
        </div>

        <div class="ps-content">
            <div class="ps-content-block" v-for="item in level_2_classlist">
                <div class="ps-content-block-title">{{ item.title }}</div>

                <div class="ps-content-block-sites">
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

// 定义导航菜单的数组(一级菜单)
const level_1_classlist = ref([])

// 提取数据到菜单数组
level_1_classlist.value = sites.value.map((item, index) => { return item.title })

// 当前的选定的一级菜单
const now_class_1_selected = ref()

now_class_1_selected.value = level_1_classlist.value[0]

// 定义动态的二级菜单

const level_2_classlist = ref([])

// 找到数据
level_2_classlist.value = sites.value.filter((item, index) => item.title == now_class_1_selected.value)
// 提取数据
level_2_classlist.value = level_2_classlist.value[0].items

// 一级菜单的点击的筛选功能

const get_sites = (momo) => {
    now_class_1_selected.value = momo
    // 找到数据
    level_2_classlist.value = sites.value.filter((item, index) => item.title == now_class_1_selected.value)
    // 提取数据
    level_2_classlist.value = level_2_classlist.value[0].items
}

get_sites(now_class_1_selected.value)

const gain_icon = (momo) => {
    return `/icon/png/${momo}.png`
    // return `/icon/svg/${momo}.svg`
}

const tosite = (momo) => {
    window.open(momo)
}

</script>

<style src="./style.scss" lang="scss" scoped></style>
