/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

/* index 页面脚本 */

// import 'babel-polyfill';

import App from './index.vue';
import Vue from 'vue';

new Vue({
  el: '#app',
  render: (h) => h(App)
});
