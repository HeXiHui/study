import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Iview from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(Iview)

Vue.config.productionTip = false
let whileList=['/xx']
router.beforeEach(
  async(to,from,next)=>{ 
    if(whileList.includes(to.path)){
      next()
    }
    let isLogin=await store.dispatch('validate')
    let needLogin=to.matched.some(match=>match.meta.needLogin)
    if(needLogin){
      if(isLogin){
        next()
      }else{
        next('/login')
      }
    }else{
      if(isLogin && to.name==='login'){
        next('/')
      }else{
        next()
      }
    }
    next()
  }
)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
