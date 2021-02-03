/**
 * 本地存储插件
 */
import Vue from 'vue';
const Basil = require('basil.js');

let basil = new Basil({
    namespace: process.env.namespace,
    storages: ['session', 'cookie', 'local', 'memory'],
    storage: 'local'
});

// 提供给页面通过 this.$Basil 调用
Vue.prototype.$Basil = basil;

// 提供给 ajax 导入使用
export default basil;
