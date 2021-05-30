<template>
  <view class="wrap-page">
    <u-panel title="模式">
      <view class="u-flex">
        <view class="col"><u-tag mode="dark" text="dark" /></view>
        <view class="col"><u-tag mode="light" text="light" /></view>
        <view class="col"><u-tag mode="plain" text="plain" /></view>
      </view>
    </u-panel>
    <u-gap />
    <u-panel title="主题选择">
      <view class="u-flex">
        <view class="col"><u-tag mode="light" text="light" type="primary" /></view>
        <view class="col"><u-tag mode="light" text="light" type="success" /></view>
        <view class="col"><u-tag mode="light" text="light" type="warning" /></view>
        <view class="col"><u-tag mode="light" text="light" type="error" /></view>
      </view>
    </u-panel>
    <u-gap />
    <u-panel title="可移除标签">
      <view class="u-flex">
        <view class="col"><u-tag mode="light" text="light" type="primary" :closeable="true" @close="close('primary')" /></view>
        <view class="col"><u-tag mode="light" text="light" type="success" :closeable="true" @close="close('success')"  /></view>
        <view class="col"><u-tag mode="light" text="light" type="warning" :closeable="true" @close="close('warning')"  /></view>
        <view class="col"><u-tag mode="light" text="light" type="error" :closeable="true" @close="close('error')"  /></view>
      </view>
    </u-panel>
    <u-gap />
    <u-panel title="形状">
      <view class="u-flex">
        <view class="col"><u-tag mode="light" text="square" type="primary" shape="square" /></view>
        <view class="col"><u-tag mode="light" text="circle" type="success" shape="circle" /></view>
        <view class="col"><u-tag mode="light" text="circleLeft" type="warning"  shape="circleLeft" /></view>
        <view class="col"><u-tag mode="light" text="circleRight" type="error" shape="circleRight" /></view>
      </view>
    </u-panel>
    <u-gap />
    <u-panel title="尺寸">
      <view class="u-flex">
        <view class="col"><u-tag mode="light" text="default" type="primary"/></view>
        <view class="col"><u-tag mode="light" text="mini" type="success" size="mini"/></view>
        <view class="col"><u-tag mode="light" text="mini" type="warning" size="mini" shape="circle"/></view>
        <view class="col"><u-tag mode="light" text="mini" type="error" size="mini" :closeable="true"/></view>
      </view>
    </u-panel>

    <u-toast ref="uToast"></u-toast>
  </view>
</template>

<script>
export default {
  name: "TagPage",
  data() {
    return {
      mode: 'light'
    }
  },
  methods: {
    close(type) {
      console.log(this.$refs)
      this.$refs.uToast.show({
        title: `关闭图标被点击`,
        type
      })
    }
  }
}
</script>

<style scoped lang="scss">
.col {
  margin-right: 10rpx;
}
</style>
