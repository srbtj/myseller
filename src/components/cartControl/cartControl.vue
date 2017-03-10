<template>
  <div class="cart">
    <transition name="cart-fade">
      <div class="cart-decrease"
           v-show="food.count>0"
           @click="minusCount">
          <i class="cart-inner icon-remove_circle_outline"></i>
      </div>
    </transition>
    <transition name="cart-fade">
      <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    </transition>
    <div class="icon-add_circle cart-increase"
         @click="addCount"></div>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  @import "cartControl.less";
</style>
<script type="text/ecmascript-6">
  export default {
    name: 'cartControl',
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      minusCount(event) {
        if (!event._constructed) return;
        if (this.food.count) this.food.count--;
      },
      addCount(event) {
        if (!event._constructed) return;
        if (!this.food.count) {
          this.$set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
      }
    }
  };
</script>
