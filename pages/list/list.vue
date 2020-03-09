<template>
	<view>
		<uni-section title="缴费列表演示(list)" type="line"></uni-section>
		<uni-list>
			<view v-for="(item, index) in feeList" :key="index"><uni-list-item :title="item.yearMonth" :rightText="item.fee" @click="goto_detail(item)" /></view>
		</uni-list>

		<uni-section title="缴费列表演示(card)" type="line"></uni-section>
		<view v-for="(item, index) in feeList" :key="index">
			<uni-card :title="item.yearMonth" :is-shadow="true" :extra="item.jg" @click="goto_detail(item)" note="点击查看详情">{{ item.fee }}元</uni-card>
		</view>

		<uni-section title="缴费列表演示(grid)" type="line"></uni-section>
		<uni-grid :column="colList.length">
			<view v-for="(col, index) in colList" :key="index">
				<uni-grid-item>
					<view class="grid-title">{{ col.title }}</view>
				</uni-grid-item>
				<view v-for="(item, index2) in feeList" :key="index2">
					<uni-grid-item>
						<view class="gitem">{{ test(item, col.name) }}</view>
					</uni-grid-item>
				</view>
			</view>
		</uni-grid>
	</view>
</template>

<script>
import uniSection from '@/components/uni-section/uni-section.vue';
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
import uniGrid from '@/components/uni-grid/uni-grid.vue';
import uniGridItem from '@/components/uni-grid-item/uni-grid-item.vue';
import uniCard from '@/components/uni-card/uni-card.vue';
export default {
	components: {
		uniSection,
		uniList,
		uniListItem,
		uniGrid,
		uniGridItem,
		uniCard
	},
	data() {
		return {
			extraIcon1: {
				color: '#007aff',
				size: '22',
				type: 'gear-filled'
			},
			extraIcon2: {
				color: '#4cd964',
				size: '22',
				type: 'image'
			},
			colList: [{ title: '缴费年月', name: 'yearMonth' }, { title: '缴费金额', name: 'fee' }, { title: '征缴机构', name: 'jg' }, { title: '缴费基数', name: 'base' }],
			feeList: [
				{ yearMonth: '2020年02月', fee: 100.0, jg: '市中区人社局', base: 2000 },
				{ yearMonth: '2020年01月', fee: 190.0, jg: '市中区人社局', base: 2500 },
				{ yearMonth: '2019年12月', fee: 200.0, jg: '市中区人社局', base: 3000 },
				{ yearMonth: '2019年11月', fee: 180.0, jg: '市中区人社局', base: 2700 }
			]
		};
	},
	computed: {
		test() {
			return function(item, name) {
				return item[name];
			};
		}
	},
	methods: {
		switchChange(e) {
			uni.showToast({
				title: 'change:' + e.value,
				icon: 'none'
			});
		},
		goto_detail(item) {
			uni.navigateTo({
				url: 'detail/detail?yearMonth=' + item.yearMonth + '&fee=' + item.fee + '&jg=' + item.jg + '&base=' + item.base
			});
		}
	}
};
</script>

<style lang="scss">
@import '@/common/uni-nvue.scss';

.gitem {
	height: fit-content;
}

.grid-title {
	background-color: #999999;
	height: fit-content;
}
</style>
