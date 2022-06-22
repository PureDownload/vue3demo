<template>
	<div class="good_item" :class="[position]">
		<div class="item">
			<img :src="cover" class="cover" />
		</div>
		<div class="content">
			<div class="item_title" :style="{ fontSize: comOption.titleSize }">
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
	titleSize: '20px', //* 标题大小
	tagTitle: '限时抢', //* 标签标题
}
export default {
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
			return Object.assign({}, this.options, defaultOptions)
		}
	}
}
</script>

<style lang="scss" scoped>
.good_item {
	background-color: white;
	border-radius: 4px;

	&.left {
		display: flex;
	}

	.item {
		width: 100%;

		.cover {
			width: 100%;
			object-fit: fill;
		}
	}

	.content {
		width: 100%;
		.item_title {
			margin: 15px 2px;
			// width: 100px;
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
				font-size: 12px;
				width: 20px;
				padding: 5px 6px;
			}
		}

		.item_price {
			display: flex;
			align-items: center;

			.price {
				color: #c90c0c;
				font-size: 34rpx;

				span {
					font-size: 28rpx;
				}
			}

			.label {
				color: #ababab;
				font-size: 24rpx;
				margin-left: 10rpx;
			}
		}
	}

}
</style>
