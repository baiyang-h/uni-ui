<template>
  <view class="u-waterfall">
    <view id="u-left-column" class="u-column">
      <slot name="left" :leftList="leftList"></slot>
    </view>
    <view id="u-right-column" class="u-column">
      <slot name="right" :rightList="rightList"></slot>
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
      type: [String, Number],
      default: 'id'
    }
  },
  data() {
    return {
      // 左侧list
      leftList: [],
      // 右侧list
      rightList: [],
      // 瀑布流中所有块的list， 如显示的图片，每次下拉都会往里面去增加
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
    copyFlowList(val, oVal) {
      // 取差值，即这一次数组变化新增的部分
      let startIndex = Array.isArray(oVal) && oVal.length > 0 ? oVal.length : 0;   // 原来的数组长度，即原来有多少个
      // 拼接上原有数据，就是显示的所有数据
      this.tempList = this.tempList.concat(this.cloneData(val.slice(startIndex)))
      this.splitData();
    }
  },
  mounted() {
    this.tempList = this.cloneData(this.copyFlowList)
    this.splitData();
  },
  methods: {
    // 复制而不是引用对象和数组
    cloneData(data) {
      return JSON.parse(JSON.stringify(data));
    },
    async splitData() {
      if(!this.tempList.length) return false;
      // 左侧列
      let leftRect = await this.$uGetRect('#u-left-column');
      // 右侧列
      let rightRect = await this.$uGetRect('#u-right-column');
      // 如果左边小于或等于右边，就添加到左边，否则添加到右边
      let item = this.tempList[0];
      // 解决多次快速上拉后，可能数据会乱的问题，因为经过上面的两个await节点查询阻塞一定时间，加上后面的定时器干扰
      // 数组可能变成[]，导致此item值可能为undefined
      if(!item) return false;
      if(leftRect.height < rightRect.height) {
        this.leftList.push(item);
      } else if(leftRect.height > rightRect.height) {
        this.rightList.push(item);
      } else {
        // 这里是为了保证第一和第二张添加时，左右都能有内容
        // 因为添加第一张，实际队列的高度可能还是0，这时需要根据队列元素长度判断下一个该放哪边
        if(this.leftList.length <= this.rightList.length) {
          this.leftList.push(item)
        } else {
          this.rightList.push(item)
        }
      }
      // 移除临时列表的第一项
      this.tempList.splice(0, 1);
      // 如果临时数组还有数据，继续循环
      if (this.tempList.length) {
        setTimeout(() => {
          this.splitData();
        }, this.addTime)
      }
    },
    // 清空数据列表。 从外部调用 this.$refs.uWaterfall.clear()
    clear() {
      this.leftList = [];
      this.rightList = [];
      // 同时清除父组件列表中的数据
      this.$emit('input', []);
      this.tempList = [];
    },
    // 清除某一条指定的数据，根据id实现。  从外部调用 this.$refs.uWaterfall.remove(id)
    remove(id) {
      // 如果findIndex找不到合适的条件，就会返回-1
      let index = -1;
      index = this.leftList.findIndex(val => val[this.idKey] === id);
      if(index !== -1) {   // 左侧leftList
        // 如果index不等于-1，说明已经找到了要找的id，根据index索引删除这一条数据
        this.leftList.splice(index, 1);
      } else {  // 右侧rightList
        // 同理于上方面的方法
        index = this.rightList.findIndex(val => val[this.idKey] === id);
        if(index !== -1) this.rightList.splice(index, 1);
      }
      // 同时清除父组件的数据中的对应id的条目
      index = this.value.findIndex(val => val[this.idKey] === id);
      if(index !== -1) this.$emit('input', this.value.splice(index, 1));
    },
    // 修改某条数据的某个属性。从外部调用 this.$refs.uWaterfall.modify({id, key, value})
    modify(id, key, value) {
      // 如果findIndex找不到合适的条件，就会返回-1
      let index = -1;
      index = this.leftList.findIndex(val => val[this.idKey] === id);
      if(index !== -1) {
        // 如果index不等于-1，说明已经找到了要找的id，修改对应key的值
        this.leftList[index][key] = value;
      } else {
        // 同理于上方面的方法
        index = this.rightList.findIndex(val => val[this.idKey] === id);
        if(index !== -1) this.rightList[index][key] = value;
      }
      // 修改父组件的数据中的对应id的条目
      index = this.value.findIndex(val => val[this.idKey] == id);
      if(index !== -1) {
        // 首先复制一份value的数据
        let data = this.cloneData(this.value);
        // 修改对应索引的key属性的值为value
        data[index][key] = value;
        // 修改父组件通过v-model绑定的变量的值
        this.$emit('input', data);
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/style.components";

.u-waterfall {
  @include u-flex;
  flex-direction: row;
  align-items: flex-start;
}

.u-column {
  @include u-flex;
  flex: 1;
  flex-direction: column;
  height: auto;
}
</style>