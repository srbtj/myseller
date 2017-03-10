<template>
  <div class="shopCart">
    <div class="shopCart-left">
      <div class="cart" :class="{'highlight' : totalCount > 0}">
        <span class="icon-shopping_cart icon" :class="{'highlight' : totalCount > 0}"></span>
        <span class="count" v-show="totalCount > 0">{{totalCount}}</span>
      </div>
      <div class="price" :class="{'highlight' : totalCount > 0}">
        <span class="currentPrice">￥{{totalPrice}}</span>
      </div>
      <div class="deliveryPrice">
        <span>另需要配送费￥{{ deliveryPrice }}元</span>
      </div>
    </div>
    <!--<div class="shopCart-right" :class="{highlight: (minPrice - totalPrice <= 0)}">-->
    <!--<span class="text" v-show="totalPrice === 0">￥{{minPrice }}元起送</span>-->
    <!--<span class="text" v-show="totalPrice!==0 && (minPrice - totalPrice) > 0">还差{{ minPrice - totalPrice}}起送</span>-->
    <!--<span class="text highlight" v-show="minPrice - totalPrice <= 0">去结算</span>-->
    <!--</div>-->
    <div class="shopCart-right" :class="{highlight: (totalPrice-minPrice>=0)}">
      <span class="text">{{payState}}</span>
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
      selectFoods: {
        type: Array,
        default() {
          return [];
        }
      },
      minPrice: {
        type: Number
      },
      deliveryPrice: {
        type: Number
      }
    },
    computed: {
      totalCount() {
        let count = 0;
        this.selectFoods.map((item) => {
          count += item.count;
        });
        return count;
      },
      totalPrice() {
        let price = 0;
        this.selectFoods.map((item) => {
          price += item.price * item.count;
        });
        return price;
      },
      payState() {
        if (this.totalPrice === 0) {
          return `￥${this.minPrice}元起送`;
        } else if (this.totalPrice < this.minPrice) {
          let diff = this.minPrice - this.totalPrice;
          return `还差${diff}起送`;
        } else {
          return '去结算';
        }
      }
    }
  };
</script>
