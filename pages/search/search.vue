<template>
	<view class="page">
		<!-- 搜索 -->
		<view class="search-head">
			<view class="back" @click="gopage('/pages/index/index')">
				<text></text>
			</view>
			<view class="search">
				<text class="iconfont icon-fadajing"></text>
				<input type="text" v-model="keyword" placeholder="搜索商品" />
			</view>
			<view class="btn" @click="onSearch">
				<text>搜索</text>
			</view>
		</view>
		<!-- 搜索历史 -->
		<view class="search-record">
			<view class="search-title">
				<view class="title">搜索历史</view>
				<view class="iconfont icon-laji" @click="clearold"></view>
			</view>
			<view class="record-list">
				<view class="list" v-for="(item,index) in SearchRecordArr"
				@click="onRecord(item)"
				 :key="index">
					<text>{{item}}</text>
				</view>
			</view>
		</view>
		<!-- 为你推荐 -->
		<view class="recommend-info">
			<view class="goods-list">
				<view class="list" v-for="(item,index) in list" @click="gopage('/pages/detail/index?good_id='+item.id)" :key="index">
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
							<text class="min">兑换热度{{item.sale_num}}万+</text>
							
							<text class="max"></text>
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
</template>

<script>
	export default {
		data() {
			return {
				main_name:'',
				SearchRecordArr: [],
				keyword: '',
				list:[],
			};
		},
		onLoad() {
			if(uni.getStorageSync('SearchRecordArr')){
				this.SearchRecordArr = JSON.parse(uni.getStorageSync('SearchRecordArr'));
			}
		},
		onShow(){
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
			/**
			 * 返回点击
			 */
			onBack(){
				uni.navigateBack();
			},
			clearold(){
				uni.setStorageSync('SearchRecordArr',null)
				this.SearchRecordArr = [];
			},
			/**
			 * 搜索点击
			 */
			onSearch(){
				if(!this.keyword){
					uni.showToast({
						title:'请输入搜索内容',
						icon:'none',
					})
					return;
				}
				for (var i = 0; i < this.SearchRecordArr.length; i++) {
					if (this.SearchRecordArr[i] == this.keyword) {
						this.SearchRecordArr.splice(i, 1);
					}
				}
				this.SearchRecordArr.unshift(this.keyword);
				uni.setStorageSync('SearchRecordArr', JSON.stringify(this.SearchRecordArr));
				this.loadData();
			},
			loadData() {
				let that = this;
				that.req({
					url: 'search',
					data: {keyword:that.keyword},
					Loading: true,
					success: function(res) {
						console.log(res)
						that.list = res.data;
					}
				})
			},
			/**
			 * 记录点击
			 */
			onRecord(val){
				this.keyword = val;
				this.loadData();
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'search.scss';
</style>
