<template>
  <view class="u-panel">
    <view class="u-title u-m-b-20">{{ title }}</view>
    <view>
      <slot></slot>
    </view>
  </view>
</template>

<script>
/**
 * 基础布局组件 标题+内容
 * @property {String} title 标题名
 */
export default {
  name: "u-panel",
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>