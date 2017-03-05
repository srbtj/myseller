<template>
  <div id="header">
    <!-- 内容区块 -->
    <div class="content-wrapper">
      <div class="headerImg">
        <img :src="seller.avatar"/>
      </div>
      <div class="headerDesc">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="desc">
          <span>{{ seller.description}}</span> /
          <span>{{ seller.deliveryTime}}分钟送达</span>
        </div>
        <div class="supports" v-if="seller.supports">
          <span class="icon"></span>
          <span class="text">{{ seller.supports[0].description }}</span>
          <div class="arrow">
            <span class="number">5个</span>
            <span class="icon-keyboard_arrow_right"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="ad-wrapper">
      <span class="icon"></span>
      <span class="text">{{ seller.bulletin}}</span>
      <span class="arrow icon-keyboard_arrow_right"></span>
    </div>
  </div>
  <!-- 广告区块 -->
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  @import "header.less";
</style>
<script type="text/ecmascript-6">
  export default{
    name: 'Header',
    props: {
      seller: {
        type: Object
      }
    }
  };
</script>
