<template>
    <view>
        <web-view :webview-styles="webviewStyles" :src="info.kefu_url"></web-view>
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
				info:[],
            }
        },
		onLoad(e){
			this.loadData();
		},
		methods:{
			loadData() {
				let that = this;
				that.req({
					url: 'getabouts',
					data: {},
					Loading: true,
					success: function(res) {
						console.log(res)
						that.info = res.data;
					}
				})
			},
		}
    }
</script>

<style>

</style>