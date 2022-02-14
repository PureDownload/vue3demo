# vue3学习

#### vue3通过ref获取dom元素的方式
vue2.x版本使用this.$refs获取dom元素，而vue3.x则发生了改变。不过还是使用refAPI来进行获取
~~~ javascript
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld ref="helloWorldEl" msg="Hello Vue 3.0 + Vite" />
  <div class="ref" :ref="setRef">1</div>
  <div class="ref" :ref="setRef">2</div>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { ref, onMounted, nextTick  } from 'vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const helloWorldEl = ref(null) //* 和元素上面的ref同名 会自动覆盖 需要将ref return出去
    onMounted(() => {
      console.dir(helloWorldEl.value)
    })

    // 存储dom数组
    const myRef = ref([]);

    const setRef = (el: any) => { //* 使用函数 会将元素作为参数传入
      myRef.value.push(el);
    };

    nextTick(() => {
      console.dir(myRef.value)
    })
    
    return {
      helloWorldEl,
      setRef
    }
  }
}
</script>
~~~
从上面的例子中可以看出，元素的ref属性支持两种格式(String|Function)。使用String字符串的话即为ref名称，如果要获取。则通过setup的ref API,需要变量名和元素ref同名，并且返回出去。(return出去时需要保证同名)。<br/>
另一种方式则是通过传入一个函数的方式，那么vue会将dom对象通过传参的方式放入函数。<br/>
注意：如果ref对应的是dom元素的话，获取的是dom元素，如果是组件的话则为vue实例。ref中不是一定需要传入null，传什么都会被覆盖