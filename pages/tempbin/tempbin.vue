<template>
	<view>
		<view v-for="(item, index) in list" :key="index" class="example-box">
			<uni-card :title="item.title" :thumbnail="item.thumbnail" :extra="item.extra" :note="item.note">
				{{item.content}}
			</uni-card>
		</view>
	</view>
</template>

<script>
	import uniCard from '@/components/uni-card/uni-card.vue';
	export default {
		data() {
			return {
				list: [{
						title: "2020-01-02",
						thumbnail: "https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png",
						extra: "点击查看详情",
						note: "",
						content: "小微企业申请创业担保贷款资格审核"
					},
					{
						title: "2020-01-03",
						thumbnail: "https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png",
						extra: "点击查看详情",
						note: "",
						content: "工伤保险基金先行支付"
					},
					{
						title: "2020-01-04",
						thumbnail: "https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png",
						extra: "点击查看详情",
						note: "",
						content: "缴费基数认定"
					},
					{
						title: "2020-01-05",
						thumbnail: "https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png",
						extra: "点击查看详情",
						note: "",
						content: "劳动人事争议仲裁申请"
					}
				]
			};
		},
		components: {
			uniCard
		},
		methods: {}
	};
</script>

<style lang="scss">
	@import '@/common/uni-nvue.scss';

	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 20rpx 0;
		padding-bottom: 0;
	}

	.example-box {
		// margin-bottom: 30rpx;
	}

	.image-box {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		height: 350rpx;
		overflow: hidden;
	}

	.image {
		/* #ifndef APP-NVUE */
		width: 100%;
		height: 100%;
		/* #endif */
		flex: 1;
	}

	.content-box {
		padding-top: 20rpx;
	}

	.content-box-text {
		font-size: 14px;
		line-height: 20px;
	}

	.footer-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: space-between;
		flex-direction: row;

	}

	.footer-box__item {
		align-items: center;
		padding: 10rpx 0;
		font-size: 30rpx;
		color: #666;
	}
</style>
