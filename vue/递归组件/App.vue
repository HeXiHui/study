<template>
  <div id='app'>
    <!-- iview -->
    <Menu>
      <template v-for="menu in menulist" >
        <ItemMenu :key="menu.title" 
        v-if="!menu.children">{{menu.title}}</ItemMenu>
        <ReSubMenu :key='menu.title' v-else :data='menu'></ReSubMenu>
      </template>
    </Menu>
  </div>
</template>
<script>
import Menu from './menu.vue';
import ItemMenu from './menuitem.vue';
import SubMenu from './submenu.vue';
import ReSubMenu from './resubmenu.vue'

export default {
  components:{SubMenu,Menu,ItemMenu,ReSubMenu},
  data(){
    return{
      menulist:[
        {title:'菜单1',
        children:[
          {title:'菜单1-1',
          children:[
            {title:'菜单1-1-1'},
            {title:'菜单1-1-2'},
            {title:'菜单1-1-3'}
          ]},
          {title:'菜单1-2',
          children:[
            {title:'菜单1-2-1'},
            {title:'菜单1-2-2'},
            {title:'菜单1-2-3'}
          ]},
          {title:'菜单1-3',
          children:[
            {title:'菜单1-3-1'},
            {title:'菜单1-3-2'},
            {title:'菜单1-3-3'}
          ]}
        ]},
        {title:'菜单2'},
        {title:'菜单3'},
        {title:'菜单4'},
      ]
    }
  }
}

</script>
<style>
li{list-style-type: none;}
</style>

