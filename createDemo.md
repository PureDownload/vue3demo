# Vite+Vue3.x 基本项目搭建
#### 使用vite安装基本脚手架
~~~
npm install -g create-vite-app
create-vite-app vue3demo
cd vue3demo
npm install
npm run dev
~~~
#### 引入TypeScript

##### 1.npm 安装
~~~ cmd
npm install typescript -D
~~~
##### 2.初始化tsconfig.json
~~~
npx tsc --init
~~~
##### tsconfig.json
用于配置ts
~~~
目录中存在 tsconfig.json 文件表明该目录是 TypeScript 项目的根目录。 tsconfig.json 文件指定了编译项目所需的根文件和编译器选项。

JavaScript 项目可以改用 jsconfig.json 文件，它的作用几乎相同，但默认情况下启用了一些与 JavaScript 相关的编译器标志。

根据您打算在其中运行代码的 JavaScript 运行时环境，您可以在 github.com/tsconfig/bases 上使用基本配置。 这些是您的项目从中扩展的 tsconfig.json 文件，通过处理运行时支持来简化您的 tsconfig.json。

例如，如果您正在编写一个使用 Node.js 版本 12 及更高版本的项目，那么您可以使用 npm 模块 @tsconfig/node12：
~~~
##### 3.将项目js文件修改为ts文件
1. 将main.js修改为main.ts
2. 将index.html中main.js的引用修改为main.ts
3. .vue文件中的script添加lang="ts"
~~~ javascript
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
~~~
此时可以正常访问项目了，但是打开main.ts会发现import App from App.vue会报错:Cannot find module './App.vue' or its corresponding type declarations.,这是因为现在ts还没有识别vue文件，需要进行下面的配置:<br/>
在项目根目录添加shim.d.ts文件,下面为文件内容
~~~ javascript
declare module "*.vue" {
    import { Component } from "vue";
    const component: Component;
    export default component;
}
~~~
#### 安装vue-router
##### 1.安装命令
~~~
npm install vue-router

package.json
"vue-router": "^4.0.12"
~~~
##### 2.src目录下车间router目录，添加index.ts,routes.ts文件
index.ts 路由文件
~~~ javascript
import {createRouter, createWebHashHistory} from 'vue-router'
import routes from './routes'

// 在 Vue-router新版本中，需要使用createRouter来创建路由
export default createRouter({
  // 指定路由的模式,此处使用的是hash模式
  history: createWebHashHistory(),
  // 路由地址
  routes: routes
})
~~~
routes.ts 用于存放路由
~~~ typescript
//* 存放router页面
const routes:Array<any> = [
    
]

export default routes
~~~
#### 安装vuex
##### 1.安装命令
~~~
npm install vuex

package.json
"vuex": "^4.0.2"
~~~
##### 2.创建vuex使用的文件，参考element-admin
在src目录下创建store文件夹，index.ts,getters.ts,modules文件夹
index.ts
~~~ javascript
import { createStore } from 'vuex'
import getters from './getters'

interface State {
  userName: string
}
// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /(\.js|\.ts)$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules:any, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

export default createStore({
  modules,
  getters
});
~~~
getters.ts vuex getters存放
~~~ javascript
//* vuex getters
const getters:any = {}
export default getters
~~~
##### vuex工程自动化
即自动生成modules里面的文件作为vuex的modules。在webpack中使用require.context,但是vite并没有require，不过可以使用import.meta.glob()异步、import.meta.globEager()同步 来进行替换。<br/>
若是使用import.meta.glob()、import.meta.globEager()
报错没有此方法解决方案，可以在package.json文件中添加：
~~~ json
"devDependencies": {
    "vite": "^2.5.1",
    "@vitejs/plugin-vue": "^1.6.0",
    "@vue/compiler-sfc": "^3.0.4"
}
~~~
改版后的/store/index.ts
~~~ javascript
import { createStore } from 'vuex'
import getters from './getters'

//* vuex工程化 自动生成modules下面的文件
const modules:any = {}
const modulesFiles = import.meta.globEager("./modules/*.ts")

for (const key in modulesFiles) {
  if (Object.prototype.hasOwnProperty.call(modulesFiles, key)) {
    modules[key.replace(/(\.\/modules\/|\.ts)/g, '')] = modulesFiles[key].default;
  }
}

export default createStore({
  modules,
  getters
});
~~~
#### main.js引入router,vuex
~~~ javascript
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index'
import vuex from './store/index'

const app = createApp(App)
app.use(router)
app.use(vuex)
app.mount('#app')
~~~
#### 错误
~~~
Error: Cannot find module '@vue/cli-service/generator/template/src/App.vue'
~~~
使用的是vite项目的话，不能使用vue-cli的语法

#### 参考链接
[vue3.0+vite+typescript入门到精通]:(https://blog.csdn.net/weixin_41308072/article/details/108994027)
[element-plus-admin github]:(https://github.com/TheFirework/vue-element-plus-admin)
[import.meta.globEager 代替 require.context 自动导入文件]:(https://www.jianshu.com/p/995e0670bb76)