const koa=require('koa')
const router=require('koa-router')
const axios =require('axios')
const fs=require('fs')
const path=require('path')

async function getToken (){
    let appID='123'
    let appSecret='123'
    let api='https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appID}&secret=${appSecret}'
    let data= await axios.get(api)
    data=data.data
    let Token=data.access_token
    writeFile(path.join(__dirname,'../txt.js'),Token)
}
async function readFile(_path,encoding='utf8'){
    return new Promise ((resolve,reject)=>{
        fs.readFile(_path,encoding,(err,context)=>{
            resolve(context)
        })
    })
}

async function writeFile(_path,encoding='utf8'){
    return new Promise((resolve,reject)=>{
        fs.writeFile(_path,context,(err)=>{
            console.log('err',err)
        })
    })
}

module.exports={
    getToken,
    readFile,
    writeFile
}