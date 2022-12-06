/*
* @author: xulantong
* @time: 2022-12-01 16:38:07
*/
<template>
    Home
</template>

<script>
import {useStore} from "vuex";

export default {
    name: "Home",
    setup() {
        const store = useStore()
        console.log(store)
        return{

        }
    }
}
</script>

<style scoped>

</style>