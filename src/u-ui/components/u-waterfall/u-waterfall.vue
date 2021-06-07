<template>
  <view class="u-waterfall">
    <view id="u-left-column" class="u-column">
      <slot name="left" :leftList="leftList"></slot>
    </view>
    <view id="u-right-column" class="u-column">
      <slot name="right" :leftList="rightList"></slot>
    </view>
  </view>
</template>

<script>
/**
 * waterfall 瀑布流
 * @description 这是一个瀑布流形式的组件，内容分为左右两列
 * @property {Array} flow-list 用于渲染的数据
 * @property {String Number} add-time 单条数据添加到队列的时间间隔，单位ms，（默认200）
 * @example <u-waterfall :flowList="flowList"></u-waterfall>
 */
export default {
  name: "u-waterfall",
  props: {
    value: {
      // 瀑布流数据
      type: Array,
      required: true,
      default() {
        return []
      }
    },
    // 每次向结构插入数据的时间间隔，间隔越长，越能保证两列高度相近，但是对用户体验越不好
    // 单位ms
    addTime: {
      type: [Number, String],
      default: 200
    },
    // id值，用于清除某一条数据时，根据此idKey名称找到并移除，如数据为{idx: 22, name: 'lisa'}
    // 那么该把idKey设置为idx
    idKey: {
      type: String,
      default: 'id'
    }
  },
  data() {
    return {
      // 左侧list
      leftList: [],
      // 右侧list
      rightList: [],
      tempList: []
    }
  },
  computed: {
    // 深拷贝，重新生成一个内存地址，不用原来的引用
    copyFlowList() {
      return this.cloneData(this.value);
    }
  },
  watch: {
  },
  mounted() {
    this.tempList = this.cloneData(this.copyFlowList)
  },
  methods: {
    // 复制而不是引用对象和数组
    cloneData(data) {
      return JSON.parse(JSON.stringify(data));
    },
  }
}
</script>

<style scoped>

</style>