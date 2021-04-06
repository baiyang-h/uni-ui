<template>
  <view class="u-th" :style="[thStyle]">
    <slot></slot>
  </view>
</template>

<script>
/**
 * th th单元格
 * @description 表格组件一般用于展示结构化数据的场景（搭配u-table使用）
 * @property {String, Number} width 标题单元格宽度百分比或者具体带单位的值，如30%、200rpx等，一般使用百分比，单元格宽度默认均分tr的长度
 * @example <u-th width="30%"></u-th>
 */
export default {
  name: "u-th",
  props: {
    // 宽度，百分比或者具体带单位的值， 如30%，200rpx等，一般使用百分比
    width: {
      type: [Number, String],
      default: ''
    }
  },
  data() {
    return {
      thStyle: {}
    }
  },
  created() {
    this.parent = false
  },
  mounted() {
    // 获取到 u-table 组件实例
    this.parent = this.$u.$parent.call(this, 'u-table')
    /**
     * 接受 u-table 的textAlign、padding、thStyle
     */
    if(this.parent) {
      // 将父组件的相关属性，合并到本组件
      const style = {};
      if(this.width) style.flex = `0 0 ${this.width}`;
      style.textAlign = this.parent.align;
      style.padding = this.parent.padding;
      style.borderBottom = `1px solid ${this.parent.borderColor}`;
      // 是否带有纵向边框
      if(this.parent.border) {
        style.borderRight = `1px solid ${this.parent.borderColor}`;
      }
      Object.assign(style, this.parent.thStyle);
      this.thStyle = style;
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/style.components";

.u-th {
  @include u-flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  font-size: 28rpx;
  color: $u-main-color;
  font-weight: bold;
  //background-color: rgb(245, 246, 248);
}
</style>