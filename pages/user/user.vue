<template>
	<view class="content">
		<view v-if="hasLogin" class="loggedContent">
			<image class="avatarImg" :src="userInfo.avatarUrl"></image>
			<view class="title">您好 {{ userName }}，您已成功登录。</view>
			<view class="btn-row"><button type="default" @tap="bindLogout">注销</button></view>
		</view>
		<view v-if="!hasLogin">
			<view class="btn-row">
				<button type="primary" class="primary" @tap="bindLogin">登录</button>
				<button type="primary" class="primary" @tap="bindReg">注册</button>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
	computed: {
		...mapState(['hasLogin', 'forcedLogin', 'userInfo', 'userName'])
	},
	methods: {
		...mapMutations(['logout']),
		bindLogin() {
			uni.navigateTo({
				url: '../login/login'
			});
		},
		bindReg() {
			uni.navigateTo({
				url: '../reg/reg'
			});
		},
		bindLogout() {
			this.logout();
			/**
			 * 如果需要强制登录跳转回登录页面
			 */
			if (this.forcedLogin) {
				uni.reLaunch({
					url: '../login/login'
				});
			}
		}
	}
};
</script>

<style>
.loggedContent {
	display: flex;
	align-items: center;
	flex-direction: column;
}
.avatarImg {
	height: 200rpx;
	width: 200rpx;
	border-radius: 50%;
	background-color: #007aff;
	display: flex;
	align-self: center;
	margin-top: 50rpx;
}

.title {
	color: #8f8f94;
	margin-top: 25px;
}
</style>
