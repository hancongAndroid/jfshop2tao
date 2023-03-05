<template>
	<view>
	<view class="guize">
		<rich-text :nodes="info.content" style="word-wrap: break-word"></rich-text>
	</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				info:'',
			}
		},
		onLoad(e) {
			console.log(e)
			this.getmanualinfo(e.id)
		},
		methods:{
			getmanualinfo(e){
				let that = this;
				that.req({
					url:'getabouts',
					data:{
						id:e, 
					},
					success(res){
						console.log(res)
						that.info = res.data
					}
				})
			},
			
			
		}
	}
</script>


<style>
	.text_2,.text_3{
		font-size: 28rpx;
		margin-top: 60rpx;
	}
	.text_1{
		margin-top: 30rpx;
		font-size: 32rpx;
		color: #333333;
		font-family: SourceHanSansCN-Regular;
	}
	.img{
		width: 100%;
		margin:0 auto!important;
	}
	image{
		margin:0 auto!important;
	}
	.guize{
		padding: 24rpx;
	}
	.title{
		width: 100%;
		height: 140rpx;
		line-height: 120rpx;
		text-align: center;
		font-size: 44rpx;
		color: #000;
		font-weight: bold;
	}
	page{
		width: 100%;
		height: auto;
		background: #ffffff;
	}
</style>
