const path = require('path');
module.exports = {
    // 是否打包sourcemap （就是自动打包出来的.js.map文件，有助于锁定错误）
    productionSourceMap : false,

    // 设置输出目录
    outputDir : "./myDist",

    // 设置index.html引入文件的地址,不使用默认地址
    publicPath : process.env.NODE_ENV === "production" ? "http://www.yuwei.com" : '/',

    // 是否让文件打包在同一文件夹下
    assetsDir : "assets",

    // 设置别名 -- 让文件名为别的名字
    chainWebpack : config => {
        // config 代表着这个对象
        config.resolve.alias.set("_v", path.resolve(__dirname, "scr/views"))
    },

    // 配置webpack中的配置
    configureWebpack: {
        // plugin: [],
        // module: {}
    },

    // 配置代理 --能决绝跨域问题
    devServer : {
        proxy : "http://api.duyiedu.com"
    },

    // 设置预处理语言在全局作用域中使用
    pluginOptions : {
        'style-resources-loader' : {
            preProcessor : 'less',
            patterns: [
                path.resolve(__dirname,'src/assets/style/index.less')
            ]
        }
    }
}
