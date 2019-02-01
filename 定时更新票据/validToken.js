const axios=require('axios')
const path=require('path')
let pathAdress=path.join(_dirname,'')

async function getToken(){
    let appID='123'
    let appSecret='123'
    let api='https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appID}&secret=${appSecret}'
    let data=await axios.get(api)//用axios的get请求访问获取票据
    let data=data.data
    let time=new Data().getTime()/1000//获取访问时的时间
    let expires=data.expires_in//微信根据有效时间

    let time=(time+expires-100)
    let accessToken=data.access_token
    let accessData=[time,accessToken].join('-')//将时间用-拼接

    await 外部.writeFile(pathAdress,accessData)//写入本地

    return accessToken
}

async function validToken(){
    let accessData=await 外部.readFile(pathAdress)
    let accessData=accessData.split('-')//拆分
    let time=accessData[0]
    let accessToken=accessData[1]

    let currentTime=new Data().getTime()/1000
    if(currentTime>time){
        return await getToken()
    }else{
        return accessToken
    }
}

//在每次请求都调用validToken判断票据是否有效