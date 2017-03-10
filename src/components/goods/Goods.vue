<template>
  <div>
    <div class="goods-wrapper">
      <div class="menu-wrapper">
        <ul class="menuList">
          <li v-for="(good,index) in goods" v-if="goods"
              class="menuItem"
              :class="{ active: currentIndex === index }"
              @click="selectMenu(index,$event)">
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
            <div class="goodsItem"
                 v-for="food in good.foods"
                 v-if="good.foods">
              <div class="foodImg">
                <img :src="food.icon"/>
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
                  <div class="cart-wrapper">
                    <CartControl :food="food"/>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <ShopCart
      :minPrice="seller.minPrice"
      :deliveryPrice="seller.deliveryPrice"
      :selectFoods="selectFoods"
    />
  </div>

</template>
<style lang="less">
  @import "goods.less";
</style>
<script type="text/ecmascript-6">
  import Icon from 'components/icon/Icon';
  import BScroll from 'better-scroll';
  import ShopCart from 'components/shopCart/ShopCart';
  import CartControl from 'components/cartControl/CartControl';
  let ERR_NO = 0;
  export default{
    name: 'goods',
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        goods: [],
        liHeight: [],
        scrollY: 0
      };
    },
    created() {
      this.$http.get('/api/goods')
        .then(function (response) {
          let data = response.body;
          if (data.errno === ERR_NO) {
            this.goods = data.data;
            this.$nextTick(() => {
              this._initScroll();
              this._calculateHeight();
            });
          }
        });
    },
    components: {
      Icon,
      ShopCart,
      CartControl
    },
    methods: {
      _initScroll() { // 初始化滚动元素
        this.menuScroll = new BScroll(this.$el.querySelector('.menu-wrapper'), {
          click: true
        });
        this.foodScroll = new BScroll(this.$el.querySelector('.foods-wrapper'), {
          probeType: 3,
          click: true
        });

        this.foodScroll.on('scroll', (pos) => {  // 获得当前滚动的值
          this.scrollY = Math.abs(Math.round(pos.y));
        });
      },
      _calculateHeight() {  // 计算food列表每列的距离顶部的高度
        let oLi = this.$el.querySelector('.foods-wrapper').querySelectorAll('.foodsItem');
        let height = 0;
        this.liHeight.push(height);
        for (let i = 0, len = oLi.length; i < len; i++) {
          let el = oLi[i];
          height += el.clientHeight - 1;
          this.liHeight.push(height);
        }
      },
      selectMenu(index, event) {
        if (!event._constructed) return;
        this.currentIndex = index;
        let el = this.$el.querySelectorAll('.foodsItem')[index];
        this.foodScroll.scrollToElement(el, 300);
      }
    },
    computed: {
      /** 计算当前滚动的索引值 **/
      currentIndex() {
        for (let i = 0, len = this.liHeight.length; i < len; i++) {
          let h1 = this.liHeight[i];
          let h2 = this.liHeight[i + 1];
          if (!h2 || this.scrollY >= h1 && this.scrollY < h2) {
            return i;
          }
        }
        return 0;
      },
      selectFoods() {
        let tempArr = [];
        this.goods.map((item) => {
          item.foods.map((food) => {
            if (food.count > 0) tempArr.push(food);
          });
        });
        return tempArr;
      }
    }
  };
</script>
