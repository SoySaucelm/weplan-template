// 自动导入路由（勿动）------------------------------------------------------
let R = {
    pages: [],
    views: [],
    pageImport: {},
    viewImport: {}
};
R.pageImport = require.context('@src/pages/index', true, /routePage\.js$/);
R.pageImport.keys().map((path) => {
    R.pages.push(R.pageImport(path).default || R.pageImport(path));
});
R.viewImport = require.context('@src/pages/index', true, /routeView\.js$/);
R.viewImport.keys().map((path) => {
    R.views.push(R.viewImport(path).default || R.viewImport(path));
});
// 自动导入路由（勿动）------------------------------------------------------

export default {
    path: '/',
    /**
     * layout 框架层
     */
    name: '首页',
    component: () => import('@src/layout/default/index.vue'),
    index: 0,
    children: [
        {
            path: '/index',
            name: '首页',
            component: () => import('@src/pages/index/index.vue'),
            children: [...R.views]
        },
        ...R.pages
    ]
};
