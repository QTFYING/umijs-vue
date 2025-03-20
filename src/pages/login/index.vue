<template>
    <el-row :gutter="20" class="login-content__div">
        <el-col :span="16" class="login-content__left">
            <h1>国旅运通运营管理系统</h1>

            <div class="slogan">
                <img src="../../assets/login_bg.svg" alt="slogan">
                <h4>永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭。</h4>
                <h5>兰亭集序</h5>
            </div>
        </el-col>

        <el-col :span="8" class="login-content__right">
            <el-card style="width: 480px; margin-top: 260px">
                <div class="card-header">
                    <h2>登录</h2>
                </div>

                <el-form :model="formValues" name="basic" autocomplete="off" label-position="top" ref="loginFormRef"
                    :rules="rules" status-icon>
                    <el-form-item prop="account" label="账号">
                        <el-input v-model="formValues.account" placeholder="请输入账号" clearable maxlength="11" />
                    </el-form-item>

                    <el-form-item prop="password" label="密码">
                        <el-input v-model="formValues.password" type="password" placeholder="请输入密码" autocomplete="off"
                            clearable maxlength="20" />
                    </el-form-item>

                    <el-row justify="space-between">
                        <el-form-item prop="isChecked">
                            <el-checkbox v-model="formValues.password" label="记住密码" />
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary" link>忘记密码？</el-button>
                        </el-form-item>
                    </el-row>

                    <el-form-item>
                        <el-button type="primary" :loading="user.loginLoading" class="full-width"
                            @click="onSubmit">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </el-col>
    </el-row>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/stores/user";
import useLocale from "@/utils/useLocale";
import { ElMessage, type FormInstance, type FormRules } from 'element-plus';
import { Md5 } from "ts-md5";
import { useRouter } from "umi";
import { reactive, ref } from "vue";

const { i18n: { t }, } = useLocale();

interface formValues { account: string; password: string; isChecked: boolean; }


const loginFormRef = ref<FormInstance>()


const user = useUserStore();
const router = useRouter();

const formValues = ref<formValues>({
    account: "",
    password: "",
    isChecked: true,
});


const onSubmit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return

    try {
        const formData = {
            username: formValues.value.account,
            password: Md5.hashStr(formValues.value.password).toString()
        };
        await user.login(formValues.value.account, Md5.hashStr(formValues.value.password).toString());
        if (user.currentUser) router.replace("/home");
    } catch (error: any) {
        ElMessage.error(error?.message || '请求失败，请稍候重试~');
    }
};

const validateAccount = (rule: any, value: any, callback: any) => {
    if (!value) {
        return callback(new Error('请输入账号'))
    }
}

const validatePassword = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('Please input the password'))
    }
}


const rules = reactive<FormRules<typeof formValues>>({
    account: [{ required: true, message: 'Please input your username', trigger: 'blur' }, { validator: validateAccount, trigger: 'blur' }],
    password: [{ required: true, message: 'Please input your password', trigger: 'blur' }, { validator: validatePassword, trigger: 'blur' }],
})

</script>

<style lang="less">
.login-content__div {
    height: 100vh;
    background-color: #2844b2;
}

.login-content__left {
    color: rgba(255, 255, 255, 0.8);
    position: relative;

    h1 {
        margin: 30px 80px 0;
    }

    .slogan {
        margin-top: 200px;
        width: 400px;
        margin-left: 180px;
        color: #fff;

        img {
            display: block;
            width: 100%;
            // transform: translateY(-50%);
        }

        h4 {
            margin-top: 40px;
        }
    }
}

.login-content__right {
    .full-width {
        width: 100%;
    }
}
</style>
