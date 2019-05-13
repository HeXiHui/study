<template>
<div>
    <div @click="chang">
        <slot name='title' ></slot>
    </div>
    <div v-show="flag" class="lef">
        <slot ></slot>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            flag:false
        }
    },
    methods:{
        chang(){
            this.flag =!this.flag;
            console.log(1111)
        }
    }
}
</script>

<style>
.lef{padding-left: 10xp}
</style>
