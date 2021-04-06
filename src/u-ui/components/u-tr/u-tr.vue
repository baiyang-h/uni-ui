<template>
  <view class="u-tr">
    <slot></slot>
  </view>
</template>

<script>
/**
 * tr 表格行标签
 * @description 表格组件一般用于展示结构化数据的场景（搭配u-table）使用
 * @example <u-tr></u-tr>
 */
export default {
  name: "u-tr"
}
</script>

<style scoped lang="scss">
@import "../../styles/style.components";

.u-tr {
  @include u-flex;
}
</style>