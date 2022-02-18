<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="includeList">
      <component :is="Component"></component>
    </keep-alive>
  </router-view>

</template>
 
<script lang="ts">
//使用动态include解析
//app.vue文件
  export default {
    name: 'App',
    data(){
      return {
        includeList : []
      }
    },
    watch:{
      $route(to:any) {
        //监听路由变化，把配置路由中keepAlive为true的name添加到include动态数组中
        const that:any = this;
        if(to.meta.keepAlive && that.includeList.indexOf(to.name) === -1){
          that.includeList.push(to.name);
        }
      }
    }
  }
</script>