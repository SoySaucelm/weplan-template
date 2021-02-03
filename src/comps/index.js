/**
 * 全局组件导入入口
 * 建议使用 【weplan new --comp 组件名称】 创建全局组件
 */
import Vue from 'vue';
let importAll = require.context('@src/comps', true, /index\.vue$/);
importAll.keys().map((path) => {
    let component = importAll(path).default || importAll(path);
    Vue.component(component.name, component);
});
