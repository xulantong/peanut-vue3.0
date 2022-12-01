<template>
    <div class="peanut-layout-top-right">
        <el-dropdown @command="handleCommand">
            <el-avatar :size="32" :src="require('@/peanut/assets/images/logo.png')"/>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item command="changePassword">修改密码</el-dropdown-item>
                    <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script>
import {useRouter} from "vue-router";

export default {
    name: "PeanutLayoutTopRight",
    setup() {
        let router = useRouter()

        function handleCommand(val) {
            if (val === 'changePassword') {
                router.push('/changePassword')
            } else if (val === 'logout') {
                return;
            } else {
                return;
            }
        }

        return {
            handleCommand
        }
    }
}
</script>

<style lang="scss" scoped>
.peanut-layout-top-right {
    display: flex;
    align-items: center;

}

</style>