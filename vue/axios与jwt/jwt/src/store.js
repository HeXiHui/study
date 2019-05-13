import vue from 'vue';
import vuex from 'vuex';
import {login,validate} from './api/api.js';
import {setLocal} from '../src/libs/local';

vue.use(vuex);
export default new vuex.Store({
    state:{ 
        isShowLaoding:false,
        username:'xxx'
    },
    mutations:{
        showLaoding(state){
            state.isShowLaoding=true
        },
        hideLoading(state){
            state.isShowLaoding=flase
        },
        setUser(state,username){
            state.username=username
        }
    },
    actions:{
        async toLogin({commit},username){
            let res=await login(username);
            if(res.code===0){
                commit('setUser',res.username);
                // 将token保存在客户端上
                setLocal('token',res.token)
            }else{
                return Promise.reject(res.data)
            }
        },
       async validate({commit}){
           let res=await validate();
           if(res.code===0){
               commit('setUser',res.username);
               setLocal('token',res.token)
           }
           return res.code===0//返回用户是否失效
       }
    }
})