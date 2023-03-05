<template>
	<!-- 为你推荐 -->
	<view class="recommend-info">
		<view class="recommend-title">
			<view class="title">
				<image src="/static/wntj_title.png" mode=""></image>
			</view>
		</view>
		<view class="goods-list">
			<view class="list" v-for="(item,index) in remeList" @click="gopage('/pages/detail/index?good_id='+item.id)" :key="index">
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
						<text class="min">兑换热度{{item.sell_num}}</text>
						
						<text class="max">{{item.price}}万+</text>
					</view>
					<view class="del-price">
						<text>￥{{item.old_price}}</text>
					</view>
				</view>
				<view class="button-rem">立即兑换</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				main_name:'',
				remeList:[]
			}
		},
		created() {
			let that = this;
			console.log(2)
			that.getchannel();
			that.getrecomment(1)
		},
		onReachBottom:function(){
		console.log("2sss")	
		},
		onPageScroll(e) {
			console.log(e)
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
			gotoPage(path) {
				uni.navigateTo({
					url: path
				});
			},
			getrecomment(pageno){
				let that = this;
				that.req({
					url: 'getrecomment',
					data: {page:pageno},
					Loading: true,
					success: function(res) {
						console.log(res)
						that.remeList = res.data;
					}
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	/* 为你推荐 */
	.recommend-info{
		width: 100%;
		background-color: #f2f2f2;
		.recommend-title{
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100rpx;
			.title{
				display: flex;
				align-items: center;
				image{
					width: 416rpx;
					height: 40rpx;
				}
			}
		}
		.goods-list{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			padding: 0 30rpx;
			.list{
				width: 49%;
				height: 640rpx;
				margin-bottom: 20rpx;
				background-color: #FFFFFF;
				border-radius: 10rpx;
				overflow: hidden;
				.pictrue{
					display: flex;
					justify-content: center;
					width: 100%;
					image{
						height: 350rpx;
					}
				}
				.title-tag{
					// display: flex;
					height: 100rpx;
					padding: 20rpx;
					.tag{
						float: left;
						margin-right: 10rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						white-space: normal;
						font-size: 32rpx;
						line-height: 40rpx;
						color: #11293c;
						font-weight: bold;
						text{
							font-size: 24rpx;
							color: #FFFFFF;
							padding: 4rpx 16rpx;
							background: linear-gradient(to right,$base,$change-clor);
							border-radius: 6rpx;
							margin-right: 10rpx;
						}
					}
				}
				.price-info{
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					justify-content: space-between;
					padding: 0 20rpx;
					height: 80rpx;
					.user-price{
						display: flex;
						align-items: center;
						text{
							font-weight: bold;
							color: $price-clor;
						}
						.jifen{
							font-size: 32rpx;
						}
						.min{
							font-size: 24rpx;
						}
						.max{
							font-size: 32rpx;
						}
					}
					.user-price2{
						display: flex;
						align-items: center;
						text{
							color: $price-clor;
						}
						.jifen{
							font-size: 38rpx;
						}
						.min{
							font-size: 24rpx;
						}
						.max{
							font-size: 24rpx;
						}
					}
					.vip-price{
						display: flex;
						align-items: center;
						image{
							width: 26rpx;
							height: 26rpx;
							margin-right: 10rpx;
						}
						text{
							color: #fcb735;
							font-size: 24rpx;
						}
					}
					.del-price{
						display: flex;
						align-items: center;
						image{
							width: 26rpx;
							height: 26rpx;
							margin-right: 10rpx;
						}
						text{
							color: #666666;
							font-size: 24rpx;
							text-decoration: line-through;
						}
					}
				}
				.button-rem{
					width: 90%;
					height: 64rpx;
					border-radius: 16rpx;
					text-align: center;
					line-height: 64rpx;
					margin:30rpx auto 0;
					color: white;
					background: linear-gradient(to right, rgb(255, 36, 0), rgb(254, 160, 5));
					border: 0px;
				}
			}
		}
	}
</style>
