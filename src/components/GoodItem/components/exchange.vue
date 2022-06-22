<template>
    <div class="exchange-price p-3 flex items-end justify-between">
        <div class="num text-xl">{{ integrel }}<span class="text-sm">积分</span></div>
        <div class="btn text-sm text-white p-1 pl-5 pr-5">兑换</div>
    </div>
</template>
<script>
export default {
    props: {
        integrel: {
            type: Number,
            default: 0
        },
    }
}
</script>
<style lang="scss" scoped>
.exchange-price {
    .btn {
        background-color: #3B82F6;
        border-radius: 99px;   
    }
}
</style>