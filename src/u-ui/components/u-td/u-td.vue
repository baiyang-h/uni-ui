<template>
  <view class="u-td" :style="[tdStyle]">
    <slot></slot>
  </view>
</template>

<script>
/**
 * td td单元格
 * @description 表格组件一般用于展示结构化数据的场景（搭配u-table使用）
 * @property {String Number} width 单元格宽度百分比或者具体带单位的值，如 30%，200rpx等，一般使用百分比，单元格宽度默认认为均分tr的长度（默认auto）
 * @example <u-td>二年级<u-td>
 */
export default {
  name: "u-td",
  props: {
    width: {
      type: [Number, String],
      default: 'auto'
    }
  },
  data() {
    return {
      tdStyle: {}
    }
  },
  created() {
    this.parent = false
  },
  mounted() {
    this.parent = this.$u.$parent.call(this, 'u-table');
    if(this.parent) {
      // 将父组件的相关参数，合并到本组件
      let style = {};
      if(this.width !== 'auto') style. flex = `0 0 ${this.width}`;
      style.textAlign = this.parent.align;
      style.fontSize = this.parent.fontSize + 'rpx';
      style.padding = this.parent.padding;
      style.borderBottom = `1px solid ${this.parent.borderColor}`;
      // 是否带有纵向边框
      if(this.parent.border) {
        style.borderRight = `1px solid ${this.parent.borderColor}`
      }
      style.color = this.parent.color;
      this.tdStyle = style;
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/style.components";

.u-td {
  @include u-flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  font-size: 28rpx;
  color: $u-content-color;
  align-self: stretch;
  box-sizing: border-box;
  //height: 100%;
}
</style>