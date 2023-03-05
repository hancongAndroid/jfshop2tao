<template>
	<view class="page">
		<view class="head-back">
			<view class="back" @click="onBack">
				<text></text>
			</view>
			<view class="title">
				<text>我的订单</text>
			</view>
		</view>
		<!-- 订单tab -->
		<view class="order-tab">
			<view class="tab" :class="{'action':OrderType==0}" @click="gopage('/pages/order/index')">
				<text>全部</text>
				<text class="line"></text>
			</view>
			<view class="tab" :class="{'action':OrderType==1}" @click="gopage('/pages/order/index')">
				<text>待付款</text>
				<text class="line"></text>
			</view>
			<view class="tab" :class="{'action':OrderType==2}" @click="gopage('/pages/order/index')">
				<text>待发货</text>
				<text class="line"></text>
			</view>
			<view class="tab" :class="{'action':OrderType==3}" @click="gopage('/pages/order/index')">
				<text>待收货</text>
				<text class="line"></text>
			</view>
			<view class="tab" :class="{'action':OrderType==4}" @click="gopage('/pages/order/index')">
				<text>待评价</text>
				<text class="line"></text>
			</view>
		</view>
		<view class="search-box">
			<input type="text" placeholder="请输入查询手机号" v-model="phone"/>
			<view class="serbtn" @click="search">搜索</view>
		</view>
		<view class="empty-box" v-if="list.length == 0">
			<view class="small-box">
				<image src="../../static/dingdan.png" mode="widthFix"></image>
				<view class="sall1">
					<text>请先输入手机号</text>
					<text>查询您的订单信息</text>
				</view>
				
			</view>
		</view>
		<!-- 订单列表 -->
		<view class="order-list"  v-if="list.length > 0">
			<view class="list" v-for="(item,index) in list" @click="gopage('/pages/order/info?order_num='+item.order_num)" :key="index">
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
				<view class="status-btn">
					<view class="btn">
						<text>订单详情</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 为你推荐 -->
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
							{{item.title}}
						</view>
					</view>
					<view class="price-info">
						<view class="biaoqianbox">
							<view class="biaoqiana">
								<image src="/static/zan.png" mode="widthFix"></image>
								<text>超值兑</text>
							</view>
							<view class="biaoqianb">商品</view>
						</view>
						<view class="user-price">
							<text class="jifen">{{item.integral}}{{main_name}}</text>
							
							<text class="max">+{{item.price}}元</text>
						</view>
						<view class="clearheight10"></view>
						<view class="user-price2">
							<view class="min">
								<image src="/static/redhong.png" mode="widthFix"></image>
								<view class="pmin">兑换热度{{item.sale_num}}万+</view>
							</view>
							
						</view>
						<view class="del-price">
							
						</view>
					</view>
				</view>
			</view>
		</view>
		<TabBar :tabBarShow="3"></TabBar>
	</view>
</template>

<script>
	import TabBar from '../../components/TabBar/TabBar.vue';
	export default {
		components:{
			TabBar,
			},
		data() {
			return {
				main_name:'',
				OrderType: 0,
				phone:'',
				list:[],
				goodsList:[],
			};
		},
		onReady() {
			uni.hideTabBar();
			// #ifdef MP
			uni.setNavigationBarTitle({
				title: '我的订单',
			})
			uni.setNavigationBarColor({
				frontColor: '#ffffff',
				backgroundColor: '#fe3b0f',
			})
			// #endif
		},
		onLoad(params) {
			this.OrderType = params.type;
			this.getrecomment();
			this.getchannel()
		},
		onReachBottom(){
			console.log("到底了")
			this.getrecomment();
		},
		methods:{
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
			getrecomment(){
				let that = this;
				that.req({
					url: 'getrecomment',
					data: {},
					Loading: true,
					success: function(res) {
						that.goodsList = that.goodsList.concat(res.data);
					}
				})
			},
			onBack(){
				uni.navigateBack();
			},
			search(){
				let that = this;
				that.req({
					url: 'search_orderinfo',
					data: {phone:that.phone},
					Loading: true,
					success: function(res) {
						console.log(res)
						if(res.code == 0){
							uni.showToast({
								title: res.msg,
								icon: 'none',
								duration: 2000
							})
						}
						that.list = res.data;
					}
				})
			}
			
		}
	}
</script>

<style scoped lang="scss">
	@import 'index.scss';
</style>
