// 安装模块
// -webpack  webpack-cli webpack-dev-server(webpack需要的)
// -babel-loader  @babel/preset-env @babel/core(处理es6语法)
// -vue vue-template-compiler  vue-loader (处理编译vue)
// -vue-style-loader css-loader (处理样式)
// -html-webpack-Plugin(处理html)
// -webpack-merge(合并webpack配置)
let path = require('path')
let HtmlWebpackPlugin=require('vue-webpack-plugin')
let VueLoaderPlugin=require('vue-loader-plugin')
module.exports = {
    //入口
    entry: path.resolve(__dirname, 'src/main.js'),
    //出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                exclude: /node_module/
            },
            {
                test: /\.css$/,
                use:['vue-style-loader','css-loader']
            },
            {
                test:/\.vue$/,
                use:'vue-loader'
            }
        ]
    }, 
    plugin:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'pubil/index.html'),
            filename:'index.html'
        })
    ]
}