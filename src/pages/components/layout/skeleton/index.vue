<template>
  <view class="skeleton-page container">

    <view class="u-skeleton">
      <view>
        <view class="userinfo">
          <template>
            <!--u-skeleton-circle 绘制圆形-->
            <view class="userinfo-avatar u-skeleton-circle"></view>
            <!--u-skeleton-fillet 绘制圆角矩形-->
            <text class="u-skeleton-fillet">{{userInfo.nickName}}</text>
          </template>
        </view>
        <view style="margin: 10px 0">
          <view v-for="(item,index) in lists" :key="index" class="lists">
            <!--u-skeleton-rect 绘制矩形-->
            <text class="u-skeleton-rect">{{item}}</text>
          </view>
        </view>
      </view>
    </view>

    <view class="u-m-t-30 u-flex u-row-between">
      <u-button type="primary" size="medium" @click="handleRequest">请求中</u-button>
      <u-button type="primary" size="medium" @click="handleChangeBgColor">改变整个骨架颜色</u-button>
    </view>

    <!--引用组件-->
    <u-skeleton
      :loading="loading"
      :animation="true"
      :elColor="elColor"
    ></u-skeleton>
  </view>
</template>

<script>
import Template from "@/pages/example/template";
export default {
  name: "SkeletonPage",
  components: {Template},
  data() {
    return {
      // 随意填充一些模拟数据，以撑开元素，供骨架组件查询和模拟块状数据
      userInfo: {
        nickName: 'uView'
      },
      lists: [
        '君不见，黄河之水天上来，奔流到海不复回。君不见，高堂明镜悲白发，朝如青丝暮成雪。',
        '人生得意须尽欢，莫使金樽空对月',
        '天生我材必有用，千金散尽还复来',
      ],
      loading: true, // 是否显示骨架屏组件
      elColor: '#e5e5e5'
    }
  },
  onLoad() {
    // 通过延时模拟向后端请求数据，调隐藏骨架屏
    setTimeout(() => {
      this.loading = false;
    }, 2000)
  },
  methods: {
    handleRequest() {
      clearTimeout(this.timer)
      this.loading = true
      this.elColor = '#e5e5e5'
      this.timer = setTimeout(() => {
        this.loading = false;
      }, 3000)
    },
    handleChangeBgColor() {
      clearTimeout(this.timer)
      this.loading = true
      this.elColor = '#dbf1e1'
      this.timer = setTimeout(() => {
        this.loading = false;
      }, 3000)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 20rpx 60rpx;
}

.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
  background: #f4f4f5;
}

.lists {
  margin: 10px 0;
}
</style>
