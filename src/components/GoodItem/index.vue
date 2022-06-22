<template>
	<div class="good_item" :class="[position, comOption.isShadow]">
		<div class="item text-center" >
			<img :src="cover" :style="{ width: comOption.coverWidth, borderRadius: comOption.coverBorder }" class="cover" mode="widthFix" />
		</div>
		<div class="content">
			<div class="item_title p-3" :style="{ fontSize: comOption.titleSize }">
				<span class="title-tag" v-if="comOption.tagTitle">{{ comOption.tagTitle }}</span>
				{{ title }} 
			</div>
			<div class="item_price">
				<slot />
			</div>
		</div>
	</div>
</template>

<script>
const defaultOptions = { //* 组件配置
	titleSize: '28rpx', //* 标题大小
	tagTitle: '', //* 标签标题
	coverWidth: '150px',
	coverBorder: '0rpx',
	isShadow: 'shadow', // '' shadown 是否有阴影
}
export default {
	name: 'goodsItem',
	props: {
		cover: { // 封面地址
			type: String,
			default: ''
		},
		title: {// 商品标题
			type: String,
			default: ''
		},
		position: {
			type: String,
			default: 'top'
		}, //* 布局方式 top|left
		options: {
			type: Object,
			default: () => { }
		}
	},
	computed: {
		comOption() {
			console.log(this.options)
			return Object.assign({}, defaultOptions, this.options)
		}
	}
}
</script>

<style lang="scss" scoped>
.good_item {
	background-color: white;
	border-radius: 4px;
	&.shadow {
		box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
	}
	.item {
		.cover {
			
		}
	}

	.content {
		width: 100%;
		font-size: 28rpx;
		.item_title {
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 3;
			/*设置p元素最大3行，父元素需填写宽度才明显*/
			text-overflow: ellipsis;
			overflow: hidden;
			/* autoprefixer: off */
			-webkit-box-orient: vertical;
			/* autoprefixer: on */
			/*因为代码环境的关系-webkit-box-orient被过滤掉了 autoprefixer 这个关键字可以免除被过滤的动作*/
			word-wrap: break-word;
			word-break: break-all;

			.title-tag {
				background: #ff4757;
				color: white;
				width: 40rpx;
				padding: 5px 6px;
			}
			
			
		}

		.item_spen {
			
		}

		.item_price {
			width: 100%;
		// 	display: flex;
		// 	align-items: center;

		// 	.price {
		// 		color: #c90c0c;
		// 		font-size: 34rpx;

		// 		span {
		// 			font-size: 28rpx;
		// 		}
		// 	}

		// 	.label {
		// 		color: #ababab;
		// 		font-size: 24rpx;
		// 		margin-left: 10rpx;
		// 	}
		}
	}
	&.left {
		display: flex;
		.content {
			font-size: 28rpx;
			margin: 0 20rpx;
			.item_title {
				margin: 0;
				margin-bottom: 20rpx;
				
			}
			
		}
	}
}
</style>
