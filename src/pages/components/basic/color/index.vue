<template>
  <view class="color-page wrap-page">
    <color-block v-for="item in data" :key="item.title" :title="item.title" :themes="item.themes" :classname="item.classname" />
  </view>
</template>

<script>
import ColorBlock from "./block";
export default {
  name: "ColorPage",
  components: {
    ColorBlock
  },
  data() {
    return {
      data: [
        {
          title: 'Primary',
          themes:  [
            { label: 'Primary', value: '#2979ff' },
            { label: 'Dark', value: '#2b85e4' },
            { label: 'Disabled', value: '#a0cfff' },
            { label: 'Light', value: '#ecf5ff' },
          ]
        },
        {
          title: 'Error',
          themes: [
            { label: 'Error', value: '#fa3534' },
            { label: 'Dark', value: '#dd6161' },
            { label: 'Disabled', value: '#fab6b6' },
            { label: 'Light', value: '#fef0f0' },
          ]
        },
        {
          title: 'Warning',
          themes: [
            { label: 'Warning', value: '#ff9900' },
            { label: 'Dark', value: '#f29100' },
            { label: 'Disabled', value: '#fcbd71' },
            { label: 'Light', value: '#fdf6ec' },
          ]
        },
        {
          title: 'Info',
          themes: [
            { label: 'Info', value: '#909399' },
            { label: 'Dark', value: '#82848a' },
            { label: 'Disabled', value: '#c8c9cc' },
            { label: 'Light', value: '#f4f4f5' },
          ]
        },
        {
          title: 'Success',
          themes: [
            { label: 'Success', value: '#19be6b' },
            { label: 'Dark', value: '#18b566' },
            { label: 'Disabled', value: '#71d5a1' },
            { label: 'Light', value: '#dbf1e1' },
          ]
        },
        {
          title: '文字颜色',
          themes: [
            { label: '主要文字', value: '#303133' },
            { label: '常规文字', value: '#606266' },
            { label: '次要文字', value: '#909399' },
            { label: '占位文字', value: '#c0c4cc' },
          ],
          classname: 'text-theme'
        },
        {
          title: '边框颜色',
          themes: [
            { label: '一级边框', value: '#dcdfe6' },
            { label: '二级边框', value: '#e4e7ed' },
            { label: '三级边框', value: '#ebeef5' },
            { label: '四级边框', value: '#f2f6fc' },
          ],
          classname: 'border-theme'
        },
        {
          title: '背景颜色',
          themes: [
            { label: '背景颜色', value: '#f3f4f6' },
          ],
          classname: 'bg-theme'
        },
      ],
    }
  }
}
</script>

<style scoped lang="scss">
.color-page {
  /deep/ .text-theme {
    .content {
      .row:last-child {
        color: #fff !important;
      }
    }
  }

  /deep/ .border-theme {
    .content {
      .row {
        color: #909399 !important;
      }
    }
  }
}
</style>