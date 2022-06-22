<template>
    <div class="goods grid grid-cols-2">
        <GoodItem cover="https://picb1.photophoto.cn/39/864/39864381_1.jpg" title="清洁棉柔湿巾超大包-兑换后0元" class="good-item"
            :options="{ coverWidth: '100%' }">
            <ExchangeVue integrel="888" />
        </GoodItem>
        <GoodItem cover="https://picb1.photophoto.cn/39/864/39864381_1.jpg" title="清洁棉柔湿巾超大包-兑换后0元" class="good-item"
            :options="{ coverWidth: '100%' }">
            <ExchangeVue integrel="888" />
        </GoodItem>
        <GoodItem cover="https://picb1.photophoto.cn/39/864/39864381_1.jpg" title="清洁棉柔湿巾超大包-兑换后0元" class="good-item"
            :options="{ coverWidth: '100%' }">
            <ExchangeVue integrel="888" />
        </GoodItem>
    </div>
</template>
<script>
import GoodItem from '../../../components/GoodItem/index.vue'
import ExchangeVue from '../../../components/GoodItem/components/exchange.vue'
export default {
    components: {  GoodItem, ExchangeVue }
}
</script>