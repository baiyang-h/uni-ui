<template>
  <view class="wrap-page">
    <u-cell-group title="我是主标题">
      <u-cell-item title="标题1" value="我是主体内容1" :index="0" @click="clickItem" />
      <u-cell-item icon="icon-wang" title="标题2"  value="我是主体内容2" :index="1" @click="clickItem" />
      <u-cell-item icon="icon-home_light" title="标题3"  value="我是主体内容3" right-icon="icon-right" :index="2" @click="clickItem" />
      <u-cell-item icon="icon-comment_light" title="标题3" :titleStyle="{color: '#2cb6ae'}"  value="主体内容4" :valueStyle="{background: '#32799e', color: '#fff'}" :index="3" @click="clickItem"/>
      <u-cell-item title="标题3" value="内容5" bg-color="#cee8e5" :index="4" @click="clickItem"/>
      <u-cell-item icon="icon-filter" title="标题3" value="内容6" :center="true" :index="5" @click="clickItem"/>
    </u-cell-group>

    <u-toast ref="uToast" />
  </view>
</template>

<script>
export default {
  name: "CellPage",
  methods: {
    clickItem(index) {
      this.$refs.uToast.show({
        title: `点击了第${index+1}个`,
        type: 'primary'
      })
    }
  }
}
</script>

<style scoped>

</style>