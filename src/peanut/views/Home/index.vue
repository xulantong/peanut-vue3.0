/*
* @author: xulantong
* @time: 2022-12-01 16:38:07
*/
<template>
    {{ demo }}
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
    name: "Home",
    setup() {
        const store = useStore()
        const demo = computed(() => store.state.demo)
        console.log(store)
        return {
            demo
        }
    }
}
</script>

<style scoped>

</style>