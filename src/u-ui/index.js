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

const $u = {
    $parent,
    // 节流
    throttle,
    // 生成全局唯一guid字符串，一般多用于 key
    guid
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
