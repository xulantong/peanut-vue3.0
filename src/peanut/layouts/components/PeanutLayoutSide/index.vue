/*
* @author: xulantong
* @time: 2022-11-17 19:13:00
*/

<template>
    <div class="peanut-layout-side">
        <peanut-layout-menu :route="route"></peanut-layout-menu>
    </div>
</template>

<script>
export default {
    name: "PeanutLayoutSide",
    props: {
        route: {}
    }
}
</script>

<style lang="scss" scoped>
.peanut-layout-side {
    width: 100%;
}

</style>