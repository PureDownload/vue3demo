<template>
    <div class="price-item">
        <!-- 规格列 -->
        <div class="specifications" v-if="specifications">{{ specifications }}</div>
        <!-- 价格列 -->
        <div class="price-wrap">
            <div class="price">￥{{ price }}</div>
        </div>
        <div class="sub-title" v-if="specifications">{{ subTitle }}</div>
        <div class="rush-title">
            {{rushTitle}}
            <div class="go">GO ></div>
        </div>
    </div>
</template>
<script>
const defaultOptions = { //* 组件配置
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
        subTitle: {
            type: String,
            default: ''
        },
        options: {
            type: Object,
            default: () => {}
        },
        rushTitle: {
            type: String,
            default: ''
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
    .sub-title {
        color: #f1c40f;
        font-size: 12px;
        margin: 5px 0px;
    }
    .rush-title {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: #ff6348;
        border-radius: 99px;
        color: white;
        font-size: 14px;
        padding: 7px;
        width: 100%;
        .go {
            background-color: white;
            color: #ff6348;
            border-radius: 99px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 3px 5px;
        }
    }
}
</style>