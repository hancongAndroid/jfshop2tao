(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-signin-index"],{"092f":function(i,t,a){var n=a("24fb");t=n(!1),t.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 主要颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.page[data-v-9c995a00]{position:absolute;left:0;top:0;width:100%;height:100%;background-color:#f6f6f6}.head-bg[data-v-9c995a00]{position:relative;width:100%;height:%?460?%;background:linear-gradient(#fe3b0f,#fc603a)}.head-bg .head-user[data-v-9c995a00]{display:flex;align-items:center;justify-content:space-between;padding:0 4%;height:%?100?%}.head-bg .head-user .user[data-v-9c995a00]{display:flex;align-items:center}.head-bg .head-user .user uni-image[data-v-9c995a00]{width:%?70?%;height:%?70?%;border-radius:100%}.head-bg .head-user .user uni-text[data-v-9c995a00]{font-size:%?28?%;color:#fff;margin-left:%?20?%}.head-bg .head-user .exchange[data-v-9c995a00]{display:flex;align-items:center}.head-bg .head-user .exchange uni-text[data-v-9c995a00]{font-size:%?28?%;color:#fff}.head-bg .integral-balance[data-v-9c995a00]{display:flex;align-items:center;justify-content:center;width:100%;height:%?240?%}.head-bg .integral-balance .integral[data-v-9c995a00]{display:flex;flex-direction:column;justify-content:center;align-items:center}.head-bg .integral-balance .integral uni-text[data-v-9c995a00]{font-size:%?30?%;color:#fff}.head-bg .integral-balance .integral .number[data-v-9c995a00]{font-size:%?60?%;margin-top:%?10?%}.head-bg .integral-balance .integral .btn[data-v-9c995a00]{display:flex;align-items:center;justify-content:center;width:%?260?%;height:%?70?%;background-color:#fff;color:#fe3b0f;font-size:%?26?%;border-radius:%?80?%;margin-top:%?30?%}.head-bg .integral-balance .integral .action[data-v-9c995a00]{background-color:#f6f6f6;color:#959595}.head-bg .bg[data-v-9c995a00]{position:absolute;left:0;bottom:0;width:100%;height:%?40?%}.head-bg .bg uni-image[data-v-9c995a00]{width:100%;height:100%}\r\n/* 签到 */.Signin-data[data-v-9c995a00]{width:100%;background-color:#fff;border-radius:%?20?%}.Signin-data .signin-title[data-v-9c995a00]{display:flex;align-items:center;padding:0 4%;height:%?100?%}.Signin-data .signin-title .title[data-v-9c995a00]{display:flex;align-items:center}.Signin-data .signin-title .title uni-text[data-v-9c995a00]{color:#222;font-size:%?28?%;font-weight:700}.Signin-data .day-list[data-v-9c995a00]{display:flex;align-items:center;padding:0 4%;height:%?200?%}.Signin-data .day-list .list[data-v-9c995a00]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:14%;height:100%}.Signin-data .day-list .list .circle[data-v-9c995a00]{display:flex;align-items:center;justify-content:center;width:%?60?%;height:%?60?%;background-color:#eee;border-radius:100%}.Signin-data .day-list .list .circle uni-text[data-v-9c995a00]{font-size:%?24?%;color:#959595}.Signin-data .day-list .list .day[data-v-9c995a00]{display:flex;align-items:center;justify-content:center;margin-top:%?20?%}.Signin-data .day-list .list .day uni-text[data-v-9c995a00]{font-size:%?26?%;color:#555}.Signin-data .day-list .action .circle[data-v-9c995a00]{background:rgba(233,59,61,.3)}.Signin-data .day-list .action .circle uni-text[data-v-9c995a00]{color:#fe3b0f;font-weight:700}\r\n/* 邀请新人 */.invitation-data[data-v-9c995a00]{width:100%;background-color:#fff;border-radius:%?20?%;margin:%?20?% auto;padding-bottom:%?20?%}.invitation-data .invitation-title[data-v-9c995a00]{display:flex;align-items:center;padding:4%;height:%?100?%}.invitation-data .invitation-title .title[data-v-9c995a00]{display:flex;align-items:center;width:100%}.invitation-data .invitation-title .title uni-text[data-v-9c995a00]{color:#222;font-size:%?28?%}.invitation-data .invitation-show[data-v-9c995a00]{display:flex;align-items:center;width:94%;height:%?160?%;margin:%?20?% auto;background-color:#fff;box-shadow:0 0 %?10?% rgba(0,0,0,.1);border-radius:%?20?%;padding-top:%?10?%}.invitation-data .invitation-show .icon[data-v-9c995a00]{display:flex;justify-content:center;width:15%;height:80%}.invitation-data .invitation-show .icon uni-text[data-v-9c995a00]{font-size:%?48?%;color:#07e}.invitation-data .invitation-show .item[data-v-9c995a00]{width:85%;height:80%;padding-right:%?20?%}.invitation-data .invitation-show .item .title-btn[data-v-9c995a00]{display:flex;justify-content:space-between;width:100%;height:%?80?%}.invitation-data .invitation-show .item .title-btn .title[data-v-9c995a00]{display:flex}.invitation-data .invitation-show .item .title-btn .title .bt[data-v-9c995a00]{color:#222;font-size:%?30?%;font-weight:700}.invitation-data .invitation-show .item .title-btn .title .ji[data-v-9c995a00]{font-size:%?26?%;color:#fe3b0f;margin-left:%?10?%}.invitation-data .invitation-show .item .title-btn .btn[data-v-9c995a00]{display:flex;align-items:center;justify-content:center;width:%?180?%;height:%?50?%;background:linear-gradient(90deg,#fe3b0f,#fc603a);border-radius:%?60?%;box-shadow:0 %?10?% %?10?% #fe3b0f}.invitation-data .invitation-show .item .title-btn .btn uni-text[data-v-9c995a00]{color:#fff;font-size:%?24?%}.invitation-data .invitation-show .item .describe[data-v-9c995a00]{display:flex;align-items:center}.invitation-data .invitation-show .item .describe uni-text[data-v-9c995a00]{font-size:%?24?%;color:#959595}\r\n/* 签到弹窗 */.sigin-hint .sigin-content[data-v-9c995a00]{width:100%;height:%?500?%;background-color:#fff}.sigin-hint .sigin-content .icon[data-v-9c995a00]{display:flex;align-items:center;justify-content:center;width:100%;height:%?200?%}.sigin-hint .sigin-content .icon uni-text[data-v-9c995a00]{color:#fe3b0f;font-size:%?160?%}.sigin-hint .sigin-content .title[data-v-9c995a00]{display:flex;align-items:center;justify-content:center;width:100%;height:%?100?%}.sigin-hint .sigin-content .title uni-view[data-v-9c995a00]{font-size:%?30?%;font-weight:700}.sigin-hint .sigin-content .title uni-view uni-text[data-v-9c995a00]{color:#fe3b0f}.sigin-hint .sigin-content .btn[data-v-9c995a00]{display:flex;align-items:center;justify-content:center;width:80%;height:%?60?%;background:linear-gradient(90deg,#fe3b0f,#fc603a);border-radius:%?60?%;box-shadow:0 %?10?% %?10?% #fe3b0f;margin:%?40?% auto 0}.sigin-hint .sigin-content .btn uni-text[data-v-9c995a00]{font-size:%?26?%;color:#fff}\r\n/* 规则说明弹窗*/.rule-win .rule-content[data-v-9c995a00]{padding:%?20?% 4%;text-align:left}.rule-win .rule-content uni-text[data-v-9c995a00]{font-size:%?26?%;color:#555;text-align:left;line-height:%?50?%}',""]),i.exports=t},1371:function(i,t,a){"use strict";a.r(t);var n=a("a19c"),e=a("7f67");for(var s in e)["default"].indexOf(s)<0&&function(i){a.d(t,i,(function(){return e[i]}))}(s);a("8d71");var o=a("f0c5"),c=Object(o["a"])(e["default"],n["b"],n["c"],!1,null,"9c995a00",null,!1,n["a"],void 0);t["default"]=c.exports},"633b":function(i,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{main_name:"",isSignin:!1,SigninStatus:0,isRule:!1,info:[]}},onShow:function(){this.getsignin(),this.getchannel()},methods:{getchannel:function(){var i=this;i.req({url:"getchannel",data:{code:uni.getStorageSync("channel_code")},Loading:!0,success:function(t){console.log(t),1==t.code&&(uni.setStorageSync("main_name",t.data),i.main_name=t.data)}})},getsignin:function(){var i=this;i.req({url:"user/signin_init",data:{},Loading:!0,success:function(t){console.log(t),i.info=t.data}})},onIntegral:function(){var i=this;i.req({url:"user/dosignin",data:{},Loading:!0,success:function(t){console.log(t),i.isSignin=!0,i.SigninStatus=1}})}}};t.default=n},"7f67":function(i,t,a){"use strict";a.r(t);var n=a("633b"),e=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(i){a.d(t,i,(function(){return n[i]}))}(s);t["default"]=e.a},"8d4b":function(i,t,a){var n=a("092f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var e=a("4f06").default;e("9953f626",n,!0,{sourceMap:!1,shadowMode:!1})},"8d71":function(i,t,a){"use strict";var n=a("8d4b"),e=a.n(n);e.a},a19c:function(i,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return e})),a.d(t,"a",(function(){}));var n=function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("v-uni-view",{staticClass:"page"},[a("v-uni-view",{staticClass:"head-bg"},[a("v-uni-view",{staticClass:"head-user"},[a("v-uni-view",{staticClass:"user"}),a("v-uni-view",{staticClass:"exchange",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.isRule=!0}}},[a("v-uni-text",[i._v("规则说明")]),a("v-uni-text",{staticClass:"iconfont icon-more"})],1)],1),a("v-uni-view",{staticClass:"integral-balance"},[a("v-uni-view",{staticClass:"integral"},[a("v-uni-text",[i._v("累计获得"+i._s(i.main_name))]),a("v-uni-text",{staticClass:"number"},[i._v(i._s(i.info.all_integral))]),0==i.info.nowday?a("v-uni-text",{staticClass:"btn",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.onIntegral.apply(void 0,arguments)}}},[i._v("立即签到")]):i._e(),1==i.info.nowday?a("v-uni-text",{staticClass:"btn action"},[i._v("已签到")]):i._e()],1)],1),a("v-uni-view",{staticClass:"bg"},[a("v-uni-image",{attrs:{src:"/static/integral_bg1.png",mode:""}})],1)],1),a("v-uni-view",{staticClass:"Signin-data"},[a("v-uni-view",{staticClass:"signin-title"},[a("v-uni-view",{staticClass:"title"},[a("v-uni-text",[i._v("每日签到")])],1)],1),a("v-uni-view",{staticClass:"day-list"},[a("v-uni-view",{staticClass:"list",class:1==i.info.day1?"action":"action2"},[a("v-uni-view",{staticClass:"circle"},[a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:0==i.info.day1,expression:"info.day1 == 0"}]},[i._v("+"+i._s(i.info.day_integral))]),a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:1==i.info.day1,expression:"info.day1 == 1"}],staticClass:"iconfont icon-duihao"}),a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:2==i.info.day1,expression:"info.day1 == 2"}],staticClass:"iconfont icon-close1"})],1),a("v-uni-view",{staticClass:"day"},[a("v-uni-text",[i._v("星期一")])],1)],1),a("v-uni-view",{staticClass:"list",class:1==i.info.day2?"action":"action2"},[a("v-uni-view",{staticClass:"circle"},[a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:0==i.info.day2,expression:"info.day2 == 0"}]},[i._v("+"+i._s(i.info.day_integral))]),a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:1==i.info.day2,expression:"info.day2 == 1"}],staticClass:"iconfont icon-duihao"}),a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:2==i.info.day2,expression:"info.day2 == 2"}],staticClass:"iconfont icon-close1"})],1),a("v-uni-view",{staticClass:"day"},[a("v-uni-text",[i._v("星期二")])],1)],1),a("v-uni-view",{staticClass:"list",class:1==i.info.day3?"action":"action2"},[a("v-uni-view",{staticClass:"circle"},[a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:0==i.info.day3,expression:"info.day3 == 0"}]},[i._v("+"+i._s(i.info.day_integral))]),a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:1==i.info.day3,expression:"info.day3 == 1"}],staticClass:"iconfont icon-duihao"}),a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:2==i.info.day3,expression:"info.day3 == 2"}],staticClass:"iconfont icon-close1"})],1),a("v-uni-view",{staticClass:"day"},[a("v-uni-text",[i._v("星期三")])],1)],1),a("v-uni-view",{staticClass:"list",class:1==i.info.day4?"action":"action2"},[a("v-uni-view",{staticClass:"circle"},[a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:0==i.info.day4,expression:"info.day4 == 0"}]},[i._v("+"+i._s(i.info.day_integral))]),a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:1==i.info.day4,expression:"info.day4 == 1"}],staticClass:"iconfont icon-duihao"}),a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:2==i.info.day4,expression:"info.day4 == 2"}],staticClass:"iconfont icon-close1"})],1),a("v-uni-view",{staticClass:"day"},[a("v-uni-text",[i._v("星期四")])],1)],1),a("v-uni-view",{staticClass:"list",class:1==i.info.day5?"action":"action2"},[a("v-uni-view",{staticClass:"circle"},[a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:0==i.info.day5,expression:"info.day5 == 0"}]},[i._v("+"+i._s(i.info.day_integral))]),a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:1==i.info.day5,expression:"info.day5 == 1"}],staticClass:"iconfont icon-duihao"}),a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:2==i.info.day5,expression:"info.day5 == 2"}],staticClass:"iconfont icon-close1"})],1),a("v-uni-view",{staticClass:"day"},[a("v-uni-text",[i._v("星期五")])],1)],1),a("v-uni-view",{staticClass:"list",class:1==i.info.day6?"action":"action2"},[a("v-uni-view",{staticClass:"circle"},[a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:0==i.info.day6,expression:"info.day6 == 0"}]},[i._v("+"+i._s(i.info.day_integral))]),a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:1==i.info.day6,expression:"info.day6 == 1"}],staticClass:"iconfont icon-duihao"}),a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:2==i.info.day6,expression:"info.day6 == 2"}],staticClass:"iconfont icon-close1"})],1),a("v-uni-view",{staticClass:"day"},[a("v-uni-text",[i._v("星期六")])],1)],1),a("v-uni-view",{staticClass:"list",class:1==i.info.day7?"action":"action2"},[a("v-uni-view",{staticClass:"circle"},[a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:0==i.info.day7,expression:"info.day7 == 0"}]},[i._v("+"+i._s(i.info.day_integral))]),a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:1==i.info.day7,expression:"info.day7 == 1"}],staticClass:"iconfont icon-duihao"}),a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:2==i.info.day7,expression:"info.day7 == 2"}],staticClass:"iconfont icon-close1"})],1),a("v-uni-view",{staticClass:"day"},[a("v-uni-text",[i._v("星期日")])],1)],1)],1)],1),a("v-uni-view",{staticClass:"sigin-hint"},[a("v-uni-view",{staticClass:"cu-modal",class:{show:i.isSignin}},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[a("v-uni-view",{staticClass:"content"},[i._v("签到成功")]),a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-close text-red",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.isSignin=!1}}})],1)],1),a("v-uni-view",{staticClass:"sigin-content"},[a("v-uni-view",{staticClass:"icon"},[a("v-uni-text",{staticClass:"iconfont icon-signin"})],1),a("v-uni-view",{staticClass:"title"},[a("v-uni-view",[i._v("恭喜您，签到成功，获得"),a("v-uni-text",[i._v(i._s(i.info.day_integral))]),i._v(i._s(i.main_name))],1)],1),a("v-uni-view",{staticClass:"hint"},[a("v-uni-text",[i._v("连续签到7天可获得额外奖励")])],1),a("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.isSignin=!1}}},[a("v-uni-text",[i._v("我知道了")])],1)],1)],1)],1)],1),a("v-uni-view",{staticClass:"rule-win"},[a("v-uni-view",{staticClass:"cu-modal",class:{show:i.isRule}},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[a("v-uni-view",{staticClass:"content"},[i._v("规则说明")]),a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-close text-red",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.isRule=!1}}})],1)],1),a("v-uni-view",{staticClass:"rule-content"},[a("v-uni-text",[i._v("1.每次签到可送"+i._s(i.info.day_integral)+i._s(i.main_name)+";\n\t\t\t\t\t\t2.每日1次机会;")])],1)],1)],1)],1)],1)},e=[]}}]);