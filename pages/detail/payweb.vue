<template>
    <view>
        <web-view :webview-styles="webviewStyles" :src="url"></web-view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                webviewStyles: {
                    progress: {
                        color: '#FF3333'
                    }
                },
				url:'',
            }
        },
		onLoad(e){
			console.log("接到后",e.item);
			if(e.channel == 1){
				// 将接口返回的form表单显示到页面
				document.querySelector('body').innerHTML = e.item;
				// 调用submit方法
				document.forms[0].submit();
			}
			//this.url = JSON.parse(decodeURIComponent(e.item));
		},
    }
</script>

<style>

</style>