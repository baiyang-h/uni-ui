<template>
  <view class="wrap-page toast-page">
    <u-button @click="click">弹出toast</u-button>
    <u-button @click="click1">asdsad</u-button>
    <u-button @click="click1">asdsad</u-button>
    <u-button @click="click1">asdsad</u-button>
    <u-button @click="click1">asdsad</u-button>
    <u-button @click="click1">asdsad</u-button>
    <u-button @click="click1">asdsad</u-button>
    <u-button @click="click1">asdsad</u-button>
    <u-button @click="click1">asdsad</u-button>
    <u-button @click="click1">asdsad</u-button>
    <u-button @click="click1">asdsad</u-button>
    <u-button @click="click1">asdsad</u-button>
    <u-button @click="click1">asdsad</u-button>
    <u-button @click="click1">asdsad</u-button>

    <u-toast ref="uToast" />
  </view>
</template>

<script>
export default {
  name: "ToastPage",
  methods: {
    click() {
      this.$refs.uToast.show({
        title: 'aaaasd',
        // mask: true
      })
    },
    click1() {
      console.log(12321)
    }
  }
}
</script>

<style scoped lang="scss">
.toast-page {

}
</style>
