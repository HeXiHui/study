<template>
    <div id="app">
        <!-- v-module=:value + @change -->
        <!-- :xxx.sync='xxx'=:xxx+this.$emit('update:xxx') -->
        <ScrollBall color="red" v-model="pos2" :target='target1' >红球
            {{pos2}}
        </ScrollBall>
        <ScrollBall color="red" :target='target1' :value.sync="pos2">红球</ScrollBall>
        <ScrollBall color="red" :value='pos1' :target='target1' @change="change">红球</ScrollBall>
        <ScrollBall ref='ball' color='blue' :value='pos1' :target='target2' @change="change">蓝球</ScrollBall>
        <button @click="stop">停下</button>
    </div>
      <!-- 组件id _uid -->
      <!-- 双向通信 props+$emit / v-module / .sync -->
      <!-- 组件设置ref  通过$refs拿到组件内部的方法-->
</template>
<script>
import ScrollBall from './scrollBall.vue';
export default {
    components:{ScrollBall},
    data(){
        return{
            pos1:50,
            pos2:50,
            target1:500,
            target2:800
        }
    },
    methods:{
        change(value){
            this.pos1=value;
            this.pos2=value
        },
        stop(){
            this.$refs.ball.stop()
        }
    }
}
</script>
