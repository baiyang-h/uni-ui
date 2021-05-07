<template>
  <view class="wrap-page card-page">
    <view class="card-page__header">默认</view>
    <u-card
      :title="title"
      :sub-title="subTitle"
      :thumb="thumb"
      :border="border"
      @head-click="headClick"
      @body-click="bodyClick"
      @foot-click="footClick"
    >
      <view slot="body">
        <view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0">
          <view class="u-body-item-title u-line-2">
            瓶身描绘的牡丹一如你初妆，冉冉檀香透过窗心事我了然，宣纸上走笔至此搁一半
          </view>
          <image src="https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg" mode="aspectFill"></image>
        </view>
        <view class="u-body-item u-flex u-row-between u-p-b-0">
          <view class="u-body-item-title u-line-2">
            釉色渲染仕女图韵味被私藏，而你嫣然的一笑如含苞待放
          </view>
          <image src="https://img12.360buyimg.com/n7/jfs/t1/102191/19/9072/330688/5e0af7cfE17698872/c91c00d713bf729a.jpg" mode="aspectFill"></image>
        </view>
      </view>
      <view class="" slot="foot">
        我是底部
      </view>
    </u-card>

    <view class="card-page__header">通栏</view>
    <u-card
      :title="title"
      :sub-title="subTitle"
      :thumb="thumb"
      :border="false"
      :full="true"
      border-radius="0"
      @click="click"
    >
      <view slot="body">
        <view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0">
          <view class="u-body-item-title u-line-2">
            瓶身描绘的牡丹一如你初妆，冉冉檀香透过窗心事我了然，宣纸上走笔至此搁一半
          </view>
          <image src="https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg" mode="aspectFill"></image>
        </view>
        <view class="u-body-item u-flex u-row-between u-p-b-0">
          <view class="u-body-item-title u-line-2">
            釉色渲染仕女图韵味被私藏，而你嫣然的一笑如含苞待放
          </view>
          <image src="https://img12.360buyimg.com/n7/jfs/t1/102191/19/9072/330688/5e0af7cfE17698872/c91c00d713bf729a.jpg" mode="aspectFill"></image>
        </view>
      </view>
      <view class="" slot="foot">
        我是底部
      </view>
    </u-card>

    <view class="card-page__header">自定义头像</view>
    <u-card
      :title="title"
      :sub-title="subTitle"
      :thumb="thumb"
      :border="border"
      :thumbCircle="true"
      @click="click"
    >
      <view slot="body">
        <view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0">
          <view class="u-body-item-title u-line-2">
            瓶身描绘的牡丹一如你初妆，冉冉檀香透过窗心事我了然，宣纸上走笔至此搁一半
          </view>
          <image src="https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg" mode="aspectFill"></image>
        </view>
        <view class="u-body-item u-flex u-row-between u-p-b-0">
          <view class="u-body-item-title u-line-2">
            釉色渲染仕女图韵味被私藏，而你嫣然的一笑如含苞待放
          </view>
          <image src="https://img12.360buyimg.com/n7/jfs/t1/102191/19/9072/330688/5e0af7cfE17698872/c91c00d713bf729a.jpg" mode="aspectFill"></image>
        </view>
      </view>
    </u-card>

  </view>
</template>

<script>
export default {
  name: "CardPage",
  data() {
    return {
      title: '这是头部主内容这是头部',
      subTitle: '这是头部副内容这',
      thumb: 'https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg',
      padding: 20,
      border: true,
    }
  },
  methods: {
    click() {
      uni.showToast({
        title: '点击卡片',
      });
    },
    headClick() {
      uni.showToast({
        title: '点击 head',
      });
    },
    bodyClick() {
      uni.showToast({
        title: '点击 body',
      });
    },
    footClick() {
      uni.showToast({
        title: '点击 foot',
      });
    }
  }
}
</script>

<style scoped lang="scss">
.card-page {
  padding: 24rpx 0;
  background-color: $u-bg-color;

  &__header {
    padding-left: 30rpx;
    font-size: 30rpx;
    font-weight: 500;
  }

  .u-body-item {
    font-size: 32rpx;
    color: #333;
    padding: 20rpx 10rpx;
  }

  .u-body-item image {
    width: 120rpx;
    flex: 0 0 120rpx;
    height: 120rpx;
    border-radius: 8rpx;
    margin-left: 12rpx;
  }
}
</style>
