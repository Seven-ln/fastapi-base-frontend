<template>
    <div class="navbar">
        <div class="left-side">
            <a-space>
                <a-typography-title :heading="5" :style="{ margin: 0, fontSize: '18px' }">CRRC</a-typography-title>
            </a-space>
        </div>
        <ul class="right-side">
            <li>
                <a-tooltip content="搜索">
                    <a-button :shape="'circle'" class="nav-btn" type="outline">
                        <template #icon>
                            <icon-search />
                        </template>
                    </a-button>
                </a-tooltip>
            </li>
            <li>
                <a-tooltip :content="theme === 'light' ? '切换到深色模式' : '切换到浅色模式'">
                    <a-button :shape="'circle'" class="nav-btn" type="outline" @click="handleToggleTheme">
                        <template #icon>
                            <icon-moon-fill v-if="theme === 'dark'" />
                            <icon-sun-fill v-else />
                        </template>
                    </a-button>
                </a-tooltip>
            </li>
            <li>
                <a-tooltip :content="isFullscreen ? '退出全屏' : '进入全屏'">
                    <a-button :shape="'circle'" class="nav-btn" type="outline" @click="toggleFullScreen">
                        <template #icon>
                            <icon-fullscreen-exit v-if="isFullscreen" />
                            <icon-fullscreen v-else />
                        </template>
                    </a-button>
                </a-tooltip>
            </li>
            <li>
                <a-tooltip content="设置">
                    <a-button :shape="'circle'" class="nav-btn" type="outline" @click="setVisible">
                        <template #icon>
                            <icon-settings />
                        </template>
                    </a-button>
                </a-tooltip>
            </li>
            <li>
                <a-dropdown trigger="click">
                    <a-avatar :size="32" :style="{ marginRight: '8px', cursor: 'pointer' }">
                        <img :src="avatar" alt="avatar" />
                    </a-avatar>
                    <template #content>
                        <a-doption>
                            <a-space @click="switchRoles">
                                <icon-tag />
                                <span>切换角色</span>
                            </a-space>
                        </a-doption>
                        <a-doption>
                            <a-space @click="handleLogout">
                                <icon-export />
                                <span>退出登录</span>
                            </a-space>
                        </a-doption>
                    </template>
                </a-dropdown>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { computed, inject, ref } from 'vue';
import { useDark, useFullscreen, useToggle } from '@vueuse/core';

// 静态配置
const theme = 'light';

// 模拟用户信息
const avatar = 'https://via.placeholder.com/32'; // 替换为实际头像链接

// 全屏控制
const { isFullscreen, toggle: toggleFullScreen } = useFullscreen();

// 主题切换
const isDark = useDark({
    selector: 'body',
    attribute: 'arco-theme',
    valueDark: 'dark',
    valueLight: 'light',
    storageKey: 'arco-theme',
    onChanged(dark) {
        console.log(`Theme switched to ${dark ? 'dark' : 'light'}`);
    }
});
const toggleTheme = useToggle(isDark);
const handleToggleTheme = () => {
    toggleTheme();
};

// 设置可见性
const setVisible = () => {
    console.log('Settings visible');
};

// 下拉菜单触发按钮
const triggerBtn = ref();

// 用户操作
const handleLogout = () => {
    console.log('Logout triggered');
};

const setDropDownVisible = () => {
    const event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    });
    triggerBtn.value.dispatchEvent(event);
};

const switchRoles = async () => {
    console.log('Switch roles triggered');
};


</script>

<style lang="less" scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    height: 100%;
    background-color: var(--color-bg-2);
    border-bottom: 1px solid var(--color-border);
}

.left-side {
    display: flex;
    align-items: center;
    padding-left: 20px;
}

.center-side {
    flex: 1;
}

.right-side {
    display: flex;
    padding-right: 20px;
    list-style: none;

    :deep(.locale-select) {
        border-radius: 20px;
    }

    li {
        display: flex;
        align-items: center;
        padding: 0 10px;
    }

    a {
        color: var(--color-text-1);
        text-decoration: none;
    }

    .nav-btn {
        border-color: rgb(var(--gray-2));
        color: rgb(var(--gray-8));
        font-size: 16px;
    }

    .trigger-btn,
    .ref-btn {
        position: absolute;
        bottom: 14px;
    }

    .trigger-btn {
        margin-left: 14px;
    }
}
</style>

<style lang="less">
.message-popover {
    .arco-popover-content {
        margin-top: 0;
    }
}
</style>
