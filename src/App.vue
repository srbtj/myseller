<template>
  <div id="app">
    <v-header/>
    <Tab/>
    <!-- 路由出口  将在这里渲染内容 -->
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from 'components/header/Header.vue';
  import Tab from 'components/tab/Tab.vue';
  export default {
    name: 'app',
    components: {
      'v-header': Header,
      Tab
    }
  };
</script>

<style>

</style>
