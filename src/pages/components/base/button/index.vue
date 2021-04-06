<template>
  <view class="button-page wrap-page">

    <u-panel title="基础用法">
      <u-button>默认按钮</u-button>
      <u-button type="primary">主要按钮</u-button>
      <u-button type="success">成功按钮</u-button>
      <u-button type="warning">警告按钮</u-button>
      <u-button type="error">危险按钮</u-button>

      <u-button type="primary" plain>镂空主要按钮</u-button>
      <u-button type="success" plain>镂空成功按钮</u-button>
      <u-button type="warning" plain>镂空警告按钮</u-button>
      <u-button type="error" plain>镂空危险按钮</u-button>
    </u-panel>

    <u-gap />

    <u-panel title="不同尺寸">
      <u-button>默认尺寸</u-button>
      <u-button size="medium" class="u-m-r-30">中等按钮</u-button>
      <u-button size="mini">小型按钮</u-button>
    </u-panel>

    <u-gap />

    <u-panel title="禁用状态">
      <u-button disabled>禁用默认按钮</u-button>
      <u-button type="primary" disabled>禁用主要按钮</u-button>
      <u-button type="success" disabled>禁用成功按钮</u-button>
      <u-button type="warning" disabled>禁用警告按钮</u-button>
      <u-button type="error" disabled>禁用危险按钮</u-button>

      <u-button type="primary" disabled plain>禁用镂空主要按钮</u-button>
      <u-button type="success" disabled plain>禁用镂空成功按钮</u-button>
      <u-button type="warning" disabled plain>禁用镂空警告按钮</u-button>
      <u-button type="error" disabled plain>禁用镂空危险按钮</u-button>
    </u-panel>

    <u-gap />

    <u-panel title="按钮形状">
      <u-button type="primary" size="medium" class="u-m-r-30">默认按钮</u-button>
      <u-button type="primary" shape="circle" size="medium">圆角按钮</u-button>
    </u-panel>

    <u-gap />

    <u-panel title="加载中">
      <u-button size="medium" loading class="u-m-r-30">按钮</u-button>
      <u-button type="primary" size="medium" loading>按钮</u-button>
    </u-panel>

    <u-gap />

    <u-panel title="水波纹（点击按钮试试）">
      <u-button ripple>按钮</u-button>
      <u-button type="primary" ripple>按钮</u-button>
    </u-panel>

    <u-gap />

    <u-panel title="open-type（开发能力，小程序才有效）">
      <u-button @click="onClick" @getuserinfo="getuserinfo" open-type="getUserInfo">按钮</u-button>
    </u-panel>

    <u-gap />
  </view>
</template>

<script>
export default {
  name: "ButtonPage",
  methods: {
    onClick(e) {
      console.log('click', e)
    },
    getuserinfo(res) {
      console.log(res)
    }
  }
}
</script>

<style scoped lang="scss">
.button-page {
  /deep/.u-btn {
    margin-bottom: 20rpx;
  }
}
</style>