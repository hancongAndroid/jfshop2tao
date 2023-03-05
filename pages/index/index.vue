<template>
	<view class="page">
		<view class="head-info">
			<!-- 搜索 -->
			<view class="head-search">
				<view class="search" @click="onSearch">
					<view class="icon">
						<image src="/static/fdj_ico.png" mode=""></image>
					</view>
					<view class="hint">
						<text class="max">搜索</text>
						<text class="min">热门内容</text>
					</view>
				</view>
				<view class="icon-info" @click="gopage('/pages/kefu/index')">
					 <image src="/static/kfrx.png" mode=""></image>
				</view>
			</view>
			<!-- 分类列表 -->
			<view class="classify-list">
				<view class="list"
				:class="{'action':classifyShow==0}"
				@click="onClassify(0,0)">
					<text>今日优选</text>
					<text class="line" v-show="classifyShow==0"></text>
				</view>
				<view class="list" v-for="(item,index) in classList"
				:class="{'action':classifyShow==index + 1}"
				@click="onClassify(item.id,index + 1)"
				:key="index">
					<text>{{item.title}}</text>
					<text class="line" v-show="classifyShow==index + 1"></text>
				</view>
			</view>
		</view>
    <mescroll-body ref="mescrollRef"
                   @down="downCallback"
                   @up="upCallback"
                   :down="downOption"
                   :up="upOption"
                   :top="0">
		<view class="main" v-show="classifyShow===0">
			<!-- banner -->
			<view class="banner">
				<swiper class="screen-swiper square-dot" indicator-dots="true" circular="true" autoplay="true" interval="5000" duration="500">
					<swiper-item v-for="(item,index) in swiperList" :key="index">
						<image :src="item.imgurl" mode="aspectFill"></image>
						<!-- <video src="{{item.url}}" autoplay loop muted show-play-btn="{{false}}" controls="{{false}}" objectFit="cover" wx:if="{{item.type=='video'}}"></video> -->
					</swiper-item>
				</swiper>
			</view>
			<!-- 菜单导航 -->
			<view class="menu-nav">
				<scroll-view scroll-x @scroll="ScrollMenu" class="nav-list">
					<view class="nav" ref="nav" :style="navList.length<=10?'flex-direction:row':''">
						<view class="list" v-for="(item,index) in navList"
						@click="gopage(item.pathurl)"
						:key="item.id">
							<image :src="item.imgurl" mode=""></image>
							<text>{{item.title}}</text>
						</view>
					</view>
				</scroll-view>
				<view class="indicator" v-if="navList.length>10">
					<view class="plan">
						<view class="bar" :style="'left:'+slideNum+'%'"></view>
					</view>
				</view>
			</view>
			<!-- 通知 -->
			<view class="inform">
				<view class="inform-info">
					<view class="picture">
						<image src="/static/gg_ico.png" mode=""></image>
					</view>
					<view class="info">
						<swiper class="swiper" :circular="true" :vertical="true" :indicator-dots="false" :autoplay="true" :interval="3000" :duration="1000">
							<swiper-item  v-for="(item,v) in goumailist">
								<view class="swiper-item" @click="gopage('/pages/detail/index?good_id='+item.id)">
									<text class="one-omit">{{item.str}}</text>
								</view>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
			<!-- 限时抢购，好货精选 -->
			<view class="flash-good">
				<view class="flash-sale">
					<view class="line"></view>
					<view class="flash-title">
						<view class="pictrue">
							<image src="/static/xsqg_title.png" mode=""></image>
						</view>
						<view class="date-time">
							<text class="time">{{dshi}}</text>
							<text class="da">:</text>
							<text class="time">{{dfen}}</text>
							<text class="da">:</text>
							<text class="time">{{dmiao}}</text>
						</view>
					</view>
					<view class="goods-list">
						<view class="list" v-for="(item,v) in freegood" v-if="v < 2" @click="gopage('/pages/detail/index?good_id='+item.id)">
							<view class="pictrue">
								<image :src="item.imgurl"></image>
							</view>
							<view class="price">
								<text class="selling-price">￥{{item.price}}</text>
								<text class="original-price">￥{{item.old_price}}</text>
							</view>
						</view>
					
					</view>
				</view>
				<view class="good-choice">
					<view class="goods-title">
						<view class="title">
							<text>好货精选</text>
						</view>
						<view class="describe">
							<text>全场</text>
							<text class="num">1</text>
							<text>折起</text>
						</view>
					</view>
					<view class="goods-list">
						<view class="list" v-for="(item,v) in freegood" v-if="v > 1 && v < 4" @click="gopage('/pages/detail/index?good_id='+item.id)">
							<view class="pictrue">
								<image  :src="item.imgurl"></image>
							</view>
							<view class="price">
								<text class="selling-price">￥{{item.price}}</text>
								<text class="original-price">￥{{item.old_price}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 今日上新 -->
			<view class="new-product">
				<view class="product-title">
					<view class="title">
						<image src="/static/hr_ico.png"></image>
						<text>今日上新</text>
					</view>
					<view class="describe">
						<text>今日上新商品是否有你心仪礼物</text>
					</view>
				</view>
				<view class="goods-list">
					<view class="list"  v-for="(item,v) in newgood" @click="gopage('/pages/detail/index?good_id='+item.id)">
						<view class="pictrue">
							<image :src="item.imgurl"></image>
						</view>
						<view class="price">
							<text class="selling-price">￥{{item.old_price}}</text>
							<text class="original-price">￥{{item.price}}</text>
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
								<text class="min">兑换热度</text>
								
								<text class="max">{{item.sale_num}}万+</text>
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
    </mescroll-body>
    <ClassifyData v-show="classifyShow!=0" :goodslist.sync="goodslist"></ClassifyData>
		<!-- tabbar -->
		<TabBar :tabBarShow="0"></TabBar>
	</view>
</template>

<script>
import TabBar from '../../components/TabBar/TabBar.vue';
import ClassifyData from '../../components/ClassifyData/ClassifyData.vue';
// 引入mescroll-mixins.js
import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
export default {
  mixins: [MescrollMixin], // 使用mixin
	components:{
		TabBar,
		ClassifyData,
		},
	data(){
		return{
			main_name:'',
			mescroll: null, // mescroll实例对象 (此行可删,mixins已默认)
			  // 下拉刷新的配置(可选, 绝大部分情况无需配置)
			downOption: {},
			  // 上拉加载的配置(可选, 绝大部分情况无需配置)
			upOption: {
				use: false
			},
			swiperList: [],
			slideNum: 0,
			navList: [],
			classList: [],
			goodsList:[],
			classifyShow: 0,
			// 页面高度
			pageHeight: 500,
			//倒计时
			endtime:0,
			dshi:0,
			dfen:0,
			dmiao:0,
			//秒杀商品 好货精选
			freegood:[],
			//今日上新
			newgood:[],
			cate_id:0,
			goumailist:[],
		}
	},
	onReady() {
		uni.hideTabBar();
		// #ifdef MP
		uni.setNavigationBarTitle({
			title: '首页',
		})
		uni.setNavigationBarColor({
			frontColor: '#ffffff',
			backgroundColor: '#fe3b0f',
		})
		// #endif
		this.getcateData();
	},
	onLoad() {
		this.endtime = new Date().getTime() + 900000;
		this.timer = setInterval(() => {
			this.showtime()
		}, 200)
	},
	onShow() {
		this.loadData();
		this.getchannel();
	},
	onPageScroll(e){
		let scrollTop = e.scrollTop;
		if(scrollTop > 0){
			this.pageHeight = 210;
		}else{
			this.pageHeight = 500;
		}
	},
  onReachBottom(){
   
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
				url: 'index',
				data: {},
				Loading: true,
				success: function(res) {
					console.log(res)
					that.swiperList = res.data.advert;
					that.classList = res.data.cate;
					that.freegood = res.data.freegood;
					that.newgood = res.data.newgood;
					that.navList = res.data.button;
					that.goodsList = res.data.recommentgood;
					that.goumailist = res.data.goumailist;
				}
			})
		},
		showtime() {
			var nowtime = new Date(); //获取当前时间
			var lefttime = this.endtime - nowtime.getTime(), //距离结束时间的毫秒数
				lefth = Math.floor(lefttime / (1000 * 60) % 60), //计算小时数
				leftm = Math.floor(lefttime / 1000 % 60), //计算分钟数
				lefts = Math.floor(lefttime % 60); //计算秒数
				if(lefttime < 0){
					this.dshi = "00";
					this.dfen = "00";
					this.dmiao = "00";
					return;
				}
			if (lefth.toString().length < 2) {
				lefth = '0' + lefth
			}
			if (leftm.toString().length < 2) {
				leftm = '0' + leftm
			}
			if (lefts.toString().length < 2) {
				lefts = '0' + lefts
			}
			//返回倒计时的字符串
			this.dshi = lefth;
			this.dfen = leftm;
			this.dmiao = lefts;
			 
		},
		/*下拉刷新的回调, 有三种处理方式:*/
		downCallback(){
		  this.mescroll.endSuccess();
		},
		/*上拉加载的回调*/
		upCallback(page) {
		  setTimeout(() =>{
			this.mescroll.endByPage(10, 20);
		  },2000)
		},
		/**
		 * 菜单导航滚动
		 */
		ScrollMenu(e){
			let scrollLeft = e.target.scrollLeft;
			const query = uni.createSelectorQuery().in(this);
			query.select('.nav').boundingClientRect(data => {
				let wid = e.target.scrollWidth - data.width - (data.left*2+5);
				this.slideNum = (scrollLeft/wid*300) / 2;
			}).exec();
		},
		/**
		 * 搜索点击
		 */
		onSearch(){
			uni.navigateTo({url:'/pages/search/search'})
		},
		
		/**
		 * 分类点击
		 * @param {Object} item
		 * @param {Number} index
		 */
		onClassify(id,index){
			this.cate_id = id;
			this.classifyShow = index;
			this.getcateData();
		},
		getcateData() {
			let that = this;
			that.req({
				url: 'goodscate',
				data: {cate_id:that.cate_id,all:1},
				Loading: true,
				success: function(res) {
					that.goodslist = res.data.goods;
					
				}
			})
		},
		/**
		 * 跳转点击
		 * @param {String} type 跳转类型
		 */
		onSkip(type){
			switch (type){
				case 'mess':
					uni.navigateTo({
						url: '/pages/Message/Message'
					})
					break;
				case 'paycode':
					uni.navigateTo({
						url: '/pages/PaymentCode/PaymentCode'
					})
					break;
				case 'menu':
					uni.navigateTo({
						url: '/pages/SearchGoodsList/SearchGoodsList'
					})
					break;
				case 'inform':
					break;
				case 'flash':
					uni.navigateTo({
						url: '/pages/FlashSale/FlashSale'
					})
					break;
				case 'GoodChoice':
					uni.navigateTo({
						url: '/pages/GoodChoice/GoodChoice'
					})
					break;
				case 'goods':
					uni.navigateTo({
						url: '/pages/GoodsDetails/GoodsDetails',
						animationType: 'zoom-fade-out',
						animationDuration: 200
					})
					break;
			}
		}
	}
};
</script>

<style scoped lang="scss">
@import 'index.scss';
</style>
