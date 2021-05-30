<template>
  <view>
    <movable-area class="u-swipe-action" :style="{ backgroundColor: bgColor }">
      <movable-view
        class="u-swipe-view"
        :disabled="disabled"
        :x="moveX"
        :style="{
					width: movableViewWidth ? movableViewWidth : '100%'
				}"
        direction="horizontal"
        @touchstart="touchstart"
        @touchend="touchend"
        @change="change"
      >
        <view
          class="u-swipe-content"
          @tap.stop="contentClick"
        >
          <slot></slot>
        </view>
        <view
          class="u-swipe-del"
          :style="[btnStyle(item.style)]"
          :key="index"
          v-if="showBtn"
          v-for="(item, index) in options"
          @tap.stop="btnClick(index)"
        >
          <view class="u-btn-text">{{ item.text }}</view>
        </view>
      </movable-view>
    </movable-area>
  </view>
</template>

<script>
/**
 * swipeAction 左滑单元格
 * @description 该组件一般用于左滑唤出操作菜单的场景，用的最多的是左滑删除操作
 * @property {String} bg-color 整个组件背景颜色（默认#ffffff）
 * @property {Array} options 数组形式，可以配置背景颜色和文字  [{style: {}, text: 'xxx'}]
 * @property {String Number} index 标识符，点击时候用于区分点击了哪一个，用v-for循环时的index即可
 * @property {String Number} btn-width 按钮宽度，单位rpx（默认180）
 * @property {Boolean} disabled 是否禁止某个swipeAction滑动（默认false）
 * @property {Boolean} show 打开或者关闭某个组件（默认false）
 * @event {Function} click 点击组件时触发
 * @event {Function} close 组件触发关闭状态时
 * @event {Function} content-click 点击内容时触发
 * @event {Function} open 组件触发打开状态时
 * @example <u-swipe-action btn-text="收藏">...</u-swipe-action>
 */
export default {
  name: "u-swipe-action",
  props: {
    // index值，用于得知点击删除的是哪个按钮
    index: {
      type: [Number, String],
      default: ''
    },
    // 滑动单个按钮的宽度，单位为rpx
    btnWidth: {
      type: [String, Number],
      default: 180
    },
    // 是否禁止某个action滑动
    disabled: {
      type: Boolean,
      default: false
    },
    // 打开或者关闭组件
    show: {
      type: Boolean,
      default: false
    },
    // 组件背景颜色
    bgColor: {
      type: String,
      default: '#ffffff'
    },
    // 是否使手机发生短促震动，目前只在iOS的微信小程序有效
    vibrateShort: {
      type: Boolean,
      default: false
    },
    // 按钮操作参数   [{style: {}, text: 'xxx'}]
    options: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      moveX: 0,                 // movable-view元素在x轴上需要移动的目标移动距离，用于展开或收起滑动的按钮，即所有按钮总长度，可移动到的最终距离
      scrollX: 0,               // movable-view移动过程中产生的change事件中的x轴移动值， 主要是为了存储 e.detail.x 的值，用于赋值和判断，  movable-view 真正移动的值还是moveX
      status: false,            // 滑动的状态，表示当前是展开还是关闭按钮的状态,   true 展开， false 关闭
      movableAreaWidth: 0,      // 除了按钮外的剩余内容宽度
      showBtn: false,           // 刚开始渲染视图时不显示右边的按钮，避免视图闪动
    }
  },
  computed: {
    // 内容区和按钮区 总长度
    movableViewWidth() {
      return this.movableAreaWidth + this.allBtnWidth + 'px';
    },
    // 单个按钮宽度
    innerBtnWidth() {
      return uni.upx2px(this.btnWidth);
    },
    // 所有按钮集，合计长度
    allBtnWidth() {
      return uni.upx2px(this.btnWidth) * this.options.length;
    },
    // 每个按钮的样式
    btnStyle() {
      return style => {
        style.width = this.btnWidth + 'rpx';
        return style;
      }
    }
  },
  watch: {
    show: {
      immediate: true,
      handler(nVal, oVal) {
        if (nVal) {
          this.open();
        } else {
          this.close();
        }
      }
    }
  },
  mounted() {
    this.getActionRect();
  },
  methods: {
    // 打开按钮的状态
    open() {
      if(this.disabled) return false;
      this.moveX = -this.allBtnWidth;
      this.status = true;
    },
    // 关闭按钮状态
    close() {
      this.moveX = 0;
      this.status = false;
    },
    // movable-view元素移动事件
    change(e) {
      // 将移动的值存储在 scrollX 中
      this.scrollX = e.detail.x;
    },
    // 开始触摸
    touchstart(e) {
      // 开始点击的位置
      this.touchstartPageX = e.changedTouches[0].pageX
    },
    // 手指滑动时触发
    touchend(e) {
      // 手指离开时的点击的位置
      // 为什么要增加这一句，因为 touchend 和 click 有冲突，当手指离开时都会触发touchend事件， 所以即使click点击离开，也会触发。 所以为了表示是滑动后触发的，我们设置一个滑动值，必须要大于10的情况下，表示是滑动，不然是点击
      if(Math.abs(this.touchstartPageX-e.changedTouches[0].pageX)<10) return '表示是点击事件'
      this.moveX = this.scrollX;
      // 停止触摸时候，判断当前是展开还是关闭状态
      // 关闭状态
      // 这一步很重要，需要先给this.moveX一个变化的随机值，否则因为前后设置的为同一个值
      // props单向数据流的原因，导致movable-view元素不会发生变化，切记
      this.$nextTick(() => {
        if(this.status) {   // 打开
          // 如果在打开的状态下，此时scrollX为负的，右滑动的距离X轴偏移超过按钮的四分之一(负值反过来的四分之三)，自动收起按钮
          if(this.scrollX > -this.allBtnWidth * 3 / 4) {
            this.moveX = 0;
            this.$nextTick(() => {
              this.moveX = 101;   // 这个值设置着 其实最后因为外面还是会将 show 改为 false， 所以通过监听show false，最后还是会执行 close的，moveX 会被改为 0，， 所以这里只是被用于赋值临时改变下状态而已
            });
            this.status = false;
            this.emitCloseEvent();
          } else {
            this.moveX = -this.allBtnWidth;
            this.status = true;
            this.emitOpenEvent();
          }
        } else {      // 关闭
          // 关闭状态左滑，产生的x轴位移为负值，也就是说滑动的距离大于按钮的四分之一宽度，自动展开按钮
          if(this.scrollX <= -this.allBtnWidth / 4) {
            this.moveX = -this.allBtnWidth; // 按钮宽度的负值，即为展开状态movable-view元素左滑的距离
            this.status = true; // 标志当前为展开状态
            this.emitOpenEvent();
            // 产生震动效果
            if (this.vibrateShort) uni.vibrateShort();
          } else {
            this.moveX = 0; // 如果距离没有按钮宽度的四分之一，自动收起
            this.status = false;
            this.emitCloseEvent();
          }
        }
      })
    },
    // 点击内容触发事件
    contentClick() {
      // 点击内容时，如果当前为打开状态，收起组件
      if(this.status) {
        this.status = false;
        this.moveX = 0;
      }
      this.$emit('content-click', this.index)
    },
    // 点击按钮
    btnClick(index) {
      this.status = false;
      // this.index为点击的几个组件，index为点击某个组件的第几个按钮(options数组的索引)
      this.$emit('click', this.index, index);
    },
    // emit 打开时的事件
    emitOpenEvent() {
      this.$emit('open', this.index);
    },
    // emit 关闭时的事件
    emitCloseEvent() {
      this.$emit('close', this.index);
    },
    getActionRect() {
      this.$uGetRect('.u-swipe-action').then(res => {
        this.movableAreaWidth = res.width;  // 所以此时这个值是不包含按钮的
        // 等视图更新完后，再显示右边的可滑动按钮，防止这些按钮会"闪一下"
        this.$nextTick(() => {
          this.showBtn = true;
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/style.components";
.u-swipe-action {
  width: auto;
  height: initial;
  position: relative;
  overflow: hidden;
}

.u-swipe-view {
  @include u-flex;
  height: initial;
  position: relative;
  /* 这一句很关键，覆盖默认的绝对定位 */
}

.u-swipe-content {
  flex: 1;
}

.u-swipe-del {
  position: relative;
  font-size: 30rpx;
  color: #ffffff;
}

.u-btn-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
