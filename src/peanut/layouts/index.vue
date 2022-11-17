/*
* @author: xulantong
* @time: 2022-11-17 19:13:38
*/
<template>
    <div class="layout">
        <div class="top">
            <peanut-layout-top></peanut-layout-top>
        </div>
        <div class="content">
            <div class="left">
                <peanut-layout-side></peanut-layout-side>
            </div>
            <div class="right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "layouts",
}
</script>

<style lang="scss" scoped>
.layout {
    height: 100%;
    display: flex;
    flex-direction: column;

    .content {
        height: 0;
        flex: 1;
        display: flex;
        .left{
            height: 100%;
            width: $base-menu-side-width;
            background-color: $base-menu-side-background;
            color: $base-menu-side-color;
        }
    }
}

</style>