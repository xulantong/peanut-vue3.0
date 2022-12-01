<template>
    <div class="peanut-layout-top-left">
        <div class="logo">
            <img src="@/peanut/assets/images/logo.png">
        </div>
        <div class="title"> {{ header }}</div>
    </div>
</template>

<script>
import {title} from '@/peanut/config'
import {computed} from "vue";

export default {
    name: "PeanutLayoutTopLeft",
    setup() {
        let header = computed(() => {
            return title
        })
        return {
            header
        }
    }
}
</script>

<style lang="scss" scoped>
.peanut-layout-top-left {
    display: flex;
    align-items: center;

    .logo {
        width: 32px;
        height: 32px;
        margin-right: $base-space;

        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }

    }

}

</style>