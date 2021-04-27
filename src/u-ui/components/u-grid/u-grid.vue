<template>
  <view
    class="u-grid"
    :class="{'u-border-top u-border-left': border}"
    :style="[gridStyle]"
  >
    <slot />
  </view>
</template>

<script>
/**
 * grid 宫格布局
 * @description 宫格组件一般用于同时展示多个同类项目的场景，可以给宫格的项目设置徽章或者图标等，也可以扩展为左右滑动的轮播形式
 * @property {Number, String} col 宫格的列数（默认3）
 * @property {Boolean} border 是否显示宫格的边框（默认true）
 * @property {String} align 宫格对齐方式，表现为数量少的时候，靠左，居中，靠右（默认left）
 * @property {String} hover-class 宫格按压时的样式类型，"none"为无效果（默认 u-hover-class）
 * @event {Function} click 点击宫格触发
 * @example <u-grid :col="3" @click="click"></u-grid>
 */
export default {
  name: "u-grid",
  props: {
    // 分成几列
    col: {
      type: [Number, String],
      default: 3
    },
    // 是否显示边框，因为本组件是 left、top，所以子会right、bottom
    border: {
      type: Boolean,
      default: true
    },
    // 宫格对齐方式，表现为数量少的时候，靠左，居中，靠右
    align: {
      type: String,
      default: 'left'
    },
    // 宫格按压时的样式类型，"none"为无效果
    hoverClass: {
      type: String,
      default: 'u-hover-class'
    }
  },
  watch: {
    // 当父组件需要子组件需要共享的参数发生了变化，手动通知子组件
    parentData() {
      if(this.children.length) {
        this.children.map(child => {
          // 判断子组件(u-gird-item)如果有updateParentData方法的话, 就执行(执行的结果是子组件重新从父组件拉取了最新的值)
          typeof(child.updateParentData) == 'function' && child.updateParentData();
        })
      }
    }
  },
  computed: {
    // 计算父组件的值是否发生变化
    parentData() {
      return [this.col, this.border, this.hoverClass]
    },
    // 宫格对齐方式
    gridStyle() {
      let style = {};
      switch (this.align) {
        case 'left':
          style.justifyContent = 'flex-start';
          break;
        case 'center':
          style.justifyContent = 'center';
          break;
        case 'right':
          style.justifyContent = 'flex-end';
          break;
        default:
          style.justifyContent = 'flex-start';
      }
      return style;
    }
  },
  created() {
    // 如果将children定义在data中，在微信小程序会造成循环引用而报错
    // children 内部会放入一个个u-gird-item实例对象
    this.children = [];
  },
  methods: {
    click(index) {
      this.$emit('click', index)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/style.components";
.u-grid {
  width: 100%;
  /* #ifdef MP */
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  /* #endif */

  /* #ifndef MP */
  @include u-flex;
  flex-wrap: wrap;
  align-items: center;
  /* #endif */
}
</style>
