<template>
  <view
    class="u-col"
    :class="['u-col-' + span]"
    :style="{
      padding: `0 ${Number(gutter)/2}rpx`,
      marginLeft: `${100 / 12 * offset}%`,
      flex: `0 0 ${100 / 12 * span}%`,
      alignItems: uAlignItem,
      justifyContent: uJustify,
      textAlign: textAlign
    }"
    @tap="click"
  >
    <slot></slot>
  </view>
</template>

<script>
/**
 * col 单元格
 * @description 通过基础的 12 分栏，迅速简便地创建布局（搭配<u-row>使用）
 * @property {String, Number} span 栅格占据的列数，总 12 等分（默认0）
 * @property {String} text-align 文字水平对齐方式（默认left）
 * @property {String, Number} offset 分栏左侧偏移，计算方式与span相同（默认0）
 * @event {Function} click 点击事件
 * @example <u-col span="3"><view class="demo-layout bg-purple"></view></u-col>
 */
export default {
  name: "u-col",
  props: {
    // 占父容器宽度的多少等分，总分为12份
    span: {
      type: [Number, String],
      default: 12
    },
    // 指定栅格左侧的间隔数（总12栏）
    offset: {
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
    // 文字对齐方式
    textAlign: {
      type: String,
      default: 'left'
    },
    // 是否阻止事件传播
    stop: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      gutter: 20    // 给 col 添加间距，左右边距各占一半，从父组件 u-row 获取
    }
  },
  created() {
    this.parent = false
  },
  mounted() {
    // 获取父组件实例，并赋值给对应的参数
    this.parent = this.$u.$parent.call(this, 'u-row')
    if(this.parent) {
      this.gutter = this.parent.gutter
    }
  },
  // 其实没用到，除非 u-col 设置为display: flex
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
.u-col {
  /* #ifdef MP-WEIXIN || MP-QQ || MP-TOUTIAO */
  float: left;
  /* #endif */
  box-sizing: border-box;
}

@for $i from 0 through 12 {
  .u-col-#{$i} {
    width: calc(100% / 12 * #{$i});
  }
}
</style>
