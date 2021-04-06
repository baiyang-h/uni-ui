<template>
  <view class="u-list-group">
    <view class="u-list-group--title" v-if="title" :style="[titleStyle]">
      {{title}}
    </view>
    <view class="u-list-group--box" :class="{'u-border-bottom u-border-top': border}">
      <slot />
    </view>
  </view>
</template>

<script>
/**
 * listGroup 单元格的包装组件
 * @description 搭配 u-list-item， 一般会进行分类，一个组
 * @property {String} title 分组标题
 * @property {Boolean} border 是否显示外边框（默认true）
 * @property {Object} title-style 分组标题的的样式，对象形式，如{'font-size': '24rpx'} 或 {'fontSize': '24rpx'}
 * @example <u-cell-group title="设置喜好" :title-style="{{fontSize: '28rpx'}}">
 */
export default {
  name: "u-list-group",
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
.u-list-group {
  width: 100%;

  .u-list-group--title {
    padding: 30rpx 32rpx 10rpx 32rpx;
    font-size: 30rpx;
    text-align: left;
    color: $u-tips-color;
  }

  .u-list-group--box {
    background-color: #FFFFFF;
  }
}
</style>