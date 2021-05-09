<template>
  <u-popup
    mode="bottom"
    :border-radius="borderRadius"
    :popup="false"
    v-model="value"
    :maskCloseAble="maskCloseAble"
    :length="height"
    :safeAreaInsetBottom="safeAreaInsetBottom"
    :z-index="uZIndex"
    @close="close"
  >
    <view class="u-tips u-border-bottom" v-if="tips.text" :style="[tipsStyle]">{{ tips.text }}</view>
    <block v-for="(item, index) in list" :key="index">
      <view
        @touchmove.stop.prevent
        @tap="itemClick(index)"
        :style="[itemStyle(index)]"
        class="u-action-sheet-item u-line-1"
        :class="[index < list.length - 1 ? 'u-border-bottom' : '']"
        :hover-stay-time="150"
      >
        <text>{{ item.text }}</text>
        <text class="u-action-sheet-item__subtext u-line-1" v-if="item.subText">{{ item.subText }}</text>
      </view>
    </block>
    <view class="u-gap" v-if="cancelBtn" />
    <view
      v-if="cancelBtn"
      @touchmove.stop.prevent
      class="u-action-sheet-cancel u-action-sheet-item"
      hover-class="u-hover-class"
      :hover-stay-time="150"
      @tap="close"
    >
      {{ cancelText }}
    </view>
  </u-popup>
</template>

<script>
/**
 * actionSheet 操作菜单
 * @description 本组件用于从底部弹出一个操作菜单，供用户选择并返回结果。本组件功能类似于uni.showActionSheet API，配置更加灵活
 * @property {Array} list 按钮的文字数组 list: [{ text: '点赞', color: 'blue', fontSize: 28, subText: '描述信息', disabled: true }, { text: '分享' }]
 * @property {Object} tips 顶部的提示文字   { text: '', color: '', fontSize: '26' }
 * @property {String} cancel-text 取消按钮的提示文字
 * @property {Boolean} cancel-btn 是否显示底部的取消按钮（默认true）
 * @property {Number, String} border-radius 弹出部分顶部左右的圆角值，单位rpx（默认0）
 * @property {Boolean} mask-close-able 点击遮罩是否可以关闭（默认true）
 * @property {Boolean} safe-area-inset-bottom 是否开启底部安全区适配（默认true）
 * @property {Number, String} z-index z-index值（默认1075）
 *
 * @property {String, Number} height 高度，只对上，下，中部弹出时起作用，单位rpx，或者"auto"，或者百分比"50%"，表示由内容撑开高度或者宽度，优先级高于length参数
 *
 * @event {Function} click 点击 ActionSheet 列表项时触发
 * @event {Function} close 点击取消按钮时触发，外部可以有一个close回调
 * @example <u-action-sheet :list="list" @click="click" v-model="show"></u-action-sheet>
 */
export default {
  name: "u-action-sheet",
  props: {
    // 通过双向绑定控制组件的弹出与收起
    value: {
      type: Boolean,
      default: false
    },
    // 高度，单位rpx，或者"auto"
    // 或者百分比"50%"，表示由内容撑开高度或者宽度
    height: {
      type: [Number, String],
      default: ''
    },
    // 点击遮罩是否可以关闭actionsheet
    maskCloseAble: {
      type: Boolean,
      default: true
    },
    // 按钮的文字数组，可以自定义颜色、字体大小、内容、描述信息等，字体单位为rpx
    // list: [{ text: '点赞', color: 'blue', fontSize: 28, subText: '描述信息', disabled: true  }, { text: '分享' }]
    list: {
      type: Array,
      default () {
        // 如下
        // return [{
        // 	text: '确定',         // row 文字内容
        // 	color: 'blue',        // row 文字颜色
        // 	fontSize: 28          // 文字大小
        //  subText: '描述信息',    // 描述
        //  disabled: true        // 是否禁用
        // }]
        return [];
      }
    },
    // 顶部的提示文字
    tips: {
      type: Object,
      default () {
        return {
          text: '',
          color: '',
          fontSize: '26'
        }
      }
    },
    // 底部的取消按钮 实现显示
    cancelBtn: {
      type: Boolean,
      default: true
    },
    // 取消按钮的文字内容
    cancelText: {
      type: String,
      default: '取消'
    },
    // 是否开启底部安全区适配，开启的话，会在iPhoneX机型底部添加一定的内边距
    safeAreaInsetBottom: {
      type: Boolean,
      default: true
    },
    // 弹出的顶部圆角值
    borderRadius: {
      type: [String, Number],
      default: 0
    },
    // 弹出的z-index值
    zIndex: {
      type: [String, Number],
      default: 0
    },
    // color 默认 ActionSheet 中内容中的文字颜色，如果想某一行特殊，可以直接list中设置某一行
    color: {
      type: String,
      default: '#303133'
    },
    // 同上
    fontSize: {
      type: [String, Number],
      default: '32'
    },
  },
  computed: {
    // 顶部提示的样式
    tipsStyle() {
      let style = {};
      if(this.tips.color) style.color = this.tips.color;
      if (this.tips.fontSize) style.fontSize = this.tips.fontSize + 'rpx';
      return style;
    },
    // 操作row的样式
    itemStyle() {
      return (index) => {
        let style = {};
        style.color = this.list[index].color ? this.list[index].color : this.color;
        style.fontSize = this.list[index].fontSize ? this.list[index].fontSize + 'rpx' : this.fontSize + 'rpx'
        // 选项被禁用的样式
        if (this.list[index].disabled) style.color = '#c0c4cc';
        return style;
      }
    },
    uZIndex() {
      // 如果用户有传递z-index值，优先使用
      return this.zIndex ? this.zIndex : this.$u.zIndex.popup;
    }
  },
  methods: {
    // 点击取消按钮，外部会有close的一个回调
    close() {
      // 发送input事件，并不会作用于父组件，而是要设置组件内部通过props传递的value参数
      // 这是一个vue发送事件的特殊用法
      this.popupClose();
      this.$emit('close');
    },
    // 弹窗关闭
    popupClose() {
      this.$emit('input', false);
    },
    // 点击某一个item
    itemClick(index) {
      // disabled的项禁止点击
      if(this.list[index].disabled) return;
      this.$emit('click', index);
      this.$emit('input', false);
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/style.components";

.u-tips {
  font-size: 26rpx;
  text-align: center;
  padding: 34rpx 0;
  line-height: 1;
  color: $u-tips-color;
}

.u-action-sheet-item {
  @include u-flex(column);
  line-height: 1;
  justify-content: center;
  align-items: center;
  font-size: 32rpx;
  padding: 34rpx 0;
}

.u-action-sheet-item__subtext {
  font-size: 24rpx;
  color: $u-tips-color;
  margin-top: 20rpx;
}

.u-gap {
  height: 12rpx;
  background-color: rgb(234, 234, 236);
}

.u-action-sheet-cancel {
  color: $u-main-color;
}

</style>
