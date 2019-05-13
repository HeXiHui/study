// -微任务概念  promise.then和process.nextTick() process.nextTick()先执行
Promise.resolve().then(function(){console.log('Promise')});
process.nextTick(function(){console.log('next')});
console.log(11111)
// -timers 时间 settimeout的回调
// poll 轮训 i/o回调 如fs.readFile()
// -check setTmmediate 方法


// Buffer类 （不要用new）缓存 读取二进制转化16进制
// utf8 转化16进制
// Buffer 的声明方式
let buffer=Buffer.from('123');
let buffer1=Buffer.alloc(3);//申请3个字节
let buffer2=Buffer.from([255,255,255])
// buffer常见方法 forEach length slice
// buffer一旦声明就不能增加长度 concat拼接
let b1=Buffer.from('1');
let b2=Buffer.from('2');
let buffer=Buffer.concat([b1,b2 ])