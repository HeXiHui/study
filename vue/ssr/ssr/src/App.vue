<template>
    <div>
        <Bar></Bar>
        <Foo></Foo>
    </div>
</template>
 
<script>
import Bar from './component/Bar.vue'
import Foo from './component/Foo.vue'
export default {
    components:{
        Bar,Foo
    }
}
</script>
