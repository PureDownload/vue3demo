import { createApp } from 'vue'
import App from '@/App.vue'
import '@/index.css'
import router from '@/router/index'
import vuex from '@/store/index'
import '@/styles/index.scss'

//* 引入 element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(vuex)
app.use(ElementPlus)
app.mount('#app')
