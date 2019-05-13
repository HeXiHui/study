import axios from 'axios';
import store from '../store';
import {getLocal} from '../libs/local'

class AjaxRequest{
    constructor(){
        this.timeout=3000;//超时时间
        this.baseURL=process.env.NODE_ENV=='prodution'?'/':'http://localhost:3001';
        this.queue={};
    }
    merge(options){
        return {...options,baseURL:this.baseURL,timeout:this.timeout}
    }
    setInterceptor(instance,url){
        instance.interceptors.request.use((config)=>{
            config.headers.Authorization=getLocal('token');//每次请求带上token
            if(Object.keys(this.queue).length===0){
                store.commit('showLaoding')
            };
            this.queue[url]=url;
            return config
        })
        instance.interceptors.response.use((res)=>{
            if(Object.keys(this.queue).length===0){
                store.commit('hideLoading')
            };
            delete this.queue[url];
            return res.data// 响应拦截
        })
    }
    request(option){
        let instance=axios.create();//通过axios库创建一个axios一个实例
        let config=this.merge(option)
        this.setInterceptor(instance,option.url)
        return instance(config);//axios 执行后返回一个promise
    }
};
export default new AjaxRequest