<template>
  <view
    class="u-cell-item"
    :class="{'u-border-bottom': borderBottom, 'u-border-top': borderTop, 'u-col-center': center}"
    :style="{
			backgroundColor: bgColor
		}"
    :hover-class="hoverClass"
    hover-stay-time="150"
    @tap="click"
  >
    <!--  icon  -->
    <view v-if="icon" :class="['iconfont u-cell-item__icon', icon]"></view>
    <view v-if="$slots.icon">
      <slot name="icon"></slot>
    </view>
    <!--  title  -->
    <view
      class="u-cell-item__title"
      :style="[titleStyle]"
    >
      <view v-if="title !== ''">{{ title }}</view>
      <slot name="title" v-else></slot>
    </view>

    <!--  value  -->
    <view
      class="u-cell-item__value"
      :style="[valueStyle]"
    >
      <view v-if="value !== ''">{{ value }}</view>
      <slot v-else></slot>
    </view>
    <!--  右侧内容  -->
    <!--   right-icon   -->
    <view v-if="rightIcon" :class="['iconfont u-cell-item__right-icon', rightIcon]"></view>
    <view v-if="$slots['right-icon']" class="u-cell-item__right-icon">
      <slot name="right-icon"></slot>
    </view>
  </view>
</template>

<script>
/**
 * u-cell-item 单元格Item
 * @description cell 单元格一般用于一组列表的情况，搭配 u-cell-group 使用
 * @property {String} icon 左侧title的图标
 * @property {String} right-icon 右侧尾部图标
 * @property {String} title 左侧标题内容
 * @property {String} value 主体内容
 * @property {String} title-style 左侧标题文字部分自定义样式
 * @property {String} value-style 主题内容部分自定义样式
 * @property {String} border-bottom 是否显示下边框（默认true）
 * @property {String} border-top 是否显示上边框（默认true）
 * @property {String} bg-color 背景颜色（默认transparent）
 * @property {String} hoverClass 点击时的动画效果（默认u-cell-hover）
 * @property {String} center 内容是否垂直居中（默认false）
 * @property {String, Number} index 外部传入的索引，可以表示点击了第几个
 */
export default {
  name: "u-cell-item",
  props: {
    // 左侧title的图标
    icon: {
      type: String,
      default: ''
    },
    // 右侧图标
    rightIcon: {
      type: String,
      default: ''
    },
    // 左侧标题
    title: {
      type: [String, Number],
      default: ''
    },
    // 主体内容
    value: {
      type: [String, Number],
      default: ''
    },
    // 控制标题的样式
    titleStyle: {
      type: Object,
      default() {
        return {};
      }
    },
    // 主题内容的样式
    valueStyle: {
      type: Object,
      default() {
        return {};
      }
    },
    // 是否显示下边框
    borderBottom: {
      type: Boolean,
      default: true
    },
    // 是否显示上边框
    borderTop: {
      type: Boolean,
      default: false
    },
    // 背景颜色
    bgColor: {
      type: String,
      default: 'transparent'
    },
    // 是否开启点击反馈，即点击时cell背景为灰色，none为无效果
    hoverClass: {
      type: String,
      default: 'u-cell-hover'
    },
    // 内容是否垂直居中
    center: {
      type: Boolean,
      default: false
    },
    // 外部传入的索引，可以表示点击了第几个
    index: {
      type: [String, Number],
      default: undefined
    }
  },
  methods: {
    click() {
      // this.index 需要外部传入，表示第几个索引
      this.$emit('click', this.index)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/style.components";
.u-cell-item {
  @include u-flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 26rpx 32rpx;
  font-size: 28rpx;
  line-height: 54rpx;
  color: $u-content-color;
  background-color: #fff;
  text-align: left;
}

.u-cell-item__title {
  font-size: 28rpx;
}

.u-cell-item__value {
  overflow: hidden;
  vertical-align: middle;
  color: $u-tips-color;
  font-size: 26rpx;
  text-align: right;
}

.u-cell-item__title,
.u-cell-item__value {
  flex: 1;
}

.u-cell-item__icon {
  margin-right: 6rpx;
}

.u-cell-item__right-icon {
  margin-left: 6rpx;
}
</style>
