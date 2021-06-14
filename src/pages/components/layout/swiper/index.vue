<template>
  <view class="wrap-page">
    <u-panel title="指示器模式">
      <u-button size="mini" class="u-m-r-10" @click="modeChange('round')">round</u-button>
      <u-button size="mini" class="u-m-r-10" @click="modeChange('rect')">rect</u-button>
      <u-button size="mini" class="u-m-r-10" @click="modeChange('number')">number</u-button>
      <u-button size="mini" class="u-m-r-10" @click="modeChange('none')">none</u-button>
    </u-panel>
    <u-gap />
    <u-panel title="标题显示">
      <u-button size="mini" class="u-m-r-10" @click="titleChange(true)">显示</u-button>
      <u-button size="mini" class="u-m-r-10" @click="titleChange(false)">隐藏</u-button>
    </u-panel>
    <u-gap />
    <u-panel title="指示器位置">
      <u-button size="mini" class="u-m-r-10" @click="indicatorPosChange('topLeft')">上左</u-button>
      <u-button size="mini" class="u-m-r-10" @click="indicatorPosChange('topRight')">上右</u-button>
      <u-button size="mini" class="u-m-r-10" @click="indicatorPosChange('bottomLeft')">下左</u-button>
      <u-button size="mini" class="u-m-r-10" @click="indicatorPosChange('bottomCenter')">下中</u-button>
      <u-button size="mini" class="u-m-r-10" @click="indicatorPosChange('bottomRight')">下右</u-button>
    </u-panel>
    <u-gap />
    <u-panel title="3D效果">
      <u-button size="mini" class="u-m-r-10" @click="effect3dChange(true)">开启</u-button>
      <u-button size="mini" class="u-m-r-10" @click="effect3dChange(false)">关闭</u-button>
    </u-panel>
    <u-gap />
    <u-swiper
      :height="250"
      :list="list"
      :title="title"
      :effect3d="effect3d"
      :indicator-pos="indicatorPos"
      :mode="mode"
      :interval="3000"
      @click="click"
      @change="change"
    ></u-swiper>
    <u-toast ref="uToast"></u-toast>
  </view>
</template>

<script>
export default {
  name: "SwiperPage",
  data() {
    return {
      list: [
        {
          image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
          title: '昨夜星辰昨夜风，画楼西畔桂堂东'
        },
        {
          image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
          title: '身无彩凤双飞翼，心有灵犀一点通'
        },
        {
          image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
          title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
        }
      ],
      title: false,
      mode: 'round',
      indicatorPos: 'bottomCenter',
      effect3d: false,
    }
  },
  methods: {
    click(index) {
      this.$refs.uToast.show({
        title: `点击了第${index + 1}张图片`,
        type: 'success'
      })
    },
    change() {

    },
    modeChange(mode) {
      this.mode = mode
    },
    titleChange(title) {
      this.title = title
    },
    indicatorPosChange(indicatorPos) {
      this.indicatorPos = indicatorPos
    },
    effect3dChange(effect3d) {
      this.effect3d = effect3d
    }
  }
}
</script>

<style scoped>

</style>
