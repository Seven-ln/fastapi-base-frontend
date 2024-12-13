<template>
  <a-menu
    mode="inline"
    :open-keys="openKeys"
    :selected-keys="selectedKeys"
    @click="handleClick"
    @openChange="onOpenChange"
  >
    <template v-for="item in menuItems" :key="item.name">
      <a-sub-menu v-if="item.children && item.children.length > 0" :key="item.name">
        <template #title>
          <span>
            <component v-if="item.icon" :is="item.icon"></component>
            <span>{{ item.title }}</span>
          </span>
        </template>
        <a-menu-item v-for="child in item.children" :key="child.name" @click="() => handleClick({ key: child.name })">
          <component v-if="child.icon" :is="child.icon"></component>
          <span>{{ child.title }}</span>
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item v-else>
        <component v-if="item.icon" :is="item.icon"></component>
        <span>{{ item.title }}</span>
      </a-menu-item>
    </template>
  </a-menu>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getMenuData } from './menu-tree';

const router = useRouter();
const menuItems = ref([]);
const openKeys = ref([]);
const selectedKeys = ref([]);

const handleClick = ({ key }) => {
  const item = menuItems.value.find(item => item.name === key);
  if (item) {
    router.push(item.path);
  }
};

const onOpenChange = (keys) => {
  openKeys.value = keys;
};

onMounted(async () => {
  try {
    const data = await getMenuData();
    menuItems.value = data;
  } catch (error) {
    console.error('Failed to fetch menu data:', error);
  }
});
</script>

<style scoped>
/* 如果需要额外样式 */
</style>