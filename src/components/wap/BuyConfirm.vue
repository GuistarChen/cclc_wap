<style>
    .none {
        color: #ccc;
    }
    
    .rebate {
        color: rgb(238, 90, 95);
        font-weight: normal;
        font-size: 16px;
    }
    
    .buyTitle {
        color: #333;
        font-weight: bold;
    }
    
    .baofu {
        background: url("/vue_static/img/2.png") center no-repeat;
        background-size: contain
    }
    
    .baofu2 {
        background: url("/vue_static/img/1.png") center no-repeat;
        background-size: contain
    }
    
    .baofu3 {
        background: url("/vue_static/img/yinlian_2.png") center no-repeat;
        background-size: contain
    }
    
    .box table {
        width: 94%;
        margin-left: 6%;
        line-height: 40px;
    }
    
    .box2 table {
        width: 96%;
        margin-left: 4%;
    }
    
    .box table tr {
        height: 40px;
    }
    
    .box2 table tr {
        height: 60px;
    }
    
    .chakan {
        vertical-align: middle;
        background: url("/vue_static/img/ck_03.png") left center no-repeat;
        background-size: 12px;
    }
    
    .chakan2 {
        vertical-align: middle;
        background: url("/vue_static/img/dui.png") 6px center no-repeat;
    }
    
    .chakan3 {
        vertical-align: middle;
        background: url("/vue_static/img/Group.png") 6px center no-repeat;
    }
    
    .login_btn {
        width: 20%;
        border: none;
        background: #fff;
        height: 50px;
        font-weight: bold;
        color: #333;
        text-align: left;
    }
    
    input {
        border: none;
        height: 50px;
        width: 80%
    }
    
    .bot {
        border-bottom: 1px solid #eeeeee;
    }
    
    .line {
        width: 94%;
        margin-left: 6%;
    }
    
    .box,
    .box2 {
        background: #fff;
        margin-top: 10px;
    }
    
    .back {
        display: inline-block;
        width: 40px;
        height: 40px;
        position: absolute;
        left: 20px;
        top: 18px;
        background: url("/vue_static/img/back_04.jpg") no-repeat;
    }
    
    .buy_confirm {
        background: #fff;
        line-height: 50px;
        font-size: 20px;
        text-align: center;
    }
    
    .home {
        width: 30px;
        height: 29px;
        display: inline-block;
        background: url("/vue_static/img/ic_06.jpg") no-repeat;
        position: absolute;
        right: 50px;
        top: 11px;
        z-index: 1;
    }
    
    .clear {
        clear: both;
    }
    
    .mine {
        width: 30px;
        height: 29px;
        display: inline-block;
        background: url("/vue_static/img/index_icon_03.jpg") no-repeat;
        position: absolute;
        right: 10px;
        top: 11px;
        z-index: 1;
    }
    
    .title_hb {
        font-size: 16px;
        text-align: center;
    }
    
    .hb_content {
        margin-top: 10px;
        background: #f2f2f2;
    }
    
    .hb_forbid {
        color: #ccc;
        background: #f2f2f2;
        margin-top: 10px;
    }
    
    .hb_forbid span {
        color: #ccc;
    }
    
    .hb_forbid strong {
        color: #ccc;
    }
    
    .box3 {
        padding: 5px 20px;
    }
    
    .font {
        font-size: 16px;
        color: red;
    }
    
    .font2 {
        font-size: 16px;
        color: red;
    }
    
    .hb_amount {
        font-size: 30px;
    }
    
    .date_hb {
        padding: 5px 20px;
        border-top: 1px solid #fff;
    }
    
    .fl {
        float: left
    }
    
    .fr {
        float: right;
    }
    
    .contentMain {
        width: 70%;
    }
    .shade{
        width:100%;
        background:rgba(0,0,0,0.4);
        position:fixed;
        z-index:99;
        top:0;
        bottom:0;
    }
    .shadeTip {
        width: 75%;
    height: 120px;
    margin: 0 auto;
    background: rgb(64,64,64);
    background-size: 100%;
    border-radius: 12px;
    opacity: 0.9;
    position: fixed;
    top: 30%;   
    left: 13%;
    z-index:99;
    }
    .shade .top {
            width: 30px;
    height: 70px;
    background: url("/vue_static/img/false.png") center 30px no-repeat;
    background-size: 100%;
    margin: 0 auto;
    } 
    .shade .msg{
        width: 100%;
    margin: 0 auto;
    color: #fff;
    text-align: center;
    margin-top: 15px;
    font-size: 14px;
    font-weight: 100;
    }
    .pwd_box {
        width: 90%;
        height: 140px;
        margin: 0 auto;
        background: #fff;
        border-radius: 8px;
        position: relative;
        top: 125px;
    }
    
    .box-top {
        width: 100%;
        text-align: center;
        font-size: 15px;
        height: 50px;
        line-height: 50px;
    }
    
    .box-center {
        width: 100%;
        height: 50px;
        float: left;
        margin-top: -20px;
    }
    
    .box-center .pwd {
        width: 96%;
        margin: 0 auto;
        text-align: center;
    }
    
    .box-center .pwd .pwdInput {
        width: 250px;
        height: 40px;
        background: url(/vue_static/img/bg.jpg);
        background-size: 100%;
        letter-spacing: 35.5px;
        padding-left: 17px;
    }
    
    .box-center .link {
        width: 96%;
        margin: 0 auto;
        height: 30px;
        line-height: 30px;
    }
    
    .box-center .link span {
        float: right;
        color: rgb(108, 148, 224);
    }
    
    .hide {
        display: none;
    }
    
    .box-top img {
        width: 18px;
        height: 18px;
        display: block;
        float: right;
        position: relative;
        margin-right: 20px;
        top: -35px;
    }
    
    .pwd_enter {
        width: 100%;
        height: 160px;
        position: fixed;
        bottom: 0;
    }
    
    .pwd_enter table {
        width: 100%;
        height: 100%;
        text-align: center;
        background: #fff;
        font-size: 15px;
    }
    
    .pwd_enter table tr {
        border-bottom: 1px solid rgb(211, 211, 211);
    }
    
    .pwd_enter table tr td {
        border-right: 1px solid rgb(211, 211, 211);
    }
    
    .del {
        background: url(/vue_static/img/del.png) center center no-repeat;
        background-color: rgb(211, 211, 211);
    }
    
    .mydiv-enter {
        animation: mydiv-in .3s;
    }
    
    .mydiv-leave {
        animation: mydiv-out .3s;
    }
    
    @keyframes mydiv-in {
        from {
            transform: translateX(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes mydiv-out {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(-100%);
            opacity: 0;
        }
    }
    
    .showModel {
        background: #fff;
        position: fixed;
        bottom: 0;
        top: 0;
        z-index: 9999;
        left: 0;
        width: 100%;
    }
    
    .showModel .overflow {
        -webkit-overflow-scrolling: touch;
        overflow-y: auto;
        position: absolute;
        bottom: 0;
        top: 0;
    }
</style>

<template>
    <!--抵扣券列表弹出层begin-->
    <div class="showModel" v-if="showRebate">
        <div class="overflow">
            <div class="{{amount >= rebate.buymin ? 'hb_content': 'hb_forbid'}}" v-for="rebate in rebates" v-touch:tap="chooseRebate(rebate)">
                <div class="box3">
                    <div class="contentMain fl">
                        <div style="font-size:14px;">来源：{{rebate.source}}</div>
                        <div style="font-size:12px;">{{rebate.memo}}</div>
                    </div>
                    <div class="fr">
                        <span class="font">￥<strong class="hb_amount">{{rebate.amount}}</strong></span>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="date_hb">
                    <span>{{rebate.effective_date}}天后过期</span>
                    <span class="fr">有效期：{{rebate.useendtime}}</span>
                </div>
            </div>
            <button style="margin-top: 20px; margin-bottom: 20px;" v-touch:tap="clearUseRebate" class="btn2 ">不使用抵扣红包</button>
        </div>
    </div>
    <!--加息券列表弹出层begin-->
    <div class="showModel" v-if="showRatecoupon">
        <div class="{{amount >= ratecoupon.buymin ? 'hb_content': 'hb_forbid'}}" v-for="ratecoupon in ratecoupons" v-touch:tap="chooseRatecoupon(ratecoupon)">
            <div class="box3">
                <div class="contentMain fl">
                    <div style="font-size:14px;">来源：{{ratecoupon.condition}}</div>
                    <div style="font-size:12px;">{{ratecoupon.memo}}</div>
                </div>
                <div class="fr">
                    <span class="font2"><strong class="hb_amount">{{ratecoupon.couponper}}</strong>%</span>
                </div>
                <div class="clear"></div>
            </div>
            <div class="date_hb">
                <span>{{ratecoupon.effective_date}}天后过期</span>
                <span class="fr">有效期：{{ratecoupon.expire}}</span>
            </div>
        </div>
        <button style="margin-top: 20px;" v-touch:tap="clearUseRatecoupon" class="btn2">不使用加息券</button>
    </div>
    <div class="shadeTip" v-if="showError">
        <div class="errorBox">
            <div class="top" v-touch:tap="buy"></div>
            <div class="msg">{{errorMsg}}</div>
        </div>
    </div>
    <div class="shadeTip" v-if="showSuccess">
        <div class="successBox">
            <div class="top"></div>
            <div class="msg">{{successMsg}}</div>
        </div>
    </div>
    <div class="shadeTip" v-if="showExecuting">
        <div class="executingBox">
            <div class="top"></div>
            <div class="msg">请稍后查询充值状态和订单信息</div>
        </div>
    </div>
    <!--输入交易密码弹出框begin-->
    <div class="shade" v-bind:class="{'hide': isHide}" tabindex="0">
        <div class="pwd_box">
            <div class="box-top">
                <div style="width: 60%; margin: 0 auto;">请输入交易密码</div><img src="/vue_static/img/close.png" v-touch:tap="hidePwdBox" />
            </div>
            <div class="box-center">
                <div class="pwd">
                    <input class="pwdInput" type="password" maxlength="6" v-model="tradePwd" disabled="true" tabindex="0" />
                </div>
                <div class="link">
                    <span v-link="{ path:'/resetTradePwd'}">忘记密码？</span>
                </div>
            </div>
        </div>

        <div class="pwd_enter">
            <table>
                <tr>
                    <td v-touch:tap=enter_pwd>1</td>
                    <td v-touch:tap=enter_pwd>2</td>
                    <td v-touch:tap=enter_pwd>3</td>
                </tr>
                <tr>
                    <td v-touch:tap=enter_pwd>4</td>
                    <td v-touch:tap=enter_pwd>5</td>
                    <td v-touch:tap=enter_pwd>6</td>
                </tr>
                <tr>
                    <td v-touch:tap=enter_pwd>7</td>
                    <td v-touch:tap=enter_pwd>8</td>
                    <td v-touch:tap=enter_pwd>9</td>
                </tr>
                <tr>
                    <td style="background: rgb(211, 211, 211);"></td>
                    <td v-touch:tap=enter_pwd>0</td>
                    <td class="del" v-touch:tap=delete_pwd></td>
                </tr>
            </table>
        </div>
    </div>
    <!--输入交易密码弹出框end-->
    <div class="buy_confirm">
        <a v-touch:tap="rollback" class="back"></a>确认购买
        <a v-link="{ path:'/'}" class="home"></a>
        <a v-link="{ path:'/account'}" class="mine"></a>
    </div>
    <!--抵扣券、加息券的使用-->
    <div class="box" style="position: relative; top: -9px;">
        <table>
            <tr class="bot" @click="showRebate=true">
                <td width="30%" class="buyTitle">抵扣红包</td>
                <td width="60%" v-if="defaultRebate == null" class="none">无可用抵扣红包</td>
                <td width="60%" v-if="defaultRebate == 0" class="none">不使用抵扣红包</td>
                <td width="60%" v-if="defaultRebate != null && defaultRebate != 0" style="color: rgb(238,90,95);"><span class="rebate">{{defaultRebate}}</span></td>
                <td width="10%" class="chakan"></td>
            </tr>
            <tr @click="showRatecoupon=true">
                <td class="buyTitle">加息券</td>
                <td v-if="defaultRatecoupon == null" class="none">无可用加息券</td>
                <td v-if="defaultRatecoupon == 0" class="none">不使用加息券</td>
                <td v-if="defaultRatecoupon != null && defaultRatecoupon != 0"><span class="rebate">{{defaultRatecoupon}}</span></td>
                <td class="chakan"></td>
            </tr>
        </table>
    </div>
    <!--支付网关-->
    <div class="box" style="position: relative; top: -9px;">
        <table>
            <tr class="bot">
                <td style="width:30%" class="buyTitle">余额支付</td>
                <td style="color: rgb(238,90,95); font-size: 16px;">{{(+remainAmount).toMoneyStr()}}元</td>
                <td class="chakan" style="width:10%;"></td>
            </tr>
            <tr>
                <td class="buyTitle">银行卡支付</td>
                <td style="color: rgb(238,90,95); font-size: 16px;">{{(+bankAmount).toMoneyStr()}}元</td>
                <td class="chakan" style="width:10%;"></td>
            </tr>
        </table>
    </div>
    <div class="box2" style="position: relative; top: -9px;" v-if="showGateways">
        <table v-for="gate in gateways">
            <tr class="bot" style="height: 50px;">
                <td style="width:30%"><img height="35px" :src="gatewayUrl+gate.icon"></td>
                <td style="font-size:12px; padding-left: 5px;"><span style="font-size:14px;font-weight:bold;">{{gate.name}}</span><br>单笔限额{{gate.singlelimit/10000}}万,每日限额{{gate.daylimit/10000}}万</td>
                <td :class="{ 'chakan3': gateway!=gate.type, 'chakan2': gateway==gate.type }" style="width:15%;" v-touch:tap="gateway=gate.type;"></td>
            </tr>
        </table>
    </div>
    <br>
    <button class="btn2" type="button" v-touch:tap="buy">立即支付</button>
    <p style="text-align:right; margin-top:10px;padding-right:5%;cursor:pointer;">
        <a v-link="{ path:'/changeCard'}" v-if="userInfo.bindFlag == 0"> 更换银行卡</a></p>
    <div style="height: 150px;"></div>
</template>

<script>
    export default {
    data() {
        this.CLData = CLData;
        return {
            screenWidth: document.body.clientWidth,
            showGateways: false,
            gateways: [],
            gateway: 18,
            gatewayUrl: 'http://newcclcstatic.b0.upaiyun.com/images/',
            showAuthpay: false,
            authpayUrl: '',
            debtId: this.$route.query.id,
            amount: +this.$route.query.amount,
            bankAmount: 0,
            remainAmount: 0,
            showTradePwdModal: false,
            tradePwd: '',
            selRatecouponid: null,
            selRebateid: null,
            defaultRatecoupon: null,
            defaultRebate: null,
            ratecoupons: [],
            rebates: [],
            userInfo: {},
            showRebate:false,
            showRatecoupon:false,
            isHide: true,
            showError: false,
            errorMsg : '',
            showSuccess: false,
            showExecuting:false,
            successMsg: ''
        }
    },
    components: {
        'modal': VueStrap.modal,
        'aside': VueStrap.aside
    },
    created() {
        // 数据初始化
        var self = this;
        self.fetchAccount();
    },

    ready() {
       // this.fetchAccount();
    },
    watch: {

    },
    computed: {
        earnings: function () {
            return this.debt.rate;
        }
    },
    methods: {
        // 回退到上一个页面
        rollback: function() {
            window.history.back();
        },
        // 信息展示处理函数
        popModal: function(param){
            var self = this;
            self.showError = true;
            self.errorMsg = param.str;

            setTimeout(function(){
                self.showError = false;
            }, 1200);
        },
        reCalAmount : function(){
            var amount = this.amount + this.defaultRebate;
            var balance2 = +this.userInfo.balance2;
            this.bankAmount = parseFloat(amount - balance2).toFixed(2);
            this.bankAmount = this.bankAmount < 0 ? 0:this.bankAmount;
            this.remainAmount =  amount < balance2 ? amount : balance2;
            this.remainAmount = this.remainAmount.toFixed(2);
        },
        clearUseRebate: function(){
            this.showRebate = false;
            this.selRebateid = null;
            this.defaultRebate = 0;
            this.reCalAmount();
        },
        clearUseRatecoupon: function(){
            this.showRatecoupon = false;
            this.selRatecouponid = null;
            this.defaultRatecoupon = 0;
        },
        // 选择抵扣券
        chooseRebate: function(rebate) {
            console.log(rebate);

            var self = this;
            var d_amount = rebate.amount;
            var buymin = rebate.buymin;
            var _id = rebate._id;
            var amount = self.amount;

            if(amount >= buymin) {
                self.defaultRebate = -d_amount;
                self.selRebateid = _id;
                this.showRebate = false;
                this.reCalAmount();
            } else {
                self.popModal({
                    str: '不符合抵扣券的最低使用要求'
                });
            }
            
        },
        // 选择加息券
        chooseRatecoupon: function(ratecoupon) {
            console.log(ratecoupon);
            
            var self = this;
            var name = ratecoupon.name;
            var buymin = ratecoupon.buymin;
            var _id = ratecoupon._id;
            var amount = self.amount;

            if(amount >= buymin) {
                self.defaultRatecoupon = name;
                self.selRatecouponid = _id;
                this.showRatecoupon = false;
            } else {
                self.popModal({
                    str: '不符合加息券的最低使用要求'
                });
            }
            
        },
        buy: function () {
            var self = this;
            if (this.gateway == 18) {
                this.showPwdBox();
            } else {
                CLData.buyAuthpay({
                    ratecouponid: this.selRatecouponid, rebateid: this.selRebateid,rechargeAmount:this.bankAmount,
                    debtid: this.debtId, amount: this.amount, gateway: this.gateway
                }, function (res) {
                    if(res.err){
                        self.popModal({
                            str: res.err
                        });
                        return;
                    }
                    if (res.errcode == 0 && res.buyrecid){
                        if(res.recharge_amount > 0) {
                            CLData.redirectLianAuthpay({
                                amount: self.amount,
                                buyrecid: res.buyrecid,
                                returl: CLData.url + '/!buyresult?debtid=' + self.debtId + '&id=' + res.buyrecid + '&amount=' + res.recharge_amount
                            });
                        }
                        else
                            self.$route.router.go('/buysuccess?id='+self.debtId+'&amount='+self.amount);
                    }

                });
            }
            setTimeout(function(){
                var pw = document.querySelector('.pwdInput');
                pw.blur();
                pw.focus();
                pw.select();
                pw.setSelectionRange(0, 9999);
            }, 0);
        },
        buyWithholding: function () {
            var self = this;
            if (!this.tradePwd || this.tradePwd.length < 6) {
                return;
            }
                
            CLData.buyWithholding({
                ratecouponid: this.selRatecouponid, rebateid: this.selRebateid,rechargeAmount:this.bankAmount,
                debtid: this.debtId, amount: this.amount, gateway: this.gateway, tradepwd: this.tradePwd
            }, function (res) {
                self.showSuccess = false;
                if(res.err){
                    self.popModal({
                        str: res.err
                    });
                    return;
                }
                if (res.errcode == 0 && res.buystate == 1) {
                    self.$route.router.go('/buysuccess?id='+res.buyrecid+'&amount='+self.amount);
                }
                if (res.errcode == 0 && res.buystate == 33) {
                    self.showExecuting = true;
                    setTimeout(function(){
                        self.$route.router.go('/account');
                    },1000);

                }
            })
        },
        // 获取用户信息
        fetchAccount: function () {
            var self = this;console.log(self.$route);
            CLData.fetchAccount(function (res) {
                if(res.errcode){
                    self.$route.router.go('/signIn?path='+encodeURIComponent(self.$route.path));
                } else {
                    if (res.bindFlag == 1) {
                        self.fetchGateway();
                    } else{
                        self.gateway = 11;
                    }
                    self.userInfo = res;
                    //  获取加息券和抵扣券信息
                    self.fetchEnabledRatecoupons();
                    self.fetchEnabledRebates();
                }
            });
        },
        fetchGateway: function () {
            var self = this;
            CLData.fetchGatewayList(function (res) {
                if (res && res.errcode == 0) {
                    self.gateways = res.gateway;
                    self.showGateways = true;
                }
                console.log(res);
            })
        },
        // 获取加息券数据
        fetchEnabledRatecoupons: function () {
            var self = this;
            CLData.fetchEnabledRatecoupons(self.$route.params.id, 1, 10, function (res) {
                if (res && res.errcode == 0) {
                    self.ratecoupons = res.list;

                    var ratecoupons = self.ratecoupons;
                    console.log(ratecoupons);

                    if(ratecoupons.length > 0) {
                        for(var i = 0; i < ratecoupons.length; i++) {
                            var ratecoupon = ratecoupons[i];
                            var name = ratecoupon.name;
                            var buymin = ratecoupon.buymin;
                            var _id = ratecoupon._id;
                            var amount = self.amount;

                            if(amount >= buymin) {
                                self.defaultRatecoupon = name;
                                self.selRatecouponid = _id;
                                break;
                            }
                        }
                    }
                }
            })
        },
        // 获取抵扣券数据
        fetchEnabledRebates: function () {
            var self = this;
            CLData.fetchEnabledRebates(self.$route.params.id, 1, 10, function (res) {
                if (res && res.errcode == 0) {
                    self.rebates = res.list;

                    var rebates = self.rebates;
                    console.log(rebates);

                    if(rebates.length > 0) {
                        for(var i = 0; i < rebates.length; i++) {
                            var rebate = rebates[i];
                            var d_amount = rebate.amount;
                            var buymin = rebate.buymin;
                            var _id = rebate._id;
                            var amount = self.amount;
                            if(amount >= buymin) {
                                self.defaultRebate = -d_amount;
                                self.selRebateid = _id;
                                break;
                            }
                        }
                    }
                    self.reCalAmount();
                }
            })
        },
        showPwdBox: function () {
            var self = this;
            this.isHide = false;
            this.tradePwd = '';
            this.showError = false;
        },

        hidePwdBox: function () {
            var self = this;
            this.isHide = true;
        },

        enter_pwd: function (event) {
            this.tradePwd += event.target.innerHTML;
            if(this.tradePwd.length === 6) {
                this.showSuccess=true;
                this.successMsg='请求提交中，请稍等...';
                this.buyWithholding();
                this.hidePwdBox();
            }
        },
        delete_pwd: function () {
            this.tradePwd = this.tradePwd.substring(0,this.tradePwd.length-1);
        }
    }
}

</script>