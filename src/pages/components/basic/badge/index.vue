<template>
  <view class="wrap-page">
    <u-panel title="数值显示">
      <u-button size="mini" class="u-m-r-10" @click="count=0">0</u-button>
      <u-button size="mini" class="u-m-r-10" @click="count=8">8</u-button>
      <u-button size="mini" class="u-m-r-10" @click="count=30">30</u-button>
      <u-button size="mini" class="u-m-r-10" @click="count=100">100</u-button>
    </u-panel>
    <u-gap />
    <u-panel title="主题选择">
      <u-button size="mini" class="u-m-r-10" @click="type='primary'">primary</u-button>
      <u-button size="mini" class="u-m-r-10" @click="type='success'">success</u-button>
      <u-button size="mini" class="u-m-r-10" @click="type='error'">error</u-button>
      <u-button size="mini" class="u-m-r-10" @click="type='warning'">warning</u-button>
      <u-button size="mini" class="u-m-r-10" @click="type='info'">info</u-button>
    </u-panel>
    <u-gap />
    <u-panel title="显示点">
      <u-button size="mini" class="u-m-r-10" @click="isDot=true">显示</u-button>
      <u-button size="mini" class="u-m-r-10" @click="isDot=false">不显示</u-button>
    </u-panel>
    <u-gap />
    <u-panel title="尺寸">
      <u-button size="mini" class="u-m-r-10" @click="size='default'">default</u-button>
      <u-button size="mini" class="u-m-r-10" @click="size='mini'">mini</u-button>
    </u-panel>
    <u-gap />
    <u-panel title="位置偏移">
      <u-button size="mini" class="u-m-r-10" @click="offset=[20, 20]">[20, 20]</u-button>
      <u-button size="mini" class="u-m-r-10" @click="offset=[-8, -8]">[-8, -8]</u-button>
      <u-button size="mini" class="u-m-r-10" @click="offset=[-20, -20]">[-20, -20]</u-button>
    </u-panel>
    <u-gap />
    <u-panel title="中心点与父右上角重合">
      <u-button size="mini" class="u-m-r-10" @click="isCenter=true">是</u-button>
      <u-button size="mini" class="u-m-r-10" @click="isCenter=false">否</u-button>
    </u-panel>
    <u-gap height="70" />
    <view>
      <view class="u-badge-wrap">
        <u-badge
          :type="type"
          :is-center="isCenter"
          :count="count"
          :is-dot="isDot"
          :offset="offset"
          :size="size"
        ></u-badge>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "BadgePage",
  data() {
    return {
      count: 8,
      type: 'error',
      isDot: false,
      offset: [-8, -8],
      size: 'default',
      isCenter: false
    }
  },
}
</script>

<style scoped lang="scss">
.u-badge-wrap {
  width: 60px;
  height: 60px;
  border-radius: 6px;
  background-color: $u-light-color;
  position: relative;
  margin: auto;
}
</style>
