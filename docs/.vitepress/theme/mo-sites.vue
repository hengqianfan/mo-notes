<template>
    <div class="all">
        841
        <!-- <div class="site_box" v-for="item in sitesList">
            <img :src="geturl(item.imgurl)" alt="" class="site_icon">
            <div class="site_info">
                <div class="site_title">{{ item.name }}</div>
                <div class="site_intro">{{ item.intro }}</div>
            </div>
        </div> -->
    </div>
</template>

<script setup>
// import axios from 'axios'
// import { ref } from 'vue'
// const sitesList = ref([])

// // 获取远端图片
// axios({
//     method: 'get',
//     url: 'http://localhost:19972/sitecollection/infoall',
// }).then(function (response) {
//     sitesList.value = response.data.rows
// });


// const geturl = (momo) => {
//     return `http://localhost:19972/icon/${momo}`
// }
</script>

<!-- <style lang="scss" scoped>


.all {
    height: 90vh;
    width: 100%;
    background-color: aquamarine;
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;

    .site_box {
        margin: 40px;
        width: 300px;
        height: 120px;
        background-color: aliceblue;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .site_icon {
            margin-left: 20px;
            width: 80px;
            height: 80px;
            padding: 5px;
            background-color: antiquewhite;
        }

        .site_info {
            margin-right: 20px;
            height: 80px;
            width: 160px;
            background-color: aqua;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;

            .site_title {
                font-size: 18px;
            }

            .site_intro {
                font-size: 14px;
            }
        }
    }
}

</style> -->