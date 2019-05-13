let http = require('http');
let url = require('url');
let path = require('path');
let fs = require('fs');
let mime = require('mime');
// 动态数据 ajax 获取
// 路由 就是根据不同path返回不同的内容
// 跨域 协议 主机名 端口 其中一个不同
// localStorage 本地存储
//   sessionStorage 不关浏览器就一起存活
//   cookie 每次请求者会带上cookie做注册登录（存放不敏感信息）
//   session 存放在服务端（session是基于cookie）

class server {
    async handleRequest(req, res) {
        let { pathname } = url.parse(req.url, true);//url.parse解释路径
        let absname = path.join(__dirname, pathname);
        let method=res.method.toLowerCase();//method方法名转小写
        res.setHeader('Access-Control-Allow-Origin','*');//允许所有网址访问
        res.setHeader('Access-Control-Allow-methods','GET,PUT,DELETE,OPTIONS');//允许访问方式
        res.setHeader('Access-Control-Allow-Header','Context-Type,token');
        res.setHeader('Access-Control-Max-Age',10);//10秒内不用重新options请求
        res.setHeader('Access-Control-Allow-Credentials',true);//允许带上cookei访问
        if(method==='options'){
            res.end();//可以访问
        };
        try {
            let statObj=await fs.stat(absname);
            if(statObj.isDirectory()){
                let readPath=path.join(absname,index.html);
                await fs.access(readPath);
                this.sendfile(res,readPath)
            }else{
                this.sendfile(res,absname)
            }
        }
        catch (e) {
            this.senderr(res,e)
        }
    };
    senderr(res,e) {
        res.statusCode = 404;
        res.end('Not find');
    };
    sendfile(res,path){
        res.setHeader('Context-Type',mime.getType(abspath)+'chartset=utf-8');
        fs.creatReadStream(path).pipe(res)
    }
}

// let server = http.createServer((req, res) => {
//     let { pathname } = url.parse(req.url, true);
//     let abspath = path.join(__dirname, pathname);
//     fs.stat(absname, (err, statObj) => {
//         if (err) {
//             res.statusCode = 404;
//             res.end('Not find');
//             return
//         };
//         if (statObj.isfile()) {
//             res.setHeader('Context-Type',mime.getType(abspath)+'chartset=utf-8')
//             fs.createReadStream(abspath).pipe(res)
//         } else {
//             let readpath = path.join(abspath, index.html);
//             fs.access(readpath, (err) => {
//                 if (err) {
//                     res.statusCode = 404;
//                     res.end('Not find');
//                     return
//                 };
//                 res.setHeader('Context-Type','text/html;charset=utf-8')
//                 fs.createReadStream(readpath).pipe(res)
//             })
//         }
//     })
// })
server.listen(3000)