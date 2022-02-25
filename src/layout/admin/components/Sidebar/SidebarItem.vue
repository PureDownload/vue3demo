<template>
    <div class="route-name c-flex c-flex-center c-h-40 c-fs-12 t-sidebar-color c-cursor-pointer" @click="toPath">
        <Link :to="item.path">
            {{ item.meta.title }}
        </Link>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router' 
import Link from './Link.vue'
//* todo 嵌套路由使用递归
//* 实现效果类似于element-admin
//* 如果判断有children则显示下拉图标，点击效果从切换变为展开下拉
//* 展开

const props = defineProps({
    item: Object
})

const toPath = () => {
    console.log(props.item)
}
</script>
<style lang="scss" scoped>
.route-name {
    &:hover {
        background-color: #2c3e50;
    }
}
</style>