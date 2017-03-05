// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import Seller from 'components/seller/Seller';

/**
 *  引入公共的 css 样式
 * **/
import './common/css/index.less';
// 第一步 调用 VueRouter
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.productionTip = false;

/** 第二步 定义路由 **/
const routes = [
  {path: '/sellers', component: Seller}
];

/** 第三步  创建路由实例 **/
const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});
/* eslint-disable no-new */
/** 第四步  创建和挂载路由实例 **/
new Vue({
  router,
  components: {App},
  template: '<App/>',
  created() {
    // 设置 html font-size
    this.setFontSize();
    this.changeScreen();
  },
  methods: {
    setFontSize() { // 设置html字体大小
      let oHtml = document.querySelector('html');
      let rect = oHtml.getBoundingClientRect();
      let width = rect.width;
      oHtml.style.fontSize = width / 15 + 'px';
    },
    changeScreen() { // 改变窗口大小时,修改html字体大小;
      let docEl = document.documentElement;
      let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
      let recalc = function() {
        let clientWidth = docEl.clientWidth;
        if (clientWidth > 750) return;
        if (clientWidth === undefined) return;
        docEl.style.fontSize = 50 * (clientWidth / 750) + 'px';
      };

      if (document.addEventListener === undefined) return;
      window.addEventListener(resizeEvt, recalc, false);
      document.addEventListener(resizeEvt, recalc, false);
    }
  }
}).$mount('#app');
