<template>
  <view class="block" :class="classname">
    <view class="title">{{ title }}</view>
    <view class="content">
      <view class="row" v-for="item in themes" :key="item.label" :style="{background: item.value}">
        <view class="title">{{ item.label }}</view>
        <view class="value">{{ item.value }}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "ColorBlock",
  props: {
    title: {
      type: String,
      default: ''
    },
    themes: {
      type: Array,
      default() {
        return []
      }
    },
    classname: {
      type: [Array, String],
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.block {
  margin-bottom: 44rpx;

  &>.title {
    font-size: 30rpx;
    position: relative;
    line-height: 1;
    padding-left: 22rpx;

    &:before {
      width: 4rpx;
      height: 30rpx;
      border-radius: 100rpx;
      background-color: $u-type-primary;
      content: '';
      position: absolute;
      left: 10rpx;
      top: -1px;
    }
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    text-align: center;
    margin-top: 20rpx;

    .row {
      flex: 1;
      margin: 0 8rpx;
      border-radius: 6rpx;
      text-align: center;
      padding: 12rpx 0;

      &:last-child {
        color: #909399;
      }
    }
  }
}
</style>
