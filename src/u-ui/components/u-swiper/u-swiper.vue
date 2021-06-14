<template>
  <view>

  </view>
</template>

<script>
/**
 * swiper 轮播图
 * @description 该组件一般用于导航轮播，广告展示等场景，可开箱即用
 *
 * @property {Array} list 轮播图数据
 * @property {Boolean} title 是否显示标题文字，需要配合list参数（默认false）
 * @property {String} mode 指示器模式（默认round）
 * @property {String Number}  height 轮播图组件高度，单位rpx（默认250）
 * @property {String} indicator-pos  指示器的位置（默认bottomCenter）
 * @property {Boolean} effect3d 是否开启3D效果（默认false）
 * @property {Boolean} autoplay 是否自动播放（默认true）
 * @property {String Number} interval 自动轮播时间间隔，单位ms（默认2500）
 * @property {Boolean} circular 是否衔接播放（默认true）
 * @property {String} bg-color 背景颜色（默认#f3f4f6））
 * @property {String Number} border-radius 轮播图圆角值，单位rpx（默认8）
 * @property {Object} title-style 自定义标题样式
 * @property {String Number} effect3d-previous-margin mode = true模式的情况下，激活项与前后项之间的距离，单位rpx（默认50）
 * @property {String} img-mode 图片的裁剪模式，详见image组件裁剪模式（默认aspectFill）
 * @event {Function} click 点击轮播图时触发
 * @example <u-swiper :list="list" mode="dot" indicator-pos="bottomRight"></u-swiper>
 */
export default {
  name: "u-swiper",
  props: {
    // 轮播图的数据,格式如：[{image: 'xxxx', title: 'xxxx'}，{image: 'yyyy', title: 'yyyy'}]，其中title字段可选
    list: {
      type: Array,
      default () {
        return [];
      }
    },
    // 是否显示title标题
    title: {
      type: Boolean,
      default: false
    },
    // 用户自定义的指示器的样式
    indicator: {
      type: Object,
      default () {
        return {};
      }
    },
    // 圆角值
    borderRadius: {
      type: [Number, String],
      default: 8
    },
    // 隔多久自动切换
    interval: {
      type: [String, Number],
      default: 3000
    },
    // 指示器的模式，rect|dot|number|round
    mode: {
      type: String,
      default: 'round'
    },
    // list的高度，单位rpx
    height: {
      type: [Number, String],
      default: 250
    },
    // 指示器的位置，topLeft|topCenter|topRight|bottomLeft|bottomCenter|bottomRight
    indicatorPos: {
      type: String,
      default: 'bottomCenter'
    },
    // 是否开启缩放效果
    effect3d: {
      type: Boolean,
      default: false
    },
    // 3D模式的情况下，激活item与前后item之间的距离，单位rpx
    effect3dPreviousMargin: {
      type: [Number, String],
      default: 50
    },
    // 是否自动播放
    autoplay: {
      type: Boolean,
      default: true
    },
    // 自动轮播时间间隔，单位ms
    duration: {
      type: [Number, String],
      default: 500
    },
    // 是否衔接滑动，即到最后一张时接着滑动，是否自动切换到第一张
    circular: {
      type: Boolean,
      default: true
    },
    // 图片的裁剪模式
    imgMode: {
      type: String,
      default: 'aspectFill'
    },
    // 从list数组中读取的图片的属性名
    name: {
      type: String,
      default: 'image'
    },
    // 背景颜色
    bgColor: {
      type: String,
      default: '#f3f4f6'
    },
    // 初始化时，默认显示第几项
    current: {
      type: [Number, String],
      default: 0
    },
    // 标题的样式，对象形式
    titleStyle: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      // 当前活跃的swiper-item的index
      uCurrent: this.current
    };
  },
  watch: {
    // 如果外部的list发生变化，判断长度是否修改，如果前后长度不一致，重置uCurrent值，避免溢出
    list(nVal, oVal) {
      if(nVal.length !== oVal.length) this.uCurrent = 0;
    },
    // 监听外部current的变化，实时修改内部依赖于此测uCurrent值，内部主要指示器是依赖于uCurrent的
    current(n) {
      this.uCurrent = n;
    }
  },
  computed: {

  }
}
</script>

<style scoped>

</style>