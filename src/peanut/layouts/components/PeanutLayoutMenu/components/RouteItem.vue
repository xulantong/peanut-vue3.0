<template>
    <component
        :is="menuComponent"
        :item="item">
        <template v-if="item.children && item.children.length">
            <route-item
                v-for="route in item.children"
                :key="route.path"
                :item="route">
            </route-item>
        </template>
    </component>
</template>

<script>
import {computed} from "vue";
import SubMenu from "./SubMenu";
import MenuItem from "./MenuItem";


export default {
    name: "RouteItem",
    components: {
        SubMenu,
        MenuItem
    },
    props: {
        item: {},
    },
    setup(props) {
        let menuComponent = computed(() => {
            if (props.item.children?.length) {
                return 'SubMenu'
            } else {
                return 'MenuItem'
            }
        })
        return {
            menuComponent
        }
    }
}
</script>

<style scoped>

</style>