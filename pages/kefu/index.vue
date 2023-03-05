<template>
    <view>
        <view class="box1">
			<view class="box1a">温馨提示</view>
			<view class="box1b">客服在线时间</view>
			<view class="box1c">{{info.kefu_tips}}</view>
			<view class="box1d">如有问题，请联系客服或留言</view>
		</view>
		<view class="box2">
			<view class="box2left" @click="showKefuToast('/pages/kefu/web')">在线客服</view>
			<view class="box2right" @click="gopage('/pages/feedback/index')">立即投诉</view>
		</view>
		<view class="box3">致买家关心的问题解答</view>
		<view class="box4">请认真查看下方问题，有您想要的信息</view>
		<view class="xuzhi">
		    <view class="xzone"  v-for="(item,index) in faqlist">
		    <view class="tt1">
		        <image src="/static/q1-ico.png" mode="heightFix"></image>
		        <text>{{item.title}}</text>
		    </view>
		    <view class="tt2"><view><rich-text :nodes="item.info" style="word-wrap: break-word"></rich-text></view></view>
		    </view>
		  
		</view>
		
		<view class="Popup" v-if="open">
			<view>
				<text class="bt">联系客服</text>
				<text class="nr"><image :src="info.kefu_img" mode="widthFix"></image></text>
				<view @click="hide()">关闭</view>
			</view>
		</view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
				open:false,
				info:[],
				faqlist:[]
            }
        },
		onLoad(e){
			this.getdata();
			this.getkefubase();
		},
		methods:{
			tellcol(){
				uni.makePhoneCall({
					phoneNumber: info.kefu_url
				});
			},
			showimg(){
				this.open = true
			},
			hide(){
				this.open = false
			},
			getkefubase(){
				let that = this;
				this.req({
					url: 'kefubase',
					data: {},
					success(e) {
						that.info = e.data
					}
				})
			},
			getdata(){
				let that = this;
				this.req({
					url: 'faq',
					data: {},
					success(e) {
						that.faqlist = e.data
					}
				})
			},
			showKefuToast(){
				uni.showToast({
					title: '当前咨询人数过多，请稍后再试!',
					icon: 'none',
					duration: 1500
				});
			},
		}
    }
</script>

<style scoped lang="scss">
	.Popup {
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .5);
		position: fixed;
		left: 0;
		top: 0;
		z-index: 999;
		display: flex;
		align-items: center;
		justify-content: center;
	
		>view {
			width: 560upx;
			background-color: #fff;
			border-radius: 10upx;
			padding-top: 50upx;
	
			.bt {
				font-size: 30upx;
				color: #000000;
				display: block;
				text-align: center;
			}
	
			.nr {
				font-size: 28upx;
				color: #999999;
				width: 400upx;
				margin: 20upx auto;
				display: block;
				text-align: center;
				image{
					width: 400upx;
				}
			}
	
			view {
				width: 100%;
				height: 100upx;
				border-top: 1upx solid #dddddd;
				line-height: 100upx;
				text-align: center;
				font-size: 32upx;
				color: #00863c;
			}
		}
	}
	.bottombox{
		width: 750rpx;
		height:auto;
		margin-top: 40rpx;
		background: #ffffff;
		overflow: hidden;
		.one{
			width: 686rpx;
			height: auto;
			margin:40rpx auto 0;
			display: flex;
			
			.oneleft{
				width: 100rpx;
				text-align: center;
				image{
					width: 40rpx;
					margin-top: 10rpx;
				}
			}
			.oneright{
				width: 586rpx;
				.onr1{
					height: 60rpx;
					line-height: 60rpx;
					font-size: 36rpx;
				}
				.onrline{
					width: 586rpx;
					margin: 20rpx auto;
					height: 2rpx;
					background: #F1F1F1;
				}
				.onr2{
					line-height: 40rpx;
					margin-bottom: 20rpx;
					text-indent: 40rpx;
				}
			}
		}
	}
	.box4{
		text-align: center;
		margin-top: 10rpx;
	}
	.box3{
		width: 750rpx;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 50rpx;
		text-align: center;
	}
	.box2{
		width: 506rpx;
		height: 100rpx;
		margin:60rpx auto 100rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.box2left{
			width: 200rpx;
			height: 60rpx;
			text-align: center;
			line-height: 60rpx;
			border-radius: 10rpx;
			background: #FF4413;
			color: #ffffff;
			
		}
		.box2right{
			width: 200rpx;
			height: 60rpx;
			text-align: center;
			line-height: 60rpx;
			border-radius: 10rpx;
			background: #464C5B;
			color: #ffffff;
			
		}
	}
	.box1{
		width: 750rpx;
		height: 200rpx;
		display: flex;
		align-items: center;
		flex-flow: column;
		.box1a{
			margin-top: 20rpx;
			font-size: 50rpx;
			font-weight: bold;
		}
		.box1b{
			margin-top: 20rpx;
			height: 40rpx;
			line-height: 40rpx;
		}
		.box1c{
			height: 40rpx;
			line-height: 40rpx;
		}
		.box1d{
			height: 40rpx;
			line-height: 40rpx;
		}
	}
	
	.xuzhi {
		width: 100%;
		min-height: 530rpx;
		border-radius: 10rpx;
		margin:24rpx auto;
		color: #999999;
		font-size: 24rpx;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
	}
	.xuzhi .xztab{
		font-size:32rpx;
		color:#333333;
		font-weight:bold;
		line-height:44rpx;
		margin-bottom:18rpx;
	}
	.xuzhi .xzone{
		background: #FFFFFF;
		width: 686rpx;
		border-radius: 32rpx;
		margin:16rpx auto 0;
		padding-bottom: 20rpx;
	}
	.xuzhi .xzone .tt1{
		
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	.xuzhi .xzone .tt1 image{
		height: 36rpx;
		margin-top: 36rpx;
		margin-left: 32rpx;
	}
	.xuzhi .xzone .tt1 text{
		font-size: 30rpx;
		font-weight: 500;
		color: #333333;
		margin-top: 36rpx;
		margin-left: 16rpx;
	}
	.xuzhi .xzone .tt2{
		font-size: 24rpx;
		line-height: 40rpx;
	}
	.xuzhi .xzone .tt2 view{
		color: #777777;
		font-size: 24rpx;
		margin-left: 32rpx;
		margin-right: 32rpx;
		margin-top: 8rpx;
	}
	.xuzhi .xzone .tt2 view text{
		color: #0021C8;
		font-size: 24rpx;
	}
</style>