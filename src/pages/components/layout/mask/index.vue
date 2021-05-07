<template>
  <view class="mask-page wrap-page">

    <u-button type="primary" size="mini" @click="show=true" class="u-m-r-24">显示mask</u-button>

    <u-button type="primary" size="mini" @click="fillShow=true" class="u-m-r-24">内容填充</u-button>

    <u-button type="primary" size="mini" @click="animationShow=true">动画时长</u-button>


    <u-mask :show="show" @click="show=false"></u-mask>

    <u-mask :show="fillShow" @click="fillShow=false">
      <view  class="box"></view>
    </u-mask>

    <u-mask duration="1000" :show="animationShow" @click="animationShow=false"></u-mask>
  </view>
</template>

<script>
export default {
  name: "MaskPage",
  data() {
    return {
      show: false,
      fillShow: false,
      animationShow: false
    }
  },
}
</script>

<style scoped lang="scss">
.mask-page {
  .box {
    width: 300rpx;
    height: 300rpx;
    background: #fff;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}
</style>
