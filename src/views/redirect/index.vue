<template>
    <div></div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const gotoPath = route.params.path;

router.replace({ path: gotoPath });
</script>

<style lang="less" scoped></style>