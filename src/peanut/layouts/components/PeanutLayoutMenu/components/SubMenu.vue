<template>
    <el-sub-menu
        ref="subMenu"
        :index="item.path"
        :popper-append-to-body="false">
        <template #title>
            <span>{{ item.meta && item.meta.title }}</span>
        </template>
        <slot/>
    </el-sub-menu>
</template>

<script>
export default {
    name: "SubMenu",
    props: {
        item: {}
    }

}
</script>

<style scoped>

</style>