<template>
  <view class="wrap-page">
    <u-cell-group title="我是主标题">
      <u-cell-item title="标题1" value="我是主体内容1" />
      <u-cell-item icon="icon-wang" title="标题2"  value="我是主体内容2" />
      <u-cell-item icon="icon-home_light" title="标题3"  value="我是主体内容3" right-icon="icon-right" />
      <u-cell-item icon="icon-comment_light" title="标题3" :titleStyle="{color: '#2cb6ae'}"  value="主体内容4" :valueStyle="{background: '#32799e', color: '#fff'}"/>
      <u-cell-item title="标题3" value="内容5" bg-color="#e9e9e9"/>
      <u-cell-item icon="icon-filter" title="标题3" value="内容6" :center="true"/>
    </u-cell-group>
  </view>
</template>

<script>
export default {
  name: "CellPage"
}
</script>

<style scoped>

</style>