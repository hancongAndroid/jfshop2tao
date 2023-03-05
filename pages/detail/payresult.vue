<template>
	<view class="page">
		<view class="pay-price">
			<view class="icon">
				<image src="/static/pay_success.png" mode=""></image>
			</view>
			<view class="price-data">
				下单成功
			</view>
		</view>
		<!-- 跳转按钮 -->
		<view class="skip-btn">
			<view class="btn" @click="gopage('/pages/order/index')">我的订单</view>
			<view class="btn" @click="gopage('/pages/index/index')">返回首页</view>
		</view>
		<view class="recommend-info">
			<view class="recommend-title">
				<view class="title">
					<image src="/static/wntj_title.png" mode=""></image>
				</view>
			</view>
			<view class="goods-list">
				<view class="list" v-for="(item,index) in goodsList" @click="gopage('/pages/detail/index?good_id='+item.id)" :key="index">
					<view class="pictrue">
						<image :src="item.imgurl" mode="heightFix"></image>
					</view>
					<view class="title-tag">
						<view class="tag">
							<text>特价</text>
							{{item.title}}
						</view>
					</view>
					<view class="price-info">
						<view class="user-price">
							<text class="jifen">{{item.integral}}{{main_name}}+</text>
							
							<text class="max">{{item.price}}元</text>
						</view>
						<view class="clearheight10"></view>
						<view class="user-price2">
							<text class="min">兑换热度{{item.sell_num}}</text>
							
							<text class="max">{{item.price}}万+</text>
						</view>
						<view class="del-price">
							<text>￥{{item.old_price}}</text>
						</view>
					</view>
					<view class="button-rem">立即兑换</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsList:[],
				main_name:""
			}
		},
		onShow() {
			this.getrecomment();
			this.getchannel();
		},
		methods: {
			getrecomment(){
				let that = this;
				that.req({
					url: 'getrecomment',
					data: {},
					Loading: true,
					success: function(res) {
						console.log(res)
						that.goodsList = res.data;
					}
				})
			},
			getchannel(){
				let that = this;
				that.req({
					url: 'getchannel',
					data: {code:uni.getStorageSync('channel_code')},
					Loading: true,
					success: function(res) {
						console.log(res)
						if(res.code == 1){
							uni.setStorageSync('main_name',res.data);
							that.main_name = res.data;
						}
					}
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	@import 'payresult.scss';
</style>
