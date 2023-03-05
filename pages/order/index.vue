<template>
	<view class="page">
		<view class="head-back">
			<view class="back" @click="onBack">
				<text></text>
			</view>
			<view class="title">
				<text>我的订单</text>
			</view>
			<view class="more-icon">
				
			</view>
		</view>
		<!-- 订单tab -->
		<view class="order-tab">
			<view class="tab" :class="{'action':OrderType==0}" @click="onOrderTab(0,0)">
				<text>全部</text>
				<text class="line"></text>
			</view>
			<view class="tab" :class="{'action':OrderType==1}" @click="onOrderTab(1,1)">
				<text>待付款</text>
				<text class="line"></text>
			</view>
			<view class="tab" :class="{'action':OrderType==2}" @click="onOrderTab(2,2)">
				<text>待发货</text>
				<text class="line"></text>
			</view>
			<view class="tab" :class="{'action':OrderType==3}" @click="onOrderTab(3,5)">
				<text>待收货</text>
				<text class="line"></text>
			</view>
			<view class="tab" :class="{'action':OrderType==4}" @click="onOrderTab(4,7)">
				<text>待评价</text>
				<text class="line"></text>
			</view>
		</view>
		<!-- 订单列表 -->
		<view class="order-list">
			<view class="list" v-for="(item,index) in orderlist" @click="gopage('/pages/order/info?order_num='+ item.order_num)" :key="index">
				<view class="title-status">
					<view class="title">
						<text>下单时间：{{item.addtime}}</text>
					</view>
					<view class="status">
						<text v-if="item.status == 1">待付款</text>
						<text v-if="item.status == 2">待发货</text>
						<text v-if="item.status == 5">待收货</text>
						<text v-if="item.status == 6">已取消</text>
						<text v-if="item.status == 7">已收货</text>
					</view>
				</view>
				<view class="goods-list">
					<view class="goods">
						<view class="thumb">
							<image :src="item.imgurl" mode=""></image>
						</view>
						<view class="item">
							<view class="goods-name">
								<text class="two-omit">{{item.title}}</text>
							</view>
							<view class="goods-price">
								<text class="min">￥</text>
								<text class="max">{{item.price}}</text>
							</view>
						</view>
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
				OrderType: 0,
				orderlist:[],
				status:0,
				pageNo:1,
			};
		},
		onLoad(params) {
			this.OrderType = params.type||0;
		},
		onShow() {
			this.loadData(1);
		},
		methods:{
			onReachBottom:function(e) {
				let pageNo = this.pageNo + 1;
				this.getData(pageNo);
			},
			loadData(pageNo) {
				let that = this;
				that.req({
					url: 'orderlist',
					data: {status:that.status,page: pageNo},
					Loading: true,
					success: function(res) {
						console.log(res)
						that.pageNo = pageNo;
						if (pageNo == 1) {
							that.orderlist = res.data;
						} else {
							that.orderlist = that.orderlist.concat(res.data);
						}
					}
				})
			},
			/**
			 * 返回点击
			 */
			onBack(){
				this.gopage('/pages/user/index');
			},
			/**
			 * 订单tab点击
			 */
			onOrderTab(type,status){
				this.OrderType = type;
				this.status = status;
				this.loadData(1)
			},
		
		}
	}
</script>

<style scoped lang="scss">
	@import 'index.scss';
</style>
