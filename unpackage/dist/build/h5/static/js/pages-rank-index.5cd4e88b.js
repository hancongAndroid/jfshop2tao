(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-rank-index"],{"05e1":function(e,t,i){"use strict";i.r(t);var n=i("ce62"),a=i("e5c4");for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("2f6f");var s=i("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"2c5abe21",null,!1,n["a"],void 0);t["default"]=r.exports},"0686":function(e,t,i){"use strict";i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(e){this.mescroll&&this.mescroll.onPageScroll(e)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(e){this.mescroll=e,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var e=this.$refs.mescrollRef;e&&(this.mescroll=e.mescroll)}},downCallback:function(){var e=this;this.mescroll.optUp.use?this.mescroll.resetUpScroll():setTimeout((function(){e.mescroll.endSuccess()}),500)},upCallback:function(){var e=this;setTimeout((function(){e.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},a=n;t.default=a},"07fd":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"page-total"},[i("v-uni-view",{staticClass:"tab-list"},e._l(e.TabBarList,(function(t,n){return i("v-uni-view",{key:n,staticClass:"list",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onTabBar(t,n)}}},[i("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:e.tabBarShow===n,expression:"tabBarShow === index"}],attrs:{src:t.acImg,mode:"widthFix"}}),i("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:e.tabBarShow!=n,expression:"tabBarShow != index"}],attrs:{src:t.img,mode:"widthFix"}}),i("v-uni-text",{class:{action:e.tabBarShow===n}},[e._v(e._s(t.name))])],1)})),1)],1)},a=[]},"0cf3":function(e,t,i){"use strict";var n=i("b510"),a=i.n(n);a.a},2076:function(e,t,i){"use strict";i.r(t);var n=i("7d5b"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"2f6f":function(e,t,i){"use strict";var n=i("dcbd"),a=i.n(n);a.a},"5c6c6":function(e,t,i){"use strict";i.r(t);var n=i("07fd"),a=i("2076");for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("0cf3");var s=i("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"6abbdbb1",null,!1,n["a"],void 0);t["default"]=r.exports},6530:function(e,t,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("99af");var a=n(i("5c6c6")),o=n(i("0686")),s={mixins:[o.default],components:{TabBar:a.default},data:function(){return{main_name:"",mescroll:null,downOption:{},upOption:{use:!1},goodsList:[],pageNo:1}},onReady:function(){uni.hideTabBar()},onLoad:function(){},onShow:function(){this.loadData(1),this.getchannel()},methods:{getchannel:function(){var e=this;e.req({url:"getchannel",data:{code:uni.getStorageSync("channel_code")},Loading:!0,success:function(t){console.log(t),1==t.code&&(uni.setStorageSync("main_name",t.data),e.main_name=t.data)}})},loadData:function(e){var t=this;t.req({url:"getrank",data:{page:e},Loading:!0,success:function(i){console.log(i),t.goodsList=1==e?i.data:t.goodsList.concat(i.data)}})},downCallback:function(){this.loadData(1),this.mescroll.endSuccess()},upCallback:function(e){var t=this;console.log(e),this.loadData(e),setTimeout((function(){t.mescroll.endByPage(10,20)}),2e3)}}};t.default=s},"7d5b":function(e,t,i){"use strict";i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("a9e3"),i("ac1f"),i("841c");var n={data:function(){return{TabBarList:[{index:0,name:"首页",img:"/static/tabBar/tab1.png",acImg:"/static/tabBar/tab1_active.png"},{index:1,name:"疯抢排行",img:"/static/tabBar/tab2.png",acImg:"/static/tabBar/tab2_active.png"},{index:2,name:"兑换中心",img:"/static/tabBar/tab3.png",acImg:"/static/tabBar/tab3_active.png"},{index:3,name:"我的订单",img:"/static/tabBar/tab4.png",acImg:"/static/tabBar/tab4_active.png"},{index:4,name:"个人中心",img:"/static/tabBar/tab5.png",acImg:"/static/tabBar/tab5_active.png"}],codeheight:0,isOverall:0,phoneModel:""}},props:{tabBarShow:{type:Number,default:0}},mounted:function(){try{uni.getSystemInfoSync();var e=this;uni.getSystemInfo({success:function(t){console.log(t.brand),console.log(t.model),console.log(t.screenWidth),console.log(t.screenHeight),e.codeheight=Math.round(t.screenHeight),e.phoneModel=t.model,t.model.search("iPhone")?e.isOverall=0:Math.round(t.screenHeight)>740&&(e.isOverall=1),console.log(e.isOverall)}})}catch(t){}},methods:{onTabBar:function(e,t){switch(t){case 0:wx.switchTab({url:"/pages/index/index"});break;case 1:wx.switchTab({url:"/pages/rank/index"});break;case 2:wx.switchTab({url:"/pages/invest/index"});break;case 3:wx.switchTab({url:"/pages/searchorder/index"});break;case 4:wx.switchTab({url:"/pages/user/index"});break}}}};t.default=n},"9a1b":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 主要颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.page[data-v-2c5abe21]{padding-bottom:%?100?%;background-color:#eb3e24}.clearheight10[data-v-2c5abe21]{clear:both;width:100%;height:%?20?%}\r\n/* 为你推荐 */.recommend-info[data-v-2c5abe21]{width:100%}.recommend-info .recommend-title[data-v-2c5abe21]{width:100%;position:relative}.recommend-info .recommend-title uni-image[data-v-2c5abe21]{width:100%}.recommend-info .recommend-title .poanum[data-v-2c5abe21]{position:absolute;width:100%;height:%?80?%;line-height:%?80?%;text-align:center;color:#ea0603;font-size:%?60?%;z-index:1;top:%?255?%;left:0;right:0}.recommend-info .goods-list[data-v-2c5abe21]{display:flex;flex-wrap:wrap;justify-content:space-between;padding:0 %?30?%}.recommend-info .goods-list .list[data-v-2c5abe21]{width:49%;height:%?640?%;margin-bottom:%?20?%;background-color:#fff;border-radius:%?10?%;overflow:hidden}.recommend-info .goods-list .list .pictrue[data-v-2c5abe21]{display:flex;justify-content:center;width:100%}.recommend-info .goods-list .list .pictrue uni-image[data-v-2c5abe21]{height:%?350?%}.recommend-info .goods-list .list .title-tag[data-v-2c5abe21]{height:%?100?%;padding:%?20?%}.recommend-info .goods-list .list .title-tag .tag[data-v-2c5abe21]{float:left;margin-right:%?10?%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;white-space:normal;font-size:%?32?%;line-height:%?40?%;color:#11293c;font-weight:700}.recommend-info .goods-list .list .title-tag .tag uni-text[data-v-2c5abe21]{font-size:%?24?%;color:#fff;padding:%?4?% %?16?%;background:linear-gradient(90deg,#fe3b0f,#fc603a);border-radius:%?6?%;margin-right:%?10?%}.recommend-info .goods-list .list .price-info[data-v-2c5abe21]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:0 %?20?%;height:%?80?%}.recommend-info .goods-list .list .price-info .user-price[data-v-2c5abe21]{display:flex;align-items:center}.recommend-info .goods-list .list .price-info .user-price uni-text[data-v-2c5abe21]{font-weight:700;color:red}.recommend-info .goods-list .list .price-info .user-price .jifen[data-v-2c5abe21]{font-size:%?32?%}.recommend-info .goods-list .list .price-info .user-price .min[data-v-2c5abe21]{font-size:%?24?%}.recommend-info .goods-list .list .price-info .user-price .max[data-v-2c5abe21]{font-size:%?26?%}.recommend-info .goods-list .list .price-info .user-price2[data-v-2c5abe21]{display:flex;align-items:center}.recommend-info .goods-list .list .price-info .user-price2 uni-text[data-v-2c5abe21]{color:red}.recommend-info .goods-list .list .price-info .user-price2 .jifen[data-v-2c5abe21]{font-size:%?38?%}.recommend-info .goods-list .list .price-info .user-price2 .min[data-v-2c5abe21]{font-size:%?24?%}.recommend-info .goods-list .list .price-info .user-price2 .max[data-v-2c5abe21]{font-size:%?24?%}.recommend-info .goods-list .list .price-info .vip-price[data-v-2c5abe21]{display:flex;align-items:center}.recommend-info .goods-list .list .price-info .vip-price uni-image[data-v-2c5abe21]{width:%?26?%;height:%?26?%;margin-right:%?10?%}.recommend-info .goods-list .list .price-info .vip-price uni-text[data-v-2c5abe21]{color:#fcb735;font-size:%?24?%}.recommend-info .goods-list .list .price-info .del-price[data-v-2c5abe21]{display:flex;align-items:center}.recommend-info .goods-list .list .price-info .del-price uni-image[data-v-2c5abe21]{width:%?26?%;height:%?26?%;margin-right:%?10?%}.recommend-info .goods-list .list .price-info .del-price uni-text[data-v-2c5abe21]{color:#666;font-size:%?24?%;text-decoration:line-through}.recommend-info .goods-list .list .button-rem[data-v-2c5abe21]{width:90%;height:%?64?%;border-radius:%?16?%;text-align:center;line-height:%?64?%;margin:%?30?% auto 0;color:#fff;background:linear-gradient(90deg,#ff2400,#fea005);border:0}',""]),e.exports=t},b510:function(e,t,i){var n=i("c968");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("392b95eb",n,!0,{sourceMap:!1,shadowMode:!1})},c968:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 主要颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.page-total[data-v-6abbdbb1]{position:fixed;left:0;bottom:0;width:100%}.tab-list[data-v-6abbdbb1]{display:flex;justify-content:space-between;align-items:center;width:100%;height:%?100?%;background-color:#fff}.tab-list .list[data-v-6abbdbb1]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:20%;height:%?100?%}.tab-list .list uni-image[data-v-6abbdbb1]{width:%?48?%;height:%?48?%}.tab-list .list uni-text[data-v-6abbdbb1]{color:#333;font-size:%?24?%;margin-top:%?10?%}.tab-list .list .action[data-v-6abbdbb1]{color:#fe3b0f}',""]),e.exports=t},ce62:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var n={TabBar:i("5c6c6").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"page"},[i("mescroll-body",{ref:"mescrollRef",attrs:{down:e.downOption,up:e.upOption,top:0},on:{down:function(t){arguments[0]=t=e.$handleEvent(t),e.downCallback.apply(void 0,arguments)},up:function(t){arguments[0]=t=e.$handleEvent(t),e.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"main"},[i("v-uni-view",{staticClass:"recommend-info"},[i("v-uni-view",{staticClass:"recommend-title"},[i("v-uni-image",{attrs:{src:"/static/header_rank.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"poanum"},[e._v("97162元")])],1),i("v-uni-view",{staticClass:"goods-list"},e._l(e.goodsList,(function(t,n){return i("v-uni-view",{key:n,staticClass:"list",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.gopage("/pages/detail/index?good_id="+t.id)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:t.imgurl,mode:"heightFix"}})],1),i("v-uni-view",{staticClass:"title-tag"},[i("v-uni-view",{staticClass:"tag"},[i("v-uni-text",[e._v("特价")]),e._v(e._s(t.title))],1)],1),i("v-uni-view",{staticClass:"price-info"},[i("v-uni-view",{staticClass:"user-price"},[i("v-uni-text",{staticClass:"jifen"},[e._v(e._s(t.integral)+e._s(e.main_name)+"+")]),i("v-uni-text",{staticClass:"max"},[e._v(e._s(t.price)+"元")])],1),i("v-uni-view",{staticClass:"clearheight10"}),i("v-uni-view",{staticClass:"user-price2"},[i("v-uni-text",{staticClass:"min"},[e._v("兑换热度")]),i("v-uni-text",{staticClass:"max"},[e._v(e._s(t.sale_num)+"万+")])],1),i("v-uni-view",{staticClass:"del-price"},[i("v-uni-text",[e._v("￥"+e._s(t.old_price))])],1)],1),i("v-uni-view",{staticClass:"button-rem"},[e._v("立即兑换")])],1)})),1)],1)],1)],1),i("TabBar",{attrs:{tabBarShow:1}})],1)},o=[]},dcbd:function(e,t,i){var n=i("9a1b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("0a0cf34e",n,!0,{sourceMap:!1,shadowMode:!1})},e5c4:function(e,t,i){"use strict";i.r(t);var n=i("6530"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a}}]);