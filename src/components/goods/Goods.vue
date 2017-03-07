<template>
  <div class="goods-wrapper">
    <div class="menu-wrapper">
      <ul class="menuList">
        <li v-for="good in goods" v-if="goods" class="menuItem">
          <div class="item">
            <span class="name"><Icon :number="good.type" v-show="good.type > 0"/>{{ good.name }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper"></div>
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
        .then(function(response) {
          let data = response.body;
          if (data.errno === ERR_NO) {
            this.goods = data.data;
            console.log(data.data);
          }
        });
    },
    components: {
      Icon
    }
  };
</script>
