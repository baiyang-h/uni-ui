<template>
  <view
    class="u-grid-item"
    :hover-class="parentData.hoverClass"
    :hover-stay-time="200"
    :style="{
			background: bgColor,
			width: width,
		}"
    @tap="click"
  >
    <view
      class="u-grid-item-box"
      :style="[customStyle]"
      :class="[parentData.border ? 'u-border-right u-border-bottom' : '']"
    >
      <slot />
    </view>
  </view>
</template>

<script>
/**
 * u-grid-item 宫格布局中的 item 块
 * @description 宫格组件一般用于同时展示多个同类项目的场景，可以给宫格的项目设置徽章或者图标等，也可以扩展为左右滑动的轮播形式。搭配u-grid使用
 * @property {String} bg-color 宫格的背景颜色（默认#ffffff）
 * @property {String Number} index 点击宫格时，返回的值
 * @property {Object} custom-style 自定义样式，对象形式
 * @event {Function} click 点击宫格触发
 * @example <u-grid-item></u-grid-item>
 */
export default {
  name: "u-grid-item",
  props: {
    // 背景颜色
    bgColor: {
      type: String,
      default: '#ffffff'
    },
    // 点击时返回的index
    index: {
      type: [Number, String],
      default: ''
    },
    // 自定义样式，对象形式
    customStyle: {
      type: Object,
      default() {
        return {
          padding: '30rpx 0'
        }
      }
    }
  },
  data() {
    return {
      parentData: {
        hoverClass: '',   // 按下去的时候，背景类，如是否显示背景灰色
        col: 3,   // 默认宫格一行是3个 和父组件保持一致，父组件默认是为 3
        border: true    // 是否显示边框，根据父组件决定, 因为父组件是 left、top，所以子会right、bottom
      }
    }
  },
  created() {
    // 父组件的实例
    this.updateParentData();
    // this.parent在updateParentData()中定义
    // 即获取到了父组件实例，然后将该item实例保存到父组件的 children 中
    this.parent.children.push(this);
  },
  computed: {
    // 每个 grid-item 的宽度，百分比计算
    width() {
      return 100 / Number(this.parentData.col) + '%'
    }
  },
  methods: {
    // 1. 获取父组件的参数（初始化）
    // 2. 当父组件的相关属性变化时，子组件也相应更新变化。如我们项目中有点击某个按钮动态改变 宫格的排列 col 列的时候
    updateParentData() {
      // 此方法写在mixin中，现在 parentData 中的参数值已经取的父组件中相应的参数的值了
      // 还给本组件的 this 增加了 this.parent
      this.getParentData('u-grid');
    },
    click() {
      this.$emit('click', this.index);
      // 这里的 this.parent 是因为经过 this.getParentData 这个混入的方式后该实例生成了这个 parent属性，表示 父级或父父..... 级的实例
      this.parent && this.parent.click(this.index);
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/style.components";
.u-grid-item {
  box-sizing: border-box;
  background: #fff;
  @include u-flex(column);
  align-items: center;
  justify-content: center;
  position: relative;

  /* #ifdef MP */
  float: left;
  /* #endif */
}

.u-grid-item-box {
  padding: 30rpx 0;
  @include u-flex(column);
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  height: 100%;
}
</style>
