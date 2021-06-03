<template>
  <view class="wrap-page">
    <u-panel title="尺寸">
      <u-button size="mini" class="u-m-r-10" @click="changeWidthHeight(100, 100)">50, 50</u-button>
      <u-button size="mini" class="u-m-r-10" @click="changeWidthHeight(200, 200)">75, 75</u-button>
      <u-button size="mini" class="u-m-r-10" @click="changeWidthHeight(300, 300)">100, 100</u-button>
    </u-panel>
    <u-gap />
    <u-panel title="状态">
      <u-button size="mini" class="u-m-r-10" @click="statusChange(0)">加载成功</u-button>
      <u-button size="mini" class="u-m-r-10" @click="statusChange(1)">加载中</u-button>
      <u-button size="mini" class="u-m-r-10" @click="statusChange(2)">加载失败</u-button>
    </u-panel>
    <u-gap />
    <u-panel title="形状">
      <u-button size="mini" class="u-m-r-10" @click="shapeChange('square')">方形</u-button>
      <u-button size="mini" class="u-m-r-10" @click="shapeChange('circle')">圆形</u-button>
    </u-panel>
    <u-gap />
    <u-panel title="图标大小">
      <u-button size="mini" class="u-m-r-10" @click="iconSizeChange(24)">字体大小 24</u-button>
      <u-button size="mini" class="u-m-r-10" @click="iconSizeChange(50)">字体大小 100</u-button>
      <u-button size="mini" class="u-m-r-10" @click="iconColorChange('')">默认</u-button>
      <u-button size="mini" class="u-m-r-10" @click="iconColorChange('green')">绿色</u-button>
    </u-panel>

    <u-gap height="70" />
    <view class="container">
      <u-image
        ref="uImage"
        :width="width"
        :height="height"
        :src="src"
        :shape="shape"
        :icon-size="iconSize"
        :icon-color="iconColor"
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
      height: 100,
      src: '',
      shape: 'square',
      iconSize: 24,
      iconColor: ''
    }
  },
  methods: {
    changeWidthHeight(w, h) {
      this.width = w;
      this.height = h;
    },
    statusChange(index) {
      // 此处通过ref操作组件内部状态，仅是为了演示使用，实际中无需这些操作，由内部的图片加载事件自动完成
      if (index === 0) {
        this.src = '/logo.png';
        this.$refs.uImage.loading = false;
        this.$refs.uImage.isError = false;
      } else if (index === 1) {
        this.$refs.uImage.loading = true;
      } else {
        this.$refs.uImage.loading = false;
        this.$refs.uImage.isError = true;
      }
    },
    shapeChange(shape) {
      this.shape = shape
    },
    iconSizeChange(iconSize) {
      this.iconSize = iconSize
    },
    iconColorChange(iconColor) {
      this.iconColor = iconColor
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