<template>
  <view class="wrap-page">
    <u-panel title="基础使用">
      <u-button size="mini" @click="show=true">显示</u-button>
    </u-panel>
    <u-gap />
    <u-panel title="是否显示标题">
      <u-button class="u-m-r-10" size="mini" @click="showTitle=true">显示</u-button>
      <u-button size="mini" @click="showTitle=false">隐藏</u-button>
    </u-panel>
    <u-gap />
    <u-panel title="Modal 宽度">
      <u-button class="u-m-r-10" size="mini" @click="width=600">默认</u-button>
      <u-button size="mini" @click="width='100vw'">100vw</u-button>
    </u-panel>
    <u-gap />
    <u-panel title="按钮显示/隐藏">
      <view class="u-m-b-10">
        <u-button class="u-m-r-10" size="mini" @click="showConfirmButton=true">确定按钮显示</u-button>
        <u-button class="u-m-r-10" size="mini" @click="showConfirmButton=false">确定按钮隐藏</u-button>
      </view>
      <view>
        <u-button class="u-m-r-10" size="mini" @click="showCancelButton=true">取消按钮显示</u-button>
        <u-button class="u-m-r-10" size="mini" @click="showCancelButton=false">取消按钮隐藏</u-button>
      </view>
    </u-panel>
    <u-gap />
    <u-panel title="是否允许点击遮罩关闭modal">
      <u-button class="u-m-r-10" size="mini" @click="maskCloseAble=true">确定</u-button>
      <u-button size="mini" @click="maskCloseAble=false">取消</u-button>
    </u-panel>
    <u-gap />
    <u-panel title="是否异步关闭">
      <u-button class="u-m-r-10" size="mini" @click="asyncClose=true">是</u-button>
      <u-button size="mini" @click="asyncClose=false">否</u-button>
    </u-panel>
    <u-gap />
    <u-panel title="向上偏移">
      <u-button class="u-m-r-10" size="mini" @click="negativeTop=0">恢复</u-button>
      <u-button size="mini" @click="negativeTop=300">300</u-button>
    </u-panel>
    <u-gap />

    <u-modal
      v-model="show"
      :title="title"
      :content="content"
      :showTitle="showTitle"
      :width="width"
      :showConfirmButton="showConfirmButton"
      :showCancelButton="showCancelButton"
      :maskCloseAble="maskCloseAble"
      :asyncClose="asyncClose"
      :negativeTop="negativeTop"
      @cancel="cancel"
      @confirm="confirm"
    ></u-modal>

    <u-toast ref="uToast" />
  </view>
</template>

<script>
/**
 *
 */
export default {
  name: "ModalPage",
  data() {
    return {
      show: false,
      showTitle: true,
      title: '提示',
      width: 600,
      content: '我是内容我是内容',
      showConfirmButton: true,
      showCancelButton: true,
      // 是否异步关闭，只对确定按钮有效
      asyncClose: false,
      // 是否允许点击遮罩关闭modal
      maskCloseAble: false,
      // 给一个负的margin-top，往上偏移，避免和键盘重合的情况
      negativeTop: 0,
    }
  },
  methods: {
    cancel() {
      this.$refs.uToast.show({
        title: '取消',
      })
    },
    confirm() {
      this.$refs.uToast.show({
        title: '确认'
      })
      setTimeout(() => {
        this.show = false
      }, 3000)
    }
  }
}
</script>
