// cookie 客户端的
// session 服务端
let http = require('http');
let querystring = require('querystring');
let url =require('url');//url.parse 解释路径
let crypto=require('crypto')
let arr=[];
let sign=(value)=>{
    return crypto.createHmac('sha256','xh').update(value.toString()).digest('base64');
};
res.setCookie=function(key,value,options={}){
    let optionsarr=[];
    if(options.maxAge){
        optionsarr.push('Max-Age=${options.maxAge}')
    };
    if(options.httpOnly){
        optionsarr.push('Http-Only=${options.httpOnly}')
    };
    arr.push('${key}=${value}; '+optionsarr.join('; '));
    res.setHeader('Set-Cookie',arr)
};
res.getCookie=function(key){
    let cookies=querystring.parse(req.headerSent.cookie,'; ');
    let [value,signValue]=cookies[key].splice('.');
    if(cookies[key]){
        if(sign(value)===signValue){
            return value
        }
    }
    return ''
}
let sever = http.createServer(function (res, req) {
    //  设置cookie 读取cookie
    if (req.url === '/read') {
        
        res.end(res.getCookie('name'))
    };
    if (req.url === '/write') {
        // domain默认只针对某个域名 
        // path 在某个路径才能访问cookie（一般不用设置）
        // expires（绝对时间）/max-age（相对时间）cookie有效时间
        // httpOnly 一般服务端设置为true
        // res.setHeader('Set-Cookie',['name=xh;domain=.zf.cn;max-age=10','age=1'])
        res.setCookie('name','zf',{httpOnly:true})
        res.end('ok')
    }
});
sever.listen(3000) 
// 签名 给cookie 标记 
// 签名模块 crypto  摘要算法md5（不是加密 ）
