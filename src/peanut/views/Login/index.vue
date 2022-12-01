/*
* @author: xulantong
* @time: 2022-12-01 16:38:25
*/
<template>
    <div class="login">
        <div class="login-header">
            <img class="icon" src="../../assets/images/logo.png">
            <span>Peanut</span>
        </div>
        <div class="login-container">
            <div class="left">
                <div class="top">欢迎来到</div>
                <div class="bottom">Peanut后台解决方案</div>
            </div>
            <div class="right">
                <div class="login-form">
                    <div class="title">账号登录</div>
                    <el-form :model="formData" ref="formRef" :rules="rules" label-position="top">
                        <el-form-item label="用户名:" prop="username">
                            <el-input v-model="formData.username"/>
                        </el-form-item>
                        <el-form-item label="密 码:" prop="password">
                            <el-input v-model="formData.password"/>
                        </el-form-item>
                        <p class="forget">
                            <el-button style="padding: 0" type="text" size="small"><span>忘记密码</span></el-button>
                        </p>
                        <el-form-item>
                            <el-button class="btn-login" size="large" type="primary" @click="handleLogin(formRef)">登 录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import {reactive, ref} from "vue";

export default {
    name: "Login",
    setup() {
        let formData = reactive({
            username: '',
            password: '',
        })

        let formRef = ref()

        const rules = reactive({
            username:[
                { required: true, message: '请输入用户名', trigger: 'change' },
            ],
            password:[
                { required: true, message: '请输入密码', trigger: 'change' },
            ],
        })

        function handleLogin(formRef) {
            formRef.validate(valid=>{
                if(valid){
                    console.log(formData)
                }
            })
        }

        return {
            formData,
            rules,
            handleLogin,
            formRef
        }
    }

}
</script>

<style lang="scss" scoped>
.login {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url("./../../assets/images/background.png");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;

    &-header {
        width: 100%;
        padding: 24px 30px;
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: 500;
        color: #fff;

        .icon {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            margin-right: $base-space;
        }
    }

    &-container {
        height: 0;
        flex: 1;
        display: flex;
        justify-content: space-between;
        width: 75%;
        padding-top: 100px;

        .left {
            color: #fff;
            display: flex;
            flex-direction: column;


            .top {
                font-size: 30px;
                font-weight: 400;
                color: hsla(0, 0%, 100%, .65);
            }

            .bottom {
                font-size: 45px;
                font-weight: 500;
                margin-top: 24px;
            }
        }

        .right {
            display: flex;
            justify-content: center;

            .login-form {
                background-color: #FFFFFF;
                width: 330px;
                height: 400px;
                border-radius: $base-border-radius;
                padding: 34px;

                .title {
                    text-align: center;
                    margin-bottom: 34px;
                    font-size: 18px;
                    font-weight: 400;
                }
            }
        }
    }

    .forget {
        width: 100%;
        text-align: right;
    }

    .btn-login {
        width: 100%;
        margin-top: 40px;
    }
}

</style>