(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-kefu-web"],{"326af":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{webviewStyles:{progress:{color:"#FF3333"}},info:[]}},onLoad:function(t){this.loadData()},methods:{loadData:function(){var t=this;t.req({url:"getabouts",data:{},Loading:!0,success:function(e){console.log(e),t.info=e.data}})}}};e.default=a},add4:function(t,e,n){"use strict";n.r(e);var a=n("326af"),u=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=u.a},d843:function(t,e,n){"use strict";n.r(e);var a=n("ea91"),u=n("add4");for(var r in u)"default"!==r&&function(t){n.d(e,t,(function(){return u[t]}))}(r);var o,i=n("f0c5"),f=Object(i["a"])(u["default"],a["b"],a["c"],!1,null,"24aa26e0",null,!1,a["a"],o);e["default"]=f.exports},ea91:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-web-view",{attrs:{"webview-styles":t.webviewStyles,src:t.info.kefu_url}})],1)},r=[]}}]);