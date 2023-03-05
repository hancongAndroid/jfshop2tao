<template>
	<view class="page">
		<!-- 地址列表 -->
		<view class="address-list">
			<view class="list" v-for="(item,index) in list" :key="index" @click="setaddress(item.id)">
				<view class="name-phone">
					<view class="name">
						<text class="one-omit">{{item.name}}</text>
					</view>
					<view class="phone">
						<text>{{item.phone}}</text>
						<text v-if="item.is_frist == 1" class="tag">默认</text>
					</view>
				</view>
				<view class="address-edit">
					<view class="address">
						<text>{{item.mainaddress}}{{item.address}}</text>
					</view>
					<view class="edit" @click.stop="gopage('/pages/address/add?address_id='+item.id)">
						<text class="iconfont icon-edit1"></text>
					</view>
				</view>
			</view>
		</view>
		<!-- 添加地址 -->
		<view class="add-address">
			<view class="btn" @click="gopage('/pages/address/add')">
				<text>新建收货地址</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				order_num:'',
				list:[]
			};
		},
		onLoad(e) {
			this.order_num = e.order_num;
		},
		onShow() {
			this.loadData();
		},
		methods:{
			setaddress(id){
				let that = this;
				that.req({
					url: 'user/setaddress',
					data: {id,id},
					Loading: true,
					success: function(res) {
						console.log(res)
						uni.navigateTo({
							url: '/pages/detail/payinfo?order_num='+that.order_num,
						})
					}
				})
			},
			loadData() {
				let that = this;
				that.req({
					url: 'user/addresslist',
					data: {},
					Loading: true,
					success: function(res) {
						console.log(res)
						that.list = res.data;
					}
				})
			},
			
		}
	}
</script>

<style scoped lang="scss">
	@import 'index.scss';
</style>
