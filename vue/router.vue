import Com from './component'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes:[
        path:'/',
        component:Com,
        name:'Com'
    ]，
    [//动态路由
        path:'/com/:id',
        component:'Com'
        //$route.params.id就能查到动态参数（这指id）
        children:[
            {path:'1',component:},
            {path:'2'.component:}
            //路由嵌套当/com/:id配对那个就显示那个
        ]
    ],
    [//重定向
        path:'/',
        rediret:'/com'
        //redirect后可以是路径、命名的路由名甚至方法动态返回重定向目标
    ]
    //在任何组件中可以通过this.$router访路由器，this.$route访问当前路由
})