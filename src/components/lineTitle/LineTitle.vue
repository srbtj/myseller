<template>
  <div class="lineTitle">
    <div class="line"></div>
    <div class="text">{{ text }}</div>
    <div class="line"></div>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  @import "lineTitle.less";
</style>
<script type="text/ecmascript-6">
  export default{
    name: 'lineTitle',
    props: {
      text: {
        type: String
      }
    }
  };
</script>
