<template>
	<view class="page">
		<view class="my-top">
			<!-- head -->
			<view class="head" :style="'background-color: rgba(255,255,255,'+(scrollTop/50)+');'">
				<view class="portrait">
					<image v-show="scrollTop>20" :src="userinfo.headimg"></image>
				</view>
				<view class="title">
					<text v-show="scrollTop>20">我的</text>
				</view>
				<view class="setting-mess">
					<view class="setting" @click="onSetting">
						<text class="iconfont icon-setting" :style="scrollTop>20?'color:#333333':''"></text>
					</view>
					<view class="mess" @click="onMessage">
						<text class="iconfont icon-xiaoxi" :style="scrollTop>20?'color:#333333':''"></text>
					</view>
				</view>
			</view>
			<!-- 用户信息 -->
			<view class="user-info" v-if="userinfo">
				<view class="portrait">
					<image :src="userinfo.headimg"></image>
				</view>
				<view class="info">
					<view class="nickname">
						<text>{{userinfo.nickname}}</text>
					</view>
					<view class="rank">
						<image src="/static/rank.png"></image>
						<text>v1</text>
					</view>
				</view>
			</view>
			  <view class="user-info" v-if="!userinfo" @click="onUserInfo">
				<view class="portrait">
				  <image src="http://img2.imgtn.bdimg.com/it/u=1039075865,3371165857&fm=26&gp=0.jpg"></image>
				</view>
				<view class="info">
				  <view class="nickname">
					<text>登录/注册</text>
				  </view>
				</view>
			  </view>
			<!-- 关注区 -->
			<!-- 会员 -->
			<view class="vip-info" @click="onMmeberVip">
				<view class="vip">
					<text>总{{main_name}}</text>
					<text class="line"></text>
				</view>
				<view class="vip-explain">
					<text>{{userinfo.integral||0}}{{main_name}}将于3天后过期</text>
				</view>
				<view class="vip-btn" @click="gopage('/pages/invest/index')">
					<text>立即兑换</text>
				</view>
			</view>
		</view>
		<!-- 订单信息 -->
		<view class="order-info">
			<view class="list" @click="gopage('/pages/order/index')">
				<view class="icon">
					<text class="iconfont icon-daifukuan"></text>
					<!-- <text class="num">22</text> -->
				</view>
				<view class="title">
					<text>待付款</text>
				</view>
			</view>
			<view class="list" @click="gopage('/pages/order/index')">
				<view class="icon">
					<text class="iconfont icon-daifahuo"></text>
					<!-- <text class="num">22</text> -->
				</view>
				<view class="title">
					<text>待发货</text>
				</view>
			</view>
			<view class="list" @click="gopage('/pages/order/index')">
				<view class="icon">
					<text class="iconfont icon-daishouhuo"></text>
					<!-- <text class="num">22</text> -->
				</view>
				<view class="title">
					<text>待收货</text>
				</view>
			</view>
			<view class="list" @click="gopage('/pages/order/index')">
				<view class="icon">
					<text class="iconfont icon-daipingjia"></text>
					<!-- <text class="num">22</text> -->
				</view>
				<view class="title">
					<text>待评价</text>
				</view>
			</view>
			<view class="list" @click="gopage('/pages/order/index')">
				<view class="icon">
					<text class="iconfont icon-tuikuan"></text>
					<!-- <text class="num">22</text> -->
				</view>
				<view class="title">
					<text>退换</text>
				</view>
			</view>
		</view>
		<!-- {{main_name}}，付款码 -->
		<view class="integral-payment">
			<view class="list" @click="gopage('/pages/signin/index')">
				<view class="title">
					<text class="iconfont icon-qiandao" style="font-weight: bold;"></text>
					<text>签到</text>
				</view>
				<view class="mess">
					<text>每日签到 领取{{main_name}}</text>
				</view>
			</view>
			<view class="list" @click="gopage('/pages/kefu/index')">
				<view class="title">
					<text class="iconfont icon-fukuanma"></text>
					<text>商务合作</text>
				</view>
				<view class="mess">
					<text>代理合作 诚信共赢</text>
				</view>
			</view>
		</view>
		<!-- 我的服务 -->
		<view class="my-service">
			<view class="title">
				<text>我的服务</text>
			</view>
			<view class="service-list">
				<view class="list" @click="gopage('/pages/aboutus/index')">
					<view class="thumb">
						<image src="/static/abouts.png"></image>
					</view>
					<view class="name">
						<text>关于我们</text>
					</view>
				</view>
				<view class="list" @click="gopage('/pages/feedback/index')">
					<view class="thumb">
						<image src="/static/yjfk.png"></image>
					</view>
					<view class="name">
						<text>意见反馈</text>
					</view>
				</view>
				<view class="list" @click="gopage('/pages/kefu/index')">
					<view class="thumb">
						<image src="/static/kfrx.png"></image>
					</view>
					<view class="name">
						<text>客服热线</text>
					</view>
				</view>
				<view class="list" @click="gopage('/pages/user/article')">
					<view class="thumb">
						<image src="/static/ysxys.png"></image>
					</view>
					<view class="name">
						<text>隐私协议</text>
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
		<!-- 客服热线 -->
		<view class="serve-hotline" @click="isHotline = false">
			<view class="cu-modal bottom-modal" :class="{'show':isHotline}">
			  <view class="cu-dialog">
					<view class="contact-list">
						<view class="list">
							<text>呼叫客服</text>
						</view>
						<view class="list">
							<text style="color: #959595;">400-800-900</text>
						</view>
						<view class="list">
							<text>取消</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- tabbar -->
		<TabBar :tabBarShow="4"></TabBar>
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
				scrollTop: 0,
				isHotline: false,
				userinfo:[],
				goodsList:[],
				pageno:1,
			};
		},
		onReady() {
			uni.hideTabBar();
		},
		onShow() {
			this.loadData();
			this.getrecomment();
			this.getchannel()
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
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
			loadData() {
				let that = this;
				that.req({
					url: 'user/index',
					data: {},
					Loading: true,
					success: function(res) {
						console.log(res)
						that.userinfo = res.data.userinfo;
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
			/**
			 * 关注跳转
			 */
			onCollect(type){
				switch (type){
					case 'goods':
						uni.navigateTo({
							url: '/pages/GoodsOn/GoodsOn'
						})
						break;
					case 'content':
						uni.navigateTo({
							url: '/pages/ContentCollection/ContentCollection'
						})
						break;
					case 'record':
						uni.navigateTo({
							url: '/pages/BrowsingHistory/BrowsingHistory'
						})
						break;
				}
			},
			/**
			 * 订单
			 */
			onSkipOrder(type){
				if(type === 5){
					uni.navigateTo({
						url: '/pages/AfterSalesOrder/AfterSalesOrder',
					})
					return;
				}
				uni.navigateTo({
					url: '/pages/MyOrderList/MyOrderList?type=' + type,
				})
			},
			/**
			 * 钱包跳转点击
			 */
			onWallet(type){
				switch (type){
					case 'integral':
						uni.navigateTo({
							url: '/pages/IntegralDetails/IntegralDetails',
						})
						break;
					case 'coupon':
						uni.navigateTo({
							url: '/pages/MyCoupon/MyCoupon',
						})
						break;
					case 'wallet':
						uni.navigateTo({
							url: '/pages/MyWallet/MyWallet',
						})
						break;
					case 'SignIn':
						uni.navigateTo({
							url: '/pages/SignIn/SignIn',
						})
						break;
					case 'payment':
						uni.navigateTo({
							url: '/pages/PaymentCode/PaymentCode',
						})
						break;
				}
			},
			/**
			 * 我的服务点击
			 */
			onServer(type){
				switch (type){
					case 'feedback':
						uni.navigateTo({
							url: '/pages/Feedback/Feedback'
						})
						break;
					case 'serve':
						this.isHotline = true;
						break;
				}
			},
			/**
			 * 设置点击
			 */
			onSetting(){
				uni.navigateTo({
					url: '/pages/Setting/Setting'
				})
			},
			/**
			 * 消息点击
			 */
			onMessage(){
				uni.navigateTo({
					url: '/pages/Message/Message'
				})
			},
			/**
			 * 会员点击
			 */
			onMmeberVip(){
				uni.navigateTo({
					url: '/pages/MembersOpened/MembersOpened',
				})
			},
      /**
       * 跳转点击
       * @param {String} type 跳转类型
       */
      onSkip(type){
        switch (type){
          case 'goods':
            uni.navigateTo({
              url: '/pages/GoodsDetails/GoodsDetails',
              animationType: 'zoom-fade-out',
              animationDuration: 200
            })
            break;
        }
      },
      /**
       * 用户信息点击
       * @param {Number} type
       */
      onUserInfo(){
        uni.navigateTo({
          url: '/pages/login/login'
        })
      }
		}
	}
</script>

<style scoped lang="scss">
	@import 'index.scss';
</style>
