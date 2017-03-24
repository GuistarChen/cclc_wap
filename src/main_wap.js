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

    //window.CLData = new CLData('https://www.cclc.co');

    window.CLData = new CLData(window.cclc_data.api_url);

    router.map({
        // wap路由
        '/': {
            component: function(resolve) {
                require(['./components/wap/Home.vue'], resolve)
            }
        },
        '/debts': {
            name: 'debts',
            component: function(resolve) {
                require(['./components/wap/Debts.vue'], resolve)
            }
        },
        '/debt/:id': {
            name: 'debt',
            component: function(resolve) {
                require(['./components/wap/Debt.vue'], resolve)
            }
        },
        '/buy/:id': {
            name: 'buy',
            component: function(resolve) {
                require(['./components/wap/Buy.vue'], resolve)
            }
        },
        '/buyconfirm': {
            name: 'buyconfirm',
            component: function(resolve) {
                require(['./components/wap/BuyConfirm.vue'], resolve)
            }
        },
        '/buysuccess': {
            name: 'buysuccess',
            component: function(resolve) {
                require(['./components/wap/BuySuccess.vue'], resolve)
            }
        },
        '/account': {
            component: function(resolve) {
                require(['./components/wap/Account.vue'], resolve)
            }
        },
        '/signIn': {
            component: function(resolve) {
                require(['./components/wap/SignIn.vue'], resolve)
            }
        },
        '/signUp': {
            component: function(resolve) {
                require(['./components/wap/SignUp.vue'], resolve)
            }
        },
        '/resetTradePwd': {
            component: function(resolve) {
                require(['./components/wap/ResetTradePwd.vue'], resolve)
            }
        },
        '/resetLoginPwd': {
            component: function(resolve) {
                require(['./components/wap/ResetLoginPwd.vue'], resolve)
            }
        },
        '/valid': {
            component: function(resolve) {
                require(['./components/wap/Valid.vue'], resolve)
            }
        },
        '/changeCard': {
            component: function(resolve) {
                require(['./components/wap/ChangeCard.vue'], resolve)
            }
        },
        '/fullAward': {
            component: function(resolve) {
                require(['./components/wap/FullAward.vue'], resolve)
            }
        },
        'rankAward': {
            component: function(resolve) {
                require(['./components/wap/RankAward.vue'], resolve)
            }
        },
        '/buyfailure/:id': {
            component: function(resolve) {
                require(['./components/wap/BuyFailed.vue'], resolve)
            }
        },
        '/midAutumn': {
            component: function(resolve) {
                require(['./components/wap/midAutumn.vue'], resolve)
            }
        },
        '/midAutumn2': {
            component: function(resolve) {
                require(['./components/wap/midAutumn2.vue'], resolve)
            }
        },
        // pc路由
        '/pc/midautumn': {
            component: function(resolve) {
                require(['./components/pc/MidAutumn.pc.vue'], resolve)
            }
        },
        '/share': {
            component: function(resolve) {
                require(['./components/wap/sharePride.vue'], resolve)
            }
        },
        '/new': {
            component: function(resolve) {
                require(['./components/wap/news.vue'], resolve)
            }
        },
        '/answer': {
            component: function(resolve) {
                require(['./components/wap/nationalDay/answer.vue'], resolve)
            }
        },
        '/myPhoto': {
            component: function(resolve) {
                require(['./components/wap/nationalDay/myPhoto.vue'], resolve)
            }
        },
        '/myRecord': {
            component: function(resolve) {
                require(['./components/wap/nationalDay/myRecord.vue'], resolve)
            }
        },
        '/nationalDay': {
            component: function(resolve) {
                require(['./components/wap/nationalDay/nationalDay.vue'], resolve)
            }
        },
        '/nationRule': {
            component: function(resolve) {
                require(['./components/wap/nationalDay/nationRule.vue'], resolve)
            }
        },
        '/photos': {
            component: function(resolve) {
                require(['./components/wap/nationalDay/photos.vue'], resolve)
            }
        },
        '/question': {
            component: function(resolve) {
                require(['./components/wap/nationalDay/question.vue'], resolve)
            }
        },
        '/uploadPhoto': {
            component: function(resolve) {
                require(['./components/wap/nationalDay/uploadPhoto.vue'], resolve)
            }
        },
        '/uploadRecord': {
            component: function(resolve) {
                require(['./components/wap/nationalDay/upLoadRecord.vue'], resolve)
            }
        },
        '/record': {
            component: function(resolve) {
                require(['./components/wap/nationalDay/records.vue'], resolve)
            }
        },
        '/loading': {
            component: function(resolve) {
                require(['./components/wap/nationalDay/loading.vue'], resolve)
            }
        },
        '/oldLoading': {
            component: function(resolve) {
                require(['./components/wap/nationalDay/oldLoading.vue'], resolve)
            }
        },
        '/clock': {
            component: function(resolve) {
                require(['./components/wap/marathon/clock.vue'], resolve)
            }
        },
        '/clockRule': {
            component: function(resolve) {
                require(['./components/wap/marathon/rule.vue'], resolve)
            }
        },
        '/clockPride': {
            component: function(resolve) {
                require(['./components/wap/marathon/pride.vue'], resolve)
            }
        },
        //双11活动页面
        '/double11': {
            component: function(resolve) {
                require(['./components/wap/double11/double11.vue'], resolve)
            }
        }
    })
    var App = Vue.extend({})
    router.start(App, '#app');
})();