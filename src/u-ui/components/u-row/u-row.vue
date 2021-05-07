<template>
  <view
    class="u-row"
    :style="{
      justifyContent: uJustify,
      alignItems: uAlignItem
    }"
    @tap="click"
  >
    <slot />
  </view>
</template>

<script>
/**
 * row 行布局
 * @description 通过基础的 12 分栏，迅速简便地创建布局
 * @property {String Number} gutter   栅格间隔，左右各为此值的一半，Row 组件 提供 gutter 属性来指定每一栏之间的间隔，单位rpx（默认0）
 * @property {String} justify   水平排列方式，可选值为 start（或flex-start）、end（或flex-end）、center、around（或space-around）、between（或space-between）。默认为（start(或flex-start)）
 * @property {align} align    垂直排列方式（默认center） 也可直接输入 flex-start | flex-end | center | baseline | stretch;
 * @example <u-row gutter="16"><u-col></u-col></u-row>
 */
export default {
  name: "u-row",
  props: {
    // 给col添加间距，左右边距各占一半 padding
    gutter: {
      type: [Number, String],
      default: 0
    },
    // 水平排列方式，可选值为 start（或flex-start）、end（或flex-end）、center、around（或space-around）、between（或space-between）
    justify: {
      type: String,
      default: 'start'
    },
    // 垂直对齐方式，可选择为 top、center、bottom, 也可直接输入 flex-start | flex-end | center | baseline | stretch;
    align: {
      type: String,
      default: 'center'
    },
    // 是否阻止事件传播
    stop: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    // 水平排列方式
    uJustify() {
      if(this.justify === 'end' || this.justify === 'start') return `flex-${this.justify}`
      else if(this.justify === 'around' || this.justify === 'between') return `space-${this.justify}`
      else return this.justify
    },
    // 垂直对齐方式
    uAlignItem() {
      if(this.align === 'top') return  'flex-start';
      if(this.align === 'bottom') return 'flex-end';
      else return this.align;
    }
  },
  methods: {
    click(e) {
      this.$emit('click');
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/style.components";

.u-row {
  // 由于微信小程序编译后奇怪的页面结构，只能使用float布局实现，flex无法实现
  /* #ifndef MP-WEIXIN || MP-QQ || MP-TOUTIAO */
  @include u-flex;
  /* #endif */
  flex-wrap: wrap;
}
.u-row::after {
  /* #ifdef MP-WEIXIN || MP-QQ || MP-TOUTIAO */
  display: table;
  clear: both;
  content: "";
  /* #endif */
}
</style>
