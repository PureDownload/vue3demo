<template>
    <div class="sidebar">
       <SidebarItem v-for="route in adminRoutes" :key="route.name" :item="route" /> 
    </div>
</template>
<script setup>
//* 导航栏
//* 组件导入
import SidebarItem from './SidebarItem.vue'
//* 官方API导入
import { useRouter } from 'vue-router'
import { reactive, watch } from 'vue'

const routers = useRouter() //* 获取当前路由信息
var adminRoutes = reactive({id:1}) //* 后台管理的所有路由

const getAdminRoutes = (routes) => { //* 获取后台管理所有路由 过滤为hidden的
    if(!routes) return
    var adminRoutes = []
    for(let i = 0;i < routes.length;i++) {
        const route = routes[i]
        if(route.name === 'admin') {
            console.log(route)
            adminRoutes = route.children.filter((route) => {
                return !route.hidden
            })
        }
    }
    return adminRoutes
}

watch(routers, () => { //* 监听路由
    adminRoutes = reactive(getAdminRoutes(routers.getRoutes()))
    console.log(adminRoutes, 'adminRoutes', routers)

},{ immediate: true, deep: true })
</script>
<style lang="scss" scoped>
.sidebar {

}
</style>