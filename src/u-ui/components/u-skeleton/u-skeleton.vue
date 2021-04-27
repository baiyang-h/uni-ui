<template>
  <view v-if="loading" :style="{
      width: windowWidth + 'px',
      height: windowHeight + 'px',
      backgroundColor: bgColor,
      position: 'absolute',
      left: left + 'px',
      top: top + 'px',
      zIndex: 9998,
      overflow: 'hidden'
    }"
    @touchmove.stop.prevent
  >
    <view v-for="(item, index) in RectNodes" :key="$u.guid()" :class="[animation ? 'skeleton-fade' : '']" :style="{
      width: item.width + 'px',
      height: item.height + 'px',
      backgroundColor: elColor,
      position: 'absolute',
      left: (item.left - left) + 'px',    // 相减就是内部元素到外部元素之间的 left，因为是 boundingClientRect
			top: (item.top - top) + 'px'
    }"></view>
    <view v-for="(item, index) in circleNodes" :key="$u.guid()" :class="[animation ? 'skeleton-fade' : '']" :style="{
      width: item.width + 'px',
      height: item.height + 'px',
      backgroundColor: elColor,
      borderRadius: item.width/2 + 'px',
      position: 'absolute',
      left: (item.left - left) + 'px',
			top: (item.top - top) + 'px'
    }"></view>
    <view v-for="(item, index) in filletNodes" :key="$u.guid()" :class="animation ? 'skeleton-fade' : ''" :style="{
			width: item.width + 'px',
			height: item.height + 'px',
			backgroundColor: elColor,
			borderRadius: borderRadius + 'rpx',
			position: 'absolute',
			left: (item.left - left) + 'px',
			top: (item.top - top) + 'px'
		}"></view>
  </view>
</template>

<script>
/**
 * skeleton 骨架屏
 * 思路：获取 .u-skeleton（总容器）、.u-skeleton-rect（容器内部方块元素）、.u-skeleton-fillet(容器内部圆角元素)、.u-skeleton-circle（容器内部圆形元素）类的dom尺寸，
 * 的元素信息，注意总容器是包在最外层的，将总容器的 u-skeleton 的尺寸存储，然后将.u-skeleton-rect、.u-skeleton-fillet、.u-skeleton-circle的内部所有子容器存储在
 * 相应的 RectNodes、circleNodes、filletNodes中，然后通过v-for循环直接定位到原元素本身的位置。
 *
 * @description 骨架屏一般用于页面在请求远程数据尚未完成时，页面用灰色块预显示本来的页面结构，给用户更好的体验
 * @property {String} el-color 骨架块状元素的背景颜色，需要渲染的元素颜色，十六进制或者rgb等都可以（默认#e5e5e5）
 * @property {String} bg-color 骨架组件背景颜色（默认#fff）
 * @property {Boolean}  animation 骨架块是否显示动画效果（默认false）
 * @property {String, Number} border-radius 对应骨架块的圆角大小，单位rpx（默认10）
 * @property {Boolean} loading  是否显示骨架组件，请求完成后，将此值设置为false，就会显示你的内容，去掉骨架屏（默认true）
 * @example <u-skeleton :loading="true" :animation="true"></u-skeleton>
 *
 * 使用指南
 * - 首先页面引入 u-skeleton 组件注册，如<u-skeleton :loading="true" :animation="true"></u-skeleton>
 * - 然后在根元素上增加 u-skeleton类，想有骨架屏的元素增加 u-skeleton-rect、u-skeleton-fillet、u-skeleton-circle 相应类
 * - 注意这里原本元素最好有宽高，这样就可以编译计算节点信息
 * <view class="u-skeleton">
 *   <view class="u-skeleton-rect">123123</view>
 * </view>
 */
export default {
  name: "u-skeleton",
  props: {
    // 需要渲染的元素背景颜色，十六进制或者rgb等都可以
    elColor: {
      type: String,
      default: '#e5e5e5'
    },
    // 整个骨架屏页面的背景颜色
    bgColor: {
      type: String,
      default: '#ffffff'
    },
    // 是否显示加载动画
    animation: {
      type: Boolean,
      default: false
    },
    // 圆角值，只对类名为u-skeleton-fillet的元素生效，为数值，不带单位
    borderRadius: {
      type: [String, Number],
      default: "10"
    },
    // 是否显示骨架，true-显示，false-隐藏
    loading: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      windowWidth: 750,     // 骨架屏宽度
      windowHeight: 1500,   // 骨架屏高度
      RectNodes: [],        // 矩形元素
      circleNodes: [],      // 圆形元素
      filletNodes: [],      // 圆角元素
      top: 0,
      left: 0,
    }
  },
  // 组件被挂载
  mounted() {
    // 获取系统信息
    let systemInfo = uni.getSystemInfoSync();
    this.windowHeight = systemInfo.windowHeight;
    this.windowWidth = systemInfo.windowWidth;
    this.selecterQueryInfo();
  },
  methods: {
    // 查询各节点的信息
    selecterQueryInfo() {
      // 获取整个父组件容器的高度，当做骨架屏的高度
      // 在微信小程序中，如果把骨架屏放入组件中使用的话，需要调in(this)上下文为父组件才有效
      let query = '';
      // #ifdef MP-WEIXIN
      query = uni.createSelectorQuery().in(this.$parent);
      // #endif
      // #ifndef MP-WEIXIN
      query = uni.createSelectorQuery()
      // #endif
      // 这一层是最外面的容器，外部的dom，下面矩形骨架、圆形骨架、圆角骨架元素是在该dom内部的元素
      query.selectAll('.u-skeleton').boundingClientRect().exec((res) => {
        this.windowHeight = res[0][0].height;
        this.windowWidth = res[0][0].width;
        this.top = res[0][0].bottom - res[0][0].height;
        this.left = res[0][0].left;
      })
      // 矩形骨架元素
      this.getRectEls();
      // 圆形骨架元素
      this.getCircleEls();
      // 圆角骨架元素
      this.getFilletEls();
    },
    // 矩形元素列表
    getRectEls() {
      let query = '';
      // 在微信小程序中，如果把骨架屏放入组件中使用的话，需要调in(this)上下文为父组件才有效
      // #ifdef MP-WEIXIN
      query = uni.createSelectorQuery().in(this.$parent)
      // #endif
      // #ifndef MP-WEIXIN
      query = uni.createSelectorQuery()
      // #endif
      query.selectAll('.u-skeleton-rect').boundingClientRect().exec((res) => {
        this.RectNodes = res[0];
      })
    },
    // 圆角元素列表
    getFilletEls() {
      let query = '';
      // 在微信小程序中，如果把骨架屏放入组件中使用的话，需要调in(this)上下文为父组件才有效
      // #ifdef MP-WEIXIN
      query = uni.createSelectorQuery().in(this.$parent);
      // #endif
      // #ifndef MP-WEIXIN
      query = uni.createSelectorQuery()
      // #endif
      query.selectAll('.u-skeleton-fillet').boundingClientRect().exec((res) => {
        this.filletNodes = res[0];
      });
    },
    // 圆形元素列表
    getCircleEls() {
      let query = '';
      // 在微信小程序中，如果把骨架屏放入组件中使用的话，需要调in(this)上下文为父组件才有效
      // #ifdef MP-WEIXIN
      query = uni.createSelectorQuery().in(this.$parent);
      // #endif
      // #ifndef MP-WEIXIN
      query = uni.createSelectorQuery()
      // #endif
      query.selectAll('.u-skeleton-circle').boundingClientRect().exec((res) => {
        this.circleNodes = res[0];
      });
    }
  }
}
</script>

<style scoped lang="scss">

.skeleton-fade {
  width: 100%;
  height: 100%;
  background: rgb(194, 207, 214);
  animation-duration: 1.5s;
  animation-name: blink;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

@keyframes blink {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
}
</style>
