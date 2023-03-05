<template>
	<view class="page">
		<!-- 头部背景 -->
		<view class="head-bg">
			<view class="head-user">
				<view class="user">
					
				</view>
				<view class="exchange" @click="isRule = true">
					<text>规则说明</text>
					<text class="iconfont icon-more"></text>
				</view>
			</view>
			<view class="integral-balance">
				<view class="integral">
					<text>累计获得{{main_name}}</text>
					<text class="number">{{info.all_integral}}</text>
					<text class="btn" v-if="info.nowday == 0" @click="onIntegral">立即签到</text>
					<text class="btn action" v-if="info.nowday == 1" >已签到</text>
				</view>
			</view>
			<view class="bg">
				<image src="/static/integral_bg1.png" mode=""></image>
			</view>
		</view>
		<!-- 签到 -->
		<view class="Signin-data">
			<view class="signin-title">
				<view class="title">
					<text>每日签到</text>
				</view>
			</view>
			<view class="day-list">
				<view class="list" :class="info.day1==1?'action':'action2'">
					<view class="circle">
						<text v-show="info.day1 == 0">+{{info.day_integral}}</text>
						<text class="iconfont icon-duihao" v-show="info.day1 == 1"></text>
						<text class="iconfont icon-close1" v-show="info.day1 == 2"></text>
					</view>
					<view class="day">
						<text>星期一</text>
					</view>
				</view>
				<view class="list" :class="info.day2==1?'action':'action2'">
					<view class="circle">
						<text v-show="info.day2 == 0">+{{info.day_integral}}</text>
						<text class="iconfont icon-duihao" v-show="info.day2 == 1"></text>
						<text class="iconfont icon-close1" v-show="info.day2 == 2"></text>
					</view>
					<view class="day">
						<text>星期二</text>
					</view>
				</view>
				<view class="list" :class="info.day3==1?'action':'action2'">
					<view class="circle">
						<text v-show="info.day3 == 0">+{{info.day_integral}}</text>
						<text class="iconfont icon-duihao" v-show="info.day3 == 1"></text>
						<text class="iconfont icon-close1" v-show="info.day3 == 2"></text>
					</view>
					<view class="day">
						<text>星期三</text>
					</view>
				</view>
				<view class="list" :class="info.day4==1?'action':'action2'">
					<view class="circle">
						<text v-show="info.day4 == 0">+{{info.day_integral}}</text>
						<text class="iconfont icon-duihao" v-show="info.day4 == 1"></text>
						<text class="iconfont icon-close1" v-show="info.day4 == 2"></text>
					</view>
					<view class="day">
						<text>星期四</text>
					</view>
				</view>
				<view class="list" :class="info.day5==1?'action':'action2'">
					<view class="circle">
						<text v-show="info.day5 == 0">+{{info.day_integral}}</text>
						<text class="iconfont icon-duihao" v-show="info.day5 == 1"></text>
						<text class="iconfont icon-close1" v-show="info.day5 == 2"></text>
					</view>
					<view class="day">
						<text>星期五</text>
					</view>
				</view>
				<view class="list" :class="info.day6==1?'action':'action2'">
					<view class="circle">
						<text v-show="info.day6 == 0">+{{info.day_integral}}</text>
						<text class="iconfont icon-duihao" v-show="info.day6 == 1"></text>
						<text class="iconfont icon-close1" v-show="info.day6 == 2"></text>
					</view>
					<view class="day">
						<text>星期六</text>
					</view>
				</view>
				<view class="list" :class="info.day7==1?'action':'action2'">
					<view class="circle">
						<text v-show="info.day7 == 0">+{{info.day_integral}}</text>
						<text class="iconfont icon-duihao" v-show="info.day7 == 1"></text>
						<text class="iconfont icon-close1" v-show="info.day7 == 2"></text>
					</view>
					<view class="day">
						<text>星期日</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 邀请新人 -->
		<!-- <view class="invitation-data">
			<view class="invitation-title">
				<view class="title">
					<text>我的邀请记录 &gt;</text>
				</view>
			</view>
			<view class="invitation-show">
				<view class="icon">
					<text class="iconfont icon-user"></text>
				</view>
				<view class="item">
					<view class="title-btn">
						<view class="title">
							<text class="bt">邀请好友</text>
							<text class="ji">+100{{main_name}}/人</text>
						</view>
						<view class="btn">
							<text>邀请免费得</text>
						</view>
					</view>
					<view class="describe">
						<text>每邀请1位均可获得100{{main_name}}，免费无上限</text>
					</view>
				</view>
			</view>
		</view> -->
		<!-- 签到提示弹窗 -->
		<view class="sigin-hint">
			<view class="cu-modal" :class="{'show':isSignin}">
			  <view class="cu-dialog">
			    <view class="cu-bar bg-white justify-end">
			      <view class="content">签到成功</view>
			      <view class="action">
			        <text class="cuIcon-close text-red" @click="isSignin = false"></text>
			      </view>
			    </view>
			    <view class="sigin-content">
						<view class="icon">
							<text class="iconfont icon-signin"></text>
						</view>
						<view class="title">
							<view>恭喜您，签到成功，获得<text>{{info.day_integral}}</text>{{main_name}}</view>
						</view>
						<view class="hint">
							<text>连续签到7天可获得额外奖励</text>
						</view>
						<view class="btn" @click="isSignin = false">
							<text>我知道了</text>
						</view>
					</view>
			  </view>
			</view>
		</view>
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
							1.每次签到可送{{info.day_integral}}{{main_name}};
							2.每日1次机会;
						</text>
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
				isSignin: false,
				SigninStatus: 0,
				// 规则
				isRule: false,
				info:[],
			};
		},
		onShow() {
			this.getsignin()
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
			getsignin() {
				let that = this;
				that.req({
					url: 'user/signin_init',
					data: {},
					Loading: true,
					success: function(res) {
						console.log(res)
						that.info = res.data;
					}
				})
			},
			/**
			 * 签到点击
			 */
			onIntegral(){
				let that = this;
				that.req({
					url: 'user/dosignin',
					data: {},
					Loading: true,
					success: function(res) {
						console.log(res)
						that.isSignin = true;
						that.SigninStatus = 1;
					}
				})
				
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'index.scss';
</style>
