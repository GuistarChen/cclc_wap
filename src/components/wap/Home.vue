<style>
    table {
        width: 100%;
    }
    
    #top img {
        width: 100%;
        display: block;
        margin: 0;
        padding: 0;
    }
    
    body {
        font-family: Microsoft Yahei, Helvetica, sans-serif;
        background-color: #edeff5;
    }
    
    #middle {
        margin-bottom: 160px;
    }
    
    .home_main {
        -moz-border-radius: 3px;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        padding: 10px 10px 2px 10px;
        background: #fff;
        text-align: center;
        position: relative;
        overflow: hidden;
    }
    
    .fl {
        float: left;
    }
    
    .list_tips {
        width: 37px;
        position: absolute;
        right: 0;
        top: 0;
    }
    
    .home_yr {
        width: 68px;
        position: absolute;
        right: 0px;
        top: 0px;
    }
    
    .home_title {
        font-size: 16px;
        color: #333;
        line-height: 26px;
        padding-bottom: 5px;
        text-align: left;
        position: relative;
        white-space: nowrap;
        -moz-text-overflow: ellipsis;
    }
    
    .home_data {
        color: #fd693b;
        font-size: 20px;
        border-top: 1px dashed #d3d3d3;
    }
    
    .home_data table td {
        vertical-align: bottom;
    }
    
    .home_tab {
        width: 205px;
        margin: 0 auto;
        color: #747474;
        font-size: 11px;
    }
    
    .home_tab tr {
        height: 19px;
    }
    
    .orangeBtn {
        display: block;
        width: 100%;
        height: 31px;
        background: #ff5824;
        color: #fff;
        font-size: 14px;
        line-height: 31px;
        text-align: center;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        border-radius: 5px;
        margin: 0 auto;
    }
    
    .home_icon {
        display: inline-block;
        width: 23.6%;
        padding-top: 52px;
        padding-bottom: 4px;
        text-align: center;
        background: url("/vue_static/img/index_04.png") center 6px no-repeat;
        background-size: 34px;
        color: #333;
    }
    .yaoqing_pride {
        background-position: center -260px;
    }
    .mane_pride {
        background-position: center -82px;
    }
    
    .paiming_pride {
        background-position: center -168px;
    }
    
    .menu_contain {
        width: 100%;
        background: #fff;
        font-size: 16px;
    }
    
    .menu {
        width: 100%;
        margin-top: 10px;
        font-size: 16px;
    }
    
    .mar_bg {
        height: 32px;
        margin-left: 50px;
        line-height: 34px;
        background-color: #fff;
    }
    
    .rate {
        font-size: 45px;
        line-height: 45px;
    }
    
    .list_rate_home {
        width: 28%;
        font-size: 30px;
        line-height: 40px;
        height: 40px;
        text-align: left;
    }
    
    .day {
        color: #fd3a27;
        font-size: 25px;
    }
    
    .amount {
        font-size: 25px;
        color: #fd3a27;
    }
    
    .data_title {
        color: #b1b1b1;
        font-size: 13px;
    }
    
    .home_btn {
        width: 100%;
        margin: 0 auto;
        border: none;
        background: #ff3b4c;
        border-radius: 6px;
        height: 46px;
        font-size: 16px;
        color: #fff;
    }
    
    .home_data_list table {
        text-align: left;
    }
    
    .limit_home {
        line-height: 20px;
        color: #a5a5a5;
    }
    
    .data_list_home {
        margin: 5px 0;
        background: #fff;
        overflow: hidden;
    }
    
    .data_list_home:hover {
        cursor: pointer;
    }
    
    .hotLine {
        background: url("/vue_static/img/hotl_13.jpg") 10px center no-repeat #fff;
        margin: 5px 0;
        background-size: 23px;
        height: 32px;
        color: #929292;
    }
    
    list_right {
        width: 30%;
        float: left;
        position: relative;
    }
    
    .progress_circle {
        width: 62px;
        height: 62px;
        position: absolute;
        border-radius: 50%;
        background: #dbdbdb;
        right: 24px;
        top: 0;
    }
    
    .diya2 {
        background: url("/vue_static/img/ee_03.png") 26% 4px no-repeat;
        line-height: 20px;
        padding-top: 4px;
        color: #929292;
        text-align: center;
        display: inline-block;
    }
    
    .pie_left {
        width: 62px;
        height: 62px;
        position: absolute;
        top: 0;
        left: 0;
    }
    
    .mask {
        width: 58px;
        height: 58px;
        border-radius: 50%;
        left: 2px;
        top: 2px;
        background: #fff;
        position: absolute;
        text-align: center;
        line-height: 56px;
        font-size: 13px;
    }
    
    .circleleft {
        display: block;
        width: 62px;
        height: 62px;
        background: #ff511c;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        -webkit-transform: rotate(54deg);
        transform: rotate(54deg);
    }
    
    .list_line {
        border-bottom: 1px solid #ccc;
        padding: 5px 10px;
        font-size: 16px;
    }
    
    .list_line {
        padding: 10px 10px;
    }
    
    .swiper-container {
        width: 100%;
        height: 112px;
        margin: 0 auto;
        position: relative;
        overflow: hidden;
        z-index: 1;
    }
    
    .swiper-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        -ms-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transition-property: -webkit-transform;
        -moz-transition-property: -moz-transform;
        -o-transition-property: -o-transform;
        -ms-transition-property: -ms-transform;
        transition-property: transform;
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
    }
    
    .swiper-slide img {
        width: 100%;
    }
    
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        -ms-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-flex-shrink: 0;
        -ms-flex: 0 0 auto;
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        position: relative;
    }
    
    .swiper-container-horizontal>.swiper-pagination {
        bottom: 4px;
        left: 0;
        width: 100%;
    }
    
    .swiper-pagination {
        position: absolute;
        text-align: center;
        -webkit-transition: 300ms;
        -moz-transition: 300ms;
        -o-transition: 300ms;
        transition: 300ms;
        -webkit-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
        -o-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        z-index: 10;
    }
    
    .debts_mark_xinshou {
        background: url("/vue_static/img/tips.jpg") no-repeat;
        width: 80px;
        height: 24px;
        transform: rotate(30deg);
        display: inline-block;
        padding-left: 34px;
        line-height: 20px;
        color: #fff;
        font-size: 12px;
        position: absolute;
        right: -14px;
        top: 0;
    }
    
    .debts_mark_jiaxi {
        background: #fdcf00;
        width: 80px;
        height: 20px;
        transform: rotate(30deg);
        display: inline-block;
        padding-left: 34px;
        line-height: 20px;
        color: #fff;
        font-size: 12px;
        position: absolute;
        right: -14px;
        top: 0;
    }
    
    .debts_mark_huodong {
        background: #ff2f46;
        width: 80px;
        height: 20px;
        transform: rotate(30deg);
        display: inline-block;
        padding-left: 34px;
        line-height: 20px;
        color: #fff;
        font-size: 12px;
        position: absolute;
        right: -14px;
        top: 0;
    }
    
    .debts_mark_xinshou2 {
        background: url("/vue_static/img/tips.jpg") no-repeat;
        width: 80px;
        height: 24px;
        transform: rotate(30deg);
        display: inline-block;
        padding-left: 34px;
        line-height: 20px;
        color: #fff;
        font-size: 12px;
        position: absolute;
        right: -20px;
        top: -8px;
    }
    
    .debts_mark_jiaxi2 {
        background: #fdcf00;
        width: 80px;
        height: 20px;
        transform: rotate(30deg);
        display: inline-block;
        padding-left: 34px;
        line-height: 20px;
        color: #fff;
        font-size: 12px;
        position: absolute;
        right: -20px;
        top: -8px;
    }
    
    .debts_mark_huodong2 {
        background: #ff2f46;
        width: 80px;
        height: 20px;
        transform: rotate(30deg);
        display: inline-block;
        padding-left: 34px;
        line-height: 20px;
        color: #fff;
        font-size: 12px;
        position: absolute;
        right: -20px;
        top: -8px;
    }
    
    .mark_box {
        clip: rect(0, 20, 20, 20)
    }
    
    .memo {
        background: url("/vue_static/img/memo.jpg") no-repeat;
        width: 80px;
        height: 20px;
        font-size: 12px;
        line-height: 20px;
        display: inline-block;
        color: #fff;
        padding-left: 14px;
        text-align: center;
    }
    
    .line-bg {
        width: 100%;
        margin: 0 auto;
        background: rgb(239, 239, 239);
        height: 4px;
        border-radius: 2px;
        margin-top: 15px;
        margin-bottom: 15px;
    }
    
    .line-inside {
        height: 100%;
        background: rgb(247, 205, 70);
        border-radius: 2px;
    }
</style>

<template>
    <div id="app">

        <div id="top">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="adver in sections_data.advers">
                        <a :href="adver.url">
                            <img :src="root_url + adver.pic">
                        </a>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
        <div class="menu_contain">
            <a class="home_icon" target="_blank" href="https://www.cclc.co/activity/earnings1">新手有礼</a>
            <a class="home_icon mane_pride" v-link="{path:'/fullAward'}">满额奖</a>
            <a class="home_icon paiming_pride" v-link="{path:'/rankAward'}">排名奖</a>
            <a class="home_icon yaoqing_pride" v-touch:tap="goInvite">邀请有奖</a>
        </div>
        <div class="hotLine" v-if="stat_data.showStat">
            <marquee class="mar_bg" scrollamount="2" id="marquee">累计理财额： {{(+stat_data.invest).toMoneyStr()}}元；&nbsp;&nbsp;注册人数： {{(+stat_data.register).toMoneyStr()}}个；&nbsp;&nbsp;今日成交量：
                {{(+stat_data.todayInvest).toMoneyStr()}}元；&nbsp;&nbsp;累计为城理人创造收益： {{(+stat_data.interest).toMoneyStr()}}元；&nbsp;&nbsp;</marquee>
        </div>
        <div id="middle">
            <div class="home_main" style="position:relative;" v-if="debts_data.showDebt">
                <div style="position:absolute;left:0;top:0;" class="list_tips" id="newdebt"></div>
                <div class="home_yr"></div>
                <div class="home_title" id="title">{{debts_data.new_debt.title}}<span :class="getTypeName2(debts_data.new_debt)">{{getDoings(debts_data.new_debt)}}</span>
                    <span class="memo" v-if="!!debts_data.new_debt.title_memo">{{debts_data.new_debt.title_memo}}</span>
                </div>
                <div class="home_data clearfix">
                    <table style="vertical-align:bottom;" width="100%">
                        <tr style="height:10px;"></tr>
                        <tr>
                            <td width="40%" style="text-align: left;"><span class="rate">{{(debts_data.new_debt.rate - debts_data.new_debt.increase_rate).toFixed(2)}}</span>%{{debts_data.new_debt.increase_rate
                                ? ('+'+debts_data.new_debt.increase_rate + '%') : ''}}</td>
                            <td width="30%"><span class="day">{{debts_data.new_debt.period}}</span>{{debts_data.new_debt.byday=='31'?'天':'月'}}</td>
                            <td width="30%" style="text-align: right;"><span class="amount">{{debts_data.new_debt.buymin}}</span>元</td>
                        </tr>
                        <tr>
                            <td class="data_title" style="text-align: left;">预期年化</td>
                            <td class="data_title">理财期限</td>
                            <td class="data_title" style="text-align: right;">起购金额</td>
                        </tr>
                        <tr>
                            <td colspan="3">
                                <div class="line-bg">
                                    <div class="line-inside" v-bind:style="{width: parseFloat((debts_data.new_debt.inboxtmp/debts_data.new_debt.amount*100).toFixed(2)) + '%'}"></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3"><a v-touch:tap="goDebt(debts_data.new_debt.id)"><button class="home_btn">立即购买</button></a></td>
                        </tr>
                        <tr style="height:14px;">
                            <td colspan="3">
                                <div><span class="diya2"></span房产抵质押担保</div></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="home_data_list" v-if="debts_data.showDebt">
                <div class="data_list_home" v-for="debt in debts_data.debts">
                    <table width="100%" v-touch:tap="goDebt(debt.id)">
                        <tr>
                            <td style="position:relative;" class="list_line" colspan="3">{{debt.title.length>15? debt.title.substr(0,20)+'...': debt.title}}                    
                            <span :class="getTypeName(debt)">{{getDoings(debt)}}</span><span class="memo" v-if="!!debt.title_memo">{{debt.title_memo}}</span></td>
                        </tr>
                        <tr style="height:5px;"></tr>
                        <tr>
                            <td style="width:40%; padding-left: 10px; text-algin:center;color:#ff3b4c;">
                                <span class="list_rate_home" style="color: #ff3b4c;" v-if="debt.state == 10 || debt.state == 2">{{(debt.rate - debt.increase_rate).toFixed(1)}}</span>
                                <span class="list_rate_home" style="color: #000;" v-else>{{(debt.rate - debt.increase_rate).toFixed(1)}}</span>%
                                {{debt.increase_rate ? ('+'+debt.increase_rate + '%') : ''}}
                                <p style="line-height:22px;color:#ccc;height:30px;">预期年化收益 </p>
                            </td>
                            <td class="limit_home" rowspan="2">期限<span style="color:#ff3b4c;" v-if="debt.state == 10 || debt.state == 2">{{debt.period}}</span>
                                <span style="color:#000;" v-else>{{debt.period}}</span>{{debt.byday=='31'?'天':'月'}}<br>{{debt.buymin}}元起购</td>
                            <td style="position:relative; text-align: right;" rowspan="2">
                                <div class="progress_circle">
                                    <div class="pie_left">
                                        <div class="circleleft" :style="clipCircle(debt)" v-if="debt.state == 10"></div>
                                    </div>
                                    <div class="mask"><span style="color:#ff3b4c;font-size:16px;" v-if="debt.state == 10 || debt.state == 2">
                                        {{(debt.inboxtmp / debt.amount * 100).toFixed(1)}}%
                                    </span>
                                        <span v-if="debt.state == -6">已撤销</span>
                                        <span v-if="debt.state == 11">已售罄</span>
                                        <span v-if="debt.state == 20">还款中</span>
                                        <span v-if="debt.state == 22">已还款</span>
                                    </div>
                                </div>
                            </td>
                        </tr>

                    </table>
                    </div>
                </div>
                <div id="footer">
                    <ul class="menu boxed clearfix">
                        <li v-link="{ path:'/'}">
                            <a style="padding-top:20px;"><img style="width:28px;" src="/vue_static/img/ic_06.png">
                                <p>首页</p>
                            </a>
                        </li>
                        <li v-link="{path:'/debts'}">
                            <br><br>
                            <a style="color: #ffffff;">理财</a>
                        </li>
                        <li v-link="{path:'/account'}">
                            <a style="padding-top:20px;"><img style="width:28px;" src="/vue_static/img/index_icon_03.png">
                                <p>我的</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
</template>

<script>
import '../../../vue_static/css/swiper-3.3.1.min.css';
import '../../../vue_static/js/swiper-3.3.1.min.js';
export default {
    data() {
        this.CLData = CLData;
        return {
            root_url: '',
            sections_data: {
                advers: [],
                showAdver: false
            },
            stat_data: {
                interest: 0,
                todayInvest: 0,
                register: 0,
                invest: 0,
                showStat: true
            },
            debts_data: {
                debts: [],
                new_debt:{},
                showDebt: false
            }
        }
    },
    components: {
        'carousel': VueStrap.carousel,
        'slider': VueStrap.slider,      
    },
    ready(){    
        
    },
    created() {
        var self = this;
        var sections_data = self.sections_data;
        var stat_data = self.stat_data;
        var debts_data = self.debts_data;
        CLData.fetchSections('mob_home_banner', function (res) {
            if (!res.err) {
                sections_data.advers = res.list;
                sections_data.showAdver = true;
                setTimeout(() => {
                    new Swiper('.swiper-container',{
                        autoplay : 3000,
                        loop : true,
                        pagination : '.swiper-pagination'
                    });
                }, 0);
            }
        });
        CLData.fetchStat(function(res) {
            if (!res.err) {
                self.stat_data = res.data;
                self.stat_data.showStat = true;
            }
        });

        CLData.fetchDebtByKey('one', function (res) {
               if(!res.err && res.list && res.list.length>0){
                    debts_data.new_debt=res.list[0];
                    res.list.shift();
                    debts_data.debts = res.list;
                    debts_data.showDebt = true;
                }
        });
    },
    methods:{
        // 理财信息页跳转
        goDebt: function(debtId) {
            var self = this;
            var ua = window.navigator.userAgent.toLowerCase();
            if(ua.match(/CCLC_Android|cclc_ios/i)){
                window.location.href='cclc://www.cclc.co/cclc?action=projectdetails&debtid=' + debtId;
            } else {
                self.$route.router.go('/debt/' + debtId);
            }
        },
        // 计算圆弧百分比
        clipCircle: function(debt) {
            return 'clip:rect(0,'+(debt.inboxtmp / debt.amount ) * 62+'px,auto,0);'
        },
        // 计算活动表字段
        getDoings: function(debt) {
            var doing = '';
            if(debt.type == 33) {
                doing = '新手';
            } else if(debt.type == 35) {
                doing = '活动';
            } else if(+debt.increase_rate > 0) {
                doing = '加息';
            }
            return doing;
        },
        // 根据类型返回相应类名
        getTypeName: function(debt) {
            var typeName = '';
            if(debt.type == 33) {
                typeName = 'debts_mark_xinshou';
            } else if(debt.type == 35) {
                typeName = 'debts_mark_huodong';
            } else if(+debt.increase_rate > 0) {
                typeName = 'debts_mark_jiaxi';
            }
            return typeName;
        },
        getTypeName2: function(debt) {
            var typeName = '';
            if(debt.type == 33) {
                typeName = 'debts_mark_xinshou2';
            } else if(debt.type == 35) {
                typeName = 'debts_mark_huodong2';
            } else if(+debt.increase_rate > 0) {
                typeName = 'debts_mark_jiaxi2';
            }
            return typeName;
        },
        // 跳转到邀请页面
        goInvite: function() {
            var self = this;
            CLData.fetchAccount(function(res) {
                if(res.errcode || !res.mobile) {
                    self.$route.router.go('/signIn?sourceUrl=/&gotoUrl=share');
                } else {
                    self.$route.router.go('/share');
                }
            });
        }
    }
}
</script>