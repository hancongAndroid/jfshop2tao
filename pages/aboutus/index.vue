<template>
	<view class="page">
		<view class="logo">
			<image :src="info.login_logo" mode=""></image>
		</view>
		<view class="versions">
			<text>{{info.title}} For V2.1.4 </text>
		</view>
		<view class="jianjie">{{info.infos}}</view>
		
		<view class="copyright">
			<text>Copyright©2022</text>
			<text>{{info.title}}版权所有</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info:[],
			};
		},
		onLoad() {
			this.loadData();
		},
		methods:{
			loadData() {
				let that = this;
				that.req({
					url: 'getabouts',
					data: {},
					Loading: true,
					success: function(res) {
						console.log(res)
						that.info = res.data;
					}
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	@import 'index.scss';
</style>
