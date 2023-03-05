<template>
  <view class="count_down-box">
    <text v-if="title" class="title">{{ title }}</text>
    <text v-if="hasHour" class="clock">{{ hours }}</text>
    <text v-if="hasHour" class="colon">:</text>
    <text class="clock">{{ minutes }}</text>
    <text class="colon">:</text>
    <text class="clock">{{ seconds }}</text>
    <text v-if="hasMillisecond" class="colon">:</text>
    <text v-if="hasMillisecond" class="clock">{{ milliseconds }}</text>
  </view>
</template>

<script>
export default {
  name: "countDown",
  props: {
    title: {
      type: String,
      default: ''
    },
    hasHour: {
      type: Boolean,
      default: true
    },
    hasMillisecond: {
      type: Boolean,
      default: true
    },
    endTimestamp: {
      type: Number,
      default: 0
    },
    delay: {
      type: Number,
      default: 120 // 推迟时间，单位秒
    },
    /**
     * 是否是无限的，倒计时结束是否重头再来，仅omorrow、delay模式生效
     */
    isInfinite: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: 'tomorrow' // tomorrow、delay、custom
    }
  },
  data() {
    return {
      // 倒计时
      endTime: 0,
      days: '00', // 天数
      hours: '00', // 小时
      minutes: '00', // 分钟
      seconds: '00', // 秒数
      milliseconds: '00', // 毫秒
      timer: null
    }
  },
  mounted() {
    this.startHandle() // 开始处理
  },
  beforeDestroy() {
    clearInterval(this.timer) // 清除定时器
  },
  methods: {
    /**
     * 开始处理
     */
    startHandle() {
      const that = this;
      if (that.mode === 'tomorrow') {
        that.tomorrowHandle()
      } else if (that.mode === 'delay') {
        that.delayHandle()
      } else if (that.mode === 'custom') {
        that.endTime = this.endTimestamp
      }
      clearInterval(this.timer) // 清除定时器
      that.timer = setInterval(() => {
        that.showtime()
      }, that.hasMillisecond ? 20 : 9e2)
    },
    /**
     * 明天处理
     */
    tomorrowHandle() {
      const that = this;
      const dateTime = new Date()
      const year = dateTime.getFullYear() // 返回年份
      const month = dateTime.getMonth() // 返回月份（从 0-11）
      const date = dateTime.getDate() // 返回月中的第几天（从 1 到 31）
      that.endTime = new Date(year, month, date + 1, 0, 0, 0).getTime() // 明天零时刻
    },
    /**
     * 延迟处理
     */
    delayHandle() {
      const that = this;
      that.endTime = new Date().getTime() + that.delay * 1e3
    },
    /**
     * 显示时间
     */
    showtime() {
      let that = this;
      const dMilliseconds = that.endTime - new Date().getTime() // 距离结束时间的毫秒数
      const dSeconds = dMilliseconds / 1000 // 距离结束时间的秒数
      if (dMilliseconds < 0) {
        that.days = "00";
        that.hours = "00";
        that.minutes = "00";
        that.seconds = "00";
        that.milliseconds = "00";
        clearInterval(that.timer) // 清除定时器
        if (that.isInfinite && that.mode !== 'custom') {
          setTimeout(() => {
            that.startHandle() // 开始处理
          }, 1e3)
        }
        return;
      }
      let days = Math.floor(dSeconds / (60 * 60 * 24)), // 计算天数
          hours = Math.floor(dSeconds % (60 * 60 * 24) / (60 * 60)), // 计算小时数
          minutes = Math.floor(dSeconds % (60 * 60) / 60), // 计算分钟数
          seconds = Math.floor(dSeconds % 60), // 计算秒数
          milliseconds = Math.floor((dMilliseconds % 1000) / 10); // 计算毫秒数

      if (days.toString().length < 2) {
        days = '0' + days
      }
      if (hours.toString().length < 2) {
        hours = '0' + hours
      }
      if (minutes.toString().length < 2) {
        minutes = '0' + minutes
      }
      if (seconds.toString().length < 2) {
        seconds = '0' + seconds
      }
      if (milliseconds.toString().length < 2) {
        milliseconds = '0' + milliseconds
      }
      // 返回倒计时的字符串
      that.days = days;
      that.hours = hours;
      that.minutes = minutes;
      that.seconds = seconds;
      that.milliseconds = milliseconds;
    }
  }
}
</script>

<style lang="scss" scoped>
.count_down-box{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60rpx;
  line-height: 60rpx;
  margin: 20rpx 0;

  .title {
    color: rgb(0, 0, 0);
    font-size: 32rpx;
    font-weight: 600;
    margin-right: 20rpx;
  }
  .clock{
    display: inline-block;
    background: #1a8ee9;
    border-radius: 10rpx;
    min-width: 56rpx;
    height: 56rpx;
    line-height: 56rpx;
    padding: 0;
    color: #ffffff;
    text-align: center;
    font-weight: bold;
  }
  .colon {
    display: inline-block;
    margin: 0 8rpx;
    color: #1a8ee9;
    height: 56rpx;
    line-height: 56rpx;
    font-weight: bold;
  }
}
</style>
