import { createStore } from 'vuex'
import getters from './getters'

interface State {
  userName: string
}

//* vuex工程化 自动生成modules下面的文件
const modules:any = {}
const modulesFiles = import.meta.globEager("./modules/*.ts")

for (const key in modulesFiles) {
  if (Object.prototype.hasOwnProperty.call(modulesFiles, key)) {
    modules[key.replace(/(\.\/modules\/|\.ts)/g, '')] = modulesFiles[key].default;
  }
}

console.log(modulesFiles, modules)


export default createStore({
  modules,
  getters
});