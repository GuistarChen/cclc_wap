(() => {
  window.Vue = require('vue');
  var VueRouter = require('vue-router');
  Vue.use(VueRouter);
  var VueTouch = require('vue-touch')
  Vue.use(VueTouch);
  var VueClipboard = require('vue-clipboard')
  Vue.use(VueClipboard);

  // var router = new VueRouter({
  //   hashbang: true,
  //   history: true
  // });
  var router = new VueRouter();
  require('bootstrap-css');

  window.VueStrap = require('vue-strap');
  require('./libs/util');

  var CLData = require('./libs/data').CLData;


  window.CLData = new CLData(window.cclc_data.api_url);

  router.map({
    // wap路由
    '/midautumn': {
      component: function (resolve) {
        require(['./components/pc/MidAutumn.pc.vue'], resolve)
      }
    }
  })
  var App = Vue.extend({})
  router.start(App, '#app');
})();