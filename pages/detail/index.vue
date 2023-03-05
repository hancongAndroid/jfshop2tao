<template>
  <view @click="isMore = false">
    <view class="goods-head" :style="'background:rgba(255,255,255,' + PageScrollTop / 100 + ')'">
      <!-- 返回 -->
      <view class="back" @click="onBack">
        <view class="back-one" :class="{ action: PageScrollTop > 120 }">
          <text></text>
        </view>
      </view>
      <!-- tab切换 -->
    <!--  <view class="head-tab" v-if="PageScrollTop > 120">
        <view class="tab" :class="{'action':TabShow===0}" @click="onTab(0)">
          <text>商品</text>
          <text class="line"></text>
        </view>
        <view class="tab" :class="{'action':TabShow===1}" @click="onTab(1)">
          <text>评价</text>
          <text class="line"></text>
        </view>
        <view class="tab" :class="{'action':TabShow===2}" @click="onTab(2)">
          <text>详情</text>
          <text class="line"></text>
        </view>
      </view> -->
     
    </view>
    <!-- banner，标题 -->
    <view class="banner-title">
      <!-- banner -->
      <view class="banner">
        <swiper class="screen-swiper round-dot" indicator-dots="true" circular="true" autoplay="true" interval="5000"
                duration="500">
          <swiper-item v-for="(item, index) in info.imgs" :key="index">
            <image :src="item" mode="aspectFill"></image>
            <!-- <video src="{{item.url}}" autoplay loop muted show-play-btn="{{false}}" controls="{{false
            }}" objectFit="cover" wx:if="{{item.type == 'video'}}"></video> -->
          </swiper-item>
        </swiper>
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
      </view>
      <!-- 价格 -->
      <view class="price-info" v-show="type==0">
        <view class="price">
          <view class="pp1">
			  <text class="pp1a">¥{{info.old_price}}</text>
		  </view>
		  <view class="pp2">
			 <view class="biaoqianbox">
			 	<view class="biaoqiana">
			 		<image src="/static/zan.png" mode="widthFix"></image>
			 		<text>超值兑</text>
			 	</view>
			 	<view class="biaoqianb">商品</view>
			 </view>
		  </view>
        </view>
        <view class="info">
          <view class="list">
            <image src="/static/redhong.png" mode="heightFix"></image>
			<text>近30天兑换热度{{info.sale_num}}万+</text>
          </view>
          <view class="list">
            <view class="djsbox">
            	距失效
            	<text>{{dtian}}</text>:
            	<text>{{dshi}}</text>:
            	<text>{{dfen}}</text>
            </view>
          </view>
        </view>
      </view>
      <!-- 标题 -->
      <view class="goods-title">
        <text>{{info.title}}</text>
      </view>
      <!-- 开通会员 -->
      <view class="dredge-vip">
        <view class="title" @click="gopage('/pages/rank/index')">
          <image src="/static/hotbang.png" mode="heightFix"></image>
          <text>
            该商品入选平台热销榜 ·
            <text class="col">热销榜</text>
          
          </text>
        </view>
        <view class="dredge" @click="showbuy">
          <text class="iconfont icon-more"></text>
        </view>
      </view>
	  <view class="yanxuanbox" @click="$refs['GoodsServe'].show()">
		  <image class="yuanleft" src="/static/yanxuansafe1.png" mode="heightFix"></image>
		  <view class="yuancent"></view>
		  <view class="yuanright">
			  <view class="yuanone">
				  <image src="/static/duihaoico.png" mode="heightFix"></image>
				  <text>限时兑换</text>
			  </view>
			  <view class="yuanone">
				  <image src="/static/duihaoico.png" mode="heightFix"></image>
				  <text>全国包邮</text>
			  </view>
			  <view class="yuanone">
				  <image src="/static/duihaoico.png" mode="heightFix"></image>
				  <text>7天无理由退换</text>
			  </view>
		  </view>
	  </view>
	  
	  <!-- 属性规格 -->
	  <view class="goods-discounts">
	    <view class="list" @click="showbuy">
	      <view class="title">规格</view>
	      <view class="content">
	        <text>请选择规则数量</text>
	      </view>
	      <view class="more">
	        <text class="iconfont icon-more"></text>
	      </view>
	    </view>
	    <view class="list">
	      <view class="title">发货</view>
	      <view class="content">
	        <text>品牌仓库  |  平台承担</text>
	      </view>
	      <view class="more"></view>
	    </view>
		<view class="list">
		  <view class="title">活动库存</view>
		  <view class="content">
		    <view class="connew1">仅剩：<text class="connew3">{{info.less_num < 1 ? 0 : info.less_num}}件</text></view>
			<view class="connew2">每人限兑一件</view>
		  </view>
		  <view class="more"></view>
		</view>
	  </view>
    </view>
	
	<view class="goods-discounts">
	  <view class="list">
	    <view class="title">专享福利</view>
	    <view class="content">
	      <text>咨询客服了解更多</text>
	    </view>
	    <view class="more" @click="gopage('/pages/kefu/index')">
	      <image class="kefu" src="/static/kefu11.png" mode="heightFix"></image>
	    </view>
	  </view>
	  
	</view>
    <!-- 排行榜 -->
    <view class="ranking-list">
      <view class="ranking-title">
        <view class="title">
			<view class="redlines"></view>
			<view class="redlines2">更多兑换</view>
		</view>
      </view>
      
		  <swiper style="height: 760rpx;" class="screen-swiper round-dot" indicator-dots="true" circular="true" autoplay="true" interval="5000"
		          duration="500">
		    <swiper-item>
				<view class="goods-list">
		      <view class="list" v-for="(item, index) in goodsList" :key="index" v-if="index < 6" @click="gopage('/pages/detail/index?good_id='+item.id)">
		        <view class="thumb">
		          <image :src="item.imgurl"></image>
		        </view>
		        <view class="title">
		          <text class="two-omit">{{item.title}}</text>
		        </view>
		        <view class="price">
		          <text>￥{{item.price}}</text>
		        </view>
		      </view>
			  </view>
		    </swiper-item>
			<swiper-item >
				<view class="goods-list">
			  <view class="list" v-for="(item, index) in goodsList" :key="index" v-if="index >= 6" @click="gopage('/pages/detail/index?good_id='+item.id)">
			    <view class="thumb">
			      <image :src="item.imgurl"></image>
			    </view>
			    <view class="title">
			      <text class="two-omit">{{item.title}}</text>
			    </view>
			    <view class="price">
			      <text>￥{{item.price}}</text>
			    </view>
			  </view>
			  </view>
			</swiper-item>
		  </swiper>
       
      
    </view>
	<!-- 评价 -->
	<view class="evaluate-data" ref="evaluate">
	   <view class="title-more">
	     <view class="title">
	       <text>用户评价</text>
	       <text class="num" style="font-weight: bold;font-size: 28rpx;">({{info.comments}})</text>
	     </view>
	     <view class="more">
			<text style="font-size: 32rpx;color: #fe3b0f;">{{info.commentsrate}}%</text>
	       <text class="iconfont icon-more"></text>
	     </view>
	   </view>
	   <view class="evaluate-list">
			  <view class="evallmain" :style="evalwidth">
				  <view class="evaone" v-for="(item,index) in comments">
					  <view class="user-info">
						<view class="thumb">
						  <image :src="item.headimg" mode=""></image>
						</view>
						<view class="nickname-grade">
						  <view class="nickname">
							<text>{{item.nickname}}</text>
						  </view>
						  <view class="grade">
							<text class="cuIcon-favorfill lg text-gray"></text>
						  <text class="cuIcon-favorfill lg text-gray"></text>
						  <text class="cuIcon-favorfill lg text-gray"></text>
						  <text class="cuIcon-favorfill lg text-gray"></text>
						  <text class="cuIcon-favorfill lg text-gray"></text>
						  </view>
						</view>
					  </view>
					  <view class="evainfos">{{item.infos}}</view>
				  </view>
			  </view>
			 
			
	     
	    
	   </view>
	 </view> 
    <!-- 商品介绍 -->
    <view class="products-introduction" ref="products">
		<view class="hstitle">
			<view class="redlines"></view>
			<view class="redlines2">图文详情</view>
		</view>
     <rich-text class="content" :nodes="info.infos"></rich-text>
    </view>
	
	<!-- 为你推荐 -->
	<view class="recommend-info">
		<view class="recommend-title">
			<view class="title">
				<image src="/static/wntj_title.png" mode=""></image>
			</view>
		</view>
		<view class="goods-list">
			<view class="list" v-for="(item,index) in goodsList2" @click="gopage('/pages/detail/index?good_id='+item.id)" :key="index">
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
	<view style="clear: both;width: 100%;height: 100px;"></view>
    <!-- 底部 -->
    <view class="page-footer">
      <view class="footer-fn">
        
        <view class="list" @click="gopage('/pages/index/index')">
          <text class="iconfont icon-home"></text>
          <text>首页</text>
        </view>
		<view class="list" @click="gopage('/pages/kefu/index')">
		  <text class="iconfont icon-kefu"></text>
		  <text>客服</text>
		</view>
      </view>
	  <view class="footer-buy2">
	    <view class="buy-at" @click="showbuy">
		  <view class="at1">¥{{info.old_price}}</view>
	      <view class="at2">直接购买</view>
	    </view>
	  </view>
      <view class="footer-buy">
        <view class="buy-at" @click="showbuy">
          <view class="at1">超值兑</view>
          <view class="at2">{{info.integral}}{{main_name}}+ {{info.price}}</view>
        </view>
      </view>
    </view>
    <!-- 服务弹窗 -->
    <goods-serve ref="GoodsServe"></goods-serve>
    <!-- 属性规格 -->
    <view class="cu-modal bottom-modal" style="z-index: 999;" :class="{'show':isShow}" @click="hide">
      <view class="cu-dialog" @click.stop="showbuy">
    		<view class="goods-data">
    			<view class="thumb">
    				<image :src="info.imgurl" mode=""></image>
    			</view>
    			<view class="item">
    				<view class="title">
    					<text>{{info.title}}</text>
    				</view>
    				<view class="price">
    					<text class="pp1a">{{info.integral}}{{main_name}}</text>
					    <text class="pp1b">+{{info.price}}元</text>
    				</view>
    			</view>
    		</view>
    		<view class="attr-size">
    			<view class="attr-list">
    				<view class="title">
    					<text>规格</text>
    				</view>
					<view class="size-list">
						<div class="list" v-for="(value,idx) in info.sku_arr" 
						:class="{'action':skunow === value}" @click.stop="changesku(value)">
							<text>{{value}}</text>
						</div>
					</view>
    			</view>
    			<view class="attr-number">
    				<view class="tit">数量</view>
    				<view class="number">
    					<text class="iconfont icon-jian" @click.stop="less"></text>
    					<input type="number" maxlength="8" v-model="buynum">
    					<text class="iconfont icon-jia" @click.stop="add"></text>
    				</view>
    			</view>
    		</view>
			<view class="address-input" v-if="info.addressstatus == 0">
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
						<pick-regions :defaultRegion="defaultRegionCode" @getRegion="handleGetRegion">
						    <text>{{regionName||'点击选择省市区'}}</text>
						</pick-regions>
					</view>
				</view>
				<view class="list-input">
					<view class="title">
						<text>详细地址</text>
					</view>
					<view class="content">
						<input type="text" placeholder="请填写街道/楼牌号等" v-model="address">
					</view>
				</view>
			</view>
			<view style="color: #ff0000;">*您提交的信息将加密发送</view>
    		<view class="attr-btn">
    			<view class="add-buy" @click="tobuy">立即兑换</view>
    		</view>
    	</view>
    </view>
	
	
  </view>
</template>

<script>
import GoodsServe from '../../components/GoodsServe/GoodsServe.vue';
import GoodsCoupon from '../../components/GoodsCoupon/GoodsCoupon.vue';
import GoodsAttr from '../../components/GoodsAttr/GoodsAttr.vue';
import pickRegions from '@/components/pick-regions/pick-regions.vue'

export default {
  components: {
    GoodsServe,
    GoodsCoupon,
    GoodsAttr,
	pickRegions
  },
  data() {
    return {
	  main_name:'',
	  isShow:false,
      TabShow: 0,
      isMore: false,
      AttentionShow: 0,
	  info:[],
	  goods_id:0,
      swiperList: [],
	  danmulist:[],
      web_content:'',
      PageScrollTop: 0,
	  type: 0,
	  goodsList:[],
	  goodsList2:[],
	  skunow:"",
	  buynum:1,
	  region:[],
	  defaultRegion:['北京市','市辖区','东城区'],
	  defaultRegionCode:'110101',
	  name:'',
	  phone:'',
	  mainaddress:'',
	  address:'',
	  comments:[],
	  indicatorDots: true,
	  autoplay: true,
	  interval: 20000,
	  duration: 500,
	  //倒计时
	  endtime:0,
	  dtian:0,
	  dshi:0,
	  dfen:0,
	  dmiao:0,
	  timer:null,
	  regionName2:'',
    };
  },
	onLoad(params) {
		this.type = params.type||0;
		this.goods_id = params.good_id;
		this.name = uni.getStorageSync('name');
		this.phone = uni.getStorageSync('phone');
		this.address = uni.getStorageSync('address');
		this.getcomments();
		this.getrank();
		this.getchannel();
		this.endtime = new Date().getTime() + 259200000;
		this.timer = setInterval(() => {
			this.showtime()
		}, 200)
	},
	onShow() {
		this.loadData();
		this.getdanmu();
		
	},
	onPageScroll(e) {
		this.PageScrollTop = e.scrollTop;
	},
	onReachBottom(){
		console.log("到底了")
		this.getrecomment();
	},
	computed:{
	    regionName(){
			console.log('1');
	        // 转为字符串
	        return this.region.map(item=>item.name).join(' ')
	    }
	},
  methods: {
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
	  imgpre(index){
		  let that = this;
		  console.log("qqq",index)
		  let imgarr = that.comments[index].imgslist;
		  console.log("qqq",imgarr)
		  uni.previewImage({
		    urls: imgarr,
		    current: 0,
		    success(res) {
		      console.log(`previewImage调用成功`);
		    },
		    fail(res) {
		      console.log(`previewImage调用失败`);
		    },
		  });
	  },
	  getrecomment(){
	  	let that = this;
	  	that.req({
	  		url: 'getrecomment',
	  		data: {},
	  		Loading: true,
	  		success: function(res) {
	  			that.goodsList2 = that.goodsList2.concat(res.data);
	  		}
	  	})
	  },
	  getcomments(){
	  	let that = this;
	  	that.req({
	  		url: 'getcomments',
	  		data: {},
	  		Loading: true,
	  		success: function(res) {
	  			console.log(res)
	  			if(res.code == 1){
	  				that.comments = res.data;
					that.evalwidth = "width:" + parseInt(res.data.length * 470) + "rpx"; 
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
	 // 获取选择的地区
	 handleGetRegion(region){
	 	console.log("log",region);
	     this.region = region
	 },
	  tobuy(){
		  let that = this;
		  let domainaddss = "";
		  //console.log(that.info.addresslist.name)
		  if(that.info.addressstatus == 1){
			  that.name = that.info.addresslist.name;
			  that.phone = that.info.addresslist.phone;
			  domainaddss = that.info.addresslist.mainaddress;
			  console.log(that.info.addresslist.mainaddress,"+++",that.regionName2)
			  that.address = that.info.addresslist.address;
		  }else{
			  domainaddss = that.regionName;
		  }
		  if(that.skunow == ''){
			  uni.showToast({
			  	title: "请选择规格",
			  	icon: 'none',
			  	duration: 2000
			  });
			  return;
		  }
		  if(that.name == ''){
			  uni.showToast({
				title: "请填写收货人姓名",
				icon: 'none',
				duration: 2000
			  });
			  return;
		  }
		  if(that.phone == ''){
			  uni.showToast({
				title: "请填写手机号",
				icon: 'none',
				duration: 2000
			  });
			  return;
		  }
		  if(domainaddss == ''){
				  uni.showToast({
					title: "请选择所在地区",
					icon: 'none',
					duration: 2000
				  });
				  return;
		  }
		  
		  if(that.address == ''){
				  uni.showToast({
					title: "请填写详细地址",
					icon: 'none',
					duration: 2000
				  });
				  return;
		  }
		  uni.setStorageSync('name',that.name);
		  uni.setStorageSync('phone',that.phone);
		  uni.setStorageSync('address',that.address);
		  that.req({
		  	url: 'addorder',
		  	data: {goods_id:that.goods_id,skunow:that.skunow,buynum:that.buynum,name:that.name,phone:that.phone,regionName:domainaddss,address:that.address,channel_code:uni.getStorageSync('channel_code')},
		  	Loading: true,
		  	success: function(res) {
		  		console.log(res)
				if(res.code == 1){
					uni.navigateTo({
						url: '/pages/detail/payinfo?order_num='+res.data
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
		  /*  */
	  },
	  less(){
	  	 let ying = parseInt(this.buynum - 1)
	  	 if(ying <= 0){
	  		 uni.showToast({
	  		 	title: '购买数量不能为0',
	  		 	icon: 'none',
	  		 	duration: 2000
	  		 })
	  		 ying = 1;
	  	 }
	  	 this.buynum = ying;
	  },
	  add(){
	  	let ying = parseInt(this.buynum + 1)
	  	if(ying <= 0){
	  		 uni.showToast({
	  			title: '购买数量不能为0',
	  			icon: 'none',
	  			duration: 2000
	  		 })
	  		 ying = 1;
	  	}
	  	this.buynum = ying;
	  },
	  changesku(sku){
		  this.skunow = sku;
	  },
	  hide(){
		this.isShow = false;  
	  },
	  showbuy(){
		  this.isShow = true;
	  },
	loadData() {
		let that = this;
		that.req({
			url: 'goodsdetail',
			data: {goods_id:that.goods_id},
			Loading: true,
			success: function(res) {
				console.log(res)
				that.info = res.data;
				that.skunow = res.data.sku_arr[0]
			}
		})
	},
	getrank() {
		let that = this;
		that.req({
			url: 'getrank',
			data: {},
			Loading: true,
			success: function(res) {
				console.log(res)
				that.goodsList = res.data;
			}
		})
	},
    /**
     * 返回
     */
    onBack() {
      uni.navigateBack();
    },
    /**
     * tab
     */
    onTab(type) {
      this.TabShow = type;
      switch (type) {
        case 0:
          uni.pageScrollTo({
          	scrollTop: 0,
          	duration: 300
          });
          break;
        case 1:
          uni.createSelectorQuery().select(".evaluate-data").boundingClientRect((data) => { //data - 各种参数
            uni.pageScrollTo({
							scrollTop: this.PageScrollTop + data.top -50,
							duration: 300
						});
          }).exec()
          break;
        case 2:
          uni.createSelectorQuery().select(".products-introduction").boundingClientRect((data) => { //data - 各种参数
            uni.pageScrollTo({
            	scrollTop: this.PageScrollTop + data.top - 50,
            	duration: 300
            });
          }).exec()
          break;
      }
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

  }
};
</script>

<style scoped lang="scss">
@import 'index.scss';
</style>
