const ejs=require("ejs")//编译模板
const heredoc=require("heredoc")//编写模版

var tpl=heredoc()
var compliec=ejs.complies(tpl)

exports.reply=(ctx,data)=>{
    let ToUserName=data.FromUserName
    let FromUserName=data.ToUserName
    let Content=data.Content

    ctx.body=`
    <xml>
        <ToUserName><![CDATA[${ToUserName}]]></ToUserName>
        <FromUserName><![CDATA[${FromUserName}]]></FromUserName>
        <CreateTime>${new Data().getTime()}</CreateTime>
        <MsgType><![DATA[text]]></MsgType>
        <Content><![CDATA[${Content}]]></Content>
    </xml>
    `
}