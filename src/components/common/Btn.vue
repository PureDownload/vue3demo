<template>
<div class="btn flex items-center justify-center mr-2 p-1 pl-3 pr-3" :style="{border: color? '1px solid '+color : 'none', color: color, backgroundColor: bgColor}">{{text}}</div>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: 'white'
        },
        bgColor: {
            type: String,
            default: 'rgba(0,0,0,0)'
        }
    }
}
</script>
<style lang="scss" scoped>
.btn {
    border-radius: 99px;
}
</style>