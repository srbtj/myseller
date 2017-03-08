<template>
  <div class="goods-wrapper">
    <div class="menu-wrapper">
      <ul class="menuList">
        <li v-for="good in goods" v-if="goods" class="menuItem">
          <div class="item">
            <span class="name"><Icon :number="good.type" v-show="good.type > 0" :size="3"/>{{ good.name }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul class="foodsList">
        <li class="foodsItem"
            v-if="goods"
            v-for="good in goods">
          <h2 class="title">{{ good.name }}</h2>
          <div class="foodsItem"
               v-for="food in good.foods"
               v-if="good.foods">
            <div class="foodImg">
              <img :src="food.icon" />
            </div>
            <div class="foodDesc">
              <h2 class="foodTitle">{{ food.name }}</h2>
              <div class="description" v-show="food.description">{{food.description}}</div>
              <div class="sellCount">
                <span class="sell">月售{{food.sellCount}}份</span>
                <span class="rating">好评率{{food.rating}}%</span>
              </div>
              <div class="price">
                <span class="curPrice">￥<span class="boldText">{{food.price}}</span></span>
                <span class="oldPrice" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less">
  @import "goods.less";
</style>
<script type="text/ecmascript-6">
  import Icon from 'components/icon/Icon';
  let ERR_NO = 0;
  export default{
    name: 'goods',
    data() {
      return {
        goods: []
      };
    },
    created() {
      this.$http.get('/api/goods')
        .then(function (response) {
          let data = response.body;
          if (data.errno === ERR_NO) {
            this.goods = data.data;
          }
        });
    },
    components: {
      Icon
    }
  };
</script>
