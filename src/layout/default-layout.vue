
<template>
  <a-layout class="layout">
    <div v-if="navbar" class="layout-navbar">
      <NavBar />
    </div>
    <a-layout>
      <a-layout-sider
        :collapsed="collapsed"
        collapsible
        :style="{ paddingTop: navbar ? '60px' : '' }"
        :width="menuWidth"
        breakpoint="xl"
        class="layout-sider"
        @collapse="setCollapsed"
      >
        <div class="menu-wrapper">
          <Menu />
        </div>
      </a-layout-sider>
      <a-layout :style="paddingStyle" class="layout-content">
        <TabBar v-if="showTabBar" />
        <a-layout-content>
          <!--<PageLayout />-->
        </a-layout-content>
        <Footer v-if="footer" />
      </a-layout>
    </a-layout>
  </a-layout>
</template>


<script setup>
import { computed, onMounted, ref } from 'vue';
import NavBar from '@/components/navbar/index.vue';
import Menu from '@/components/menu/index.vue';
import TabBar from '@/components/tab-bar/index.vue';
import Footer from '@/components/footer/index.vue'
//import PageLayout from './page-layout.vue';

// 静态配置
const navbar = true;
const showTabBar = true;
const footer = true;

// 菜单宽度
const menuWidth = ref(200);

// 控制菜单的展开/折叠状态
const collapsed = ref(false);
function setCollapsed(val) {
  collapsed.value = val;
  menuWidth.value = val ? 48 : 200; // 根据折叠状态调整菜单宽度
}

// 计算内边距样式
const paddingStyle = computed(() => {
  const paddingLeft = !collapsed.value ? { paddingLeft: `${menuWidth.value}px` } : {};
  const paddingTop = navbar ? { paddingTop: '60px' } : {};
  return { ...paddingLeft, ...paddingTop };
});

onMounted(() => {
  // 初始化逻辑（如果有）
});
</script>

<style lang="less" scoped>
@nav-size-height: 60px;
@layout-max-width: 1100px;

.layout {
  width: 100%;
  height: 100%;
}

.layout-navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: @nav-size-height;
}

.layout-sider {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  height: 100%;
  transition: all 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);

  &::after {
    position: absolute;
    top: 0;
    right: -1px;
    display: block;
    width: 1px;
    height: 100%;
    background-color: var(--color-border);
    content: '';
  }

  > :deep(.arco-layout-sider-children) {
    overflow-y: hidden;
  }
}

.menu-wrapper {
  height: 100%;
  overflow: auto;
  overflow-x: hidden;

  :deep(.arco-menu) {
    ::-webkit-scrollbar {
      width: 12px;
      height: 4px;
    }

    ::-webkit-scrollbar-thumb {
      border: 4px solid transparent;
      background-clip: padding-box;
      border-radius: 7px;
      background-color: var(--color-text-4);
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: var(--color-text-3);
    }
  }
}

.layout-content {
  min-height: 100vh;
  overflow-y: hidden;
  background-color: var(--color-fill-2);
  transition: padding 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
}
</style>