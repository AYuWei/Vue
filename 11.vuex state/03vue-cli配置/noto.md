## vue-cli配置 

需要创建vue.config.js

> 下载 npm run build

Home中用到了axios发送ajax请求

npm install axios

使用less预处理语言的时候需要先下载

npm install less less-loader -D


全局下使用则需下载 -- 选择预处理语言
> vue add style-resources-loader
然后在vue.config.js有文件生成需要配置

```js
 // 设置预处理语言在全局作用域中使用
    pluginOptions : {
        'style-resources-loader' : {
            preProcessor : 'less',
            patterns: [
                path.resolve(__dirname,'src/assets/style/index.less')
            ]
        }
    }
```