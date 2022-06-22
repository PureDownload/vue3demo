<template>
    <div class="members pl-2 pr-2">
        <UnSignMembers />
        <div class="actions mt-5 card flex">
            <div class="item p-5 flex justify-center flex-1">
                <div class="icon mr-1">icon</div>
                <div class="title font-bold">我的积分 {{ 0 }}</div>
            </div>
            <div class="item p-5 flex  justify-center flex-1">
                <div class="icon mr-1">icon</div>
                <div class="title font-bold">成长任务</div>
            </div>
        </div>
        <div class="exchange mt-5">
            <div class="head flex justify-between">
                <div class="label font-bold">积分兑换</div>
                <div class="all text-gray-500">查看全部 ></div>
            </div>
            <GoodsList class="mt-3"/>
        </div>
    </div>
</template>
<script>
import UnSignMembers from './components/UnSignMembers.vue'
import GoodsList from './components/GoodsList.vue'
export default {
    components: { UnSignMembers, GoodsList }
}
</script>
<style lang="scss" scoped>
.card {
    background-color: white;
    // border: 2rpx solid #ebeef5;
    border: 1px solid #ebeef5;
    // border-radius: 10rpx;
    border-radius: 5px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}

.members {
    .exchange {
        .goods {
            .good-item {
                // width: 240rpx;
                width: 170px;
            }
        }
    }
}
</style>