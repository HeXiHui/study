// 流 有 可读流 可写流 双工流 转化流
// 可以分段读取 可以控制速率
let fs = require('fs');
let path = require('path');
let pipe=require('pipe');
let rs = fs.createReadStream(paht.resolve(__dirname, 'index.txt'));
//  流 默认是非流动模式 内部会监控你有没有监听data
let arr = []
rs.on('data', (chunk) => {
    arr.push(chunk);
    console.log(chucnk);
    rs.pause()//暂停读取
});
rs.on('err',()=>{console.log(err)})
rs.on('end', (chunk) => {
    Buffer.concat(arr).toString();//拼接读取的内
    console.log(end)
});
setTimeout(()=>{
    rs.resume()//恢复data事件
},1000)

// 可写流
let ws=fs.createWriteStream(path.resolve(__dirname,'index.txt'));
// 写入的必须是buffer/字符串
let flag=ws.write(123+'',()=>{console.log('写入成功')});
flag();
rs.on('data',(data)=>{
    if(!flag) rs.pause()
})//等待写完再恢复读取
ws.on('drain',()=>{
    rs.resume()
})


rs.pipe(ws);//内置模块，把可读流倒到可写流