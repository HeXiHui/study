// 基于node  node不支持import语法
let path=require('path');
module.exports={
    publucPath:process.env.NODE_ENV==='production'?'http://www.ml.cn':'/',//配置域名
    assetsDir:'asserts',//资源文件
    outputDir:'./my-dist',//打包输出路径
    productionSourceMap:false,//生产环境下不使用sourceMap
    chainWebpack:config=>{
        //可以获取webpack的配置，增加一些自己的逻辑
        // 配置目录别名
        config.resolve.alias.set('+',path.resolve(__dirname,'src/components'))
    },
    devServer:{//开发时用
        // 配置代理
        proxy:{
            '/getUser':{target:'http://locahost:3000'}
        }
    },
    pluginQption:{
        // 第三方插件配置
    }
}