<style>
    .app {
        width: 50%;
        height: 209px;
        background: url("/vue_static/img/app.png") no-repeat;
        background-size: contain;
        border: none;
        margin: 20px 0 80px 0;
        margin-left: 25%;
    }
    .today {
        color: #ccc;
    }
    .buyAmount {
        color: #333;
        font-size: 16px;
    } 
    body {
        background-color: #fff;
        height: 100%;
    }
    .success {
        padding-left: 20%;
        background: url("/vue_static/img/sucs.png") 10% 28px no-repeat;
        padding-top: 20px;
        width:80%;
        margin-left:10%;
        height:260px;
    }
    .success p {
        font-size: 16px;
        line-height: 40px;
    }
    .success s span {
        color: #ccc;
        font-size: 14px;
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
    
    .buysuccess {
        border-bottom: 1px solid #ccc;
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
    .suc_bg{
        background:url("/vue_static/img/sus.png") left center no-repeat;
        background-size:cover;
        padding:10px 10px 10px 20px;
    }
    .suc_bg2{
        background:url("/vue_static/img/sus.png") left center no-repeat;
        background-size:cover;
        padding:10px 10px 10px 20px;
        margin-top:20px;
    }
    .buysuccess_box { background:#fff;}
</style>
<template>
    <div class="buysuccess">
        <a v-touch:tap="rollback" class="back"></a>购买成功
        <a v-link="{ path:'/'}" class="home"></a>
        <a v-link="{ path:'/account'}" class="mine"></a>
    </div>
    <div class="buysuccess_box">
    <div class="success">
        <div class="suc_bg">
        <span class="buyAmount">成功购买{{amount}}元</span><br>
        <span class="today">今天</span>
        </div>
        <div class="suc_bg2">
        <span class="buyAmount">开始计算利息</span><br>
        <span class="today">今天</span>
        </div>
        <div class="suc_bg2">
        <span class="buyAmount">项目到期回款</span><br>
        <span class="today">{{detail.lastpayment}}</span>
        </div>
    </div>
    <a v-link="'/account'"><button class="btn2" >我知道了</button></a>
    <div v-touch:tap="download"><button class="app"></button></div>
    </div>
</template>

<script>
    export default {
        data() {
            this.CLData = CLData;
            return {
                debtId: this.$route.query.id,
                amount: +this.$route.query.amount,
                detail:{"lastpayment":new Date(),"buydate":1471236926971,"integral":3}
            }
        },
        ready() {
            var self = this;
            CLData.fetchBuyDetail(this.debtId,this.amount,function(res){
                self.detail = res;

            })
        },
        methods: {
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
            // 下载App
            download: function() {
                window.open('http://a.app.qq.com/o/simple.jsp?pkgname=com.cc.ccfinance&g_f=991653');
            }
        }
    }
</script>