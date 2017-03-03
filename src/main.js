// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Seller from 'components/seller/Seller';

// 第一步 调用 VueRouter
Vue.use(VueRouter);
Vue.config.productionTip = false;

/** 第二步 定义路由 **/
const routes = [
  {path: '/sellers', component: Seller}
];

/** 第三步  创建路由实例 **/
const router = new VueRouter({
  routes
});
/* eslint-disable no-new */
/** 第四步  创建和挂载路由实例 **/
new Vue({
  router,
  components: {App},
  template: '<App/>'
}).$mount('#app');
