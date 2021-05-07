<template>
  <view class="wrap-page popup-page">
    <u-panel title="唤起弹框">
      <u-button @click="open">唤起弹框</u-button>
    </u-panel>

    <u-gap />

    <u-panel title="弹出方向">
      <u-row>
        <u-col span="2">
          <u-button size="mini" @click="setMode('top')">上</u-button>
        </u-col>
        <u-col span="2">
          <u-button size="mini" @click="setMode('bottom')">下</u-button>
        </u-col>
        <u-col span="2">
          <u-button size="mini" @click="setMode('left')">左</u-button>
        </u-col>
        <u-col span="2">
          <u-button size="mini" @click="setMode('right')">右</u-button>
        </u-col>
        <u-col span="2">
          <u-button size="mini" @click="setMode('center')">中</u-button>
        </u-col>
      </u-row>
    </u-panel>

    <u-gap />

    <u-panel title="关闭按钮">
      <u-row>
        <u-col span="2">
          <u-button size="mini" @click="setCloseable(true)">显示</u-button>
        </u-col>
        <u-col span="2">
          <u-button size="mini" @click="setCloseable(false)">隐藏</u-button>
        </u-col>
      </u-row>
    </u-panel>

    <u-gap />

    <u-panel title="关闭按钮位置">
      <u-row>
        <u-col span="2">
          <u-button size="mini" @click="setCloseIconPos('top-left')">左上角</u-button>
        </u-col>
        <u-col span="2">
          <u-button size="mini" @click="setCloseIconPos('top-right')">右上角</u-button>
        </u-col>
        <u-col span="2">
          <u-button size="mini" @click="setCloseIconPos('bottom-left')">左下角</u-button>
        </u-col>
        <u-col span="2">
          <u-button size="mini" @click="setCloseIconPos('bottom-right')">右下角</u-button>
        </u-col>
      </u-row>
    </u-panel>

    <u-gap />

    <u-panel title="是否显示遮罩">
      <u-row>
        <u-col span="3">
          <u-button size="mini" @click="setMask(true)">显示mask</u-button>
        </u-col>
        <u-col span="3">
          <u-button size="mini" @click="setMask(false)">隐藏mask</u-button>
        </u-col>
      </u-row>
    </u-panel>

    <u-gap />

    <u-panel title="是否可点击遮罩关闭弹框">
      <u-row>
        <u-col span="4">
          <u-button size="mini" @click="setMaskCloseAble(true)">点击遮罩关闭</u-button>
        </u-col>
        <u-col span="4">
          <u-button size="mini" @click="setMaskCloseAble(false)">点击遮罩不关闭</u-button>
        </u-col>
      </u-row>
    </u-panel>

    <u-gap />

    <u-panel title="中部弹出时，往上偏移的值">
      <u-row>
        <u-col>
          <u-button size="mini" @click="setNegativeTop(600)">向上偏移600rpx，只有中部弹出的时候才有效</u-button>
        </u-col>
      </u-row>
    </u-panel>

    <u-popup
      v-model="show"
      length="50%"
      :mode="mode"
      :mask="mask"
      :mask-close-able="maskCloseAble"
      :closeable="closeable"
      :close-icon-pos="closeIconPos"
      :negative-top="negativeTop"
      @close="close"
    >
      <view class="u-popup-slot-container" :style="[mode === 'center' ? {height: '200px'} : '']">
        <u-button size="medium" @click="close">关闭弹框</u-button>
      </view>
    </u-popup>
  </view>
</template>

<script>
export default {
  name: "PopupPage",
  data() {
    return {
      show: false,      // 弹框显示/隐藏
      mode: 'left',     // 弹出方向
      closeable: true,  // 是否显示close
      closeIconPos: 'top-right',  // 关闭按钮位置
      mask: true,       // 是否显示遮罩
      maskCloseAble: true,    // 是否可点击mask关闭
      negativeTop: 0        // 中部弹出时，往上偏移的值
    }
  },
  methods: {
    open() {
      this.show = true
    },
    close() {
      this.show = false
      if(this.negativeTop) this.negativeTop = 0
    },
    setMode(mode) {
      this.mode = mode
      this.open()
    },
    setCloseable(closeable) {
      this.closeable = closeable
      this.open()
    },
    setCloseIconPos(closeIconPos) {
      this.closeIconPos = closeIconPos
      this.closeable = true
      this.open()
    },
    setMask(mask) {
      this.mask = mask
      this.mode = 'center'
      this.open()
    },
    setMaskCloseAble(maskCloseAble) {
      this.maskCloseAble = maskCloseAble
      this.mode = 'center'
      this.open()
    },
    setNegativeTop(negativeTop) {
      this.negativeTop = negativeTop;
      this.mode = 'center'   // 只有中部弹出的时候才有效
      this.open()
    }
  }
}
</script>

<style scoped lang="scss">
.u-popup-slot-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
