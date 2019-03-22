<!--使用vue-cli 初始化一个项目 -->
<template><!--每个组件必须只有一个根元素 -->
    <div :class="[topclass,cname]">
        组件总结
        <h4>{{title}}</h4>
        <Top>组件引用</Top>
    </div>
</template>
<script>
import Top from "../"//组件引入
export default {
    components:{Top},//定义注册
    props:{
        cname:{
            type:String,
            default:''
        },
        title:{
            type:String,
            default:""
        }
    }
}
</script>
<!--  
定义父子组件：
    方法1：将其它组件以import引入用自定义标签接收，在当前页面用components里面注册标签。
    方法2：在路由中定义,在页面止通过<router-view/>使用子组件如下；
           routes:[
               path:'',
               components:'',
               children:[
                   path:'',
                   components:''
               ]
           ]
父级给子级传值
    方法1：在子组件中用prop接收父组件的数据和方法，在父组件中的子组件标签中声明传递的数据和方法如下：
          <Top :title="title"></Top>
    方法2：在子组件中methods中用this.$emit(id)如下
          父中：<code @id='id'></code>
          子中：methods:{
              id(){
                  this.$emit('id')
              }
          }
子级给父级传值
    子组件主要通过事件传递数据给父组件
    子组件部份：
       在某个标签里加入监听，@chang='set'。在methods中定义set文法如下：
         methods:{set:function(){
             this.$emit('transferUser',this.username)
         }}
    父组件部份：
             <login @transferUser='getUser'></login>
             methods:{getUser(msg){this.user=msg}}
    -->