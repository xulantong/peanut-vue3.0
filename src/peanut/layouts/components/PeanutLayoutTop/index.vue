/*
* @author: xulantong
* @time: 2022-11-17 19:13:53
*/
<template>
    <div class="peanut-layout-top flex-x-between px-8">
        <div class="flex-y-center">
            <peanut-layout-top-left></peanut-layout-top-left>
        </div>
        <div class="flex-y-center">
            <peanut-layout-top-right></peanut-layout-top-right>
        </div>
    </div>
</template>

<script>
export default {
    name: "PeanutLayoutTop",
}
</script>

<style lang="scss" scoped>
.peanut-layout-top {
    height: 48px;
    background-color: $base-menu-top-background;
    color: $base-menu-top-color;
}

</style>