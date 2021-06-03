<template>
  <view class="wrap-page">
    <view class="icon-title">记得前面加上 icon-xxx</view>
    <u-grid :col="3">
      <u-grid-item v-for="(icon, index) in icons.glyphs" :key="icon.icon_id" :index="index+1" >
        <view :class="['iconfont', `${icons.css_prefix_text}${icon.font_class}`]" :style="{fontSize: '50rpx'}"></view>
        <view class="u-m-t-20">{{ `${icon.font_class}` }}</view>
      </u-grid-item>
    </u-grid>
  </view>
</template>

<script>
import icons from '@/u-ui/font/icon.json'
export default {
  name: "IconPage",
  data() {
    return {
      icons
    }
  }
}
</script>

<style scoped lang="scss">
.icon-title {
  margin-bottom: 30rpx;
  color: coral;
}
.icon-container {
  display: flex;
  flex-wrap: wrap;

  .icon-item {
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;
    margin-bottom: 20rpx;
    .iconfont {
      font-size: 40rpx;
    }
  }
}
</style>