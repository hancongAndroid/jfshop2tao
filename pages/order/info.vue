<template>
	<view class="page">
		<!-- 订单状态 -->
		<view class="order-status">
			<view class="status">
				<text class="iconfont icon-zhuyi"></text>
				<text v-if="order.status == 1">待付款</text>
				<text v-if="order.status == 2">待发货</text>
				<text v-if="order.status == 5">待收货</text>
				<text v-if="order.status == 6">已取消</text>
				<text v-if="order.status == 7">已收货</text>
			</view>
			<view class="btngrp" v-if="order.status == 5" @click="endorder">确认收货</view>
		</view>
		<!-- 收货地址 -->
		<view class="shipping-address">
			<view class="name-phone">
				<text class="iconfont icon-dingwei"></text>
				<text>{{order.name}}</text>
				<text>{{order.phone}}</text>
			</view>
			<view class="address">
				<text>{{order.mainaddress}}{{order.address}}</text>
			</view>
		</view>
		<!-- 订单商品 -->
		<view class="order-goods">
			<view class="goods-list">
				<view class="list">
					<view class="thumb">
						<image :src="goods.imgurl" mode=""></image>
					</view>
					<view class="item">
						<view class="title">
							<text class="one-omit">{{goods.title}}</text>
						</view>
						<view class="num-size">
							<text>数量：{{order.num}}</text>
							<text>规格：{{order.sku}}</text>
						</view>
						<view class="price">
							<text>￥{{order.price}}</text>
						</view>
						
					</view>
				</view>
			</view>
			<view class="contact" @click="gopage('/pages/kefu/index')">
				<text class="iconfont icon-kefu"></text>
				<text>联系客服</text>
			</view>
		</view>
		<!-- 订单信息 -->
		<view class="order-info">
			<view class="info-list">
				<view class="list">
					<view class="title">订单编号:</view>
					<view class="content">
						<text>{{order.order_num}}</text>
						<text class="btn" @click="copy(order.order_num)">复制</text>
					</view>
				</view>
				<view class="list">
					<view class="title">下单时间:</view>
					<view class="content">
						<text>{{order.addtime}}</text>
					</view>
				</view>
				<view class="list">
					<view class="title">支付方式:</view>
					<view class="content">
						<text v-if="order.pay_type == 1">支付宝</text>
						<text v-if="order.pay_type == 2">微信支付</text>
						<text v-if="order.pay_type == 3">货到付款</text>
					</view>
				</view>
				<view class="list">
					<view class="title">配送方式:</view>
					<view class="content">
						<text>普通快递</text>
					</view>
				</view>
				<view class="list">
					<view class="title">快递单号:</view>
					<view class="content">
						<text>{{order.send_num}}</text>
						<text class="btn" @click="copy(order.send_num)">复制</text>
					</view>
				</view>
				<view class="list">
					<view class="title">配送日期:</view>
					<view class="content">
						<text>{{order.fa_time}}</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 订单明细 -->
		<view class="order-details">
			<view class="details-list">
				<view class="list">
					<view class="title">
						<text>商品总额</text>
					</view>
					<view class="price">
						<text>￥{{order.price}}</text>
					</view>
				</view>
				<view class="list">
					<view class="title">
						<text>{{main_name}}</text>
					</view>
					<view class="price">
						<text>￥{{order.integral}}</text>
					</view>
				</view>
				<view class="list">
					<view class="title">
						<text>运费</text>
					</view>
					<view class="price">
						<text>￥0.00</text>
					</view>
				</view>
				<view class="list action">
					<view class="title">
						<text>实付款：</text>
					</view>
					<view class="price">
						<text>￥{{order.price}}</text>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				main_name:'',
				order:[],
				goods:[],
				order_num:'',
			};
		},
		onLoad(e) {
			this.order_num = e.order_num
		},
		onShow() {
			this.loadData();
			this.getchannel();
		},
		methods:{
			endorder(){
				let that = this;
				that.req({
					url: 'endorder',
					data: {order_num:that.order_num},
					Loading: true,
					success: function(res) {
						console.log(res)
						if(res.code == 1){
							uni.showToast({
								title: res.msg,
								icon: 'success',
								duration: 2000
							})
							that.loadData();
						}else{
							uni.showToast({
								title: res.msg,
								icon: 'none',
								duration: 2000
							})
						}
						
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
			copy(order_num){
				uni.setClipboardData({
					data: order_num,
					success: function () {
						uni.showToast({
							title: '复制成功',
							icon: 'success',
							duration: 2000
						})
					}
				});
			},
			loadData() {
				let that = this;
				that.req({
					url: 'orderinfo',
					data: {order_num:that.order_num},
					Loading: true,
					success: function(res) {
						console.log(res)
						that.order = res.data.order;
						that.goods = res.data.goods;
					}
				})
			},
			
		}
	}
</script>

<style scoped lang="scss">
	@import 'info.scss';
</style>
