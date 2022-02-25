<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>
<script setup>
//* 套在SidebarItem外面的外壳 用于自动识别跳转链接还是外地链接
import { isExternal } from "@/utils/validate.js"; //* 方法为识别path是否为外部链接
import { ref, reactive  } from 'vue';
const props = defineProps({
  to: String,
});
const external = ref(isExternal(props.to))
console.log(props.to, 'to', external.value)

const getType = () => {
    if (external.value) {
        return 'a'
    }
    return 'router-link'
}

const type = getType()

const linkProps = (to) => { //* 获取链接使用的属性
  if (external.value) {
    return {
      href: to,
      target: "_blank",
      rel: "noopener",
    };
  }
  return {
    to: to,
  };
};
</script>