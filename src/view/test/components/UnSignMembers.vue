<template>
    <div class="un-sign-members">
        <div class="background">背景</div>
        <div class="action">
            <div class="item flex-center">
                <div class="icon flex-center">icon</div>
                <div class="label">积分兑换</div>
            </div>
            <div class="item flex-center">
                <div class="icon  flex-center">icon</div>
                <div class="label">无忧退换</div>
            </div>
            <div class="item flex-center">
                <div class="icon flex-center">icon</div>
                <div class="label">生日好礼</div>
            </div>
            <div class="item flex-center">
                <div class="icon flex-center">icon</div>
                <div class="label">专属客服</div>
            </div>
            <div class="item flex-center">
                <div class="icon flex-center">icon</div>
                <div class="label">优惠券包</div>
            </div>
        </div>
        <div class="sign-btn">立即入会 尽享权益 ></div>
    </div>
</template>
<style lang="scss" scoped>
.un-sign-members {
    padding: 0px 10px;
    background-color: black;

    .action {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        margin-bottom: 20px;

        .item {
            flex: 1;

            .icon {
                padding: 10px;
                border-radius: 99px;
                background: #27ae60;
                height: 24px;
                width: 24px;
            }
            .label {
                margin-top: 5px;
                font-size: 13px;
            }
        }
    }

    .sign-btn {
        background-color: #27ae60;
        padding: 10px 0px;
        border-radius: 99px;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
    }
}

.flex-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>