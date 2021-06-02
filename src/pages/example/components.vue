<template>
  <view class="list-wrap">
    <u-cell-group
        v-for="item in list"
        :key="item.groupName"
        :title="item.groupName"
    >
      <u-cell-item
          v-for="_item in item.list"
          :key="_item.title"
          :title="_item.title"
          @click="openPage(_item.path)"
      />
    </u-cell-group>
    <u-gap height="70"></u-gap>
  </view>
</template>

<script>
import list from './components.config';
export default {
  name: 'u-components',
  data() {
    return {
      list
    }
  },
  methods: {
    openPage(url) {
      uni.navigateTo({
        url
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .list-wrap {

  }
</style>
