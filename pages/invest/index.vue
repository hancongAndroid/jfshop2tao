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
					<view class="gb_box">
						<image src="/static/labas.png" mode="heightFix"></image>
						<view class="box_gb1">
							<view class="box_gb2">温馨提示：尊敬的会员，您的积分即将过期，请尽快使用。本商城非移动积分商城</view>
						</view>
						
					</view>
					<view class="banner">
						<swiper class="screen-swiper square-dot" indicator-dots="true" circular="true" autoplay="true" interval="5000" duration="500">
							<swiper-item v-for="(item,index) in swiperList" :key="index">
								<image :src="item.imgurl" mode="aspectFill"></image>
							</swiper-item>
						</swiper>
					</view>
				</view>
				<view class="inve-box">
					<view class="inve-t2">
						<view class="t2a">
							<image src="/static/vipicon.png" mode="heightFix"></image>
							<text>兑换余额</text>
						</view>
						<view class="t2b"><text>{{userinfo.integral||0}}</text>{{main_name}}</view>
					</view>
					<view class="inve-t3">
						<text class="inve-t3-1">提醒</text><text class="inve-t3-2">您的 {{userinfo.integral||0}}{{main_name}}即将到期，避免失效请及时使用</text>
					</view>
					
				</view>
				<view class="clearheight300"></view>
				<view class="head-bg" :class="flextop?'flextop':''">
					<view class="session">
						<scroll-view scroll-x="true" class="content-scroll" scroll-with-animation :scroll-left="scrollLeft">
						<view class="listtabitem" :class="catestatus == 0 ?'action':''" @click="changecate(0,0)">
							<text class="time">限时兑换</text>
							<view class="acline"></view>
						</view>
						<view class="listtabitem" :class="catestatus == v + 1 ?'action':''" v-for="(item,v) in cate" @click="changecate(item.id,v + 1)">
							<text class="time">{{item.title}}</text>
							<view class="acline"></view>
						</view>
						</scroll-view>
					</view>
				</view>
				<view :class="flextop?'djheight':''"></view>
				<view class="djmainbox">
					<view class="djleft">
						<swiper class="swiper" style="height: 80rpx;" circular autoplay vertical>
							<swiper-item v-for="(item,index) in danmulist">
								<view class="djone">
									<image :src="item.headimg" mode="widthFix"></image>
									<view class="djtext">{{item.str}}</view>
								</view>
							</swiper-item>
						</swiper>
						
					</view>
					<view class="djright">
						<view class="djsbox">
							距失效
							<text>{{dtian}}</text>:
							<text>{{dshi}}</text>:
							<text>{{dfen}}</text>
						</view>
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
		</view>
    </mescroll-body>
	<TabBar :tabBarShow="2"></TabBar>
	<!-- 提示框 -->
	<DialogBox ref="DialogBox"></DialogBox>
	<!-- 规则说明弹窗 -->
	<view class="rule-win">
		<view class="cu-modal" :class="{'show':isRule}">
		  <view class="cu-dialog">
		    <view class="cu-bar bg-white justify-end">
		      <view class="content">规则说明</view>
		      <view class="action">
		        <text class="cuIcon-close text-red" @click="isRule = false"></text>
		      </view>
		    </view>
		    <view class="rule-content">
					<text>
						1. 如何获取{{main_name}}：每个新用户可领取12650体验{{main_name}}，还可通过签到和购买返{{main_name}}商品获取{{main_name}}；
						2. 新用户是指没有在本商城提交过订单的用户，同一账号、同一手机号、同一终端设备号或其它合理显示为同一用户的情形，均视为同一用户；
						3. 参与商品：限{{main_name}}兑换活动页面内的所有商品；
						4. {{main_name}}可以在下单时兑换商品或抵扣现金，具体使用标准请参考{{main_name}}使用说明；
						5. {{main_name}}是有有效期的，体验{{main_name}}为获取后的7天内有效；
						6. 非质量问题不给予退换，{{main_name}}已兑换商品退换需联系客服；
						7. 如遇不可抗力因素，商城有权取消、修改或暂停本活动。如发现用户以不正当手段参与本次活动，商城有权取消其扣除{{main_name}}，并要求其对已发放的活动所得进行返还；
						8. 在法律允许范围内，商城对此活动拥有最终解释权。未尽事宜请咨询客服
					</text>
				</view>
		  </view>
		</view>
	</view>
	<view style="width: 100%;height: 300rpx;line-height: 300rpx;text-align: center;">粤ICP备18081120号-1  </view>
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
			isRule:false,
			catestatus:0,
			PageScrollTop: 0,
			mescroll: null, // mescroll实例对象 (此行可删,mixins已默认)
			  // 下拉刷新的配置(可选, 绝大部分情况无需配置)
			downOption: {},
			  // 上拉加载的配置(可选, 绝大部分情况无需配置)
			upOption: {
				use: false
			},
			cate:[],
			goodsList:[],
			userinfo:[],
			swiperList:[],
			danmulist:[],
			pageNo:1,
			loadnum:1,
			cate_id:0,
			//倒计时
			endtime:0,
			dtian:0,
			dshi:0,
			dfen:0,
			dmiao:0,
			timer:null,
			flextop:false,
			scrollLeft:0,
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
		this.getchannel();
	},
	onLoad() {
		this.getcate();
		this.endtime = new Date().getTime() + 259200000;
		this.timer = setInterval(() => {
			this.showtime()
		}, 200)
		
	},
	onPageScroll(e) {
		if(e.scrollTop >= 358){
			this.flextop = true;
		}else{
			this.flextop = false;
		}
		this.PageScrollTop = e.scrollTop;
	},
	onShow() {
		this.loadData(1);
		this.getuser();
		this.swiperlist();
		this.getdanmu();
	},
	onReachBottom(){
		let nowpage;
		nowpage = this.pageNo + 1;
		this.loadData(nowpage);
	},
	methods:{
		getdanmu(){
			let that = this;
			that.req({
				url: 'buylogdanmu',
				data: {},
				Loading: true,
				success: function(res) {
					console.log(res)
					if(res.code == 1){
						that.danmulist = res.data.goumailist;
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
		guize(){
			this.isRule = true
		},
		swiperlist() {
			let that = this;
			that.req({
				url: 'getadvert',
				data: {type:2},
				Loading: true,
				success: function(res) {
					console.log(res)
					that.swiperList = res.data.advert;
				}
			})
		},
		getuser() {
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
		changecate(cate_id,index){
			this.catestatus = index;
			this.cate_id = cate_id;
			if(index > 3){
				this.scrollLeft = 52 * parseInt(index - 3);
			}else{
				this.scrollLeft = 0;
			}
			uni.pageScrollTo({
				scrollTop: 358,
				duration: 300
			});
			this.loadData(1);
			this.loadnum = 1;
		},
		getcate() {
			let that = this;
			that.req({
				url: 'getcate',
				data: {cate_id:that.cate_id},
				Loading: true,
				success: function(res) {
					console.log(res)
					that.cate = res.data;
				}
			})
		},
		loadData(pageNo) {
			let that = this;
			that.req({
				url: 'goodscate',
				data: {cate_id:that.cate_id,page:pageNo},
				Loading: true,
				success: function(res) {
					if(res.data.goods.length == 0){
						that.pageNo = 1;
						that.loadnum++;
						that.loadData(1)
					}else{
						that.pageNo = pageNo;
					}
					console.log("切换",pageNo,that.loadnum);
					if (pageNo == 1 && that.loadnum == 1) {
					  that.goodsList = res.data.goods;
					} else {
					  that.goodsList = that.goodsList.concat(res.data.goods);
					}
				}
			})
		},
		showtime() {
			let that = this;
			var nowtime = new Date(); //获取当前时间
			var lefttime = that.endtime - nowtime.getTime(), //距离结束时间的毫秒数
			
				leftd = Math.floor(lefttime / (1000 * 60 * 60 * 24)), //计算天数
				lefth = Math.floor(lefttime / (1000 * 60) % 60), //计算小时数
				leftm = Math.floor(lefttime / 1000 % 60), //计算分钟数
				lefts = Math.floor(lefttime % 60); //计算秒数
			
				if(lefttime < 0){
					that.dtian = "00";
					that.dshi = "00";
					that.dfen = "00";
					that.dmiao = "00";
					return;
				}
			if (leftd.toString().length < 2) {
				leftd = '0' + leftd
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
			that.dtian = leftd;
			that.dshi = lefth;
			that.dfen = leftm;
			that.dmiao = lefts;
			 
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
		duihuan(){
			uni.createSelectorQuery().select(".session").boundingClientRect((data) => { //data - 各种参数
			console.log(data)
			  uni.pageScrollTo({
					scrollTop: 350,
					duration: 300
				});
			}).exec()
		}
	}
};
</script>

<style scoped lang="scss">
@import 'index.scss';
</style>
