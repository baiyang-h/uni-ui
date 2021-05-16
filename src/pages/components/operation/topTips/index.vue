<template>
  <view class="wrap-page">

    <u-panel title="主题选择">
      <u-button class="u-m-r-10" type="primary" size="mini" @click="clickType('primary')">primary</u-button>
      <u-button class="u-m-r-10" type="success" size="mini" @click="clickType('success')">success</u-button>
      <u-button class="u-m-r-10" type="error" size="mini" @click="clickType('error')">error</u-button>
      <u-button class="u-m-r-10" type="warning" size="mini" @click="clickType('warning')">warning</u-button>
      <u-button class="u-m-r-10" type="info" size="mini" @click="clickType('info')">info</u-button>
    </u-panel>

    <u-gap />

    <u-panel title="主题选择">
      <u-button class="u-m-r-10" size="mini" @click="clickDuration(2000)">duration 2000</u-button>
      <u-button size="mini" @click="clickDuration(5000)">duration 5000</u-button>
    </u-panel>

    <u-top-tips ref="uTips"></u-top-tips>
  </view>
</template>

<script>
export default {
  name: "TopTipsPage",
  data() {
    return {
      title: '这是一段信息',
    }
  },
  methods: {
    clickType(type) {
      this.$refs.uTips.show({
        title: this.title,
        type
      })
    },
    clickDuration(duration) {
      this.$refs.uTips.show({
        title: this.title,
        duration
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
