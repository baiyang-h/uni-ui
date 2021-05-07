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
    <view
      class="u-cell-item__end"
      :style="[endStyle]"
    >
      <slot name="end"></slot>
      <!--   图标> 暂时没写   -->
    </view>
  </view>
</template>

<script>
/**
 * u-cell-item 单元格Item
 * @description cell 单元格一般用于一组列表的情况，搭配 u-cell-group 使用
 * @property {String, Number}
 */
export default {
  name: "u-cell-item",
  props: {
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
    // 尾部内容的样式
    endStyle: {
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
  },
  methods: {
    click() {
      this.$emit('click')
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
}

.u-cell-item__title,
.u-cell-item__value {
  flex: 1;
}

.u-cell-item__end {
  line-height: 1;
}

</style>