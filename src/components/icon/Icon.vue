<template>
  <span class="icon" :class="classMap[number]"></span>
</template>
<style lang="less" rel="stylesheet/less">
  @import "./icon.less";
</style>
<script type="text/ecmascript-6">
  export default {
    name: 'icon',
    props: {
      number: {
        type: Number
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    }
  };
</script>
