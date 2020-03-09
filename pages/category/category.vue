<template>
	<view class="content">
		<view class="example-body">
			<uni-nav-bar leftIcon="scan" :fixed="false" color="#333333" background-color="#FFFFFF" right-text="搜索" @clickLeft="scan"
			 @clickRight="confirm">
				<view class="input-view">
					<uni-icons class="input-uni-icon" type="search" size="22" color="#666666" />
					<input confirm-type="search" class="nav-bar-input" type="text" placeholder="输入搜索关键词" @confirm="confirm">
				</view>
			</uni-nav-bar>
		</view>
		<uni-section title="业务分类" type="line"></uni-section>
		<view class="example-body">
			<uni-grid :column="4" :highlight="true">
				<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
					<view class="grid-item-box">
						<image :src="item.url" class="image" mode="aspectFill" />
						<text class="text">{{ item.text }}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
	</view>
</template>
<script>
	import uniGrid from '@/components/uni-grid/uni-grid.vue';
	import uniGridItem from '@/components/uni-grid-item/uni-grid-item.vue';
	import uniSection from '@/components/uni-section/uni-section.vue';
	import uniIcons from "@/components/uni-icons/uni-icons.vue";
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue";

	export default {
		components: {
			uniSection,
			uniGrid,
			uniGridItem,
			uniIcons,
			uniNavBar
		},
		data() {
			return {
				list: [{
						url: '../../static/icons/airline-mode-icon.png',
						text: '社会保险',
						badge: '0',
						type: "primary"
					},
					{
						url: '../../static/icons/calculator-icon.png',
						text: '创业就业',
						badge: '1',
						type: "success"
					},
					{
						url: '../../static/icons/camera-icon.png',
						text: '劳动关系',
						badge: '99',
						type: "warning"
					},
					{
						url: '../../static/icons/cloud-icon.png',
						text: '人事工资',
						badge: '2',
						type: "error"
					},
					{
						url: '../../static/icons/contact-icon.png',
						text: '人才服务'
					},
					{
						url: '../../static/icons/lcd-icon.png',
						text: '一键办理'
					},
					{
						url: '../../static/icons/msg-icon.png',
						text: '投诉建议'
					},
					{
						url: '../../static/icons/mobile-icon.png',
						text: '其他事项'
					}
				]
			}
		},
		methods: {
			scan() {
				uni.showToast({
					title: '扫码'
				})
			},
			confirm() {
				uni.showToast({
					title: '搜索'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/common/uni-nvue.scss';
	$nav-height: 30px;

	.uni-nav-bar-text {
		font-size: $uni-font-size-base;
	}

	.city {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		margin-left: 4px;
	}

	.input-view {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		flex: 1;
		background-color: $uni-bg-color-grey;
		height: $nav-height;
		border-radius: 15px;
		padding: 0 15px;
		flex-wrap: nowrap;
		margin: 7px 0;
		line-height: $nav-height;
	}

	.input-uni-icon {
		line-height: $nav-height;
	}

	.nav-bar-input {
		height: $nav-height;
		line-height: $nav-height;
		/* #ifdef APP-PLUS-NVUE */
		width: 370rpx;
		/* #endif */
		padding: 0 5px;
		font-size: $uni-font-size-base;
		background-color: $uni-bg-color-grey;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 0;
	}

	.grid-item-box {
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}

	.image {
		width: 60rpx;
		height: 60rpx;
	}

	.text {
		font-size: 26rpx;
		margin-top: 10rpx;
	}
</style>
