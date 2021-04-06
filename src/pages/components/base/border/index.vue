<template>
  <view class="border-page wrap-page">
    <view class="u-title u-m-b-20">边框</view>
    <u-table>
      <u-tr class="u-tr">
        <u-th class="u-th">名称</u-th>
        <u-th class="u-th">粗细</u-th>
        <u-th class="u-th">举例</u-th>
      </u-tr>
      <u-tr class="u-tr">
        <u-td class="u-td">实线</u-td>
        <u-td class="u-td">1px</u-td>
        <u-td class="u-td">
          <view class="example-line-1"></view>
        </u-td>
      </u-tr>
      <u-tr class="u-tr">
        <u-td class="u-td">虚线</u-td>
        <u-td class="u-td">2px</u-td>
        <u-td class="u-td">
          <view class="example-line-2"></view>
        </u-td>
      </u-tr>
    </u-table>

    <view class="u-title u-m-b-20 u-m-t-30">圆角</view>
    <view class="border-radius u-m-b-30">
      <view class="border-radius-row">
        <view class="title">无圆角</view>
        <view class="text">border-radius: 0px</view>
        <view class="border-radius-rect"></view>
      </view>
      <view class="border-radius-row">
        <view class="title">小圆角</view>
        <view class="text">border-radius: 4px</view>
        <view class="border-radius-rect radius-2"></view>
      </view>
      <view class="border-radius-row">
        <view class="title">无圆角</view>
        <view class="text">border-radius: 8px</view>
        <view class="border-radius-rect radius-3"></view>
      </view>
      <view class="border-radius-row">
        <view class="title">无圆角</view>
        <view class="text">border-radius: 30px</view>
        <view class="border-radius-rect radius-4"></view>
      </view>
    </view>

    <view class="u-title u-m-b-20">投影</view>
    <view class="box-shadow">
      <view class="box-shadow-1"></view>
      <view class="box-shadow-description">基础投影 box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)</view>
      <view class="box-shadow-2"></view>
      <view class="box-shadow-description">浅色投影 box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)</view>
    </view>
  </view>
</template>

<script>
export default {
  name: "BorderPage"
}
</script>

<style scoped lang="scss">
.border-page {

  .example-line-1 {
    border-top: 1rpx solid #e4e7ed;
  }
  .example-line-2 {
    border-top: 2rpx dashed #e4e7ed;
  }

  .border-radius {
    display: flex;
    flex-wrap: wrap;
    .border-radius-row {
      flex: 0 0 50%;
      padding-right: 20rpx;
      box-sizing: border-box;
      margin-bottom: 20rpx;
      .title {
        line-height: 1.7;
      }
      .text {
        line-height: 1.7;
        margin-bottom: 10rpx;
      }
      .border-radius-rect {
        height: 20vw;
        border: 1rpx solid #e4e7ed;
      }
    }
  }

  .radius-2 {
    border-radius: 8rpx;
  }
  .radius-3 {
    border-radius: 16rpx;
  }
  .radius-4 {
    border-radius: 60rpx;
  }

  .box-shadow-1, .box-shadow-2 {
    width: 500rpx;
    height: 200rpx;
    border: 1px solid #e4e7ed;
  }
  .box-shadow-description {
    margin: 20rpx 0;
  }
  .box-shadow-1 {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  .box-shadow-2 {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }
}
</style>