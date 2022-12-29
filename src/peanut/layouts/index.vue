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
                <peanut-layout-side :route="route"></peanut-layout-side>
            </div>
            <div class="right" :class="{showBackgroundImage:showBackgroundImage}">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import {showBackgroundImage} from './../config'
import {computed} from "vue";
import {useStore} from "vuex";

export default {
    name: "layouts",
    setup() {
        let store = useStore()
        let route = computed(() => store.state['peanut-routes'].routes)
        return {
            showBackgroundImage,
            route
        }
    }
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

        .left {
            height: 100%;
            width: $base-menu-side-width;
            background-color: $base-menu-side-background;
            color: $base-menu-side-color;
        }

        .right {
            width: 0;
            flex: 1;
            padding: $base-space;
        }

        .showBackgroundImage {
            background: url("./../assets/images/background.png");
            background-size: cover;
        }
    }
}

</style>