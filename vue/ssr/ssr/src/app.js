import Vue from 'vue'
import App from './App.vue'
 
// 为了兼容服务端 把这个方法改造成函数
export default ()=>{ 
    let app=new Vue({
    el:'#app',
    render:h=>h(App)
});
return app
}