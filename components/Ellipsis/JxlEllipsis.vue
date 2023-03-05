<template>
  <view class="text-ellipsis" :style="{ '-webkit-line-clamp': line }">
	<text class="ela">默认</text>
	<text class="elb">{{ text }}</text>
  </view>
</template>

<script>
/**
 * JxlEllipsis 文本省略
 * 解决内容超出理想区域，破坏页面排版的难题。
 * 基于 CSS Style 实现限制文本多行显示，超出则省略隐藏的功能。
 */
export default {
  name: 'JxlEllipsis',
  props: {
    /**
     * 需要显示的文本
     */
    text: {
      type: String,
      default: ''
    },
    /**
     * 需要限制的文本行数
     */
    line: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.text-ellipsis {
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-size: 32rpx;
  font-weight: bold;
  .ela{
	  color: #fff;
	  background: #FF162E;
	  border-radius: 6rpx;
	  padding: 2rpx 10rpx;
	  font-size: 24rpx;
  }
  .elb{
	  margin-left: 10rpx;
  }
}
</style>
