(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-search-search"],{"1a4c":function(e,t,i){"use strict";i.r(t);var a=i("bdeb"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},5038:function(e,t,i){"use strict";var a=i("644a"),n=i.n(a);n.a},5633:function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"page"},[i("v-uni-view",{staticClass:"search-head"},[i("v-uni-view",{staticClass:"back",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.gopage("/pages/index/index")}}},[i("v-uni-text")],1),i("v-uni-view",{staticClass:"search"},[i("v-uni-text",{staticClass:"iconfont icon-fadajing"}),i("v-uni-input",{attrs:{type:"text",placeholder:"搜索商品"},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1),i("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSearch.apply(void 0,arguments)}}},[i("v-uni-text",[e._v("搜索")])],1)],1),i("v-uni-view",{staticClass:"search-record"},[i("v-uni-view",{staticClass:"search-title"},[i("v-uni-view",{staticClass:"title"},[e._v("搜索历史")]),i("v-uni-view",{staticClass:"iconfont icon-laji",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clearold.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"record-list"},e._l(e.SearchRecordArr,(function(t,a){return i("v-uni-view",{key:a,staticClass:"list",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onRecord(t)}}},[i("v-uni-text",[e._v(e._s(t))])],1)})),1)],1),i("v-uni-view",{staticClass:"recommend-info"},[i("v-uni-view",{staticClass:"goods-list"},e._l(e.list,(function(t,a){return i("v-uni-view",{key:a,staticClass:"list",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.gopage("/pages/detail/index?good_id="+t.id)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:t.imgurl,mode:"heightFix"}})],1),i("v-uni-view",{staticClass:"title-tag"},[i("v-uni-view",{staticClass:"tag"},[i("v-uni-text",[e._v("特价")]),e._v(e._s(t.title))],1)],1),i("v-uni-view",{staticClass:"price-info"},[i("v-uni-view",{staticClass:"user-price"},[i("v-uni-text",{staticClass:"jifen"},[e._v(e._s(t.integral)+e._s(e.main_name)+"+")]),i("v-uni-text",{staticClass:"max"},[e._v(e._s(t.price)+"元")])],1),i("v-uni-view",{staticClass:"clearheight10"}),i("v-uni-view",{staticClass:"user-price2"},[i("v-uni-text",{staticClass:"min"},[e._v("兑换热度"+e._s(t.sale_num)+"万+")]),i("v-uni-text",{staticClass:"max"})],1),i("v-uni-view",{staticClass:"del-price"},[i("v-uni-text",[e._v("￥"+e._s(t.old_price))])],1)],1),i("v-uni-view",{staticClass:"button-rem"},[e._v("立即兑换")])],1)})),1)],1)],1)},r=[]},"644a":function(e,t,i){var a=i("ffc6");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("5f303a3d",a,!0,{sourceMap:!1,shadowMode:!1})},bdeb:function(e,t,i){"use strict";i("a434"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{main_name:"",SearchRecordArr:[],keyword:"",list:[]}},onLoad:function(){uni.getStorageSync("SearchRecordArr")&&(this.SearchRecordArr=JSON.parse(uni.getStorageSync("SearchRecordArr")))},onShow:function(){this.getchannel()},methods:{getchannel:function(){var e=this;e.req({url:"getchannel",data:{code:uni.getStorageSync("channel_code")},Loading:!0,success:function(t){console.log(t),1==t.code&&(uni.setStorageSync("main_name",t.data),e.main_name=t.data)}})},onBack:function(){uni.navigateBack()},clearold:function(){uni.setStorageSync("SearchRecordArr",null),this.SearchRecordArr=[]},onSearch:function(){if(this.keyword){for(var e=0;e<this.SearchRecordArr.length;e++)this.SearchRecordArr[e]==this.keyword&&this.SearchRecordArr.splice(e,1);this.SearchRecordArr.unshift(this.keyword),uni.setStorageSync("SearchRecordArr",JSON.stringify(this.SearchRecordArr)),this.loadData()}else uni.showToast({title:"请输入搜索内容",icon:"none"})},loadData:function(){var e=this;e.req({url:"search",data:{keyword:e.keyword},Loading:!0,success:function(t){console.log(t),e.list=t.data}})},onRecord:function(e){this.keyword=e,this.loadData()}}};t.default=a},fb74:function(e,t,i){"use strict";i.r(t);var a=i("5633"),n=i("1a4c");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("5038");var o,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"762ca845",null,!1,a["a"],o);t["default"]=s.exports},ffc6:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 主要颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.page[data-v-762ca845]{position:absolute;width:100%;height:100%;background:#fff;overflow-x:hidden;overflow-y:auto}\r\n/* 搜索 */.search-head[data-v-762ca845]{position:fixed;left:0;top:0;display:flex;align-items:center;width:100%;height:%?100?%;z-index:10;background-color:#fff;border-bottom:%?2?% solid #f6f6f6}.search-head .back[data-v-762ca845]{display:flex;justify-content:center;align-items:center;width:10%;height:100%}.search-head .back uni-text[data-v-762ca845]{width:%?20?%;height:%?20?%;border-left:%?2?% solid #555;border-bottom:%?2?% solid #555;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.search-head .search[data-v-762ca845]{display:flex;align-items:center;width:76%;height:%?60?%;background-color:#f6f6f6;border-radius:%?60?%;padding:0 4%}.search-head .search uni-text[data-v-762ca845]{font-size:%?34?%;color:silver}.search-head .search uni-input[data-v-762ca845]{width:90%;height:100%;font-size:%?26?%;color:#212121;margin-left:%?10?%}.search-head .btn[data-v-762ca845]{display:flex;align-items:center;justify-content:center;width:10%;height:100%}.search-head .btn uni-text[data-v-762ca845]{font-size:%?28?%;color:#555}\r\n/* 搜索记录 */.search-record[data-v-762ca845]{padding:0 4%;margin-top:%?100?%;background-color:#fff;border-bottom:%?2?% solid #f6f6f6}.search-record .search-title[data-v-762ca845]{display:flex;align-items:center;justify-content:space-between;width:100%;height:%?80?%}.search-record .search-title .title[data-v-762ca845]{font-size:%?28?%;color:#212121}.search-record .search-title .iconfont[data-v-762ca845]{font-size:%?38?%}.search-record .record-list[data-v-762ca845]{display:flex;flex-wrap:wrap;width:100%}.search-record .record-list .list[data-v-762ca845]{padding:%?10?% %?20?%;margin-right:%?20?%;margin-bottom:%?20?%;background-color:#f6f6f6;border-radius:%?60?%}.search-record .record-list .list uni-text[data-v-762ca845]{color:#555;font-size:%?24?%}.search-found[data-v-762ca845]{padding:0 4%;margin-top:%?100?%;background-color:#fff}.search-found .search-title[data-v-762ca845]{display:flex;align-items:center;justify-content:space-between;width:100%;height:%?80?%}.search-found .search-title .title[data-v-762ca845]{font-size:%?28?%;color:#212121}.search-found .search-title .iconfont[data-v-762ca845]{font-size:%?38?%}.search-found .found-list[data-v-762ca845]{display:flex;justify-content:space-between;flex-wrap:wrap}.search-found .found-list .list[data-v-762ca845]{display:flex;align-items:center;width:48%;height:%?80?%}.search-found .found-list .list uni-text[data-v-762ca845]{color:#555;font-size:%?26?%}\r\n/* 为你推荐 */.recommend-info[data-v-762ca845]{width:100%;margin-top:%?40?%}.recommend-info .recommend-title[data-v-762ca845]{display:flex;align-items:center;justify-content:center;width:100%;height:%?100?%}.recommend-info .recommend-title .title[data-v-762ca845]{display:flex;align-items:center}.recommend-info .recommend-title .title uni-image[data-v-762ca845]{width:%?416?%;height:%?40?%}.recommend-info .goods-list[data-v-762ca845]{display:flex;flex-wrap:wrap;justify-content:space-between;padding:0 %?30?%}.recommend-info .goods-list .list[data-v-762ca845]{width:49%;height:%?640?%;margin-bottom:%?20?%;background-color:#fff;border-radius:%?10?%;overflow:hidden}.recommend-info .goods-list .list .pictrue[data-v-762ca845]{display:flex;justify-content:center;width:100%}.recommend-info .goods-list .list .pictrue uni-image[data-v-762ca845]{height:%?350?%}.recommend-info .goods-list .list .title-tag[data-v-762ca845]{height:%?100?%;padding:%?20?%}.recommend-info .goods-list .list .title-tag .tag[data-v-762ca845]{float:left;margin-right:%?10?%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;white-space:normal;font-size:%?32?%;line-height:%?40?%;color:#11293c;font-weight:700}.recommend-info .goods-list .list .title-tag .tag uni-text[data-v-762ca845]{font-size:%?24?%;color:#fff;padding:%?4?% %?16?%;background:linear-gradient(90deg,#fe3b0f,#fc603a);border-radius:%?6?%;margin-right:%?10?%}.recommend-info .goods-list .list .price-info[data-v-762ca845]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:0 %?20?%;height:%?80?%}.recommend-info .goods-list .list .price-info .user-price[data-v-762ca845]{display:flex;align-items:center}.recommend-info .goods-list .list .price-info .user-price uni-text[data-v-762ca845]{font-weight:700;color:red}.recommend-info .goods-list .list .price-info .user-price .jifen[data-v-762ca845]{font-size:%?28?%}.recommend-info .goods-list .list .price-info .user-price .min[data-v-762ca845]{font-size:%?24?%}.recommend-info .goods-list .list .price-info .user-price .max[data-v-762ca845]{font-size:%?28?%}.recommend-info .goods-list .list .price-info .user-price2[data-v-762ca845]{display:flex;align-items:center}.recommend-info .goods-list .list .price-info .user-price2 uni-text[data-v-762ca845]{color:red}.recommend-info .goods-list .list .price-info .user-price2 .jifen[data-v-762ca845]{font-size:%?38?%}.recommend-info .goods-list .list .price-info .user-price2 .min[data-v-762ca845]{font-size:%?24?%}.recommend-info .goods-list .list .price-info .user-price2 .max[data-v-762ca845]{font-size:%?24?%}.recommend-info .goods-list .list .price-info .vip-price[data-v-762ca845]{display:flex;align-items:center}.recommend-info .goods-list .list .price-info .vip-price uni-image[data-v-762ca845]{width:%?26?%;height:%?26?%;margin-right:%?10?%}.recommend-info .goods-list .list .price-info .vip-price uni-text[data-v-762ca845]{color:#fcb735;font-size:%?24?%}.recommend-info .goods-list .list .price-info .del-price[data-v-762ca845]{display:flex;align-items:center}.recommend-info .goods-list .list .price-info .del-price uni-image[data-v-762ca845]{width:%?26?%;height:%?26?%;margin-right:%?10?%}.recommend-info .goods-list .list .price-info .del-price uni-text[data-v-762ca845]{color:#666;font-size:%?24?%;text-decoration:line-through}.recommend-info .goods-list .list .button-rem[data-v-762ca845]{width:90%;height:%?64?%;border-radius:%?16?%;text-align:center;line-height:%?64?%;margin:%?30?% auto 0;color:#fff;background:linear-gradient(90deg,#ff2400,#fea005);border:0}',""]),e.exports=t}}]);