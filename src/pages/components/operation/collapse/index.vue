<template>
  <view class="wrap-page">
    <u-panel title="手风琴模式">
      <u-button size="mini" class="u-m-r-10" @click="accordion=true">开启</u-button>
      <u-button size="mini" @click="accordion=false">关闭</u-button>
    </u-panel>
    <u-gap />
    <u-panel title="右侧箭头">
      <u-button size="mini" class="u-m-r-10" @click="arrowChange(true)">显示</u-button>
      <u-button size="mini" @click="arrowChange(false)">隐藏</u-button>
    </u-panel>
    <u-gap />
    <u-panel title="自定义样式">
      <u-button size="mini" class="u-m-r-10" @click="styleChange(true)">是</u-button>
      <u-button size="mini" @click="styleChange(false)">否</u-button>
    </u-panel>

    <u-gap />
    <u-line  />
    <u-gap />

    <u-collapse
        :accordion="accordion"
        :arrow="arrow"
        :item-style="itemStyle"
        @change="change"
    >
      <u-collapse-item
          v-if="key"
          v-for="(item, index) in itemList"
          :index="index"
          :key="index"
          :title="item.head"
          @change="itemChange"
      >
        {{ item.body }}
      </u-collapse-item>
    </u-collapse>
    <u-toast ref="uToast"></u-toast>
  </view>
</template>

<script>
export default {
  name: "CollapsePage",
  data() {
    return {
      accordion: true,      // 是否是手风琴模式
      arrow: true,          // 是否显示右侧箭头图标
      itemList: [
        {
          head: "这是标题1，这是标题1",
          body: "只要我们正确择取一个合适的参照物乃至稍降一格去看待他人，值得赏识的东西便会扑面而来：闪光的道德、妙异的智慧、优美的人情…… 赏识不是单向的施舍，是智慧与智慧的主动碰撞",
          show: false,
        },
        {
          head: "这是标题2，这是标题2",
          body: "学会欣赏，实际是一种积极生活的态度，是生活的调味品，会在欣赏中发现生活的美",
          show: false,
        },
        {
          head: "这是标题3，这是标题3",
          body: "但是据说雕刻大卫像所用的这块大理石，曾被多位雕刻家批评得一无是处，有些人认为这块大理石采凿得不好，有些人嫌它的纹路不够美，用它绝对雕不出好的艺术品，总之它被批评为一块不受人赏识的普通石头",
          show: false,
        },
        {
          head: "这是标题4，这是标题4，这是标题4，这是标题4",
          body: "他随手翻了几页，竟被一篇题名为《童年》的小说所吸引，作者是一个初出茅庐的无名小辈，但屠格涅夫却十分欣赏，钟爱有加",
          show: false,
        },
        {
          head: "这是标题5，这是标题5，这是标题5，这是标题5",
          body: "这个材料反应的就是赏识的问题，赏识是一种理解和信任，包含了肯定与欣赏，也是一种激励和引导，可以使人悔过自新，扬长避短，更健康地成长和进步",
          show: false,
        }
      ],
      key: true,            // key 可以让组件重新渲染
      itemStyle: {}
    }
  },
  methods: {
    change(v) {
      // 如果是手风琴模式的话v为字符串索引，否则v为数组索引。
      // 因为手风琴模式之有一个，所以只有一个值，例如 v 为1，  不是手风琴可能点击了3个 v为[0, 1, 2]
      console.log('change', v)
      if(Array.isArray(v)) {
        let arr = v.map(val => {
          return Number(val) + 1;
        })
        v = arr.join(',');
      } else {
        v = Number(v) + 1;
      }
      this.$refs.uToast.show({
        title: `点击了第${v}个`,
        type: 'warning'
      })
    },
    itemChange(e) {
      console.log('itemChange', e);
    },
    // 点击展开隐藏
    arrowChange(arrow) {
      this.arrow = arrow
      this.changeStatus();
    },
    // 改变状态 重新渲染加载组件， 因为该组件内部的属性是父组件传入的，所以这里外部改变，props 没传入进去，不会有变化，u-collapse 内部也没做监听，
    // 所以这里外面做一层，没次需要重新渲染的话，我们修改key来进行组件的重新加载
    changeStatus() {
      this.key = false;
      this.$nextTick(function(){
        this.key = true;
      })
    },
    // 改变样式
    styleChange(v) {
      if(v) {
        this.itemStyle = {
          border: '1px solid rgb(230, 230, 230)',
          marginTop: '20px',
          padding: '0 8rpx'
        }
      } else {
        this.itemStyle = {}
      }
      this.changeStatus();
    }
  }
}
</script>

<style scoped>

</style>
