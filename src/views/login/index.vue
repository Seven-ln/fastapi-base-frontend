<template>
    <div class="container">
        <div class="content">
            <div class="content-inner">
                <LoginForm />
            </div>
            <div class="footer">
                <Footer />
            </div>
        </div>
    </div>

</template>

<script setup>
import LoginForm from './components/login-form.vue'
import Footer from '@/components/footer/index.vue'

</script>

<style lang="less" scoped>
.container {
    display: flex;
    height: 100vh;

    .banner {
        width: 550px;
        background: linear-gradient(163.85deg, #1d2129 0%, #00308f 100%);
    }

    .content {
        position: relative;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        padding-bottom: 40px;
    }

    .footer {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 100%;
    }
}
</style>