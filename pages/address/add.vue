<template>
	<view class="page">
		<view class="address-input">
			<view class="list-input">
				<view class="title">
					<text>收货人</text>
				</view>
				<view class="content">
					<input type="text" placeholder="请填写收货人姓名" v-model="name">
				</view>
			</view>
			<view class="list-input">
				<view class="title">
					<text>手机号</text>
				</view>
				<view class="content">
					<input type="tel" placeholder="请填写收货人手机号" v-model="phone">
				</view>
			</view>
			<view class="list-input">
				<view class="title">
					<text>所在地区</text>
				</view>
				<view class="content">
					<input type="text" placeholder="省市区县/乡镇等" v-model="mainaddress">
				</view>
			</view>
			<view class="list-textarea">
				<view class="title">
					<text>详细地址</text>
				</view>
				<view class="content">
					<textarea type="text" placeholder="街道/楼牌号等"  v-model="address"/>
				</view>
			</view>
		</view>
		<view class="tag-default">
			<view class="default-address">
				<view class="title">
					<text>默认地址</text>
				</view>
				<view class="switch-default">
					<switch class="red sm" color="#0077EE !important" :checked="switched" @change="changeswitch"></switch>
				</view>
			</view>
		</view>
		<view class="footer-btn">
			<view class="btn" @click="doaddress">
				<text>保存</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address_id:0,
				addressType: '2',
				name:'',
				phone:'',
				mainaddress:'',
				address:'',
				switched:true,
			};
		},
		onLoad(params) {
			this.address_id = params.address_id
			if(params.address_id > 0){
				this.getaddressinfo();
			}
		},
		methods:{
			getaddressinfo(){
				let that = this;
				that.req({
					url: 'user/getaddressinfo',
					data: {id:that.address_id},
					Loading: true,
					success: function(res) {
						console.log(res)
						that.name = res.data.name;
						that.phone = res.data.phone;
						that.mainaddress = res.data.mainaddress;
						that.address = res.data.address;
						if(res.data.is_frist > 0){
							that.switched = true;
						}else{
							that.switched = false;
						}
						
					}
				})
			},
			doaddress(){
				let that = this;
				that.req({
					url: 'user/doaddress',
					data:{
						name:that.name,
						phone:that.phone,
						mainaddress:that.mainaddress,
						address:that.address,
						switched:that.switched,
						id:that.address_id
					},
					success(res) {
						console.log(res)
						if(res.code == 1){
							uni.showToast({
								title: res.msg,
								icon: 'success',
								duration: 2000
							})
							uni.navigateBack({//返回
							     delta: 1
							   })
						}else{
							uni.showToast({
								title: res.msg,
								icon: 'none',
								duration: 2000
							})
						}
						
					}
				})
			},
			changeswitch(event){
				this.switched = event.detail.value;
				console.log(switched)
			},
		}
	}
</script>

<style scoped lang="scss">
	@import 'add.scss';
</style>
