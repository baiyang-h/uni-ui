<template>
  <view class="wrap-page">
    <u-panel title="默认效果（30rpx）">
      <u-gap bg-color="rgb(243, 244, 246)" />
    </u-panel>
    <u-gap />
    <u-panel title="高度70rpx">
      <u-gap height="70" bg-color="rgb(243, 244, 246)" />
    </u-panel>
    <u-gap />
    <u-panel title="背景颜色">
      <u-gap height="70" bg-color="#a0cfff" />
    </u-panel>
    <u-gap />
    <u-panel title="上下边距">
      <u-gap height="70" bg-color="#71d5a1" margin-top="70" margin-bottom="30" />
    </u-panel>
  </view>
</template>

<script>
export default {
  name: "GapPage"
}
</script>

<style scoped>

</style>
