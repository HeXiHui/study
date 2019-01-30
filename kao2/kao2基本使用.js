const koa=require('koa2')
const app=new koa
const router=require('koa-router')
const bodyparser=require('koa-bodyparser')
const axios=require('axios')
const sha=require('sha1')//加密算法
const cors=require('koa-cors')//跨域设置
const static=require('koa-static')
const Token=require('./获取保存票据')
const routerWx=require('./koa-router')

app.use(bodyparser({
    enableTypes:['json','form','text']
}))

//跨域设置
app.use(cors({
    origin:function(ctx){
        return "*"
    },
    exposeHeaders:['WWW-Authenticate','Server-Authorization'],
    maxAge:5,
    credentials:true,
    allowMethods:['GET','POST','DELETE'],
    allowHeaders:['Content-Type','Authorization','Accept']
}))

//加载静态目录
app.use(static(__dirname+'/public'))

//任何http请求koa都会调用这个异步函数处理
app.use(async (ctx,next) => {
    await next //执行下一个中间件
    ctx.response.type='text/html'//设置response的content-type
    ctx.response.body='<h1>hello</h1>'
})

Token.getToken()

router.use('/wx',routerWx.routes())

app.use(router.routes(),router.allowMethods())

app.listen(8080,()=>{
    console.log('开启')
})