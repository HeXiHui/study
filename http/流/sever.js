let http = require('http');
let querystring = require('querystring');
let sever = http.createServer((req, res) => {
    let pathname = req.url;
    let headers = req.headers;
    let method = req.method.toLowerCase();//转小写
    let arr = [];
    req.on('data', (chunk) => {
        arr.push(chunk)
    });//请求体有东西才会触发
    req.on('end', () => {
        let str = Buffer.concat(arr).toString();
        if (req.headers['content-type'] === 'application') {
            let obj = querystring.parse(str);//转成对象
            res.setHeader('Context-Type','application')
            res.end(JSON.stringify(obj))//转成字符串发回客户端
        }
    });//没东西也会触发
});
sever.listen(3000)