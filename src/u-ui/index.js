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

/*配置信息*/
// 各个需要fixed的地方的z-index配置文件
import zIndex from "./libs/config/zIndex";

const $u = {
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
    type2icon
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
