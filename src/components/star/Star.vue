<template>
  <div class="star" :class="starType">
    <span v-for="starClass in starClasses"
          class="starItem"
          :class="starClass"
    ></span>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  @import "star.less";
</style>
<script type="text/ecmascript-6">
  const LENGTH = 5;
  const STAR_ON = 'on';
  const STAR_HALF = 'half';
  const STAR_OFF = 'off';

  export default{
    name: 'star',
    props: {
      /** 评分: 根据评分显示实体星个数 **/
      score: {
        type: Number
      },
      /** 尺寸: 根据尺寸显示星的大小 **/
      size: {
        type: Number
      }
    },
    computed: {
      starType() {
        return 'star-' + this.size;
      },
      starClasses() {
        let starArr = [];
        /**
         * 获得评分,并进行四舍五入处理
         * **/
        let score = Math.floor(this.score * 2) / 2;
        let hasHalf = score % 1 !== 0; // 是否有半星
        let integer = Math.floor(score); // 全星个数

        for (let i = 0; i < integer; i++) {
          starArr.push(STAR_ON);
        }

        if (hasHalf) {
          starArr.push(STAR_HALF);
        }
        // 空星个数
        while (starArr.length < LENGTH) {
          starArr.push(STAR_OFF);
        }

        return starArr;
      }
    }
  };
</script>
