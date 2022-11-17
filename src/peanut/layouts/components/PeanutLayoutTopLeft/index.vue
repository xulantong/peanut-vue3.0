<template>
    <div class="peanut-layout-top-left">
        {{header}}
    </div>
</template>

<script>
import {title} from '@/peanut/config'
import {computed} from "vue";

export default {
    name: "PeanutLayoutTopLeft",
    setup(){
        let header = computed(()=>{
            return title
        })
        return{
            header
        }
    }
}
</script>

<style lang="scss" scoped>
.peanut-layout-top-left {

}

</style>