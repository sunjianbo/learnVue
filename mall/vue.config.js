module.exports = {
    configureWebpack: {
        resolve: {
            //目录别名配置
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}