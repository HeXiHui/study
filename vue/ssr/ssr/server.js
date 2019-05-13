let express=require('express')
let app=express()
let VueServerRenderer=require('vue-server-renderer')
let render=VueServerRenderer.createRenderer()
let fs=require('fs')
let path=require('path')
let Vue=require('vue')

let template=fs.readFile('./index.html','utf-8')

// 创建vue实例
let vm=new Vue({
    template:'<div>hello</div>'
})

app.get('/',(req,res)=>{
    render.renderToString(vm,function(err,html){
        res.send(html)
    })
})
app.listen(3000)