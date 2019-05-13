// promise用法 Promise类 静态方法（Promise.xxx) 原型上的方法(new Promise.xxx)
// (Promise.all;Promise.resolve;Promise.reject;Promise.race)
// (then catch finally)
// promise 默认是等待态（pending） 调用resolve表示成功 调用reject表示失败
let Promise = require('./Promise原码')
let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('成功')
    },1000)
});
p.then(
    (value)=>{console.log('success', value)},
    (reason)=>{console.log('error', reason)}
    )
// 链式调用的特点
// 1.如果是一个then方法返回一个普通值，这个值会传到下一个then作为成功的值
// 2.不是普通值的有两种；error 和promise
// 3.如果返回是一个promise，会等到promise值来判断是成功还是失败  决定值传到下一个then的成功还是失败中
// 4.捕获错误机制 找离自己最近then的失败
// 5.promise调用then后会返回一个新的promise