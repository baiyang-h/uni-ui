<template>
  <view
    class="u-toast"
    :class="[isShow ? 'u-show' : '', 'u-type-' + tmpConfig.type, 'u-position-' + tmpConfig.position]"
    :style="{zIndex: uZIndex}"
  >
    <!-- 透明遮罩，如果设置mask为true了，toast显示的时候，点击页面别的部分不生效，要将css的pointer-events注释掉  -->
    <view class="u-mask" v-if="isShow && tmpConfig.mask"></view>
    <block v-if="tmpConfig.type === 'default'">
      <view class="u-toast-default">
        <view :class="['iconfont', iconName]" v-if="tmpConfig.icon && iconName"></view>
        <view class="u-toast-default--image" v-if="tmpConfig.image"><image :src="tmpConfig.image" /></view>
        <view>{{ tmpConfig.title }}</view>
      </view>
    </block>
    <block v-else>
      <text :class="['iconfont', iconName]" v-if="tmpConfig.icon && iconName" />
      <text>{{ tmpConfig.title }}</text>
    </block>
  </view>
</template>

<script>
/**
 * toast 消息提示
 * @description 此组件表现形式类似uni.showToast API
 * @property {String} z-index toast展示时的z-index的值
 * @event {Function} show 显示 toast，如需一进入页面就显示toast，请在onReady生命周期中调用，如 this.$refs.uToast.show({title: '123'})
 * @example <u-toast ref="uToast" />
 *
 * config options合并后的tmpConfig配置， 即外部传入的配置项
 * title {String} 显示的toast信息
 * type {String} toast 类型，default、primary、info、success、warning、error
 * icon {String} 图片类名，对于 success、error、warning 直接内部定义了主题icon，其他可传入 iconfont 的字体图标名
 * image {String} 自定义图片路径
 * duration {Number} toast 显示的时间
 * position {String} toast 显示的位置
 * mask {Boolean} 是否显示一个透明的遮罩，这样每次 toast 显示时就不能点击页面别的地方
 * callback {Function} toast执行完成后的回调函数
 */
export default {
  name: "u-toast",
  props: {
    // z-index值
    zIndex: {
      type: [Number, String],
      default: ''
    },
  },
  data() {
    return {
      isShow: false,
      timer: null,    // 定时器
      config: {
        title: '',            // 显示的文本
        type: 'default',      // 主题类型，primary、success、error、warning、info、default
        icon: '',             // 显示的图标
        image: '',            // 自定义图片的本地路径
        duration: 2000,       // 显示的时间，毫秒
        position: 'center',   // 显示的位置 center、top、bottom
        mask: false,          // 是否显示透明蒙层，防止触摸穿透，默认：false
        callback: null,       // 执行完后的回调函数
      },
      tmpConfig: {}, // 将用户配置和内置配置合并后的临时配置变量
    }
  },
  computed: {
    iconName() {
      // 只有不为none，并且type为 error、warning、success、info 时候，才显示主题图标， default、primary默认不显示，如果default显示图标，则位置保持和uniapp中的api showToast 图标位置的位置一致
      if(this.tmpConfig.icon) {
        let icon = this.tmpConfig.icon;
        // 显示主题图标,只要icon有值，并且是 error、warning、success、info 就有图标，并且是根据主题type类型设定的
        if(['error', 'warning', 'success', 'info'].indexOf(this.tmpConfig.type) >= 0) {
          icon = this.$u.type2icon(this.tmpConfig.type);
        }
        // 显示default 保持和 uni.showToast 图标风格一致，在上面，不是水平
        if(this.tmpConfig.type === 'default') {
          if(['error', 'warning', 'success'].includes(this.tmpConfig.icon)) {
            icon = this.$u.type2icon(this.tmpConfig.icon);
          }
        }
        return icon
      }
    },
    uZIndex() {
      // 显示toast时候，如果用户有传递z-index值，优先使用
      return this.isShow ? (this.zIndex ? this.zIndex : this.$u.zIndex.toast) : '-1';
    }
  },
  methods: {
    // 显示 toast 组件，由父组件通过 this.$refs.xxx.show(options)形式调用
    show(options) {
      // 将外部传入的配置项和内部默认设定的合并，覆盖，生成一个新的配置对象
      this.tmpConfig = this.$u.deepMerge(this.config, options);
      // 如果type不在这几种类型中，默认为default
      if(!['primary', 'error', 'warning', 'success', 'info', 'default'].includes(this.tmpConfig.type)) this.tmpConfig.type = 'default'
      if(this.timer) {
        // 清除定时器
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.isShow = true;
      this.timer = setTimeout(() => {
        // 倒计时结束，清除定时器，隐藏toast组件
        this.isShow = false;
        clearTimeout(this.timer);
        this.timer = null;
        // 判断是否存在 callback 方法，如果存在就执行
        typeof (this.tmpConfig.callback) === 'function' && this.tmpConfig.callback();
      }, this.tmpConfig.duration)
    },
    // 隐藏toast组件，由父组件通过this.$refs.xxx.hide()形式调用
    hide() {
      this.isShow = false;
      if(this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/style.components";

.u-toast {
  position: fixed;
  transition: opacity 0.3s;
  text-align: center;
  color: #fff;
  border-radius: 8rpx;
  background-color: #585858;
  @include u-flex;
  align-items: center;
  justify-content: center;
  font-size: 28rpx;
  opacity: 0;
  //pointer-events: none;
  padding: 18rpx 40rpx;
}

// 遮罩，当需要时mask，出现 toast 时，点击别的地方，没有效果，有一层透明的遮罩
.u-mask {
  position: fixed;
  height: 100vh;
  width: 100vh;
  z-index: 99999999;
}

// 对于 default 主题的 toast
.u-toast-default {
  .iconfont {
    font-size: 70rpx;
  }
}
.u-toast-default--image {
  width: 300rpx;
  height: 200rpx;
  overflow: hidden;
  margin-bottom: 10rpx;
  image {
    width: 100%;
    height: 100%;
  }
}

.u-toast.u-show {
  opacity: 1;
}

.u-icon {
  margin-right: 10rpx;
}

// 位置
.u-position-center {
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  /* #ifndef APP-NVUE */
  max-width: 70%;
  /* #endif */
}
.u-position-top {
  left: 50%;
  top: 20%;
  transform: translate(-50%,-50%);
}
.u-position-bottom {
  left: 50%;
  bottom: 20%;
  transform: translate(-50%,-50%);
}

// 主题
.u-type-primary {
  color: $u-type-primary;
  background-color: $u-type-primary-light;
  border: 1px solid rgb(215, 234, 254);
}
.u-type-success {
  color: $u-type-success;
  background-color: $u-type-success-light;
  border: 1px solid #BEF5C8;
}
.u-type-error {
  color: $u-type-error;
  background-color: $u-type-error-light;
  border: 1px solid #fde2e2;
}
.u-type-warning {
  color: $u-type-warning;
  background-color: $u-type-warning-light;
  border: 1px solid #faecd8;
}
.u-type-info {
  color: $u-type-info;
  background-color: $u-type-info-light;
  border: 1px solid #ebeef5;
}
.u-type-default {
  color: #fff;
  background-color: #585858;
}

</style>
