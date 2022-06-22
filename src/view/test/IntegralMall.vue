<template>
    <div class="integral-mall">
        <div class="head pl-3 flex justify-center flex-col text-white">
            <div class="title text-base">可用积分</div>
            <div class="info mt-2 flex">
                <div class="count mr-2 text-3xl font-bold">0</div>
                <div class="btn mr-2 p-2 pl-3 pr-3">积分明细</div>
                <div class="btn mr-2 p-2 pl-3 pr-3">兑换明细</div>
            </div>
        </div>
        <Card class="mr-2 ml-2 -mt-2 task-card p-3 flex justify-center">
            <div class="content flex items-center">
                <div class="icon mr-2">icon</div>
                <div class="info">
                    <div class="title text-base">成长任务</div>
                    <div class="sub-title text-sm">领取奖励</div>
                </div>
            </div>
        </Card>
        <GoodsList class="mt-3" />
    </div>
</template>
<script>
import Card from '../../components/common/Card.vue'
import GoodsList from './components/GoodsList.vue'
export default {
    components: { Card, GoodsList }
}
</script>
<style lang="scss" scoped>
.integral-mall {
    .head {
        // height: 200rpx;
        height: 100px;
        position: relative;
        &::after {
            content: '';
            position: absolute;
            background-color: #60A5FA;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            // border-bottom-left-radius: 18rpx;
            // border-bottom-right-radius: 18rpx;
            border-bottom-left-radius: 9px;
            border-bottom-right-radius: 9px;
        }
        .info {
            .btn {
                border: 1px solid white;
                border-radius: 99px;
            }
        }
    }
}
</style>