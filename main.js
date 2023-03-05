import Vue from 'vue';
import App from './App';
// 弹出框
import DialogBox from './components/DialogBox/DialogBox';
Vue.prototype.gopage = function(path){
	console.log(path)
			uni.navigateTo({
				url:path,
				fail:function(e){
					uni.switchTab({
						url:path
					})
				}
			})
},

Vue.prototype.req = function(param, backpage, backtype) {
	uni.getNetworkType({
		success: function(res) {
			if (res.networkType == 'none') {
				uni.showToast({
					title: '网络连接异常，请检查网络',
					icon: 'none',
				})
				return
			}
		}
	});
	var _self = this,
		url = param.url,
		method = param.method || 'POST',
		header = {},
		data = param.data || {},
		Loading = param.Loading || false;

	var token = uni.getStorageSync('token');
	console.log("token:",token)
	if(token == ''){
		var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; // 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
		var maxPos = $chars.length;
		var pwd = '';
		let i;
		for (i = 0; i < 32; i++) {
			pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
		}
	  uni.setStorageSync('token',pwd);
	  token = pwd;
	}
	//拼接完整请求地址
	var requestUrl = this.siteBaseUrl + url;
	if (method) {
		method = method.toUpperCase(); //小写改为大写
		// console.log(token,11)
		if (method == "POST") {
			if(token != ''){
				header = {
					'content-type': "application/x-www-form-urlencoded",
					'token': token
				};
			}else{
				header = {
					'content-type': "application/x-www-form-urlencoded",
				};
			}
			
		} else {
			header = {
				'content-type': "application/json",
			};
		}
	} else {
		method = "GET";
		header = {
			'content-type': "application/json",
		};
	}
	//用户交互:加载圈
	// console.log(!Loading)
	if (!Loading) {
		uni.showLoading({
			title: '加载中...'
		});
	}
	//网络请求

	uni.request({
		url: requestUrl,
		method: method,
		header: header,
		data: data,
		success: res => {
			// console.log(res.data)
			if (res.data.code == 1) { //返回结果码code判断:1成功,-1错误
				// uni.showToast({
				// 	title: res.data.msg,
				// 	icon: 'none',
				// })

			} else if (res.data.code == 3 || res.data.code == 4) {
				uni.setStorageSync('token', '')
				uni.navigateTo({
					url:'/pages/login/login'
				})
				// uni.showToast({
				// 	title: res.data.msg,
				// 	icon: 'none',
				// })


			} else {
				// uni.showToast({
				// 	title: '加载失败',
				// 	icon: 'none',
				// })
				// console.log(22)
				// return;
			}
			typeof param.success == "function" && param.success(res.data);

		},
		fail: (e) => {
			console.log("网络请求fail:" + JSON.stringify(e));
			typeof param.fail == "function" && param.fail(e.data);
		},
		complete: () => {
			// setTimeout(function(){
			uni.hideLoading();
			// },500)
			typeof param.complete == "function" && param.complete();
			return;
		}
	});

}


Vue.prototype.siteBaseUrl = 'https://houtai.se34567.xyz/api/';
Vue.prototype.H5BaseUrl = 'https://houtai.se34567.xyz/';



Vue.config.productionTip = false

// 全局组件
Vue.component('DialogBox', DialogBox);
//mescroll
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
