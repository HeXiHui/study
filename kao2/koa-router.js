const Router=require('koa-router')
const router=new Router
const sha1=require('sha1')//加密算法

router.get('/1',(ctx,next)=>{
    let token='123'
    let getData=ctx.query//获取微信通过get发来的参数
    let {signature,timestamp,echoster,nonce}=getData//集体赋值

    let str=[token,timestamp,nonce].sort().join()//排序拼接
    let sha=sha1(str)

    //两个票据验证
    if(sha===signature){
        console.log('正确')
    }else{
        ctx.body='wrong'
        console.log('不认识')
    }
})

router.post('/2',(ctx,next)=>{
    ctx.body='2'
})

module.exports={
    router
}