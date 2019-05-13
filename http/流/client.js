let http=require('http');
// http.get http.request 响应体
// 通过服务端发请求 没有跨域问题
let client=http.request({
    hostname:'',
    port:'3000',
    path:'',
    method:'',
    headers:{}
},(Response)=>{
    response.on('data',(data)=>{
        JSON.parse(data)//转成对象
    })
});
client.end()