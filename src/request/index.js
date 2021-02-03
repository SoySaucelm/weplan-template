/**
 * 异步请求导入
 */
// 自动导入请求（勿动）
// =====================================================
let importAll = require.context('@src/request', true, /^\.\/(?!index).+\.js$/);
importAll.keys().map((path) => {
    importAll(path).default || importAll(path);
});
// =====================================================
