let express=require('express');
let bodyParse =require('body-parser') ;
let jwt=require('jsonwebtoken')
let app=express();
let secret='hxh';
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","http://localhost:8080");//允许跨域
    res.header("Access-Control-Allow-Methods","GET,HEAD,OPTION,POST,PUT");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept,Authorization");
    
    if(req.method.toLowerCase==='options'){
        return res.end()
    }
    next()
}); 
// cookie token
app.post('/login',(req,res)=>{
    let {username}=req.body;
    if(user==='admin'){
        res.json({
            code:0,
            username:'admin',
            token:jwt.sign({username:'admin'},secret,{
                expiresIn:20//有效时间
            })
        })
    }else{
        res.json(
            {
                code:1,
                data:'不存在'
            }
        )
    }
});
app.get('/validate',(req,res)=>{
    let token=req.headers.authorization;
    jwt.verify(token,secret,(err,decode)=>{
        if(err){
            return res.json({
                code:1,
                data:"token失效"
            })
        }else{
            res.json({
                username:decode.username,
                code:0,
                token:jwt.sign({username:'admin'},secret,{expiresIn:20})
            })
        }
    })
});
app.get('/1',(req,res)=>{
    res.end('qqqq')
})
app.use(bodyParse.json());

app.listen(3002)