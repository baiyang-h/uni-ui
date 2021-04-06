<template>
  <view class="button-page">
    <u-button @click="onClick" @getuserinfo="getuserinfo" open-type="getUserInfo">按钮</u-button>
    <u-button type="primary">按钮</u-button>
    <u-button type="success">按钮</u-button>
    <u-button type="warning">按钮</u-button>
    <u-button type="error">按钮</u-button>

    <u-button size="medium">按钮</u-button>
    <u-button size="mini">按钮</u-button>

    <u-button plain>按钮</u-button>
    <u-button type="primary" plain>按钮</u-button>
    <u-button type="success" plain>按钮</u-button>
    <u-button type="warning" plain>按钮</u-button>
    <u-button type="error" plain>按钮</u-button>

    <u-button disabled>按钮</u-button>
    <u-button type="primary" disabled>按钮</u-button>
    <u-button type="success" disabled>按钮</u-button>
    <u-button type="warning" disabled>按钮</u-button>
    <u-button type="error" disabled>按钮</u-button>

    <u-button shape="circle">按钮</u-button>

    <u-button loading>按钮</u-button>

    <u-button ripple>按钮</u-button>
    <u-button type="primary" ripple>按钮</u-button>
  </view>
</template>

<script>
export default {
  name: "ButtonPage",
  methods: {
    onClick() {
      console.log('click')
    },
    getuserinfo(res) {
      console.log(res)
    }
  }
}
</script>

<style scoped lang="scss">

</style>