<style>
    .b {
        border: 1px solid;
    }
    body {
        background-color: #efeff4;
        font-family: Helvetica, sans-serif;
    }
    
    .suck {
        background: url("/vue_static/img/safe.png") 0 1px no-repeat;
        background-size:20px;
        line-height: 26px;
        padding: 5px 0 5px 24px;
        text-align: center;
        color:#929292;
    }
    
    p {
        text-align: center;
    }
    
    .diya {
        margin-top: 5px;
        background: #fff;
    }
    
    .diya table td {
        padding: 10px;
    }
    
    .line {
        border-bottom: 1px solid #ebebeb;
    }
    
    .lie {
        border-left: 1px solid #ebebeb;
    }
    
    .diya table {
        width: 100%;
        text-align: center;
    }
    
    .de {
        background: url("/vue_static/img/detail_03.jpg") 0 7px no-repeat;
        padding-left: 20px;
        color: #a0a0a0;
    }
    
    .de span {
        color: #767676;
    }
    
    .pr_main li {
        line-height: 24px;
        font-size: 16px;
    }
    
    .pr_main {
        background: #fff;
        padding: 10px 10px 10px 20px;
    }
    
    .pr_main span {
        font-weight: bold;
    }
    
    .back {
        display: inline-block;
        width: 40px;
        height: 40px;
        position: absolute;
        left: 20px;
        top: 16px;
        background: url("/vue_static/img/back.png")  no-repeat;
        background-size:20px;
    }
      
    .home {
        width: 30px;
        height: 29px;
        display: inline-block;
        background: url("/vue_static/img/ic_06.png") no-repeat;
        background-size:28px;
        position: absolute;
        right: 50px;
        top: 11px;
    }
      .mine {
        width: 30px;
        height: 29px;
        display: inline-block;
        background: url("/vue_static/img/index_icon_03.png") no-repeat;
        background-size:28px;
        position: absolute;
        right: 10px;
        top: 11px;
    }
    h2 {
        text-align: center;
        padding: 20px 0;
    }
    
    .debt_head {
        background: #fff;
        line-height: 50px;
        font-size: 20px;
        text-align: left;
        padding-left: 60px;
        margin: 0;
    }
    
    .debt_data_list {
        margin: 5px 0;
        background: #fff;
        padding: 5px 20px 10px 20px;
        overflow: hidden;
    }
    
    .debt_data_list table {
        width: 100%;
    }
    .buyAmount {
        color: #ff3b4c;
        font-size: 20px;
        width: 30%;
        text-align: right;
    }
    
    .buyTime {
        color: #ccc;
        font-size: 12px;
    }
    
    .hide {
        display: none;
    }
    
    .line-bg {
        width: 100%;
        margin: 0 auto;
        background: rgb(239, 239, 239);
        height: 4px;
        border-radius: 2px;
        margin-top: 15px;
        margin-bottom: 10px;
        margin-left: 6px;
    }
    
    .line-inside {
        height: 100%;
        background: rgb(247, 205, 70);
        border-radius: 2px;
    }
    
    .debt_mark_xinshou {
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
        right: -28px;
        top: -8px;
    }
    
    .debt_mark_jiaxi {
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
        right: -30px;
        top: -8px;
    }
    
    .debt_mark_huodong {
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
        right: -30px;
        top: -8px;
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
    
    .getRate {
        line-height: 30px;
        width: 40%;
        color: #ff3b4c;
    }
    
    .period {
        text-align: center;
        color: #ff3b4c;
        width: 30%;
    }
    
    .period_item {
        color: #ff3b4c;
        font-size: 22px;
    }
    
    .buymin {
        text-align: center;
        color: #ff3b4c;
        font-size: 16px;
        width: 30%;
    }
    
    .buymin_item {
        color: #ff3b4c;
        font-size: 22px;
    }
    
    .fl {
        float: left;
    }
    
    .clear {
        clear: both;
    }
    
    .list_mains {
        text-align: center;
    }
    
    .list_center {
        text-align: center;
    }
    
    .list_main_title {
        text-align: left;
        border-bottom: 1px dashed #dcdcdc;
        padding: 5px 0;
        font-size: 18px;
    }
    
    .debt_rate {
        font-size: 40px;
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
        position: absolute;
        bottom: 0;
        top: 0;
        z-index: 9999;
        width: 100%;
    }
    
    .clear {
        clear: both;
    }
    
    .main_box {
        padding: 10px;
    }
    
    .no_recode {
        width:100%;
        height:100%;
        background:url("/vue_static/img/plan_03.jpg") center no-repeat #efeff4;
        background-size:160px;
    }
    
    .plan_content {
        background: #fff;
        padding: 10px 0;
    }
    .countdown {
        background:url("/vue_static/img/Bar2.png") center top no-repeat;
        background-size:cover;
    }
</style>

<template>
    <!--弹出层begin-->
    <!--项目介绍-->
    <div class="showModel" v-if="showDebtDesc" >
        <div class="debt_head">
            <a @click="hideDiv(0)" class="back"></a>项目介绍
        </div>
        <iframe style="height:100%; width: 100%;" :src="debt.desc_link"></iframe>
    </div>
    <!--购买记录-->
    <div v-bind:class="{'showModel': true, 'no_recode': buys.length === 0}" v-if="showBuyList" >
         <div class="debt_head">
            <a @click="hideDiv(1)" class="back"></a>购买记录
        </div>
        <div class="main_box">
            <ul v-for="buy in buys">
                <li style="border-bottom:1px solid #ccc;">
                    <table style="width:100%;">
                        <tr>
                            <td>{{buy.mobile}}</td>
                            <td rowspan="2" style="font-size:16px;" class="buyAmount">{{buy.amount}}</td>
                        </tr>
                        <tr>
                            <td><span style="font-size:16px;" class="buyTime">{{CLData.formatTime(buy.date)}}</span></td>
                        </tr>
                    </table>
                </li>
            </ul>
        </div>
    </div>
    <!--还款计划-->
    <div v-bind:class="{'showModel': true, 'bak': true, 'no_recode': plans.length === 0}" v-if="showPlan">
        <div class="debt_head">
            <a @click="hideDiv(2)" class="back"></a>还款计划
        </div>
        <div class="main_box">
            <ul v-for="plan in plans">
                <li class="plan_content">
                    <table style="width:100%;border-left:3px solid #ff3b4c; border-radius:8px;padding:10px 0;">
                        <tr>
                            <td style="width:10%;"></td>
                            <td colspan="2">{{CLData.formatTime(plan.plandate)}}</td>
                        </tr>
                        <tr>
                            <td style="width:10%;"></td>
                            <td>状态:<span style="color:#ff3b4c;">{{plan.stateN}}</span></td>
                            <td><span style="color:#929292">回款本金:</span>{{plan.principal}}</td>
                        </tr>
                        <tr>
                            <td style="width:10%;"></td>
                            <td>回款期数{{plan.seq}}</td>
                            <td><span style="color:#929292">回款利息:</span>{{plan.interest}}</td>
                        </tr>
                    </table>
                </li>
            </ul>
        </div>
    </div>
    <!--保付方-->
    <div class="showModel" v-if="showSurety">
         <div class="debt_head">
            <a @click="hideDiv(3)" class="back"></a>保付方
        </div>
        <iframe style="height:height:100%;width:100%;" :src="debt.surety_link"></iframe>
    </div>
    <!--弹出层end-->
    <div class="debt_head">
        <a v-touch:tap="rollback" class="back"></a>理财列表
        <a v-link="{ path:'/'}" class="home"></a>
        <a v-link="{ path:'/account'}" class="mine"></a>
    </div>
    <div class="debt_data_list">
        <div class="list_mains">
            <div class="list_main_title">
                <div style=" position:relative;font-size:16px;line-height:30px;">{{debt.title}}<span :class="getTypeName(debt)">{{getDoings(debt)}}</span><span class="memo" v-if="!!debt.title_memo">{{debt.title_memo}}</span></div>
            </div>
            <div style="margin-top:20px;">
                <div class="getRate fl"><span class="debt_rate">{{getRate(debt)}}</span>%</div>
                <div class="period fl"><span class="period_item">{{debt.period}}</span>{{CLData.formatType(debt.byday)}}</div>
                <div class="buymin fl"><span class="buymin_item">{{debt.buymin}}</span>元</div>
                <div class="clear"></div>
            </div>
            <div style="color:#9B9B9B;">
                <div class="list_center fl" style="width:40%;">预期年化</div>
                <div class="list_center fl" style="width:30%;">理财期限</div>
                <div class="list_center fl" style="width:30%;">起购金额</div>
                <div class="clear"></div>
            </div>
            <div>
                <div>
                    <div class="line-bg">
                        <div class="line-inside" v-bind:style="{width: parseFloat((debt.inboxtmp/debt.amount*100).toFixed(2)) + '%'}"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="pr_main">
        <ul style="margin:0;">
            <li class="de">
                <div></div>项目金额：<span>{{(+debt.inboxtmp).toMoneyStr()}}元</span> / {{(+debt.amount).toMoneyStr()}}元</li>
            <li class="de">
                <div></div>计息方式：<span>{{debt.interestMode}}</span></li>
            <li class="de">
                <div></div>还款方式：<span>{{debt.plantypeN}}</span></li>
            <li class="de">
                <div></div>开始时间：<span>{{CLData.formatTime(debt.start)}}</span></li>
        </ul>
    </div>
    <div class="diya">
        <table style="color:#989898">
            <tr class="line">
                <td v-touch:tap="showDiv(0)">项目介绍</td>
                <td v-touch:tap="showDiv(1)" class="lie">购买记录</td>
            </tr>
            <tr>
                <td v-touch:tap="showDiv(2)">还款计划</td>
                <td v-touch:tap="showDiv(3)" class="lie">保付方</td>
            </tr>
        </table>
    </div>
    <div style="margin-top:10px"></div>
    <p><span class="suck">房产抵质押担保</span></p>
    <br>
    <span v-if="countdown > 0">
        <button  class="btn2 countdown">倒计时：{{countdownStr}}</button>
    </span>
    <span v-else>
        <button v-if="debt.state==10" class="btn2" v-touch:tap="buy">立即购买</button>
        <button v-else class="btn2" style="background-color:#b5b5b5">{{debt.stateN}}</button>
    </span>
    <!--<div style="margin-bottom:100px;"></div>-->
</template>
<script>
export default {
    data () {
        this.CLData = CLData;
        return {
            screenWidth: document.body.clientWidth,
            debtId:this.$route.params.id,
            debt : {
                inboxtmp: 0,
                amount: 0,
                start: 0
            },
            countdownHander: 0, // 保存定时器句柄
            countdown: 0,
            countdownStr: '0天0小时0分0秒',
            userInfo: {},
            buys:[],
            plans:[],
            showDebtDesc:false,
            showBuyList:false,
            showPlan:false,
            showSurety:false,
            isLogin:false,
            items:[
                {tittle:'项目介绍'},
                {tittle:'购买记录'},
                {tittle:'回款计划'},
                {tittle:'保付公司'}
            ]
        }
    },
    components: {
        'aside': VueStrap.aside
    },
    created() {
        var self = this;
        self.fetchDebt(this.debtId);
    },
    ready() {

    },
    destroyed() {
        var self = this;
        // 销毁定时器
        clearInterval(self.countdownHander);
    },
    watch:{
        
    },
    methods : {
        //滑动页面
        showDiv: function(type) {
            var self = this;
            if (type === 0) {
                this.showDebtDesc = true;
            } else if (type === 1) {
                this.showBuyList = true;
                if(this.buys.length == 0) {
                    CLData.fetchDebtBuys(this.debtId,1,10,function(res){
                        self.buys = res.list;
                    })
                }
            }else if(type === 2){
                this.showPlan = true;
                if(this.plans.length == 0){
                    CLData.fetchDebtPlans(this.debtId,1,10,function(res){
                        self.plans = res.list;
                    })
                }
            } else if (type === 3) {
                this.showSurety = true;
            }
        },
        hideDiv: function (type) {
             if (type === 0) {
                this.showDebtDesc = false;
            } else if (type === 1) {
                this.showBuyList = false;
            } else if (type === 2) {
                this.showPlan = false;
            } else if (type === 3) {
                this.showSurety = false;
            }
        },
        // 计算圆弧百分比
        clipCircle: function(debt) {
            return 'clip:rect(0,'+(debt.inbox / debt.amount ) * 60+'px,auto,0);'
        },
        // 回退到上一个页面
        rollback: function() {
            window.history.back();
        },
        // 信息展示处理函数
        popModal: function(param){
            var str = param.str;

            // 弹出层处理效果待补充（将console替换为所需展示形式代码）
            
            console.log(str);
        },
        // 计算年化率
        getRate: function(debt) {
            var rate = parseFloat(debt.rate).toFixed(2);
            if(isNaN(rate)) {
                rate = ''
            }
            return rate;
        },
        buy : function(){
            var self = this;
            CLData.fetchAccount(function(res) {
                if(res.errcode || !res.mobile) {
                    self.$route.router.go('/signIn?path='+encodeURIComponent('/buy/'+self.debtId));
                    return;
                }
                self.userInfo = res;
                // 判断是否绑卡或者实名
                if(!res.degree || !res.binding ||  tool.isEmptyString(res.tradepwd)){
                    console.log('信息不完整，即将跳转到认证页面');
                    self.$route.router.go('/valid');
                } else {
                    self.$route.router.go('/buy/'+self.debtId);
                }
            });
        },
        fetchDebt : function(id){
            var self = this;
            CLData.fetchDebt(id,function(res){
                self.debt = res;

                // 计算倒计时
                self.countdown = self.debt.start - new Date();
                self.countTime();
            });
        },
        // 倒计时函数
        countTime: function() {
            var cDate;
            var self = this;

            if(self.countdown > 0) {
                self.countdownHander = setInterval(function() {
                    self.countdown -= 1000; // 每次减少一秒
                    cDate = new Date(self.countdown); // 生成Date实例方便获取小时，分钟，秒

                    // 生成倒计时字符串
                    self.countdownStr = 
                        parseInt(cDate / (1000*60*60*24)) + '天' +
                        cDate.getHours() +'小时' +
                        cDate.getMinutes() + '分' + 
                        cDate.getSeconds() + '秒';

                    // 倒计时毫秒数为0的时候清除定时器，并重置倒计时变量
                    if(self.countdown <= 0) {
                        self.countdown = 0;
                        clearInterval(self.countdownHander);
                    }
                }, 1000);
            }
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
                typeName = 'debt_mark_xinshou';
            } else if(debt.type == 35) {
                typeName = 'debt_mark_huodong';
            } else if(+debt.increase_rate > 0) {
                typeName = 'debt_mark_jiaxi';
            }
            return typeName;
        }
    }
}
</script>