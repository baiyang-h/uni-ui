<template>
  <view class="wrap-page toast-page">

    <u-panel title="主题Toast">
      <u-button @click="clickType('primary')" size="mini">primary</u-button>
      <u-button @click="clickType('success')" size="mini">success</u-button>
      <u-button @click="clickType('warning')" size="mini">warning</u-button>
      <u-button @click="clickType('error')" size="mini">error</u-button>
      <u-button @click="clickType('default')" size="mini">default</u-button>
    </u-panel>

    <u-gap />

    <u-panel title="带icon的主题Toast">
      <view class="desc">primary和default默认不显示图标</view>
      <u-button @click="clickTypeIcon('primary')" size="mini">primary</u-button>
      <u-button @click="clickTypeIcon('success')" size="mini">success</u-button>
      <u-button @click="clickTypeIcon('warning')" size="mini">warning</u-button>
      <u-button @click="clickTypeIcon('error')" size="mini">error</u-button>
      <u-button @click="clickTypeIcon('default')" size="mini">default</u-button>
    </u-panel>

    <u-gap />

    <u-panel title="主题为default默认的icon">
      <view class="desc">除了 success、warning、error 自己进行了设定，便捷图标，其他为 iconfont 的图标，显示保持和uni.showToast的样式</view>
      <u-button @click="clickDefaultIcon('success')" size="mini">图标 success</u-button>
      <u-button @click="clickDefaultIcon('warning')" size="mini">图标 warning</u-button>
      <u-button @click="clickDefaultIcon('error')" size="mini">图标 error</u-button>
      <u-button @click="clickDefaultIcon('icon-time')" size="mini">icon-time</u-button>
      <u-button @click="clickDefaultIcon('icon-tao')" size="mini">icon-tao</u-button>
    </u-panel>

    <u-gap />

    <u-panel title="自定义图片">
      <u-button @click="clickCustomImage" size="mini">自定义图片</u-button>
    </u-panel>

    <u-gap />

    <u-panel title="显示时间 duration">
      <u-button @click="clickDuration" size="mini">duration 5000</u-button>
    </u-panel>

    <u-gap />

    <u-panel title="toast显示位置">
      <u-button @click="clickPosition('center')" size="mini">center</u-button>
      <u-button @click="clickPosition('top')" size="mini">top</u-button>
      <u-button @click="clickPosition('bottom')" size="mini">bottom</u-button>
    </u-panel>

    <u-gap />

    <u-panel title="mask">
      <view class="desc">增加一个透明mask层，当toast出现时，页面别的区域不能被点击</view>
      <u-button @click="clickMask" size="mini">增加mask层</u-button>
    </u-panel>

    <u-gap />

    <u-panel title="回调">
      <u-button @click="clickCallback" size="mini">callback</u-button>
    </u-panel>

    <u-toast ref="uToast" />
  </view>
</template>

<script>
export default {
  name: "ToastPage",
  methods: {
    // mask: true

    // 主题 toast
    clickType(type) {
      this.$refs.uToast.show({
        title: `我是 ${type}`,
        type
      })
    },

    // 带icon的主题 toast
    clickTypeIcon(type) {
      this.$refs.uToast.show({
        title: `我是 ${type}`,
        type,
        icon: type
      })
    },

    // default 默认时传入icon
    clickDefaultIcon(icon) {
      this.$refs.uToast.show({
        title: `${icon} toast`,
        icon
      })
    },

    // 自定义图片
    clickCustomImage(url) {
      this.$refs.uToast.show({
        title: '自定义图片',
        image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs13.sinaimg.cn%2Fbmiddle%2F4d049168cc5e11e7fb13c&refer=http%3A%2F%2Fs13.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623242583&t=ac5c3b03064f11bb6fa1b5367daf2877'
      })
    },

    clickDuration() {
      this.$refs.uToast.show({
        title: 'duration时间设定为5000',
        duration: 5000
      })
    },

    // 显示位置
    clickPosition(position) {
      this.$refs.uToast.show({
        title: position,
        position
      })
    },

    // 增加 mask
    clickMask() {
      this.$refs.uToast.show({
        title: '增加mask层',
        mask: true
      })
    },

    // 增加回调
    clickCallback() {
      this.$refs.uToast.show({
        title: '增加一个结束回调',
        callback() {
          console.log('回调')
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.toast-page {
  .desc {
    margin-bottom: 10rpx;
    color: $u-tips-color;
  }
}
</style>
