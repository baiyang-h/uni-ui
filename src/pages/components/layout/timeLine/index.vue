<template>
  <view class="wrap-page">
    <view class="wrap">
      <u-time-line>
        <u-time-line-item>
          <template v-slot:node>
            <view class="u-node" style="background: #19be6b;">
              <view class="iconfont icon-cart"></view>
            </view>
          </template>
          <template v-slot:content>
            <view>
              <view class="u-order-title">待取件</view>
              <view class="u-order-desc">[自提柜]您的快件已放在楼下侧门，直走前方53.6米，左拐约10步，再右拐直走，见一红灯笼停下，叩门三下，喊“芝麻开门”即可。</view>
              <view class="u-order-time">2021-06-01 12:12</view>
            </view>
          </template>
        </u-time-line-item>
        <u-time-line-item>
          <template v-slot:node>
            <view class="u-node" >
              <view class="iconfont icon-people_list_light"></view>
            </view>
          </template>
          <template v-slot:content>
            <view>
              <view class="u-order-title unacive">派送中</view>
              <view class="u-order-desc">【杭州市】快件已到达目的地，派件员为国产锦衣卫007号，电话：<text class="tel">13833882438</text>，请留意快递信息</view>
              <view class="u-order-time">2021-06-01 06:03</view>
            </view>
          </template>
        </u-time-line-item>
        <u-time-line-item>
          <template v-slot:node>
            <view class="u-node">
              <view class="iconfont icon-appreciate_light"></view>
            </view>
          </template>
          <template v-slot:content>
            <view>
              <view class="u-order-title unacive">运输中</view>
              <view class="u-order-desc">【杭州市】快递已到达 黄龙体育中心</view>
              <view class="u-order-time">2021-06-01 08:05</view>
            </view>
          </template>
        </u-time-line-item>
        <u-time-line-item>
          <template v-slot:content>
            <view>
              <view class="u-order-desc">【杭州市】快件已从深圳运转中心发出</view>
              <view class="u-order-time">2021-06-01 22:30</view>
            </view>
          </template>
        </u-time-line-item>
        <u-time-line-item>
          <template v-slot:content>
            <view>
              <view class="u-order-desc">【杭州市】快件已到达 运转中心</view>
              <view class="u-order-time">2021-06-01 16:42</view>
            </view>
          </template>
        </u-time-line-item>
        <u-time-line-item>
          <template v-slot:content>
            <view>
              <view class="u-order-desc">【杭州市】快件已从郑州运转中心出发，正在发往运转中心</view>
              <view class="u-order-time">2021-06-01 12:55</view>
            </view>
          </template>
        </u-time-line-item>
        <u-time-line-item>
          <template v-slot:content>
            <view>
              <view class="u-order-desc">【杭州市】快件已到达 运转中心</view>
              <view class="u-order-time">2021-06-01 08:23</view>
            </view>
          </template>
        </u-time-line-item>
        <u-time-line-item>
          <template v-slot:node>
            <view class="u-node">
              <view class="iconfont icon-home"></view>
            </view>
          </template>
          <template v-slot:content>
            <view>
              <view class="u-order-desc">您购买的商品【尚方宝剑，先斩后奏】，经由北京军区仓库发货，国内快递承运人【中南海保镖】。</view>
              <view class="u-order-time">2021-06-01 07:00</view>
            </view>
          </template>
        </u-time-line-item>
      </u-time-line>
    </view>
  </view>
</template>

<script>
export default {
  name: "TimeLinePage"
}
</script>

<style scoped lang="scss">
.wrap {
  padding: 24rpx 24rpx 24rpx 40rpx;
}

.u-node {
  width: 44rpx;
  height: 44rpx;
  border-radius: 100rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d0d0d0;
  color: #fff;
}

.u-order-title {
  color: #333333;
  font-weight: bold;
  font-size: 32rpx;
}

.u-order-title.unacive {
  color: rgb(150, 150, 150);
}

.u-order-desc {
  color: rgb(150, 150, 150);
  font-size: 28rpx;
  margin-bottom: 6rpx;
}

.u-order-time {
  color: rgb(200, 200, 200);
  font-size: 26rpx;
}

.tel {
  color: $u-type-primary;
}
</style>
