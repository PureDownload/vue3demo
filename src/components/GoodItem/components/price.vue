<template>
    <div class="price-item">
        <!-- 规格列 -->
        <div class="specifications" v-if="specifications">{{ specifications }}</div>
        <!-- 价格列 -->
        <div class="price-wrap">
            <div class="price">￥{{ price }}</div>
            <div class="sub-price" :class="[comOption.subPriceThrough && 'through']">{{ subPrice }}</div>
            <div class="icon" v-if="comOption.showShopCar">i</div>
        </div>
    </div>
</template>
<script>
const defaultOptions = { //* 组件配置
    subPriceThrough: true, //* 价格副标题删除线
    showShopCar: false, //* 显示购物车icon
}
export default {
    props: {
        specifications: {// 规格
            type: String,
            default: ''
        },
        price: { //* 价格
            type: String,
            default: '0.00'
        },
        subPrice: {
            type: String,
            default: ''
        },
        options: {
            type: Object,
            default: () => {}
        }
    },
    computed: {
        comOption() {
            return Object.assign({}, this.options, defaultOptions)
        }
    }
}
</script>
<style lang="scss" scoped>
.price-item {
    .specifications {
        font-size: 16px;
        color: #95a5a6;
        margin-bottom: 10px;
    }
    .price-wrap {
        display: flex;
        align-items: baseline;
        .price {
            font-size: 24px;
            color: #ff6348;
        }
        .sub-price {
            color: #95a5a6;
            margin-left: 10px;
            &.through {
                text-decoration: line-through;
            }
        }
    }
}
</style>