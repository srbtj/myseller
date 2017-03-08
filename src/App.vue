<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <Tab :seller="seller"/>
    <!-- 路由出口  将在这里渲染内容 -->
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from 'components/header/Header.vue';
  import Tab from 'components/tab/Tab.vue';
  export default {
    name: 'app',
    components: {
      'v-header': Header,
      Tab
    },
    data() {
      return {
        seller: {}
      };
    },
    created() {
      this.getSeller(this);
    },
    methods: {
      getSeller: (root) => {
        root.$http.get('/api/seller')
          .then((response) => {
            let data = response.body;
            if (data.errno === 0) {
              root.seller = data.data;
            }
          });
      }
    }
  };
</script>

<style>

</style>
