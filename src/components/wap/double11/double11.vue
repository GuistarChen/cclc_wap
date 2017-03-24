<style>
    .f-write {
        color: #fff;
    }
    
    .f-yellow {
        color: #fdb063;
    }
    
    .f-black {
        color: #000;
    }
    
    .fl {
        float: left;
    }
    
    .fr {
        float: right;
    }
    
    .clear {
        clear: both;
    }
    
    .double11 {
        width: 100%;
        background: #493270;
    }
    
    .double11-banner {
        width: 100%;
    }
    
    .double11-content {
        width: 100%;
        background: #493270;
        box-sizing: border-box;
        padding-bottom: 40px;
    }
    
    .double11-content-time {
        width: 100%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        color: #fba00a;
    }
    
    .double11-debt-box {
        width: 90%;
        margin: 0 auto;
        background: #fd2c53;
        border-radius: 5px;
    }
    
    .double11-content-debt {
        width: 96%;
        margin: 0 auto;
    }
    
    .double11-content-debt-banner {
        width: 100%;
        margin-top: 20px;
    }
    
    .double11-content-debt-top {
        width: 100%;
        background: #fd2c53;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        padding: 20px;
    }
    
    .double11-content-debt-bottom {
        width: 100%;
        background: #fd2c53;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        padding: 20px;
    }
    
    .double11-content-debt-top .debt-title,
    .double11-content-debt-bottom .debt-title {
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #d92143;
        background: url(/vue_static/double11_img/11_06.png) no-repeat right center;
        background-size: 50px 20px;
    }
    
    .double11-content-debt-top .debt-rate,
    .double11-content-debt-bottom .debt-rate {
        height: 50px;
        line-height: 50px;
        font-size: 36px;
        text-align: center;
        margin-top: 20px;
    }
    
    .double11-content-debt-top .rate-label,
    .double11-content-debt-bottom .rate-label {
        text-align: center;
        font-size: 14px;
        color: #82172a;
        margin-bottom: 20px;
    }
    
    .double11-content-debt-top .parent-bar,
    .double11-content-debt-bottom .parent-bar {
        margin: 0 auto;
        width: 96%;
        height: 8px;
        background: #bb1736;
        border-radius: 4px;
    }
    
    .double11-content-debt-top .child-bar,
    .double11-content-debt-bottom .child-bar {
        width: 30%;
        height: 100%;
        background: #fdb216;
        border-radius: 4px;
    }
    
    .double11-content-debt-top .bar-label,
    .double11-content-debt-bottom .bar-label {
        width: 96%;
        margin: 5px auto;
        color: #82172a;
        margin-bottom: 20px;
        font-size: 13px;
    }
    
    .double11-content-debt-top .debt-label,
    .double11-content-debt-bottom .debt-label {
        width: 96%;
        margin: 0 auto;
        color: #82172a;
        font-size: 14px;
        margin-bottom: 15px;
    }
    
    .double11-content-debt-top .debt-label div,
    .double11-content-debt-bottom .debt-label div {
        display: block;
    }
    
    .double11-content-debt-top .buy-btn,
    .double11-content-debt-bottom .buy-btn {
        width: 96%;
        margin: 0 auto;
        height: 50px;
        background: url(/vue_static/double11_img/11_10.jpg);
        background-size: 100% 100%;
        text-align: center;
        line-height: 50px;
        color: #872e01;
        margin-bottom: 20px;
    }
    
    .double11-content-debt-top .except-btn,
    .double11-content-debt-bottom .except-btn {
        width: 96%;
        margin: 0 auto;
        height: 50px;
        background: url(/vue_static/double11_img/ele_btn.png);
        background-size: 100% 100%;
        text-align: center;
        line-height: 50px;
        color: #fff;
        margin-bottom: 20px;
    }
    
    .double11-content .debt-split {
        width: 100%;
        height: 20px;
        margin: 0 auto;
        background: #fd2c53;
        border-top: 1px solid #d92143;
    }
    
    .double11-content .debt-split div {
        width: 20px;
        height: 20px;
        border-radius: 10px;
        background: #493270;
        position: relative;
        top: -10px;
    }
    
    .double11-rule {
        width: 100%;
        background: #533f74;
        padding-top: 40px;
        padding-bottom: 70px;
    }
    
    .double11-rule .rule-title {
        width: 100%;
        margin-bottom: 20px;
    }
    
    .double11-rule .item {
        width: 90%;
        margin: 0 auto;
        background: url(/vue_static/double11_img/11_18.png) no-repeat left top;
        background-size: 15px 15px;
        color: #fff;
        box-sizing: border-box;
        padding-left: 30px;
        font-size: 12px;
        padding-bottom: 20px;
    }
    
    .double11-rule .bottom {
        width: 90%;
        margin: 0 auto;
        margin-top: 40px;
        font-size: 14px;
        color: #fff;
    }
    
    .double11-rule .tel {
        margin-left: 5%;
        width: 200px;
        height: 40px;
        border: 1px solid #e757ff;
        color: #e757ff;
        text-align: center;
        line-height: 40px;
        border-radius: 5px;
        font-size: 15px;
        font-weight: bold;
        margin-top: 15px;
        background: url(/vue_static/double11_img/11_22.png) no-repeat 20px center;
        background-size: 20px 20px;
        padding-left: 20px;
    }
</style>

<template>
    <div class="double11">
        <img class="double11-banner" :src="cdn_url + '11_01.png'"/>
        <div class="double11-content">
            <div class="double11-content-time">2016.11.11 09:00~11.15 23:59</div>
            <img class="double11-content-debt-banner" :src="cdn_url + '11_03.png'"/>
                <div class="double11-debt-box">
                    <div class="double11-content-debt" v-if="isShow9 || !(isShow6 && isShow9)">
                        <div class="double11-content-debt-top">
                            <div class="debt-title">{{debt_9.title}}</div>
                            <div class="debt-rate">
                                <span class="f-write">{{parseFloat(((debt_9.rate - 0.022) * 100).toFixed(1))}}%</span>
                                <span class="f-yellow">+2.2%</span>
                            </div>
                            <div class="rate-label">年化利率</div>
                            <div class="parent-bar">
                                <div class="child-bar" v-bind:style="{width: parseFloat((debt_9.inbox / debt_9.amount * 100).toFixed(2)) + '%'}"></div>
                            </div>
                            <div class="bar-label">当前进度：{{parseFloat((debt_9.inbox / debt_9.amount * 100).toFixed(2))}}%</div>
                            <div class="debt-label">
                                <div class="fl">理财期限：<span class="f-black">9个月</span></div>
                                <div class="fr">可投金额：<span class="f-black">{{debt_9.amount-(debt_9.inboxTmp?debt_9.inboxTmp:debt_9.inbox)}}</span></div>
                                <div class="clear"></div>
                            </div>
                            <div class="buy-btn" v-touch:tap="goDebt9(debt_9.id)" v-if="isExist9 && isShow9">立即购买</div>
                            <div class="except-btn" style="margin-bottom: 10px;" v-if="!isExist9">敬请期待</div>
                            <div class="except-btn" style="margin-bottom: 10px;" v-if="isExist9 && !isShow9">已售罄</div>
                        </div>
                    </div>
                    <div class="debt-split" v-if="!((isShow6 && !isShow9) || (!isShow6 && isShow9))">
                        <div class="fl" style="left: -10px;"></div>
                        <div class="fr" style="right: -10px;"></div>
                    </div>
                    <div class="double11-content-debt" v-if="isShow6">
                        <div class="double11-content-debt-bottom">
                            <div class="debt-title">{{debt_6.title}}</div>
                            <div class="debt-rate">
                                <span class="f-write">{{parseFloat(((debt_6.rate - 0.022) * 100).toFixed(1))}}%</span>
                                <span class="f-yellow">+2.2%</span>
                            </div>
                            <div class="rate-label">年化利率</div>
                            <div class="parent-bar">
                                <div class="child-bar" v-bind:style="{width: parseFloat((debt_6.inbox / debt_6.amount * 100).toFixed(2)) + '%'}"></div>
                            </div>
                            <div class="bar-label">当前进度：{{parseFloat((debt_6.inbox / debt_6.amount * 100).toFixed(2))}}%</div>
                            <div class="debt-label">
                                <div class="fl">理财期限：<span class="f-black">6个月</span></div>
                                <div class="fr">可投金额：<span class="f-black">{{debt_6.amount-(debt_6.inboxTmp?debt_6.inboxTmp:debt_6.inbox)}}</span></div>
                                <div class="clear"></div>
                            </div>
                            <div class="buy-btn" style="margin-bottom: 10px;" v-touch:tap="goDebt6(debt_6.id)" v-if="isExist6 && isShow6">立即购买</div>
                            <div class="except-btn" style="margin-bottom: 10px;" v-if="!isExist6">敬请期待</div>
                            <div class="except-btn" style="margin-bottom: 10px;" v-if="!isExist6 && !isShow6">已售罄</div>
                        </div>
                    </div>
                </div>
        </div>
        <div class="double11-rule">
            <img class="rule-title" :src="cdn_url + '11_15.jpg'"/>
            <div class="item">活动期间，活动标预期年化+双1.1%(即+2.2%)，购买后不可转债；</div>
            <div class="item">活动标不限量，售罄即发；</div>
            <div class="item">本次活动加息部分将在产品年化利率上体现，活动加息金额由城城理财网承担；</div>
            <div class="item">本活动最终解释权归城城理财所有；</div>
            <div class="bottom">如对活动有任何疑问，请致电客服热线：</div>
            <a href="tel:4007110018"><div class="tel">400-711-0018</div></a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                cdn_url: CLData.getCDN_URL() + '/vue_static/double11_img/',
                debt_6: {
                    title: '【优资汇】15010三期006',
                    rate: 0.16,
                    inbox: 0,
                    amount: 500000,
                    inboxTmp: 0
                },
                debt_9: {
                    title: '【优资汇】15010三期006',
                    rate: 0.166,
                    inbox: 0,
                    amount: 500000,
                    inboxTmp: 0
                },
                isExist6: false,
                isExist9: false,
                isShow6: true,
                isShow9: true
            }
        },

        ready() {
            this.getElevenDebt();
        },

        methods: {
            getElevenDebt: function() {
                var self = this;
                CLData.getElevenDebt(function(res) {
                    if (res.debt_6) {
                        self.debt_6 = res.debt_6;
                        self.isExist6 = true;
                        if (res.debt_6.state != 10) {
                            self.isShow6 = false;
                        }
                    }
                    if (res.debt_9) {
                        self.debt_9 = res.debt_9;
                        self.isExist9 = true;
                        if (res.debt_9.state != 10) {
                            self.isShow9 = false;
                        }
                    }
                });
            },

            goDebt6: function(debtId) {
                var self = this;
                var ua = window.navigator.userAgent.toLowerCase();
                if (ua.match(/CCLC_Android|cclc_ios/i)) {
                    window.location.href = 'cclc://www.cclc.co/cclc?action=projectdetails&debtid=' + debtId;
                } else {
                    self.$route.router.go('/debt/' + debtId);
                }
            },

            goDebt9: function(debtId) {
                var self = this;
                var ua = window.navigator.userAgent.toLowerCase();
                if (ua.match(/CCLC_Android|cclc_ios/i)) {
                    window.location.href = 'cclc://www.cclc.co/cclc?action=projectdetails&debtid=' + debtId;
                } else {
                    self.$route.router.go('/debt/' + debtId);
                }
            }
        }
    }
</script>