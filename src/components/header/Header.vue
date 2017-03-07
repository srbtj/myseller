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
          <Icon :number="seller.supports[0].type"></Icon>
          <span class="text">{{ seller.supports[0].description }}</span>
          <div class="arrow" @click="hasShowMask">
            <span class="number">5个</span>
            <span class="icon-keyboard_arrow_right right"></span>
          </div>
        </div>
      </div>
    </div>
    <!-- 广告区块 -->
    <div class="ad-wrapper" @click="hasShowMask">
      <span class="icon"></span>
      <span class="text">{{ seller.bulletin}}</span>
      <span class="arrow icon-keyboard_arrow_right"></span>
    </div>
    <div class="bgImg">
      <img :src="seller.avatar"/>
    </div>
    <!-- mask -->
    <transition name="mask-fade">
      <div class="mask" v-show="showMask">
        <!-- sticky footer -->
        <div class="ctx-wrapper clear">
          <div class="mask-ctx">
            <div class="title">{{ seller.name }}</div>
            <div class="starWrap">
              <Star :size="48" :score="seller.score"></Star>
            </div>

            <LineTitle :text="'优惠信息'" class="favour"></LineTitle>

            <div class="favourInfo" v-if="seller.supports">
              <div class="infoItem" v-for="item in seller.supports">
                <Icon :number="item.type" class="itemIcon"></Icon>
                <span class="itemText">{{ item.description }}</span>
              </div>
            </div>

            <LineTitle :text="'商家公告'" class="favour"></LineTitle>

            <div class="description">
              <span>{{ seller.bulletin }}</span>
            </div>
          </div>
        </div>
        <div class="close-wrapper">
          <i class="icon-close" @click="hasHideMask"></i>
        </div>
      </div>
    </transition>
  </div>

</template>
<style lang="less" rel="stylesheet/less">
  @import "header.less";
</style>
<script type="text/ecmascript-6">
  import Icon from 'components/icon/Icon';
  import Star from 'components/star/Star';
  import LineTitle from 'components/lineTitle/LineTitle';
  export default{
    name: 'Header',
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        showMask: false
      };
    },
    methods: {
      hasShowMask: function() {
        this.showMask = true;
      },
      hasHideMask: function() {
        this.showMask = false;
      }
    },
    components: {
      Icon,
      Star,
      LineTitle
    }
  };
</script>
