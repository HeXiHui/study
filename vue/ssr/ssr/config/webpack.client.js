let merge=require('webpack-merge');//合并插件
let base=require('./webpack.base');
let HtmlWebpackPlugin=require('vue-webpack-plugin');
let path=require('path');
module.export=merge(base,{
    //入口
    entry: path.resolve(__dirname, '../src/client-entry.js'),
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../pubil/index.html'),
            filename:'index.html'
        }) 
    ]
})