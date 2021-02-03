import Vue from 'vue';
import axios from 'axios';
import {Message} from 'element-ui'

const api = axios.create({
    timeout: 90000
});
api.interceptors.request.use(config => {
    return config
}, error => {
    Promise.reject(error)
});
api.interceptors.response.use(
    response => {
        let result = response.data;
        if (result.success) {
            Message({
                message: '请求成功',
                type: 'info'
            });
        } else {
            Message({
                message: '请求失败,请稍后再试!',
                type: 'error'
            });
        }
        return result;
    },
    error => {

        Message({
            message: error.message,
            type: 'error',
            duration: 3 * 1000
        });
        return Promise.reject(error)
    }
);
// 将接口挂载到 Vue 实例，使用 this.api({url:'test.com'}).then(res => {}) 调用接口。
Vue.prototype.api = api;
