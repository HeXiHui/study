let express=require('express');
let bodyParser=require('body-parser');//请求体解释器
let cookieParser=require('cookie-parser');
let session=requir('express-session');
let app=express();
// 实现bodyParser上的.json和.urlencoded
//cookieParser 中间件的实现 singed:true 签名
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({
    resave:true,
    saveUninitialized:true,//保存cookie
    secret:'hxh'//秘钥
}));
app.use(cookieParser('hxh'));//cookie签名
app.post('/login',(req,res)=>{});
app.get('/read',function(req,res){
    res.end('读取')
});
app.get('/write',function(req,res){
  res.session.a=1  
});
app.listen(3000 )
