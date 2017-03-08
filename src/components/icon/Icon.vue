<template>
  <span class="icon" :class="[classMap[number],iconType]"></span>
</template>
<style lang="less" rel="stylesheet/less">
  @import "./icon.less";
</style>
<script type="text/ecmascript-6">
  export default {
    name: 'icon',
    props: {
      /** number: 图片索引 **/
      number: {
        type: Number
      },
      /** 图片尺寸 **/
      size: {
        type: Number
      }
    },
//    created() {
//      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
//    }
    computed: {
      classMap() {
        let tempArr = [];
        tempArr.push('decrease-' + this.size);
        tempArr.push('discount-' + this.size);
        tempArr.push('special-' + this.size);
        tempArr.push('invoice-' + this.size);
        tempArr.push('guarantee-' + this.size);
        return tempArr;
      },
      iconType() {
        return 'icon-' + this.size;
      }
    }
  };
</script>
