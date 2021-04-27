<template>
  <view class="wrap-page">

    <u-panel title="基础布局">
      <u-row>
        <u-col span="12">
          <view class="demo-layout bg-purple-dark">12</view>
        </u-col>
      </u-row>
      <u-row>
        <u-col span="6">
          <view class="demo-layout bg-purple">6</view>
        </u-col>
        <u-col span="6">
          <view class="demo-layout bg-purple-light">6</view>
        </u-col>
      </u-row>
      <u-row>
        <u-col span="4">
          <view class="demo-layout bg-purple">4</view>
        </u-col>
        <u-col span="4">
          <view class="demo-layout bg-purple-light">4</view>
        </u-col>
        <u-col span="4">
          <view class="demo-layout bg-purple">4</view>
        </u-col>
      </u-row>
      <u-row>
        <u-col span="3">
          <view class="demo-layout bg-purple">3</view>
        </u-col>
        <u-col span="3">
          <view class="demo-layout bg-purple-light">3</view>
        </u-col>
        <u-col span="3">
          <view class="demo-layout bg-purple">3</view>
        </u-col>
        <u-col span="3">
          <view class="demo-layout bg-purple-light">3</view>
        </u-col>
      </u-row>
    </u-panel>

    <u-panel title="分栏间隔">
      <u-row :gutter="20">
        <u-col span="4">
          <view class="demo-layout bg-purple"></view>
        </u-col>
        <u-col span="4">
          <view class="demo-layout bg-purple-light"></view>
        </u-col>
        <u-col span="4">
          <view class="demo-layout bg-purple"></view>
        </u-col>
      </u-row>
    </u-panel>

    <u-panel title="混合布局">
      <u-row :gutter="20">
        <u-col span="8">
          <view class="demo-layout bg-purple"></view>
        </u-col>
        <u-col span="4">
          <view class="demo-layout bg-purple-light"></view>
        </u-col>
      </u-row>
      <u-row :gutter="20">
        <u-col span="2">
          <view class="demo-layout bg-purple"></view>
        </u-col>
        <u-col span="10">
          <view class="demo-layout bg-purple-light"></view>
        </u-col>
      </u-row>
      <u-row :gutter="20">
        <u-col span="3">
          <view class="demo-layout bg-purple"></view>
        </u-col>
        <u-col span="6">
          <view class="demo-layout bg-purple-light"></view>
        </u-col>
        <u-col span="3">
          <view class="demo-layout bg-purple"></view>
        </u-col>
      </u-row>
    </u-panel>

    <u-panel title="分栏偏移">
      <u-row :gutter="20">
        <u-col span="4">
          <view class="demo-layout bg-purple"></view>
        </u-col>
        <u-col span="4" offset="4">
          <view class="demo-layout bg-purple"></view>
        </u-col>
      </u-row>
      <u-row :gutter="20">
        <u-col span="3" offset="3">
          <view class="demo-layout bg-purple"></view>
        </u-col>
        <u-col span="3" offset="3">
          <view class="demo-layout bg-purple"></view>
        </u-col>
      </u-row>
      <u-row :gutter="20">
        <u-col span="6" offset="4">
          <view class="demo-layout bg-purple"></view>
        </u-col>
      </u-row>
    </u-panel>
    <!-- #ifndef MP-WEIXIN || MP-QQ || MP-TOUTIAO -->
    <u-panel title="水平对齐方式（微信小程序无效）">
      <u-row>
        <u-col span="3">
          <view class="demo-layout bg-purple">start</view>
        </u-col>
        <u-col span="3">
          <view class="demo-layout bg-purple-light"></view>
        </u-col>
        <u-col span="3">
          <view class="demo-layout bg-purple"></view>
        </u-col>
      </u-row>
      <u-row justify="end">
        <u-col span="3">
          <view class="demo-layout bg-purple">end</view>
        </u-col>
        <u-col span="3">
          <view class="demo-layout bg-purple-light"></view>
        </u-col>
        <u-col span="3">
          <view class="demo-layout bg-purple"></view>
        </u-col>
      </u-row>
      <u-row justify="center">
        <u-col span="3">
          <view class="demo-layout bg-purple">center</view>
        </u-col>
        <u-col span="3">
          <view class="demo-layout bg-purple-light"></view>
        </u-col>
        <u-col span="3">
          <view class="demo-layout bg-purple"></view>
        </u-col>
      </u-row>
      <u-row justify="around">
        <u-col span="3">
          <view class="demo-layout bg-purple">around</view>
        </u-col>
        <u-col span="3">
          <view class="demo-layout bg-purple-light"></view>
        </u-col>
        <u-col span="3">
          <view class="demo-layout bg-purple"></view>
        </u-col>
      </u-row>
      <u-row justify="between">
        <u-col span="3">
          <view class="demo-layout bg-purple">between</view>
        </u-col>
        <u-col span="3">
          <view class="demo-layout bg-purple-light"></view>
        </u-col>
        <u-col span="3">
          <view class="demo-layout bg-purple"></view>
        </u-col>
      </u-row>
    </u-panel>
    <u-panel title="垂直对齐方式（微信小程序无效）">
      <u-row class="row-bg" align="top">
        <u-col span="3" align="top">
          <view class="demo-layout bg-purple"></view>
        </u-col>
        <u-col span="3" align="center">
          <view class="demo-layout bg-purple-light"></view>
        </u-col>
        <u-col span="3" align="bottom">
          <view class="demo-layout bg-purple"></view>
        </u-col>
      </u-row>
      <u-row class="row-bg" align="center">
        <u-col span="3">
          <view class="demo-layout bg-purple">center</view>
        </u-col>
        <u-col span="3">
          <view class="demo-layout bg-purple-light"></view>
        </u-col>
        <u-col span="3">
          <view class="demo-layout bg-purple"></view>
        </u-col>
      </u-row>
      <u-row class="row-bg" align="bottom">
        <u-col span="3">
          <view class="demo-layout bg-purple">bottom</view>
        </u-col>
        <u-col span="3">
          <view class="demo-layout bg-purple-light"></view>
        </u-col>
        <u-col span="3">
          <view class="demo-layout bg-purple"></view>
        </u-col>
      </u-row>
    </u-panel>
    <!-- #endif -->
  </view>
</template>

<script>
export default {
  name: "LayoutPage"
}
</script>

<style scoped lang="scss">

/deep/.u-row {
  margin-bottom: 30rpx;
  font-size: 24rpx;
}
.row-bg {
  height: 90rpx;
  background: #f9fafc;
}

.demo-layout {
  height: 60rpx;
  border-radius: 8rpx;
  line-height: 60rpx;
  text-align: center;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.bg-purple-dark {
  background: #99a9bf;
}
</style>
