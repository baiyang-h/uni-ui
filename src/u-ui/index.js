import './font/iconfont.css'
// 获取整个父组件
import $parent from './libs/function/$parent'
// 节流方法
import throttle from './libs/function/throttle.js'

const $u = {
    $parent,
    throttle
}

// $u挂载到uni对象上
uni.$u = $u

const install = Vue => {
    Vue.prototype.$u = $u
}

export default {
    install
}