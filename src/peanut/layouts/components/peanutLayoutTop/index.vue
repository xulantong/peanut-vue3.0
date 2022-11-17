<template>
    <div class="peanut-top-bar flex-x-between px-8">
        <div class="flex-y-center">left</div>
        <div class="flex-y-center">right</div>
    </div>
</template>

<script>
export default {
    name: "peanutTopBar"
}
</script>

<style lang="scss" scoped>
.peanut-top-bar {
    height: 48px;
    background-color: $base-menu-background;
    color: $base-menu-color;
}

</style>