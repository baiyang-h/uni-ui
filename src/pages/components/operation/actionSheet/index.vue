<template>
  <view class="wrap-page">
    <u-panel title="基础演示">
      <u-button @click="click1">唤起ActionSheet</u-button>
    </u-panel>
    <u-gap />
    <u-panel title="增加头部tips">
      <u-button @click="click4">增加头部tips</u-button>
    </u-panel>
    <u-gap />
    <u-panel title="取消按钮不显示">
      <u-button @click="click2">取消按钮不显示</u-button>
    </u-panel>
    <u-gap />
    <u-panel title="点击遮罩不关闭">
      <u-button @click="click3">点击遮罩不关闭</u-button>
    </u-panel>

    <u-action-sheet
      v-model="show"
      :cancel-btn="cancelBtn"
      :mask-close-able="maskCloseAble"
      :tips="tips"
      :list="list"
      @click="click"
    ></u-action-sheet>
  </view>
</template>

<script>
export default {
  name: "ActionSheetPage",
  data() {
   return {
     show: false,
     cancelBtn: true,
     maskCloseAble: true,
     list: [{
       text: '最是人间留不住',
       color: 'orange'
     }, {
       text: '朱颜辞镜花辞树',
       disabled: true
     }, {
       text: '正是江南好风景',
       subText: '春江水暖鸭先知'
     }, {
       text: '落花时节又逢君'
     }],
     tips: {
       text: ''
     },
   }
  },
  methods: {
    click1() {
      this.show = true;
      this.cancelBtn = true;
      this.maskCloseAble = true
      this.tips.text = '';
    },
    click2() {
      this.show = true;
      this.cancelBtn = false;
      this.tips.text = '';
    },
    click3() {
      this.show = true;
      this.cancelBtn = true;
      this.maskCloseAble = false
      this.tips.text = '';
    },
    click4() {
      this.show = true;
      this.tips.text = 'aaaa--tips';
    },
    click(index) {
      console.log(index)
    }
  }
}
</script>

<style scoped>

</style>
