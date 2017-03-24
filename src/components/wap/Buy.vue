<style>
    .chakan5 {
        display: inline-block;
        background: url("/vue_static/img/dui2.png") 0 4px no-repeat;
        line-height: 30px;
        padding-left: 24px;
        margin-left: 5%;
        margin-top: 6px;
    }
    
    input {
        border: none;
        height: 50px;
        width: 70%
    }
    
    .login_btn {
        width: 26%;
        border: none;
        background: #fff;
        height: 50px;
        font-weight: bold;
        color: #333;
        text-align: left;
    }
    
    .bot {
        border-bottom: 1px solid #eeeeee;
    }
    
    .line {
        width: 94%;
        margin-left: 6%;
    }
    
    .box {
        background: #fff;
        margin-top: 10px;
    }
    
    .buy_title {
        padding: 5px 0;
        text-align: left;
        font-weight: normal;
        font-size:18px;
    }
    
    .buyleft {
        border-left: 1px solid #83b1ff;
        width: 10%;
    }
    
    .top_buy{
        background:#4a82e1;
        padding:0 20px 20px 10px;
        color:#fff;
        
    }
    .top_buy span {
        color: #83b1ff;
    }
    
    .top_buy table {
        width: 100%;
    }
    
    .top_buy table tr {
        margin: 15px 0;
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
    
    .fu_head2 {
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
    }
    
    .mine {
        width: 30px;
        height: 29px;
        display: inline-block;
        background: url("/vue_static/img/index_icon_03.jpg") no-repeat;
        position: absolute;
        right: 10px;
        top: 11px;
    }
    .buybox{
        background:#efeff4;
    }
</style>
<template>
    <div class="fu_head2">
        <a v-touch:tap="rollback" class="back"></a>购买
        <a v-link="{ path:'/'}" class="home"></a>
        <a v-link="{ path:'/account'}" class="mine"></a>
    </div>
    <div class="top_buy">
        <div class="buy_title">{{debt.title}}</div>
        <table>
            <tr>
                <td><span>预期年化：</span>{{debtRate}}%</td>
                <td class="buyleft"></td>
                <td><span>理财期限：</span>{{debt.period}}{{CLData.formatType(debt.byday)}}</td>
            </tr>
            <tr style="height:10px;"></tr>
            <tr>
                <td><span>剩余金额：</span>{{(debt.amount-debt.inboxtmp).toMoneyStr()}}元</td>
                <td class="buyleft"></td>
                <td><span>起购金额：</span>{{debt.buymin}}元</td>
            </tr>
                <tr style="height:10px;"></tr>
            <tr>
                <td><span>可购金额：</span>{{(debt.amount-debt.inboxtmp).toMoneyStr()}}元</td>
            </tr>
        </table>
    </div>
    <div class="buybox">
    <div class="box">
        <div class="line bot">
            <button class="login_btn" type="button" disabled="disabled">购买金额</button><input type="tel" v-model="buyamount" placeholder="最多可购{{(+debt.buymax).toMoneyStr()}}元"><br>
        </div>
        <div class="line bot">
            <button class="login_btn" type="button" disabled="disabled">预期收益</button><span style="line-height:50px;">{{earnings}}元</span><br>
        </div>
    </div>
    <div class="chakan5"><span></span>我同意<span style="color:#49a6ff;">《城城理财协议》</span></div>
    <br><br>
    <button class="btn2" v-touch:tap="buy">立即支付</button>
    </div>
    <div class="errorBox" v-if="showError">
        <div class="top"></div>
        <div class="msg">{{errorMsg}}</div>
    </div>
</template>

<script>
export default {
    data() {
        this.CLData = CLData;
        return {
            alert_sucess:{title:'温馨提示',msg:'',alertSuccess:false,tick:1000},
            alert_failed:{title:'温馨提示',msg:'',alertFailed:false,tick:1000},
            debtId: this.$route.params.id,
            debt: {buymax:0,amount:0,inboxtmp:0},
            buyamount: '',
            showError: false,
            errorMsg : ''
        }
    },
    components: {
        'alert': VueStrap.alert
    },
    ready() {
        this.fetchDebt(this.debtId);
    },
    watch: {
        buyamount: function (val, oldVal) {
            if (isNaN(val)) {
                this.buyamount = +oldVal;
            }
        }
    },
    computed: {
        earnings: function () {
            var self = this;
            var debt = self.debt;
            var earning = 0;

            if(tool.isEmptyString(debt.byday)) {
                return earning;
            }

            if(debt.byday == 31) {
                // 天标
                earning = debt.rate / 100 * self.buyamount * debt.period / 365;
            } else {
                // 月标
                earning = debt.rate / 100 * self.buyamount * debt.period / 12;
            }

            return earning.toFixed(2);
        },
        debtRate: function() {
            var self = this;
            var debtRate = 0;
            debtRate = (+self.debt.rate).toFixed(1);
            if(isNaN(debtRate)) {
                debtRate = '';
            }
            return debtRate;
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
        fetchDebt: function(id) {
            var self = this;
            CLData.fetchDebt(id, function (res) {
                if(res.err) {
                    self.$route.router.go('/debts');
                }
                self.debt = res;
            })
        },
        buy: function () {
            var self = this;
            var buyamount = +self.buyamount;

            if(!tool.regCheck(buyamount, 'positiveReg')){
                self.buyamount = self.debt.buymin;
                self.popModal({
                    str: '请输入合法金额'
                });
                return;
            }

            if(buyamount < self.debt.buymin) {
                self.buyamount = self.debt.buymin;
                self.popModal({
                    str: '输入金额小于最低购金额！'
                });
                return;
            }

            if(buyamount > self.debt.buymax) {
                self.buyamount = self.debt.buymax;
                self.popModal({
                    str: '输入金额超出可购金额！'
                });
                return;
            }

            self.$route.router.go('/buyconfirm?id=' +self.debt.id + '&amount=' + self.buyamount);
        }
    }
}
</script>