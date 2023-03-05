<template>
	<view class="page">
    <!-- 付款催促 -->
    <!-- 收货信息 -->
		<view class="receiving-box">
      <view class="receiving-info">
        <view class="main-info">
			<view class="address-info">
			  <jxl-ellipsis :text="receivingAddress" />
			</view>
          <view class="base-info">
            <text>{{ order.name }}</text>
            <text>{{ order.phone }}</text>
          </view>
        </view>
        <view class="edit-btn" @click="editHandle">
          <image src="/static/icon_edit.png"></image>
          <text class="edit">编辑</text>
        </view>
      </view>
      <image class="split-line" src="/static/split-line.png"></image>
		</view>
    
		<!-- 商品 -->
		<view class="goods-data">
			<view class="goods-list">
				<view class="list">
					<view class="thumb">
						<image :src="goods.imgurl" mode=""></image>
					</view>
					<view class="item">
						<view class="title">
							<jxl-ellipsis class="name" :text="goods.title" />
						</view>
						<view class="attr">
						  <text>已选择规格：  {{ order.sku }}</text>
						</view>
						<view class="price-number">
							<view class="price">
								<text class="max">{{goods.integral}}{{ main_name }}</text>
								<text class="min">+{{ Number.parseFloat(order.price) }}元</text>
							</view>
						<view class="scribing-price">原价{{ goods.old_price }}元</view>
						</view>
					</view>
				</view>
			</view>
		  <view class="service-tag">
			<image src="/static/icon_promise.png"></image>
			<text class="service-title">服务保障</text>
			<text class="highlight-color">支持极速退款.7天无理由退款.假一赔三</text>
		  </view>
	  </view>
	<view class="goods-data">
			<view class="delivery">
				<div class="list">
					<view class="titlesa">平台优惠</view>
					<view class="content">
						
					</view>
				</div>
				<div class="list">
					<view class="title">商品总额</view>
					<view class="content">
						<text class="bigcon">{{goods.old_price }}元</text>
						<text v-if="false" class="iconfont icon-more"></text>
					</view>
				</div>
				<div class="list">
					<view class="title">积分已省</view>
					<view class="content">
						<text class="bigcon2">-{{ Number.parseFloat(goods.old_price - goods.price) }}元</text>
						<text v-if="false" class="iconfont icon-more"></text>
					</view>
				</div>
				<div class="list">
					<view class="title">物流运费</view>
					<view class="content">
						<text class="bigcon">0元</text>
						<text v-if="false" class="iconfont icon-more"></text>
					</view>
				</div>
			</view>
		</view>
		
		<!-- 付款方式 -->
		<view class="pay-way">
			<view class="pay-list">
			<view class="list">
			  <view class="degree-of-heat">
				<text class="detpa">支付方式</text>
				<text class="detpb">严选承保</text>
			  </view>
			</view>
				<view class="list" v-for="(item,index) in payList" @click="choicePayType(item,index)" :key="index">
					<view class="pay-type">
						<image v-if="item.type === 2" src="/static/wx_pay.png" mode="widthFix"></image>
						<image v-if="item.type === 1" src="/static/zfb_pay.png" mode="widthFix"></image>
						<image v-if="item.type === 3" src="/static/wx_pay.png" mode="widthFix"></image>
						<image class="sub-image" v-if="item.type === 3" src="/static/zfb_pay.png" mode="widthFix"></image>
					<view class="title-box">
					  <view class="title">{{item.title}}<text v-if="item.type === 2" class="highlight-color">(推荐)</text></view>
					  <view class="sub-title" v-if="item.type === 2">使用微信支付 <text class="highlight-color">安全.方便</text></view>
					  <view class="sub-title" v-if="item.type === 1">使用支付宝支付 <text class="highlight-color">花呗.分期</text></view>
					</view>
					</view>
					<view class="check">
						<text class="iconfont" :class="payType === item.type ? 'icon-checked action':'icon-check'"></text>
					</view>
				</view>
			</view>
		</view>
		<view class="clearheight10"></view>
		<view class="goods-data">
			<view class="delivery">
				<div class="list" @click="changefapiao()">
					<view class="title">是否匿名购买</view>
					<view class="content">
						<text class="iconfont isfapiao" :class="fapiaotype ? 'icon-checked action':'icon-check'"></text>
					</view>
				</div>
				<div class="list">
					<view class="title">留言</view>
					<view class="content">
						<input type="text" placeholder="选填,如需延迟收货，请备注发货时间" v-model="order_msg">
					</view>
				</div>
			</view>
		</view>
		
    <!-- 付款提醒 -->
    <view class="payment-remind">
		<view class="goods-favorable-ratio">
		  <image src="/static/icon_star.png"></image>
		  <text>恭喜！您兑换的商品好评率达到99.9%</text>
		</view>
	</view>
		<!-- 底部合计提交 -->
		<view class="footer-submit">
      <view class="price-info">
        <view class="total">合计:</view>
        <view class="price">
          <text>{{ goods.integral }}{{ main_name }}</text>
          <text>+{{ Number.parseFloat(order.price) }}元</text>
        </view>
      </view>
			<view class="submit" @click="onSubmit">
				<view class="submit-text">提交订单</view>
        <view class="integral-text">{{ main_name }}可抵现金</view>
			</view>
		</view>
    <!-- 付款提示 -->
		<view class="Popup" v-if="open">
			<view>
				<text class="bt">付款提示</text>
				<text class="nr">您已经成功付款了吗？</text>
				<view>
					<view class="leftbtn" @click="hide">取消</view>
					<view class="rightbtn" @click="checkPay">已付款</view>
				</view>
			</view>
		</view>
    <!-- 收货地址 -->
    <jxl-modal ref="modalRefs">
      <view class="edit-address">
        <view class="address-input">
          <view class="panel-title"><text>修改收货地址</text></view>
          <view class="list-input">
            <view class="title required">
              <text>收货姓名</text>
            </view>
            <view class="content">
              <input type="text" placeholder="请输入收货姓名" v-model="form.name">
            </view>
          </view>
          <view class="list-input">
            <view class="title required">
              <text>手机号码</text>
            </view>
            <view class="content">
              <input type="tel" placeholder="请输入手机号码" v-model="form.phone">
            </view>
          </view>
          <view class="list-input">
            <view class="title required">
              <text>省市区县</text>
            </view>
            <view class="content">
              <pick-regions class="pick" :defaultRegion="defaultRegion" @getRegion="handleGetRegion">
                <view v-if="form.region" class="value">{{ form.region }}</view>
                <view v-else class="placeholder">请选择省市区县</view>
              </pick-regions>
            </view>
          </view>`````
          <view class="list-input">
            <view class="title required">
              <text>详细地址</text>
            </view>
            <view class="content">
              <input type="text" placeholder="请输入详细地址" v-model="form.address">
            </view>
          </view>
        </view>
        <view class="info-encrypt">
          <text v-if="!assessment.isSafe">*由于特殊原因，所选地区暂不发货</text>
          <text v-else-if="!assessment.isFree && assessment.freight">*由于特殊原因，所选地区需增加运费{{ assessment.freight }}元</text>
        </view>
        <view class="info-encrypt">*以上信息将加密发送</view>
        <view class="submit-btn">
          <view class="confirm" @click="editSaveHandle">保存修改</view>
        </view>
      </view>
    </jxl-modal>
	</view>
</template>

<script>
import JxlEllipsis from "../../components/Ellipsis/JxlEllipsis";
import JxlModal from "../../components/Modal/JxlModal";
import CountDown from "../invest/countDown";
import { validPhoneCM } from "../../utils/validate";

export default {
    components: {
      JxlModal,
      JxlEllipsis,
      CountDown
    },
    data() {
			return {
				main_name:'',
				scrollTop: 0,
				order_num:'',
				order: {},
				goods: {},
				address: {},
				order_msg:'',
				payList:[],
				payType: 2,
				open: false,
				payValidTime: 300, // 支付有效时间，单位秒
				defaultRegion: [],
				showCountDown: false,
				assessment: {
				  isSafe: true, // 是否发货
				  isFree: true, // 是否包邮
				  freight: 0, // 运费价格
				}, // 发货评估
				loading: false,
				form: {
				  name: '',
				  phone: '',
				  region: '',
				  address: ''
				},
				alipayForm: '',
				fapiaotype:false
			};
		},
		onPageScroll(e){
			this.scrollTop = e.scrollTop;
		},
		onLoad(e) {
		  let that = this
		  that.order_num = e.order_num;
				if(e.notype === 1){
			that.open = true;
				}
		  if (uni.getStorageSync('pay_' + that.order_num)) {
			that.open = true;
			uni.removeStorageSync('pay_' + that.order_num)
		  }
		 
		},
		onShow() {
			this.loadData()
			this.getPayList() // 付款方式列表
			this.getchannel()
		},
  computed: {
    /**
     * 收货地址
     * @return {string}
     */
    receivingAddress() {
      let that = this
      return '' + that.order.mainaddress + that.order.address
    },
    /**
     * 过期时间戳
     */
    expireTimestamp() {
      let that = this
	  return new Date().getTime() + 300000;
      //return that.order.expireTimestamp ? that.order.expireTimestamp : 0
    }
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
       * 编辑收货地址
       */
      editHandle() {
        let that = this
        that.form.name = that.order.name
        that.form.phone = that.order.phone
        that.form.address = that.order.address
        that.form.region = that.order.mainaddress
        that.defaultRegion = that.order.mainaddress.split(' ')
        that.$refs.modalRefs.show()
      },
      /**
       * 编辑保存处理
       */
      editSaveHandle() {
        let that = this
        if (that.loading) return;
        if (that.form.name === '') {
          uni.showToast({
            title: "请输入收货姓名",
            icon: 'none',
            duration: 2000
          });
          return;
        }
        if (that.form.phone === '') {
          uni.showToast({
            title: "请输入手机号码",
            icon: 'none',
            duration: 2000
          });
          return;
        }
        if (!validPhoneCM(that.form.phone)) {
          uni.showToast({
            title: "请输入正确的手机号码",
            icon: 'none',
            duration: 2000
          });
          return
        }
        if (that.region === '') {
          uni.showToast({
            title: "请选择所在地区",
            icon: 'none',
            duration: 2000
          });
          return;
        }
        if (that.form.address === '') {
          uni.showToast({
            title: "请输入详细地址",
            icon: 'none',
            duration: 2000
          });
          return;
        }
        if (!that.assessment.isSafe) {
          uni.showToast({
            title: "暂时不支持该地区发货，请修改地址",
            icon: 'none',
            duration: 2000
          });
          return;
        }
        that.loading = true
        uni.showLoading({
          title: '正在提交'
        });
        const data = {
          order_num: that.order_num,
          name: that.form.name,
          phone: that.form.phone,
          regionName: that.form.region,
          address: that.form.address
        }
        that.req({
          url: 'change_address',
          data: data,
          Loading: true,
          success: res => {
            console.log('res', res)
            that.loading = false
            uni.hideLoading();
            // 缓存收货地址
            uni.setStorageSync('receiving', {
              name: that.form.name,
              phone: that.form.phone,
              region: that.form.region,
              address: that.form.address
            })
            uni.showToast({
              title: "修改成功",
              icon: 'none',
              duration: 2000
            });
            that.$refs.modalRefs.hide()
            that.loadData() // 重新获取详情
            
          },
           fail: res => {
             that.loading = false
             uni.hideLoading();
           }
        })
      },
      /**
       * 获取选择的地区
       * @param region
       */
      handleGetRegion(region) {
        let that = this;
        that.form.region = region.map(item => item.name).join(' ')
        //that.checkReceivingAddress() // 检查收货地址是否发货和是否包邮
      },
      /**
       * 检查收货地址是否发货和是否包邮
       */
      checkReceivingAddress() {
        let that = this;
        if (!that.form.region) return
        that.req({
          url: 'checksend',
          data: {
            goods_id: that.goods.id,
            province: that.form.region.split(' ')[0]
          },
          Loading: true,
          success: res => {
            that.assessment.isFree = res.data.baoyou // 是否包邮
            that.assessment.isSafe = res.data.isfa // 是否发货
            that.assessment.freight = res.data.yunfei // 运费价格
          }
        })
      },
			/**
			 * 支付点击
			 */
			onSubmit(){
				let that = this;
				that.open = true;
				that.req({
					url: 'dopay',
					data: {order_num:that.order_num,type:that.payType,order_msg:that.order_msg},
					Loading: true,
					success: function(res) {
						console.log(res);
						if(res.code == 1){
							//支付宝
							if(that.payType == 1){
								// 将接口返回的form表单显示到页面
								document.querySelector('body').innerHTML = res.data;
								// 调用submit方法
								document.forms[0].submit();
								//let url = encodeURIComponent(JSON.stringify(res.data.urls));
								//window.location.href = res.data.urls;
								
								/* uni.navigateTo({
									url: '/pages/detail/payweb?channel=1&item='+res.data
								}) */
								//that.gopage('/pages/shouye/payweb?item='+url);
								return;
							}
							//微信
							if(that.payType == 2){
								//let url = encodeURIComponent(JSON.stringify(res.data.mweb_url));
								window.location.href = res.data.mweb_url;
								return;
								/* uni.navigateTo({
									url: '/pages/detail/payweb?channel=1&item='+res.data
								}) */
							}
							if(that.payType == 3){
								//let url = encodeURIComponent(JSON.stringify(res.data.mweb_url));
								window.location.href = res.data.url;
								return;
								/* uni.navigateTo({
									url: '/pages/detail/payweb?channel=1&item='+res.data
								}) */
							}
							//货到付款
							if(that.payType == 10){
								uni.navigateTo({
									url: '/pages/detail/payresult'
								}) 
							}
						}else{
							uni.showToast({
								title: res.msg,
								icon: 'none',
								duration: 2000
							})
						}
					}
				})
				/* uni.redirectTo({
					url: '/pages/PayResult/PayResult',
				}) */
			},
			hide(){
				this.open = false;
			},
      /**
       * 检查支付状态，并发起支付
       */
      checkPay(){
				let that = this;
				if(that.order_num === ''){
					uni.showToast({
						title: '未检测到付款!',
						icon: 'none'
					})
					return;
				}
        that.open = false;
				that.req({
					url: 'pay/checkpay',
					data:{ order_num: that.order_num },
					success(res) {
						console.log(res)
						if (res.code === 1) {
							uni.navigateTo({
								url: '/pages/detail/payresult'
							})
						} else {
							uni.showToast({
								title: '未检测到付款，请稍后在订单中查看或联系客服处理',
								icon: 'none'
							})
						}
					}
				})
			},
      /**
       * 付款方式列表
       */
      getPayList(){
				let that = this;
				that.req({
					url: 'getpaylist',
					data: {},
					Loading: true,
					success: function(res) {
						console.log(res)
						that.payList = res.data;
					}
				})
			},
			loadData() {
				let that = this;
				that.req({
					url: 'checkorder',
					data: { order_num: that.order_num },
					Loading: true,
					success: function(res) {
						console.log(res)
						that.showCountDown = false
						res.data.goods.price = Number.parseFloat(res.data.goods.price)
						res.data.goods.old_price = Number.parseFloat(res.data.goods.old_price)
									that.order = res.data.order;
									that.goods = res.data.goods;
									that.address = res.data.address;
						that.order_msg  = that.order.message
						that.order.expireTimestamp = (that.order.addtime + that.payValidTime) * 1e3 // 单位秒转换成毫秒
						that.$nextTick(() => {
						  that.showCountDown = true
						})
         
					}
				})
			},
			/**
			 * 支付方式切换点击
			 */
      choicePayType(item){
				this.payType = item.type;
			},
	changefapiao(){
		
		this.fapiaotype = !this.fapiaotype;
	}
		}
	}
</script>

<style scoped lang="scss">
	@import 'payinfo.scss';
</style>
