// http缓存 强制缓存（首页不能） 比较缓存
let http=require('http');
let path=require('path');
let url=require('url');
let fs=require('fs');
 
http.createServer(function(req,req){
    let pahtname=url.parse(req.url,true);
    let abs=path.join(__dirname,pathname);
    let crypto=require('crypto');
     
    res.setHeader('Cache-Control','max-age=10');
    res.setHeader('Expires',new Date(Data.now()+10000).toUTCString());
    fs.stat(abs,(err,stat)=>{
        if(err){
            res.statusCode=404;
            res.end('not found');
            return
        };
        // if(stat.isFile()){
        //     // 对比缓存1.last-modified对比 2.etag 实体内容对比 根据文件内容 算出一个唯一的值 MD5
        //     let ctime=stat.ctime.toUTCString();//获取修改时间
        //     // if-modified-since是浏览器自己携带，如果服务器设置last-Modified那下次请求就会带上
        //     if(req.headers['if-modified-since']==ctime){
        //         res.statusCode=304;
        //         res.end();
        //         return
        //     };
        //     res.setHeader('Last-Modified',ctime);
        //     fs.createReadStream(abs).pipe(res)
        // }
        if(stat.isFile()){//etag 不能对大文件进行etag
            let md5=crypto.createHash('md5')
            let rs=fs.createReadStream(abs);
            let arr=[];
            rs.on('data',function(data){
                md5.update(data);
                arr.push(data)
            });
            rs.on('end',function(){
                let etag=md5.digest('base64');
                if(req.headers['if-none-match']===etag){
                    res.statusCode=304;
                    res.end();
                    return
                }
                res.setHeader('Etag',etag);
                res.end(Buffer.concat(arr))
            })
        }
        //全部使用 先强制缓存 时间到会再发请求就用对比缓存 先判断 last-modified 再判断他etag 如果都成立返回304 再强制缓存
    })
}).listen(3000)