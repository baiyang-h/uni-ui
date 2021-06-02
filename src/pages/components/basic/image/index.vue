<template>
  <view class="wrap-page">
    <u-panel title="尺寸">
      <u-button size="mini" class="u-m-r-10" @click="changeWidthHeight(100, 100)">50, 50</u-button>
      <u-button size="mini" class="u-m-r-10" @click="changeWidthHeight(200, 200)">75, 75</u-button>
      <u-button size="mini" class="u-m-r-10" @click="changeWidthHeight(300, 300)">100, 100</u-button>
    </u-panel>

    <u-gap height="70" />

    <view class="container">
      <u-image
        :width="width"
        :height="height"
      />
    </view>
  </view>
</template>

<script>
export default {
  name: "ImagePage",
  data() {
    return {
      width: 100,
      height: 100
    }
  },
  methods: {
    changeWidthHeight(w, h) {
      this.width = w;
      this.height = h;
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
}
</style>