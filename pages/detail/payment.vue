<template>
	<view class="page">
		<view class="price-count-down">
			<view class="price">
				<text class="min">￥</text>
				<text class="max">{{order.price}}</text>
			</view>
			<view class="count-down">
				<view class="title">支付剩余时间</view>
				<view class="count">
					<text class="time">{{hour}}</text>
					<text class="dot">:</text>
					<text class="time">{{min}}</text>
					<text class="dot">:</text>
					<text class="time">{{sec}}</text>
				</view>
			</view>
		</view> 
		<!-- 支付方式列表 -->
		<view class="pay-way">
			<view class="pay-list">
				<view class="list" v-for="(item,index) in paylist" 
				@click="onPayWay(item,index)"
				:key="index">
					<view class="pay-type">
						<image v-if="item.type == 1" src="/static/wx_pay.png" mode=""></image>
						<image v-if="item.type == 2" src="/static/zfb_pay.png" mode=""></image>
						<image v-if="item.type == 3" src="/static/ye_pay.png" mode=""></image>
						<text>{{item.title}}</text>
					</view>
					<view class="check">
						<text class="iconfont" :class="PayWay === item.type ? 'icon-checked action':'icon-check'"></text>
					</view>
				</view>
			</view>
		</view>
		<view class="pay-submit">
			<view class="submit" @click="onSubmit">{{PayPirce}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				PayList: [
					{
						icon: '/static/wx_pay.png',
						name: '微信支付',
					},{
						icon: '/static/zfb_pay.png',
						name: '支付宝支付',
					},{
						icon: '/static/ye_pay.png',
						name: '货到付款',
					},
				],
				PayWay: 0,
				PayPirce: ``,
				CountDown: 1000,
				day: 0,
				hour: 0,
				min: 0,
				sec: 0,
				order:[],
				paylist:[],
			};
		},
		onLoad(e){
			this.order_num = e.order_num
			this.CountDownData();
			this.loadData();
			
		},
		onReady() {
			this.getpaylist()
		},
		methods:{
			getpaylist(){
				let that = this;
				that.req({
					url: 'getpaylist',
					data: {},
					Loading: true,
					success: function(res) {
						console.log(res)
						that.paylist = res.data;
						that.PayWay = res.data[0].id;
						that.PayPirce = res.data[0].title
					}
				})
			},
			loadData() {
				let that = this;
				that.req({
					url: 'checkorder',
					data: {order_num:that.order_num},
					Loading: true,
					success: function(res) {
						console.log(res)
						that.order = res.data.order;
					}
				})
			},
			/**
			 * 支付方式切换点击
			 */
			onPayWay(item,index){
				this.PayWay = item.type;
				this.PayPirce = `${item.title}`
			},
			/**
			 * 倒计时
			 */
			CountDownData(){
				setTimeout(() =>{
					this.CountDown--;
					this.day = parseInt(this.CountDown / (24*60*60))
					this.hour = parseInt(this.CountDown / (60 * 60) % 24);
					this.min = parseInt(this.CountDown / 60 % 60);
					this.sec = parseInt(this.CountDown % 60);
					if(this.CountDown <= 0){
						return
					}
					this.CountDownData();
				},1000)
			},
			/**
			 * 支付点击
			 */
			onSubmit(){
				let that = this;
				that.req({
					url: 'dopay',
					data: {order_num:that.order_num,type:that.PayWay},
					Loading: true,
					success: function(res) {
						console.log(res)
						if(res.code == 1){
							//支付宝
							if(that.PayWay == 1){
								
							}
							//微信
							if(that.PayWay == 1){
								
							}
							//货到付款
							if(that.PayWay == 3){
								uni.navigateTo({
									url: '/pages/detail/payresult'
								}) 
							}
						}else{
							uni.showToast({
								title: res.msg,
								icon: 'none',
								duration: 2000
							})
						}
					}
				})
				/* uni.redirectTo({
					url: '/pages/PayResult/PayResult',
				}) */
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'payment.scss';
</style>
