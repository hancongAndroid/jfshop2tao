<template>
	<view class="page-total">
		
		<!-- 更多热卖 -->
		<view class="more-hot">
      <view class="goods-list">
        <view class="list" v-for="(item,index) in goodslist" @click="gopage('/pages/detail/index?good_id='+item.id)" :key="index">
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
          		<text class="jifen">{{item.integral}}积分+</text>
          		
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
</template>

<script>
export default {
	data() {
		return {
		};
	},
	props:{
		goodslist: {
			type: [Array,Boolean],
			default:()=>[]
		}
	},
	computed: {},
	created() {
		//console.log(this.goodslist);
	},
	methods:{
		
	}
};
</script>

<style lang="scss">
@import 'ClassifyData.scss';
</style>
