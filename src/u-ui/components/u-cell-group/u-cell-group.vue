<template>
  <view class="u-cell-box">
    <view class="u-cell-title" v-if="title" :style="[titleStyle]">
      {{title}}
    </view>
    <view class="u-cell-item-box" :class="{'u-border-bottom u-border-top': border}">
      <slot />
    </view>
  </view>
</template>

<script>
/**
 * cellGroup 单元格的包装组件
 * @description 搭配 u-cell-item， 一般会进行分类，一个组
 * @property {String} title 分组标题
 * @property {Boolean} border 是否显示外边框（默认true）
 * @property {Object} title-style 分组标题的的样式，对象形式，如{'font-size': '24rpx'} 或 {'fontSize': '24rpx'}
 * @example <u-cell-group title="设置喜好" :title-style="{{fontSize: '28rpx'}}">
 */
export default {
  name: "u-cell-group",
  props: {
    // 分组标题
    title: {
      type: String,
      default: ''
    },
    // 分组标题的样式，对象形式
    titleStyle: {
      type: Object,
      default () {
        return {};
      }
    },
    // 是否显示分组list上下边框
    border: {
      type: Boolean,
      default: true
    },
  }
}
</script>

<style scoped lang="scss">
.u-cell-box {
  width: 100%;

  .u-cell-title {
    padding: 30rpx 32rpx 10rpx 32rpx;
    font-size: 30rpx;
    text-align: left;
    color: $u-tips-color;
  }

  .u-cell-item-box {
    background-color: #FFFFFF;
  }
}
</style>
