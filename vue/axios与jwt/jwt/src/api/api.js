import axios from '../libs/axios类库'

export const getUser=()=>{
    return axios.request({
        url:'/user',
        method:'get'
    })
};
export const login=(username)=>{
   return axios.request({
       url:'/login',
       method:'post',
       data:{
           username
       }
   })
}
export const validate=(username)=>{
    return axios.request({
        url:'/validate',
        method:'get'
    })
}