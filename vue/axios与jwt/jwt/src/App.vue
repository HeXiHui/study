<template>
  <div id="app">
    <Spin v-if="$store.state.isShowLaoding">加载中.......{{$store.state.isShowLaoding}}</Spin>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link>|
      <router-link to="/profile">Profile</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
}


</script>
