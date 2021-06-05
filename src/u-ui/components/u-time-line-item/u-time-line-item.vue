<template>
  <view class="u-time-line-item">
    <view class="u-time-line-node" :style="[nodeStyle]">
      <slot name="node">
        <view class="u-dot"></view>
      </slot>
    </view>
    <slot name="content" />
  </view>
</template>

<script>
/**
 * timeLineItem 时间轴Item
 * @description 时间轴组件一般用于物流信息展示，各种跟时间相关的记录等场景。（搭配 u-time-line 使用）
 *
 * @property {String} bg-color 左边节点的背景颜色，一般通过slot内容自定义背景颜色即可（默认#fff）
 * @property {String Number} node-top 节点左边图标绝对定位的top值，单位rpx
 * @example <u-time-line-item node-top="2">...</u-time-line-item>
 */
export default {
  name: "u-time-line-item",
  props: {
    // 节点的背景颜色
    bgColor: {
      type: String,
      default: 'fff'
    },
    // 节点左边图标绝对定位的top值
    nodeTop: {
      type: [String, Number],
      default: ''
    }
  },
  computed: {
    nodeStyle() {
      let style = {
        backgroundColor: this.bgColor
      };
      if(this.nodeTop !== "") style.top = this.nodeTop + 'rpx';
      return style;
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/style.components";

.u-time-line-item {
  @include u-flex;
  width: 100%;
  position: relative;
  margin-bottom: 32rpx;
}

.u-time-line-node {
  @include u-flex;
  position: absolute;
  left: -40rpx;
  transform-origin: 0;
  transform: translateX(-50%);
  align-items: center;
  justify-content: center;
  z-index: 1;
  font-size: 24rpx;
}

.u-dot {
  height: 16rpx;
  width: 16rpx;
  border-radius: 100rpx;
  background: #ddd;
}
</style>
