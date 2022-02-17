<template>
  <HelloWorld ref="helloWorldEl" msg="Hello Vue 3.0 + Vite" />
  <div class="ref" :ref="setRef">1</div>
  <div class="ref" :ref="setRef">2</div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
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
