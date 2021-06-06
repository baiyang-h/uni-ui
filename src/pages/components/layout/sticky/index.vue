<template>
  <view class="wrap-page">
    <view class="container">
      <u-gap height="300" bg-color="#f4cdd5" margin-bottom="30" />
      <u-sticky :offset-top="offsetTop" :enable="enable" @fixed="fixed" @unfixed="unfixed">
        <view class="sticky">吸顶</view>
      </u-sticky>
      <u-gap height="300" bg-color="#cee8e5" margin-top="30" />
      <u-gap height="300" bg-color="#2470b4" />
      <u-gap height="300" bg-color="#c8d5f8" />
    </view>
    <u-gap />
    <u-panel title="吸顶高度">
      <u-button size="mini" @click="offsetTopChange(0)" class="u-m-r-10">0</u-button>
      <u-button size="mini" @click="offsetTopChange(120)" class="u-m-r-10">120</u-button>
      <u-button size="mini" @click="offsetTopChange(200)" class="u-m-r-10">200</u-button>
    </u-panel>

    <u-toast ref="uToast"></u-toast>
  </view>
</template>

<script>
export default {
  name: "StickyPage",
  data() {
    return {
      offsetTop: 0,
      enable: true,
    }
  },
  methods: {
    fixed() {
      this.$refs.uToast.show({
        type: 'warning',
        title: '触发吸顶'
      })
    },
    unfixed() {
      this.$refs.uToast.show({
        type: 'success',
        title: '取消吸顶'
      })
    },
    offsetTopChange(offsetTop) {
      console.log(offsetTop)
      this.offsetTop = offsetTop
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  background: #fafafa;
  padding: 20px 10px;
  height: 700rpx;
  overflow-y: auto;
}
.sticky {
  background-color: $u-type-primary;
  color: #fff;
  padding: 24rpx;
  font-size: 28rpx;
  line-height: 1;
  border-radius: 5px;
  text-align: center;
}
</style>
