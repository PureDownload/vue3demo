<template>
    <div class="growth-task">
        <div class="head p-3 flex justify-center flex-col">
            <div class="info flex justify-around text-white">
                <div class="item">
                    <div class="title">可用积分</div>
                    <div class="count font-bold mt-1">0</div>
                    <Btn text=去使用 />
                </div>
                <div class="item">
                    <div class="title">成长值</div>
                    <div class="count font-bold mt-1">10</div>
                </div>
            </div>
            <Card class="sign-card p-2 mt-2">
                <div class="title flex justify-between items-center">
                    <div class="label font-bold">每日签到</div>
                    <Btn text="签到提醒" color="#1e90ff" />
                </div>
                <div class="sub-title text-xs text-gray-600">今日签到可得1成长值奖励</div>
                <div class="items flex">
                    <div class="day-card flex-1 mr-1">
                        <div class="card-content flex justify-center items-center">
                            <div class="day p-2 text-xs">20</div>
                        </div>
                        <div class="text text-center text-xs mt-1">周一</div>
                    </div>
                    <div class="day-card flex-1 mr-1">
                        <div class="card-content flex justify-center items-center">
                            <div class="day p-2 text-xs">20</div>
                        </div>
                        <div class="text text-center text-xs mt-1">周一</div>
                    </div>
                    <div class="day-card flex-1 mr-1">
                        <div class="card-content flex justify-center items-center">
                            <div class="day p-2 text-xs">20</div>
                        </div>
                        <div class="text text-center text-xs mt-1">周一</div>
                    </div>
                    <div class="day-card flex-1 mr-1">
                        <div class="card-content flex justify-center items-center">
                            <div class="day p-2 text-xs">20</div>
                        </div>
                        <div class="text text-center text-xs mt-1">周一</div>
                    </div>
                    <div class="day-card flex-1 mr-1">
                        <div class="card-content flex justify-center items-center">
                            <div class="day p-2 text-xs">20</div>
                        </div>
                        <div class="text text-center text-xs mt-1">周一</div>
                    </div>
                    <div class="day-card flex-1 mr-1">
                        <div class="card-content flex justify-center items-center">
                            <div class="day p-2 text-xs">20</div>
                        </div>
                        <div class="text text-center text-xs mt-1">周一</div>
                    </div>
                    <div class="day-card flex-1 mr-1">
                        <div class="card-content flex justify-center items-center">
                            <div class="day p-2 text-xs">20</div>
                        </div>
                        <div class="text text-center text-xs mt-1">周一</div>
                    </div>
                </div>
                <Btn text="立即签到" bgColor="#30336b">
                </Btn>
            </Card>
        </div>
        <div class="item-card-wrap p-3">
            <Card class="item-card p-2">
                <div class="title font-bold">基础任务</div>
                <div class="items">
                    <div class="item m-2 flex items-center">
                        <div class="icon mr-2">icon</div>
                        <div class="content flex-1">
                            <div class="title">注册会员</div>
                            <div class="sub-title text-sm">+10积分，+10成长值</div>
                        </div>
                        <Btn text="去看看" bgColor="#30336b"></Btn>
                    </div>
                    <div class="item m-2 flex">
                        <div class="icon mr-2">icon</div>
                        <div class="content flex-1">
                            <div class="title">注册会员</div>
                            <div class="sub-title text-sm">+10积分，+10成长值</div>
                        </div>
                        <Btn text="去看看" bgColor="#30336b"></Btn>
                    </div>
                </div>
            </Card>
            <Card class="item-card mt-2 p-2">
                <div class="title font-bold">购买任务</div>
                <div class="items">
                    <div class="item m-2 flex items-center">
                        <div class="icon mr-2">icon</div>
                        <div class="content flex-1">
                            <div class="title">注册会员</div>
                            <div class="sub-title text-sm">+10积分，+10成长值</div>
                        </div>
                        <Btn text="去看看" bgColor="#30336b"></Btn>
                    </div>
                    <div class="item m-2 flex">
                        <div class="icon mr-2">icon</div>
                        <div class="content flex-1">
                            <div class="title">注册会员</div>
                            <div class="sub-title text-sm">+10积分，+10成长值</div>
                        </div>
                        <Btn text="去看看" bgColor="#30336b"></Btn>
                    </div>
                </div>
            </Card>
            <Card class="item-card mt-2 p-2">
                <div class="title font-bold">邀请任务</div>
                <div class="items">
                    <div class="item m-2 flex items-center">
                        <div class="icon mr-2">icon</div>
                        <div class="content flex-1">
                            <div class="title">注册会员</div>
                            <div class="sub-title text-sm">+10积分，+10成长值</div>
                        </div>
                        <Btn text="去看看" bgColor="#30336b"></Btn>
                    </div>
                    <div class="item m-2 flex">
                        <div class="icon mr-2">icon</div>
                        <div class="content flex-1">
                            <div class="title">注册会员</div>
                            <div class="sub-title text-sm">+10积分，+10成长值</div>
                        </div>
                        <Btn text="去看看" bgColor="#30336b"></Btn>
                    </div>
                </div>
            </Card>
        </div>
    </div>
</template>
<script>
import Card from '../../../components/common/Card.vue'
import Btn from '../../../components/common/Btn.vue'
export default {
    components: { Card, Btn }
}
</script>
<style lang="scss" scoped>
.growth-task {
    .head {
        // height: 200rpx;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            background-color: #60A5FA;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            // height: 200rpx;
            height: 100px;
            // border-bottom-left-radius: 18rpx;
            // border-bottom-right-radius: 18rpx;
            border-bottom-left-radius: 9px;
            border-bottom-right-radius: 9px;
        }

        .sign-card {
            .day-card {
                .card-content {
                    background-color: #f1f2f6;
                    padding: 5px 2px;
                    height: 50px;
                    border-radius: 3px;

                    .day {
                        background-color: #ced6e0;
                        border-radius: 99px;
                        color: #636e72;
                    }
                }

                .text {
                    color: #2f3640;
                }
            }
        }
    }
}
</style>