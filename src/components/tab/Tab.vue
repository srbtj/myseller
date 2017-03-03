<template>
  <div id="tab">
    <router-link to="/goods" class="tabItem active">商品</router-link>
    <router-link to="/ratings" class="tabItem">评价</router-link>
    <router-link to="/sellers" class="tabItem">商家</router-link>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  @import "../../common/css/tab.less";
</style>
<script type="text/ecmascript-6">
  export default{
    name: 'Tab'
  };
</script>
