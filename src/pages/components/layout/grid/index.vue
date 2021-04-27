<template>
  <view class="grid-page wrap-page">
    <u-panel title="基础用法">
      <u-grid>
        <u-grid-item :index="1">
          <view class="icon-time iconfont"></view>
          <view>时钟</view>
        </u-grid-item>
        <u-grid-item :index="2">
          <view class="icon-voicelight iconfont"></view>
          <view>麦克风</view>
        </u-grid-item>
        <u-grid-item :index="3">
          <view class="icon-like iconfont"></view>
          <view>爱心</view>
        </u-grid-item>
        <u-grid-item :index="4">
          <view class="icon-notification iconfont"></view>
          <view>声音</view>
        </u-grid-item>
        <u-grid-item :index="5">
          <view class="icon-my_fill_light iconfont"></view>
          <view>宫格5</view>
        </u-grid-item>
        <u-grid-item :index="6">
          <view class="icon-wang iconfont"></view>
          <view>wang</view>
        </u-grid-item>
        <u-grid-item :index="7">
          <view class="icon-back iconfont"></view>
          <view>wang</view>
        </u-grid-item>
        <u-grid-item :index="8">
          <view class="icon-skin iconfont"></view>
          <view>wang</view>
        </u-grid-item>
        <u-grid-item :index="9">
          <view class="icon-settings iconfont"></view>
          <view>wang</view>
        </u-grid-item>
      </u-grid>
    </u-panel>
    <u-gap />
    <u-panel title="不显示边框">
      <u-grid :border="false">
        <u-grid-item :index="1">
          <view class="icon-time iconfont"></view>
          <view>时钟</view>
        </u-grid-item>
        <u-grid-item :index="2">
          <view class="icon-voicelight iconfont"></view>
          <view>麦克风</view>
        </u-grid-item>
        <u-grid-item :index="3">
          <view class="icon-like iconfont"></view>
          <view>爱心</view>
        </u-grid-item>
        <u-grid-item :index="4">
          <view class="icon-notification iconfont"></view>
          <view>声音</view>
        </u-grid-item>
        <u-grid-item :index="5">
          <view class="icon-my_fill_light iconfont"></view>
          <view>宫格5</view>
        </u-grid-item>
        <u-grid-item :index="6">
          <view class="icon-wang iconfont"></view>
          <view>wang</view>
        </u-grid-item>
        <u-grid-item :index="7">
          <view class="icon-back iconfont"></view>
          <view>wang</view>
        </u-grid-item>
        <u-grid-item :index="8">
          <view class="icon-skin iconfont"></view>
          <view>wang</view>
        </u-grid-item>
        <u-grid-item :index="9">
          <view class="icon-settings iconfont"></view>
          <view>wang</view>
        </u-grid-item>
      </u-grid>
    </u-panel>
    <u-gap />
    <u-panel title="修改列数">
      <u-grid col="4">
        <u-grid-item :index="1">
          <view class="icon-time iconfont"></view>
          <view>时钟</view>
        </u-grid-item>
        <u-grid-item :index="2">
          <view class="icon-voicelight iconfont"></view>
          <view>麦克风</view>
        </u-grid-item>
        <u-grid-item :index="3">
          <view class="icon-like iconfont"></view>
          <view>爱心</view>
        </u-grid-item>
        <u-grid-item :index="4">
          <view class="icon-notification iconfont"></view>
          <view>声音</view>
        </u-grid-item>
        <u-grid-item :index="5">
          <view class="icon-my_fill_light iconfont"></view>
          <view>宫格5</view>
        </u-grid-item>
        <u-grid-item :index="6">
          <view class="icon-wang iconfont"></view>
          <view>wang</view>
        </u-grid-item>
        <u-grid-item :index="7">
          <view class="icon-back iconfont"></view>
          <view>wang</view>
        </u-grid-item>
        <u-grid-item :index="8">
          <view class="icon-skin iconfont"></view>
          <view>wang</view>
        </u-grid-item>
        <u-grid-item :index="9">
          <view class="icon-settings iconfont"></view>
          <view>wang</view>
        </u-grid-item>
      </u-grid>
    </u-panel>

  </view>
</template>

<script>
export default {
  name: "GridPage"
}
</script>

<style scoped>

</style>
