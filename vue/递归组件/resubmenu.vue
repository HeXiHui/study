<template>
  <SubMenu>
    <template #title>{{data.title}}</template>
    <template v-for="item in data.children">
      <ItemMenu  :key="item.title" v-if="!item.children">{{item.title}}</ItemMenu>
      <ReSub :key="item.title" v-else :data='item'></ReSub>
    </template>
  </SubMenu>
</template>
<script>
import ItemMenu from "./menuitem.vue";
import SubMenu from "./submenu.vue";
export default {
    name:'ReSub',
  components: { ItemMenu, SubMenu },
  props: {
    data: {
      type: Object,
      defaule:()=>({})
    }
  }
};
</script>
