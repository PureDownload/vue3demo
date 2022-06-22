<template>
<div class="card">
    <slot/>
</div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.card {
    background-color: white;
    border: 1px solid #ebeef5;
    // border-radius: 10rpx;
    border-radius: 5px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
</style>