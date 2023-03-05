<template>
	<view class="page">
		
    <mescroll-body ref="mescrollRef"
                   @down="downCallback"
                   @up="upCallback"
                   :down="downOption"
                   :up="upOption"
                   :top="0">
		<view class="main">
			<!-- 为你推荐 -->
			<view class="recommend-info">
				<view class="recommend-title">
					<image src="/static/header_rank.png" mode="widthFix"></image>
					<view class="poanum">97162元</view>
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
	<TabBar :tabBarShow="1"></TabBar>
	</view>
</template>

<script>
	import TabBar from '../../components/TabBar/TabBar.vue';
// 引入mescroll-mixins.js
import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
export default {
  mixins: [MescrollMixin], // 使用mixin
  components:{
  	TabBar,
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
			goodsList:[],
			pageNo:1,
		}
	},
	onReady() {
		uni.hideTabBar();
		// #ifdef MP
		uni.setNavigationBarTitle({
			title: '疯抢排行',
		})
		uni.setNavigationBarColor({
			frontColor: '#ffffff',
			backgroundColor: '#fe3b0f',
		})
		// #endif
	},
	onLoad() {
	},
	onShow() {
		this.loadData(1);
		this.getchannel();
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
		loadData(pageNo) {
			let that = this;
			that.req({
				url: 'getrank',
				data: {page:pageNo},
				Loading: true,
				success: function(res) {
					console.log(res)
					if (pageNo == 1) {
					  that.goodsList = res.data;
					} else {
					  that.goodsList = that.goodsList.concat(res.data);
					}
				}
			})
		},
	
		/*下拉刷新的回调, 有三种处理方式:*/
		downCallback(){
			this.loadData(1);
		  this.mescroll.endSuccess();
		},
		/*上拉加载的回调*/
		upCallback(page) {
			console.log(page)
			this.loadData(page);
		  setTimeout(() =>{
			this.mescroll.endByPage(10, 20);
		  },2000)
		},
	
	}
};
</script>

<style scoped lang="scss">
@import 'index.scss';
</style>
