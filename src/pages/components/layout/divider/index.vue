<template>
  <view class="wrap-page">
    <u-panel title="提示内容">
      <u-button size="mini" class="u-m-r-10" @click="textChange('没有更多内容', true)">没有更多内容</u-button>
      <u-button size="mini" class="u-m-r-10" @click="textChange('到底部了', true)">到底部了</u-button>
      <u-button size="mini" class="u-m-r-10" @click="textChange('', false)">不显示内容</u-button>
    </u-panel>
    <u-gap />
    <u-panel title="单边线宽">
      <u-button size="mini" class="u-m-r-10" @click="halfWidthChange(50)">50</u-button>
      <u-button size="mini" class="u-m-r-10" @click="halfWidthChange(150)">150</u-button>
    </u-panel>
    <u-gap />
    <u-panel title="横线颜色">
      <u-button size="mini" class="u-m-r-10" @click="borderColorChange('default')">default</u-button>
      <u-button size="mini" class="u-m-r-10" @click="borderColorChange('primary')">primary</u-button>
      <u-button size="mini" class="u-m-r-10" @click="borderColorChange('error')">error</u-button>
      <u-button size="mini" class="u-m-r-10" @click="borderColorChange('warning')">warning</u-button>
      <u-button size="mini" class="u-m-r-10" @click="borderColorChange('success')">success</u-button>
    </u-panel>
    <u-gap />
    <u-panel title="内容样式">
      <u-button size="mini" class="u-m-r-10" @click="contentChange(0)">默认</u-button>
      <u-button size="mini" class="u-m-r-10" @click="contentChange(1)">自定义</u-button>
    </u-panel>
    <u-gap />
    <u-gap height="70" />
    <u-divider
      :type="type"
      :border-color="borderColor"
      :bg-color="bgColor"
      :half-width="halfWidth"
      :color="color"
      :font-size="fontSize"
      :useSlot="useSlot"
      @click="click"
    >
      {{ text }}
    </u-divider>
  </view>
</template>

<script>
export default {
  name: "DividerPage",
  data() {
    return {
      text: '没有更多了',
      bgColor: '#fafafa',
      halfWidth: 150,
      borderColor: '#dcdfe6',
      type: 'primary',
      color: '#909399',
      fontSize: '26',
      useSlot: true
    }
  },
  methods: {
    textChange(text, status) {
      if(status) {
        this.text = text
        this.useSlot = true
      } else {
        this.useSlot = false
      }
    },
    halfWidthChange(halfWidth) {
      this.halfWidth = halfWidth
    },
    borderColorChange(type) {
      if(type === 'default') {
        this.borderColor = '#dcdfe6';
      } else {
        // 因为border-color参数优先级高于type，要让type起作用，就需要设置border-color为空
        this.borderColor = '';
        this.type = type;
      }
    },
    contentChange(index) {
      if(index === 0) {
        this.color = '#909399';
        this.fontSize = 26;
      } else {
        this.color = this.$u.color['primary'];
        this.fontSize = 30;
      }
    },
    click() {
      console.log('click');
    }
  }
}
</script>
