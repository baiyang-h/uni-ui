<template>
  <view class="u-table" :style="[tableStyle]">
    <slot />
  </view>
</template>

<script>
/**
 * table 表格
 * @description 表格组件一般用于结构化数据的场景
 * @property {Boolean} border 是否带有纵向边框（默认无）
 * @property {String} border-color 表格边框的颜色（默认#e4e7ed）
 * @property {String} bg-color 表格的背景颜色（默认#ffffff）
 * @property {String} align 单元格的内容对齐方式，类似 css 的 text-align（默认center）
 * @property {String} padding 单元格的内边距，同css的padding写法（默认10rpx 6rpx）
 * @property {String, Number} font-size 单元格字体大小，单位rpx（默认28）
 * @property {String} color 单元格字体颜色（默认#606266）
 * @property {Object} th-style th单元格的样式，对象形式（将th所需参数放在table组件，是为了避免每一个th组件要写一遍）
 * @event {Function} click 点击组件时触发
 * @event {Function} close 点击关闭按钮时触发
 * @example  <u-table></u-table>
 */
export default {
  name: "u-table",
  props: {
    // 是否带边框
    border: {
      type: Boolean,
      default: false
    },
    borderColor: {
      type: String,
      default: '#e4e7ed'
    },
    // table的背景颜色
    bgColor: {
      type: String,
      default: '#ffffff'
    },
    // td、th的内边距（u-td、u-th都受影响）
    align: {
      type: String,
      default: 'left'
    },
    // 字体大小
    fontSize: {
      type: [String, Number],
      default: 28
    },
    // 字体颜色
    color: {
      type: String,
      default: '#606266'
    },
    // td、th的内边距（u-td、u-th都受影响）
    padding: {
      type: String,
      default: '10rpx 6rpx'
    },
    // th的自定义样式，（u-th受影响）
    thStyle: {
      type: Object,
      default () {
        return {}
      }
    },
  },
  computed: {
    tableStyle() {
      let style = {};
      if(this.border) {
        style.borderLeft = `solid 1px ${this.borderColor}`;
        style.borderTop = `solid 1px ${this.borderColor}`;
      }
      style.backgroundColor = this.bgColor;;
      return style;
    }
  }
}
</script>

<style scoped lang="scss">
.u-table {
  width: 100%;
  box-sizing: border-box;
}
</style>