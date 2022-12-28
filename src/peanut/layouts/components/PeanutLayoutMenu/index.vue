<template>
    <el-menu
        class="peanut-layout-menu"
        default-active="home21"
        router
    >
        <template v-for="item in route[0].children" :key="item.path">
            <route-item :item="item"></route-item>
        </template>
    </el-menu>
</template>

<script>
import RouteItem from "./components/RouteItem";

export default {
    name: "PeanutLayoutMenu",
    components: {RouteItem},
    props: {
        route: {}
    },
    setup() {
    }
}
</script>

<style scoped>

</style>