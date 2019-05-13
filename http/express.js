let express=require('express');
let app=express();

//在请求到 路径前 在中间执行的内家 就是中间件
//中间件作用1.做权限校验
// 2.配置一些公共方法和属性
// 如果不调用next方法 则不会向下执行，是否可以继续执行后续逻辑
// 一般中间件在路由之前
// 中间件中如果next中有参数，就会认为这个参数是错误（作用：捕获next方法出错的情况）
app.use('/',function(req,res,next){});
app.use('/user',function(req,res,next){});
app.use(express.static(__dirname));//静态文件中间件 就是一个高阶函数 函数返回一个函数
// express中提供了大量内置属性各方法 req.path 请求路径 req.query路径字符串  res.send() res.sendFile( )
app.get('/',function(req,res){});
app.use(function(err,req,res,next){
    res.end('wrong')
})
app.listen(3000)