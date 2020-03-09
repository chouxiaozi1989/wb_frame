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
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular indicator-dots="true">
				<view v-for="(item,index) in imgUrls" :key="index">
					<swiper-item>
						<view class="swiper-item">
							<image :src="item" mode="scaleToFill"></image>
						</view>
					</swiper-item>
				</view>
			</swiper>
		</view>
		<uni-section title="猜你想办" type="line"></uni-section>
		<uni-card title="标题文字" mode="style" :is-shadow="true" thumbnail="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg"
		 extra="Dcloud 2019-05-20 12:32:19" note="Tips">
		</uni-card>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import uniSection from '@/components/uni-section/uni-section.vue'
	import uniCard from '@/components/uni-card/uni-card.vue'

	import {
		mapState
	} from 'vuex'

	export default {
		components: {
			uniIcons,
			uniNavBar,
			uniCard
		},
		methods: {
			// search() {
			// 	uni.navigateTo({
			// 		url: "../list/list"
			// 	})
			// },
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
		},
		data() {
			return {
				imgUrls: [
					'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6',
					'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/coursePicture/0fbcfdf7-0040-4692-8f84-78bb21f3395d',
					'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/management-school-picture/7683b32e-4e44-4b2f-9c03-c21f34320870'
				]
			}
		},
		computed: mapState(['forcedLogin', 'hasLogin', 'userName', 'userInfo']),
		onLoad() {
			if (!this.hasLogin) {
				uni.showModal({
					title: '未登录',
					content: '您未登录，需要登录后才能继续',
					/**
					 * 如果需要强制登录，不显示取消按钮
					 */
					showCancel: !this.forcedLogin,
					success: (res) => {
						if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
							if (this.forcedLogin) {
								uni.reLaunch({
									url: '../login/login'
								});
							} else {
								uni.navigateTo({
									url: '../login/login'
								});
							}
						}
					}
				});
			}

			// #ifdef APP-PLUS|| MP-WEIXIN
			this.iconType = ['success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear']
			// #endif
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

	.avatarImg {
		height: 200rpx;
		width: 200rpx;
		border-radius: 50%;
		background-color: #007AFF;
		display: flex;
		align-self: center;
		margin-top: 50rpx;
	}

	.hello {
		display: flex;
		flex: 1;
		flex-direction: column;
	}

	.title {
		color: #8f8f94;
		margin-top: 25px;
	}

	.ul {
		font-size: 15px;
		color: #8f8f94;
		margin-top: 25px;
	}

	.ul>view {
		line-height: 25px;
	}

	.uni-margin-wrap {
		width: 95%;
		margin-top: 20upx;
		align-self: center;
	}

	.swiper {
		height: 500upx;
	}

	.swiper-item {
		display: block;
		height: 400upx;
		line-height: 400upx;
		text-align: center;
	}
</style>
