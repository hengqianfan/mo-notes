<template>
    <div class="layout-one-all" >

        <div class="layout-one-item">
            <slot></slot>

        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.layout-one-all{
    width: 100%;
    // 暂时
    height: 62vh;
    // background-color: antiquewhite;
    display: flex;
    .layout-one-item{
        margin: auto;
    }
}
</style>