//promise es6的 一种异步流程的控制手段
// generator async await 都需要promise
// promise可以吗支持多个并发请求
// promise关键字 resolve 成功 reject失败  pending 等待态
// Promise只有一个参数 叫excutor执行器 ，默认new是会调用
let p=new Promise((resolve,reject)=>{
    resolve('1')
})
p.then((resolve=>{
    console.log(成功)
},
err=>{
    console.log(err)
}))