<template>
	<view class="page">
		<view class="addmian">
			<view class="aonebox">
				<view class="aone1">{{order.name}}</view>
				<view class="aone2">{{order.phone}}</view>
			</view>
			<view class="aonebon">{{order.mainaddress}}{{order.address}}</view>
		</view>
		<!-- 商品 -->
		<view class="goods-data">
			<view class="goods-title">
				<text>商品信息</text>
			</view>
			<view class="goods-list">
				<view class="list">
					<view class="thumb">
						<image :src="goods.imgurl" mode=""></image>
					</view>
					<view class="item">
						<view class="title">
							<text class="name one-omit">{{goods.title}}</text>
							<text class="attr">规格：{{order.sku}}</text>
						</view>
						<view class="price-number">
							<view class="price">
								<text class="min">￥</text>
								<text class="max">{{order.price}}</text>
							</view>
							<view class="number">
								<text>x {{order.num}}</text>
							</view>
						</view>
						<!-- <view class="tag">
							<text>支持七天无理由退货</text>
						</view> -->
					</view>
				</view>
			</view>
			<view class="delivery">
				<div class="list">
					<view class="title">配送</view>
					<view class="content">
						<text>快递运输</text>
						<text class="iconfont icon-more"></text>
					</view>
				</div>
				<div class="list">
					<view class="title">留言</view>
					<view class="content">
						<input type="text" placeholder="选填,建议先和商家沟通确认" v-model="order_msg">
					</view>
				</div>
			</view>
		</view>
		<!-- 优惠 -->
		<!-- <view class="discounts-data">
			<view class="discounts">
				<div class="list">
					<view class="title">积分</view>
					<view class="content">
						<text>共300，满1000可用</text>
					</view>
				</div>
			</view>
		</view> -->
		<!-- 订单金额 -->
		<view class="order-price">
			<view class="price-list">
				<view class="list">
					<view class="title">
						<text>商品金额</text>
					</view>
					<view class="price">
						<text>￥{{order.price}}</text>
					</view>
				</view>
				<view class="list">
					<view class="title">
						<text>{{main_name}}抵扣</text>
					</view>
					<view class="price">
						<text>-{{order.integral}}</text>
					</view>
				</view>
				<view class="list">
					<view class="title">
						<text>配送方式</text>
					</view>
					<view class="price">
						<text class="highlight">免费包邮</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 地址提示 -->
		<view class="pay-way">
			<view class="pay-list">
				<view class="list" v-for="(item,index) in paylist" 
				@click="onPayWay(item,index)"
				:key="index">
					<view class="pay-type">
						<image v-if="item.type == 2" src="/static/wx_pay.png" mode=""></image>
						<image v-if="item.type == 1" src="/static/zfb_pay.png" mode=""></image>
						<image v-if="item.type == 3" src="/static/ye_pay.png" mode=""></image>
						<text>{{item.title}}</text>
					</view>
					<view class="check">
						<text class="iconfont" :class="PayWay === item.type ? 'icon-checked action':'icon-check'"></text>
					</view>
				</view>
			</view>
		</view>
		<!-- 底部合计提交 -->
		<view class="footer-submit">
			<view class="price">
				<text class="min">￥</text>
				<text class="max">{{order.price}}</text>
			</view>
			<view class="submit" @click="onSubmit">
				<text>提交订单</text>
			</view>
		</view>
		<view class="Popup" v-if="open">
			<view>
				<text class="bt">付款提示</text>
				<text class="nr">您已经成功付款了吗？</text>
				<view>
					<view class="leftbtn" @click="hide()">取消</view>
					<view class="rightbtn" @click="chackpay()">已付款</view>
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
				scrollTop: 0,
				order_num:'',
				order:[],
				goods:[],
				address:[],
				order_msg:'',
				paylist:[],
				PayWay: 2,
				PayPirce: ``,
				open:false,
			};
		},
		onPageScroll(e){
			this.scrollTop = e.scrollTop;
		},
		onLoad(e) {
			this.order_num = e.order_num;
			if(e.notype == 1){
				this.open = true;
			}
		},
		onShow() {
			this.loadData()
			this.getpaylist();
			this.getchannel()
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
			/**
			 * 支付点击
			 */
			onSubmit(){
				let that = this;
				that.open = true;
				that.req({
					url: 'dopay',
					data: {order_num:that.order_num,type:that.PayWay,order_msg:that.order_msg},
					Loading: true,
					success: function(res) {
						console.log(res)
						if(res.code == 1){
							//支付宝
							if(that.PayWay == 1){
								// 将接口返回的form表单显示到页面
								document.querySelector('body').innerHTML = res.data;
								// 调用submit方法
								document.forms[0].submit();
								//let url = encodeURIComponent(JSON.stringify(res.data.urls));
								//window.location.href = res.data.urls;
								
								/* uni.navigateTo({
									url: '/pages/detail/payweb?channel=1&item='+res.data
								}) */
								//that.gopage('/pages/shouye/payweb?item='+url);
								return;
							}
							//微信
							if(that.PayWay == 2){
								//let url = encodeURIComponent(JSON.stringify(res.data.mweb_url));
								window.location.href = res.data.mweb_url;
								return;
								/* uni.navigateTo({
									url: '/pages/detail/payweb?channel=1&item='+res.data
								}) */
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
			},
			hide(){
				this.open = false;
			},
			chackpay(){
				let that = this;
				if(that.order_num == ''){
					uni.showToast({
						title: '未检测到付款!',
						icon: 'none'
					})
					return;
				}
				that.req({
					url: 'pay/checkpay',
					data:{order_num:that.order_num},
					success(res) {
						console.log(res)
						if(res.code == 1){
							uni.navigateTo({
								url: '/pages/detail/payresult'
							}) 
						}else{
							uni.showToast({
								title: '未检测到付款，请稍后在订单中查看或联系客服处理',
								icon: 'none'
							})
							that.open = false;
							return;
						}
						
					}
				})
			},
			getpaylist(){
				let that = this;
				that.req({
					url: 'getpaylist',
					data: {},
					Loading: true,
					success: function(res) {
						console.log(res)
						that.paylist = res.data;
						//that.PayWay = res.data[0].id;
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
						that.goods = res.data.goods;
						that.address = res.data.address;
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
		}
	}
</script>

<style scoped lang="scss">
	@import 'payinfo.scss';
</style>
