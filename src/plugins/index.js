/**
 * 插件导入入口文件
 */

// 自动导入插件（勿动）
// =====================================================
let importAll = require.context('@src/plugins', true, /^\.\/(?!index).+\.js$/);
importAll.keys().map((path) => {
    importAll(path).default || importAll(path);
});
// =====================================================
