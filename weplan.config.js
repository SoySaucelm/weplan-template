// 插件参数配置，用于控制
module.exports = {
    /**
     * 描述：是否开启手机自适应模式
     * 默认值：false
     */
    px2viewport: {
        enable: false
    },
    providePlugin: {
        _: 'lodash'
    },
    // 开发配置
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8880',
                pathRewrite: { '^/api': '' }
            }
        }
    },
    // eslint实例化参数
    eslint: {}
};
