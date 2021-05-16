<template>
  <view class="u-notice-bar-wrap">

  </view>
</template>

<script>
/**
 * noticeBar 滚动通知
 * @description 该组件用于滚动通告场景，有多种模式可供选择
 * @property {Array} list 滚动内容，数组形式
 * @property {String} type 显示的主题（默认 warning）
 * @property {String} volume-icon 是否显示小喇叭（默认true）
 * @property {Boolean} more-icon 是否显示右边的向右箭头（默认false）
 * @property {Boolean} close-icon 是否显示关闭图标（默认false）
 * @property {Boolean} autoplay 是否自动播放（默认true）
 * @property {String} color 文字颜色
 * @property {String, Number} bg-color 背景颜色
 * @property {String} mode 滚动模式（默认horizontal）
 * @property {Boolean} show 是否显示（默认true）
 * @property {String, Number} font-size 字体大小，单位rpx（默认28）
 * @property {String, Number} volume-size 左边喇叭大小（默认34）
 * @property {String, Number} duration 滚动周期时长，只对步进模式有效，横向衔接模式无效，单位ms（默认2000）
 * @property {String, Number} speed 水平滚动时的滚动速度，即每秒移动多少距离，只对水平衔接有效，单位rpx（默认160）
 * @property {Boolean} is-circular mode为horizontal时，指明是否水平衔接滚动（默认true）
 * @property {String} play-state 播放状态，play - 播放，paused - 暂停（默认play）
 * @property {String, Number} border-radius 通知栏圆角（默认为0）
 * @property {String, Number} padding 内边距，字符串，与普通的内边距css写法一直（默认"18rpx 24rpx"）
 * @property {Boolean} no-list-hidden 列表为空时，是否显示组件（默认false）
 * @property {Boolean} disable-touch 是否禁止通过手动滑动切换通知，只有mode = vertical，或者mode = horizontal且is-circular = false时有效（默认true）
 * @event {Function} click 点击通告文字触发，只有mode = vertical，或者mode = horizontal且is-circular = false时有效
 * @event {Function} close 点击右侧关闭图标触发
 * @event {Function} getMore 点击右侧向右图标触发
 * @event {Function} end 列表的消息每次被播放一个周期时触发，只有mode = vertical，或者mode = horizontal且is-circular = false时有效
 * @example <u-notice-bar :more-icon="true" :list="list"></u-notice-bar>
 */
export default {
  name: "u-notice-bar",
  props: {
    // 显示的内容，数组
    list: {
      type: Array,
      default() {
        return []
      }
    },
    // 显示的主题，success、error、primary、info、warning
    type: {
      type: String,
      default: 'warning'
    },
    // 是否显示左侧的音量图标
    volumeIcon: {
      type: Boolean,
      default: true
    },
    // 音量喇叭的大小
    volumeSize: {
      type: [Number, String],
      default: 34
    },
    // 是否显示右侧的右箭头图标
    moreIcon: {
      type: Boolean,
      default: false
    },
    // 是否显示右侧的关闭图标
    closeIcon: {
      type: Boolean,
      default: false
    },
    // 是否自动播放
    autoplay: {
      type: Boolean,
      default: true
    },
    // 文字颜色，各图标也会使用文字颜色
    color: {
      type: String,
      default: ''
    },
    // 背景颜色
    bgColor: {
      type: String,
      default: ''
    },
    // 滚动方向，horizontal-水平滚动，vertical-垂直滚动
    mode: {
      type: String,
      default: 'horizontal'
    },
    // 是否显示
    show: {
      type: Boolean,
      default: true
    },
    // 字体大小，单位rpx
    fontSize: {
      type: [Number, String],
      default: 28
    },
    // 滚动一个周期的时间长，单位ms
    duration: {
      type: [Number, String],
      default: 2000
    },
    // 水平滚动时的滚动速度，即每秒滚动多少rpx，这有利于控制文字无论多少时，都能有一个恒定的速度
    speed: {
      type: [Number, String],
      default: 160
    },
    // 播放状态，play-播放，paused-暂停
    playState: {
      type: String,
      default: 'play'
    },
  }
}
</script>

<style scoped lang="scss">

</style>
