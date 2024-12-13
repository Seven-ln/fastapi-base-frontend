<template>
    
</template>

<script setup>

</script>

<style lang="less" scoped>
.tab-bar-container {
    position: relative;
    background-color: var(--color-bg-2);

    .tab-bar-box {
        display: flex;
        padding: 0 0 0 20px;
        background-color: var(--color-bg-2);
        border-bottom: 1px solid var(--color-border);

        .tab-bar-scroll {
            height: 32px;
            flex: 1;
            overflow: hidden;

            .tags-wrap {
                padding: 4px 0;
                height: 48px;
                white-space: nowrap;
                overflow-x: auto;

                :deep(.arco-tag) {
                    display: inline-flex;
                    align-items: center;
                    margin-right: 6px;
                    cursor: pointer;

                    &:first-child {
                        .arco-tag-close-btn {
                            display: none;
                        }
                    }
                }
            }
        }
    }

    .tag-bar-operation {
        width: 100px;
        height: 32px;
    }
}
</style>