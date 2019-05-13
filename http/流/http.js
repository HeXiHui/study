// 客户端 浏览器
// 服务端 监听请求 监听特定的ip和端口

let http=require('http');
let querystring=require('querystring');
// 创建服务端 需要提供一个监听函数，这个函数只有当请求到来时触发
// 请求分三部分 1.请求行 方法 路径 协议
//              2.请求头 浏览器信息 +自定义
//              3.请求体
//   require 是可读流 response是可写流
// 请求体需要on('data')来接收数据
// 响应也分三部分1.相应行 常见状态代码 200 204
//              2.响应头 
//              3.响应体
let sever=http.createServer((require,response)=>{
    // require中存放的内容

    console.log(require.method);//method中的方法的方法名是大写
    console.log(require.url);
    console.log(require.httpVersion);//版本号
    console.log(require.headers);//请求头

    let arr=[];
    require.on('data',(data)=>{
        arr.push(data)
    });
    require.on('end',()=>{//不管有没有请求体都会触发end事件
        let str=Buffer.concat(arr).toString();
        //a=b&c=b => {a:b,c:d}这种格式转化可以用querystring模块
        let obj=querystring.parse(str,'&','=')
        response.end('obj')//立刻把结果响应回去
    })
});
//server.on('require',(require,response)=>{})
server.listen(3000)

//安装nodemon 只要文件发生变化就会重启服务