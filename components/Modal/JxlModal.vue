<template>
  <view :class="['cu-modal', 'bottom-modal', isShow ? 'show' : '']"  @click.stop="hide">
    <view :class="['cu-dialog', dialogClass]" :style="dialogStyle" @click.stop="() => {}">
      <image v-if="hasClose" class="dialog-close" src="/static/icon_close.png" @click.stop="hide"></image>
      <slot></slot>
    </view>
  </view>
</template>

<script>
export default {
  name: "JxlModal",
  components: {},
  props: {
    dialogClass: {
      type: String,
      default: ''
    },
    hasClose: {
      type: Boolean,
      default: true
    },
    dialogStyle: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      isShow: false
    }
  },
  computed: {},
  created() {
  },
  mounted() {
  },
  methods: {
    /**
     * 隐藏弹窗
     */
    hide() {
      this.isShow = false
      document.body.style.overflow = ''
    },
    /**
     * 显示弹窗
     */
    show() {
      this.isShow = true
      document.body.style.overflow = 'hidden'
    },
  }
}
</script>

<style lang="scss" scoped>
/* ==================
         模态窗口
 ==================== */
.cu-modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  opacity: 0;
  outline: 0;
  text-align: center;
  -ms-transform: scale(1.185);
  transform: scale(1.185);
  backface-visibility: hidden;
  perspective: 2000upx;
  background: rgba(0, 0, 0, 0.6);
  transition: all 0.3s ease-in-out 0s;
  pointer-events: none;
}

.cu-modal::before {
  content: "\200B";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.cu-modal.show {
  opacity: 1;
  transition-duration: 0.3s;
  -ms-transform: scale(1);
  transform: scale(1);
  overflow-x: hidden;
  overflow-y: auto;
  pointer-events: auto;
}

.cu-dialog {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin-left: auto;
  margin-right: auto;
  width: 680upx;
  max-width: 100%;
  background-color: #ffffff;
  border-radius: 10rpx;
  overflow: hidden;
}

.cu-modal.bottom-modal::before {
  vertical-align: bottom;
}

.cu-modal.bottom-modal .cu-dialog {
  width: 100%;
  border-radius: 0;
}

.cu-modal.bottom-modal {
  margin-bottom: -1000upx;
}

.cu-modal.bottom-modal.show {
  margin-bottom: 0;
}

.cu-modal.drawer-modal {
  transform: scale(1);
  display: flex;
}

.cu-modal.drawer-modal .cu-dialog {
  height: 100%;
  min-width: 200upx;
  border-radius: 0;
  margin: initial;
  transition-duration: 0.3s;
}

.cu-modal.drawer-modal.justify-start .cu-dialog {
  transform: translateX(-100%);
}

.cu-modal.drawer-modal.justify-end .cu-dialog {
  transform: translateX(100%);
}

.cu-modal.drawer-modal.show .cu-dialog {
  transform: translateX(0%);
}
.cu-modal .cu-dialog>.cu-bar:first-child .action{
  min-width: 100rpx;
  margin-right: 0;
  min-height: 100rpx;
}
.cu-modal .cu-dialog .dialog-close {
  position: absolute;
  right: 20rpx;
  top: 20rpx;
  width: 32rpx;
  height: 32rpx;
}
</style>
