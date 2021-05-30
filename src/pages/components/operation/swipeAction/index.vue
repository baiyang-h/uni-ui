<template>
  <view class="wrap-page">
    <u-panel title="状态(操作第一个)">
      <u-button class="u-m-r-10" size="mini" @click="showChange(true)">打开</u-button>
      <u-button size="mini" @click="showChange(false)">关闭</u-button>
    </u-panel>
    <u-gap />
    <u-panel title="禁止滑动(操作第一个)">
      <u-button class="u-m-r-10" size="mini" @click="disabledChange(true)">是</u-button>
      <u-button size="mini" @click="disabledChange(false)">否</u-button>
    </u-panel>

    <u-gap height="100" />

    <u-swipe-action
      bg-color="rgb(250, 250, 250)"
      :disabled="item.disabled"
      :index="index"
      :key="item.id"
      :show="item.show"
      :btn-width="btnWidth"
      :options="options"
      v-for="(item, index) in list"
      @click="click"
      @open="open"
      @close="close"
      @content-click="contentClick"
    >
      <view class="item u-border-bottom">
        <image mode="aspectFill" :src="item.images" />
        <!-- 此层wrap在此为必写的，否则可能会出现标题定位错误 -->
        <view class="title-wrap">
          <text class="title u-line-2">{{ item.title }}</text>
        </view>
      </view>
    </u-swipe-action>

    <u-toast ref="uToast"></u-toast>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list1: [
        {
          id: 1,
          title: '捱三顶五您付款了窝囊废可为',
          images: '/logo.png',
          show: false,
          disabled: false
        },
        {
          id: 2,
          title: '捱三顶五您付款了窝囊废可为你开发难为快过年了你发个呢人力看过没非驴非马冷酷了我么热门位',
          images: '/logo.png',
          show: false,
          disabled: false
        },
        {
          id: 3,
          title: '捱三顶五您付款了窝囊废可为你开发难为快过年了你发个呢人力看过没非驴非马冷酷了我么热门位',
          images: '/logo.png',
          show: false,
          disabled: false
        }
      ],
      list: [],
      btnWidth: 180,
      options: [
        {
          text: '收藏',
          style: {
            backgroundColor: '#007aff'
          }
        },
        {
          text: '删除',
          style: {
            backgroundColor: '#dd524d'
          }
        }
      ]
    }
  },
  onLoad() {
    setTimeout(() => {
      this.list = this.list1;
    }, 0)
  },
  methods: {
    // 打开时触发（手滑动）
    open(index) {
      console.log('open')
      this.list[index].show = true;
      this.list.map((val, idx) => {
        if (index !== idx) this.list[idx].show = false;
      });
    },
    // 关闭时触发（手滑动）
    close(index) {
      console.log('close')
      this.list[index].show = false;
    },
    // 点击按钮
    click(index, index1) {
      if(index1 === 1) {
        this.list.splice(index, 1);
        this.$u.toast(`删除了第${index}个cell`);
      } else {
        this.list[index].show = false;
        this.$u.toast(`收藏成功`);
      }
    },
    // 点击内容
    contentClick(index) {
      console.log(index);
    },
    // 测试 只打开第一个
    showChange(v) {
      if(v) {  // 第一个打开
        this.list[0].show = true
      } else {  // 第一个关闭
        this.list[0].show = false
      }
    },
    disabledChange(v) {
      this.list[0].show = false
      if(v) {
        this.list[0].disabled = true
      } else {
        this.list[0].disabled = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  padding: 20rpx;
}

image {
  width: 120rpx;
  flex: 0 0 120rpx;
  height: 120rpx;
  margin-right: 20rpx;
  border-radius: 12rpx;
}

.title {
  text-align: left;
  font-size: 28rpx;
  color: $u-content-color;
  margin-top: 20rpx;
}
</style>
