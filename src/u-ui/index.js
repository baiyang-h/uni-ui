// 图标字体
import './font/iconfont.css'
// 引入全局 mixin
import mixin from './mixin/mixin'
// 获取整个父组件
import $parent from './libs/function/$parent'
// 节流方法
import throttle from './libs/function/throttle.js'
// 生成全局唯一guid字符串
import guid from './libs/function/guid'
// 添加单位
import addUnit from "./libs/function/addUnit";
// 对象深度拷贝
import deepMerge from './libs/function/deepMerge.js'
// 根据type获取图标名称
import type2icon from './libs/function/type2icon.js'
// toast提示，对uni.showToast的封装
import toast from "./libs/function/toast";

/*配置信息*/
// 各个需要fixed的地方的z-index配置文件
import zIndex from "./libs/config/zIndex";
import config from './libs/config/config'

const $u = {
    // 组件库相关配置文件
    config,
    $parent,
    // 节流
    throttle,
    // 生成全局唯一guid字符串，一般多用于 key
    guid,
    // z-index的配置信息
    zIndex,
    // 添加单位
    addUnit,
    // 对象深度合并
    deepMerge,
    // 主题类型error、warning、success、info等转相应图标
    type2icon,
    // uni-app 内置的 toast
    toast,
}

// $u挂载到uni对象上
uni.$u = $u

const install = Vue => {
    Vue.mixin(mixin)
    Vue.prototype.$u = $u
}

export default {
    install
}
