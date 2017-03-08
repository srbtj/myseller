<template>
  <div class="shopCart">
    <div class="shopCart-left">
      <div class="cart">
        <span class="icon-shopping_cart icon"></span>
      </div>
      <div class="price">
        <span class="currentPrice">￥0</span>
      </div>
      <div class="deliveryPrice">
        <span>另需要配送费￥{{ seller.deliveryPrice }}元</span>
      </div>
    </div>
    <div class="shopCart-right">
      <span class="text">{{ seller.minPrice }}元起送</span>
    </div>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  @import "shopCart.less";
</style>
<script type="text/ecmascript-6">
  export default {
    name: 'shopCart',
    props: {
      seller: {
        type: Object
      }
    }
  };
</script>
