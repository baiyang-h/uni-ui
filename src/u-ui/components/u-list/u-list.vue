<template>
  <view class="u-list" :class="{'u-border-bottom u-border-top': border}">
    <slot />
  </view>
</template>

<script>
export default {
  name: "u-list",
  props: {
    // 背景颜色
    bgColor: {
      type: String,
      default: 'transparent'    // 背景透明
    },
    // 是否显示list上下边框
    border: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.u-list {
  width: 100%;
}
</style>