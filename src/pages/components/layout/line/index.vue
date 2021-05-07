<template>
  <view class="line-page wrap-page">
    <u-panel title="颜色">
      <u-line />
      <u-gap />
      <u-line color="#2979ff" />
      <u-gap />
      <u-line color="#19be6b" />
      <u-gap />
      <u-line color="#ff9900" />
      <u-gap />
      <u-line color="#fa3534" />
    </u-panel>

    <u-gap height="50" />

    <u-panel title="线条类型">
      <view class="line-t">solid-实线</view>
      <u-line border-style="solid" color="#2979ff" />
      <u-gap />
      <view class="line-t">dashed-方形虚线</view>
      <u-line border-style="dashed" color="#2979ff" />
      <u-gap />
      <view class="line-t">dotted-圆点虚线</view>
      <u-line border-style="dotted" color="#2979ff" />
      <u-gap />
    </u-panel>

    <u-gap height="50" />

    <u-panel title="粗细">
      <view class="line-t">细-默认0.5px</view>
      <u-line color="#19be6b" />
      <u-gap />
      <view class="line-t">粗1px</view>
      <u-line color="#19be6b" :hair-line="false" />
    </u-panel>

    <u-gap height="50" />

    <u-panel title="长度">
      <u-line color="#2979ff" />
      <u-gap />
      <u-line color="#2979ff" length="80%" />
      <u-gap />
      <u-line color="#2979ff" length="60%" />
      <u-gap />
      <u-line color="#2979ff" length="300" />
    </u-panel>

    <u-gap height="50" />

    <u-panel title="垂直">
      <u-line color="#2979ff" direction="col" length="100"/>
    </u-panel>
  </view>
</template>

<script>
export default {
  name: "LinePage",
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.line-page {
  .line-t {
    margin-bottom: 6rpx;
    font-size: 24rpx;
    color: #606266;
  }
}
</style>
