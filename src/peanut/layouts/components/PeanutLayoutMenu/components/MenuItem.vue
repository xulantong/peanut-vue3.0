<template>
    <el-menu-item :index="item.path">
        <template #title>{{ item.meta && item.meta.title }}</template>
    </el-menu-item>

</template>

<script>
export default {
    name: "MenuItem",
    props:{
        item:{}
    }
}
</script>

<style scoped>

</style>