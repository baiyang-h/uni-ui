import validate from '../function/validate';

class Request {
    constructor() {
        this.config = {
            baseUrl: '', // 请求的根域名
            // 默认的请求头
            header: {},
            method: 'POST',
            // 此参数无需处理，因为5+和支付宝小程序不支持，默认为text即可
            responseType: 'text',
            showLoading: true, // 是否显示请求中的loading
            loadingText: '请求中...',
            loadingTime: 500, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
            timer: null, // 定时器
            originalData: false, // 是否在拦截器中返回服务端的原始数据
            loadingMask: true, // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
        }

        // 拦截器
        this.interceptor = {
            // 请求前的拦截
            request(config) {
                // config.header.Token = 'xxxxxx';

                // 方式一，存放在vuex的token
                // config.header.token = vm.token;

                // 方式二，如果token放在了globalData
                // config.header.token = getApp().globalData.username;

                // 方式三，如果token放在了Storage本地存储中，拦截是每次请求都执行的，所以哪怕您重新登录修改了Storage，下一次的请求将会是最新值
                // const token = uni.getStorageSync('token');
                // config.header.token = token;

                return config
            },
            // 请求后的拦截
            response(response) {
                // 响应拦截，判断状态码是否通过
                // 如果把originalData设置为了true，这里得到将会是服务器返回的所有的原始数据
                // 判断可能变成了res.statueCode，或者res.data.code之类的，请打印查看结果

                if(response.code === 200) {
                    // 判断用户对拦截返回数据的要求，如果originalData为true，返回所有的数据(response)到拦截器，否则只返回response.data
                    if(this.config.originalData) {  // 返回所有数据
                        return response
                    } else {
                        return response.data
                    }
                } else {
                    return false
                }
            }
        }
    }

    // get请求
    get(url, data = {}, header = {}) {
        return this.request({
            method: 'GET',
            url,
            data,
            header,
        })
    }

    // post请求
    post(url, data = {}, header = {}) {
        return this.request({
            method: 'POST',
            url,
            data,
            header,
        })
    }

    // put请求，不支持支付宝小程序(HX2.6.15)
    put(url, data = {}, header = {}) {
        return this.request({
            method: 'PUT',
            url,
            header,
            data
        })
    }

    // delete请求，不支持支付宝和头条小程序(HX2.6.15)
    delete(url, data = {}, header = {}) {
        return this.request({
            method: 'DELETE',
            url,
            header,
            data
        })
    }

    // 主要请求部分
    request(options = {}) {
        // 检查请求拦截
        if(this.interceptor.request && typeof this.interceptor.request === 'function') {
            let interceptorRequest = this.interceptor.request(options);
            if (interceptorRequest === false) {
                // 返回一个处于pending状态中的Promise，来取消原promise，避免进入then()回调
                return new Promise(()=>{});
            }
            this.options = interceptorRequest;
        }
        options.dataType = options.dataType || this.config.dataType;
        options.responseType = options.responseType || this.config.responseType;
        options.url = options.url || '';
        options.params = options.params || {};
        options.header = Object.assign({}, this.config.header, options.header);
        options.method = options.method || this.config.method;

        return new Promise((resolve, reject) => {
            // 接口调用结束时的回调
            options.complete = (response) => {
                // 请求返回后，隐藏loading(如果请求返回快的话，可能会没有loading)
                uni.hideLoading();
                // 清除定时器，如果请求回来了，就无需loading
                clearTimeout(this.config.timer);
                this.config.timer = null;

                if(this.interceptor.response && typeof this.interceptor.response === 'function') {
                    let resInterceptors = this.interceptor.response(response);
                    // 如果拦截器不返回false，就将拦截器返回的内容给then回调
                    if (resInterceptors) {
                        resolve(resInterceptors);
                    } else {
                        // 如果拦截器返回false，意味着拦截器定义者认为返回有问题，直接接入catch回调
                        reject(response);
                    }
                } else {
                    return throw new Error('interceptor.response 必须是一个函数')
                }
            }

            // 判断用户传递的URL是否/开头,如果不是,加上/，这里使用了uView的test.js验证库的url()方法
            options.url = validate.url(options.url) ? options.url : (this.config.baseUrl + (options.url.indexOf('/') == 0 ?
                options.url : '/' + options.url));

            // 是否显示loading
            // 加一个是否已有timer定时器的判断，否则有两个同时请求的时候，后者会清除前者的定时器id
            // 而没有清除前者的定时器，导致前者超时，一直显示loading
            if(this.config.showLoading && !this.config.timer) {  // showLoading显示loading 和 定时器为null时执行
                this.config.timer = setTimeout(() => {
                    uni.showLoading({
                        title: this.config.loadingText,
                        mask: this.config.loadingMask
                    })
                    this.config.timer = null;
                }, this.config.loadingTime)
            }
            uni.request(options);   // 因为有蒙板的原因，写在定时器外了， 不然写在定时器内部较好
        })
        // .catch(res => {
        // 	// 如果返回reject()，不让其进入this.$u.post().then().catch()后面的catct()
        // 	// 因为很多人都会忘了写后面的catch()，导致报错捕获不到catch
        // 	return new Promise(()=>{});
        // })
    }
}

export default Request