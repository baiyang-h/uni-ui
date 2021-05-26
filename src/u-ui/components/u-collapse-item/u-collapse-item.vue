<template>
  <view class="u-collapse-item" :style="[itemStyle]">

    <view
      :hover-stay-time="200"
      :hover-class="hoverClass"
      class="u-collapse-head"
      :style="[headStyle]"
      @tap.stop="headClick"
    >
    <!--  title-all    -->
      <block v-if="!$slots['title-all']">
        <!--  title    -->
        <view
          v-if="!$slots['title']"
          class="u-collapse-title u-line-1"
          :style="[
            { textAlign: align ? align : 'left' },
					  isShow && activeStyle && !arrow ? activeStyle : ''
					]"
        >
          {{ title }}
        </view>
        <slot v-else name="title" />
        <view class="u-icon-wrap">
          <view
            v-if="arrow"
            :color="arrowColor"
            :class="{ 'u-arrow-down-icon-active': isShow }"
            class="iconfont icon-right u-arrow-down-icon"
          />
        </view>
      </block>
      <slot v-else name="title-all" />
    </view>

    <!--  body    -->
    <view
      class="u-collapse-body"
      :style="[{
				height: isShow ? height + 'px' : '0'
			}]"
    >
      <view
        class="u-collapse-content"
        :id="elId"
        :style="[bodyStyle]"
      >
        <slot></slot>
      </view>
    </view>

  </view>
</template>

<script>
/**
 * u-collapse-item 手风琴Item
 *
 * @property {String} title 面板标题
 * @property {String, Number} index 主要用于事件的回调，标识那个Item被点击
 * @property {Boolean} disabled面板是否可以打开或收起（默认false）
 * @property {Boolean} open 设置某个面板的初始状态是否打开（默认false）
 * @property {String, Number} name 唯一标识符，如不设置，默认用当前 collapse-item 的索引值
 * @property {String} align 标题的对齐方式（默认left）
 * @property {Object} active-style 不显示箭头时，可以添加当前选择的 collapse-item活动样式，对象形式
 * @event {Function} change 某个item被打开或者收起时触发
 * @example <u-collapse-item :title="item.head" v-for="(item, index) in itemList" :key="index">{{item.body}}</u-collapse-item>
 */
export default {
  name: "u-collapse-item",
  props: {
    // 标题
    title: {
      type: String,
      default: ''
    },
    // 标识当前为第几个
    index: {
      type: [String, Number],
      default: ''
    },
    // 是否可以点击收起
    disabled: {
      type: Boolean,
      default: false
    },
    // collapse显示与否
    open: {
      type: Boolean,
      default: false
    },
    // 唯一标识符, 如不设置，默认用当前 collapse-item 的索引值
    name: {
      type: [Number, String],
      default: ''
    },
    // 标题的对齐方式
    align: {
      type: String,
      default: 'left'
    },
    // 不显示箭头时，可以添加当前选择的 collapse-item活动样式，对象形式
    activeStyle: {
      type: Object,
      default () {
        return {}
      }
    },
  },
  data() {
    return {
      isShow: false,
      elId: this.$u.guid(),
      height: 0,        // body内容的高度
      headStyle: {},    // 头部样式，对象形式
      bodyStyle: {},    // 主体部分样式
      itemStyle: {},    // 每个item的整体样式
      arrowColor: '',   // 箭头的颜色
      hoverClass: '',   // 头部按下时的效果样式类
      arrow: true,      // 是否显示右侧箭头
    }
  },
  watch: {
    open(val) {
      this.isShow = val;
    }
  },
  created() {
    this.parent = false;
    // 获取u-collapse的信息，放在u-collapse是为了方便，不用每个u-collapse-item写一遍
    this.isShow = this.open;
  },
  mounted() {
    this.init();
  },
  methods: {
    // 异步获取内容，或者动态修改了内容时，需要重新初始化
    init() {
      // 获取父 u-collapse 的实例
      this.parent = this.$u.$parent.call(this, 'u-collapse');
      if(this.parent) {
        this.nameSync = this.name ? this.name : this.parent.children.length;
        this.parent.children.push(this);
        this.headStyle = this.parent.headStyle;
        this.bodyStyle = this.parent.bodyStyle;
        this.itemStyle = this.parent.itemStyle;
        this.arrowColor = this.parent.arrowColor;
        this.hoverClass = this.parent.hoverClass;
        this.arrow = this.parent.arrow;
      }
      // 设置高度
      this.$nextTick(() => {
        this.queryRect();
      });
    },
    // 查询内容高度
    queryRect() {
      // $uGetRect为自带的节点查询简化方法
      // 组件内部一般用this.$uGetRect，对外的为this.$u.getRect，二者功能一致，名称不同
      this.$uGetRect('#' + this.elId).then(res => {
        this.height = res.height;
      })
    },
    // 点击collapsehead头部
    headClick() {
      // disabled点击无效
      if (this.disabled) return;
      // 手风琴，只会展示一个
      if(this.parent && this.parent.accordion) {
        this.parent.children.map(val => {
          // 自身不设置为false，因为后面有this.isShow = !this.isShow;处理了
          if (this !== val) { // 只展开自己，其他全都收拢
            val.isShow = false;
          }
        })
      }
      // 自身
      this.isShow = !this.isShow;
      // 触发本组件的事件
      this.$emit('change', {
        index: this.index,
        show: this.isShow
      })
      // 只有在打开时才发出事件
      if (this.isShow) this.parent && this.parent.onChange();
      // 强制更新
      this.$forceUpdate();
    }
  }

}
</script>

<style scoped lang="scss">
@import "../../styles/style.components";
.u-collapse-item {
  .u-collapse-head {
    @include u-flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    color: $u-main-color;
    font-size: 30rpx;
    line-height: 1;
    padding: 24rpx 0;
    text-align: left;

    .u-collapse-title {
      flex: 1;
      overflow: hidden;
    }

    .u-arrow-down-icon {
      transition: all 0.3s;
      margin-right: 20rpx;
      margin-left: 14rpx;
    }

    .u-arrow-down-icon-active {
      transform: rotate(90deg);
      transform-origin: center center;
    }
  }

  .u-collapse-body {
    overflow: hidden;
    transition: all 0.3s;

    .u-collapse-content {
      overflow: hidden;
      font-size: 28rpx;
      color: $u-tips-color;
      text-align: left;
    }
  }
}
</style>
