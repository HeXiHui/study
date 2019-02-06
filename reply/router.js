const sha=require('sha1')
const xmljs=require('xml-js')
let token=''

function XmlFn(data){
    let xml=data.xml
    let obj={}
    for(let x in xml){
        obj[x]=xml.value[x]
    }
    return obj
}//将data里面的数据平铺到obj

function signatureFn(getData){
    let {signatureFn,timestamp,echoster,nonce}=getData
    let str=[token,timestamp,nonce].sort().join()
    let sha=sha1('str')
    return {
        sha,signatureFn,echoster
    }
}

function parseXML(ctx,next){
    return new Promise((resolve,reject)=>{
        let buffers=[];
        ctx.req.on('data',(data)=>{
            buffers.push(data)
        });
        ctx.req.on('end',(data)=>{
            resolve(buffers.toString())
        })
    })
}//获取微信发来的消息，转成字符串

router.post('/msg',async (ctx,next)=>{
    let getData=ctx.qurey;//获取get过来的参数
    let getData=XmlFn(getData);
    if(getData.sha===getData.signatureFn){
        let xml=await parseXML(ctx);
        var options={
            compact:true,
            textkey:'value',
            cdatakey:'value'
        };
        let data=xmljs.xml2js(xml,options);//xml转成常用对象
        let data=XmlFn(data);
        wechat.reply(ctx,data)
    }else{
        ctx.body="不认识"
    }
})