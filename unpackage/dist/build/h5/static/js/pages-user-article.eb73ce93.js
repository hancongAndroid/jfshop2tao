(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-article"],{"329d":function(t,a,e){"use strict";e.r(a);var n=e("5bca"),i=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},"3efb":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".text_2[data-v-55c2a55e],.text_3[data-v-55c2a55e]{font-size:%?28?%;margin-top:%?60?%}.text_1[data-v-55c2a55e]{margin-top:%?30?%;font-size:%?32?%;color:#333;font-family:SourceHanSansCN-Regular}.img[data-v-55c2a55e]{width:100%;margin:0 auto!important}uni-image[data-v-55c2a55e]{margin:0 auto!important}.guize[data-v-55c2a55e]{padding:%?24?%}.title[data-v-55c2a55e]{width:100%;height:%?140?%;line-height:%?120?%;text-align:center;font-size:%?44?%;color:#000;font-weight:700}uni-page-body[data-v-55c2a55e]{width:100%;height:auto;background:#fff}body.?%PAGE?%[data-v-55c2a55e]{background:#fff}",""]),t.exports=a},"5bca":function(t,a,e){"use strict";e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{info:""}},onLoad:function(t){console.log(t),this.getmanualinfo(t.id)},methods:{getmanualinfo:function(t){var a=this;a.req({url:"getabouts",data:{id:t},success:function(t){console.log(t),a.info=t.data}})}}};a.default=n},"5c2f":function(t,a,e){var n=e("3efb");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("2927c288",n,!0,{sourceMap:!1,shadowMode:!1})},"82b3":function(t,a,e){"use strict";e.r(a);var n=e("c4fc"),i=e("329d");for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("a540");var c=e("f0c5"),u=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"55c2a55e",null,!1,n["a"],void 0);a["default"]=u.exports},a540:function(t,a,e){"use strict";var n=e("5c2f"),i=e.n(n);i.a},c4fc:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){}));var n=function(){var t=this.$createElement,a=this._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticClass:"guize"},[a("v-uni-rich-text",{staticStyle:{"word-wrap":"break-word"},attrs:{nodes:this.info.content}})],1)],1)},i=[]}}]);