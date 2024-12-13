<template>
    <div class="login-form-wrapper">
        <div class="login-form-title"> 登录FBA </div>
        <div class="login-form-error-msg">{{ errorMessage }}</div>
        <a-form ref="formRef" :model="form" layout="vertical" class="login-form">
            <a-form-item field="username" :rules="rules.username" :validate-trigger="['change', 'blur']" hide-label>
                <a-input v-model="form.username" class="login-input" placeholder="请输入用户名">
                </a-input>
            </a-form-item>

            <a-form-item field="password" :rules="rules.password" :validate-trigger="['change', 'blur']" hide-label>
                <a-input-password v-model="form.password" class="login-input" placeholder="请输入密码" allow-clear>
                </a-input-password>
            </a-form-item>

            <a-form-item>
                <a-space :size="16" direction="vertical">
                    <a-button class="login-form-login-btn" html-type="submit" type="primary" long size="large" @click="login">登录</a-button>
                </a-space>
            </a-form-item>
        </a-form>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { DEFAULT_ROUTE_NAME } from '@/router/constants';

const router = useRouter();
const form = reactive({
    username: '',
    password: '',
});

const errorMessage = ref('');
const formRef = ref(null);
const rules = {
    username: [
        {
            required: true,
            message: '请输入用户名',
        },
    ],
    password: [
        {
            required: true,
            message: '请输入密码',
        },
    ],
};

const login = () => {
  router.push({ name: DEFAULT_ROUTE_NAME });
};

console.log(router.getRoutes());

</script>

<style lang="less" scoped>
.login-form {
    &-wrapper {
        width: 320px;
    }

    &-title {
        color: var(--color-text-1);
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
    }

    &-sub-title {
        color: var(--color-text-3);
        font-size: 16px;
        line-height: 24px;
    }

    &-error-msg {
        height: 32px;
        color: rgb(var(--red-6));
        line-height: 32px;
    }

    &-password-actions {
        display: flex;
        justify-content: space-between;
    }

    &-login-btn {
        height: 40px;
    }

    &-register-btn {
        height: 40px;
        color: var(--color-text-3) !important;
    }
}

.login-input {
    height: 40px;
}

::v-deep(.arco-divider-text) {
    line-height: 0;
}

::v-deep(.arco-divider-vertical) {
    margin: 11px;
}

.captcha-input {
    height: 40px;
    width: 60%;
}

.captcha-wrapper {
    margin-left: auto;
}
</style>