<template>
	<view class="content">
		<view class="ul">
			<view>缴费年月：{{ detail.yearMonth }}</view>
			<view>缴费基数：{{ detail.base }}</view>
			<view>缴费金额：{{ detail.fee }}</view>
			<view>征缴机构：{{ detail.jg }}</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			detail: {}
		};
	},
	methods: {},
	onLoad(e) {
		this.detail = e;
	}
};
</script>

<style></style>
