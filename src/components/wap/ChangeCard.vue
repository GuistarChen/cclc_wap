<style>
    .sucked p {
        line-height: 40px;
        color: rgb(207, 207, 207);
        font-weight: 100;
        line-height: 24px;
       
    }
    .line3 {
        width: 94%;
        margin-left: 6%;
        margin-top: 10px;
    }
    .box {
        background: #fff;
    }
    input {
        border: none;
        height: 50px;
        width: 80%
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
    .bot {
        border-bottom: 1px solid #eeeeee;
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
    .change_title {
        background: #fff;
        line-height: 50px;
        font-size: 16px;
        text-align: center;
        border-bottom:1px solid #ccc;
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
</style>
<template>
    <div class="change_title">
        <a v-touch:tap="rollback" class="back"></a>更换银行卡
        <a v-link="{ path:'/'}" class="home"></a>
        <a v-link="{ path:'/account'}" class="mine"></a>
    </div>
    <div class="box">
        <div class="line3 bot">
            <button class="login_btn" type="button" disabled="disabled">卡号</button><input v-model="cardno" type="tel" placeholder="请输入新的储蓄卡号"><br>
        </div>
    </div>
    <p style="color:#ccc;">&nbsp;&nbsp;&nbsp;*{{supportBanks}}</p>
    <button v-touch:tap="changeBank" class="btn2">确定</button>
    <div class="errorBox" v-if="showError">
        <div class="top"></div>
        <div class="msg">{{errorMsg}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            alert_sucess:{title:'温馨提示',msg:'',alertSuccess:false,tick:1000},
            alert_failed:{title:'温馨提示',msg:'',alertFailed:false,tick:1000},
            cardno: '',
            supportBanks: '',
            errorMsg:'',
            return_url:this.$route.query.href,
            showError: false
        }
    },
    components: {
        'alert': VueStrap.alert
    },
    created() {
        var self = this;
        self.getSupportBank();
    },
    ready() {
        
    },
    methods: {
        // 回退到上一个页面
        rollback: function() {
            window.history.back();
        },
        popModal: function(param){
            var self = this;
            self.showError = true;
            self.errorMsg = param.str;

            setTimeout(function(){
                self.showError = false;
            }, 1200);
        },
        // 获取支持银行
        getSupportBank: function(){
            var self = this;
            CLData.fetchSupportBank(function(res) {
                if(res.err) {
                    self.popModal({
                        str: res.err
                    });
                    return;
                }
                self.supportBanks = res.msg;
            });
        },
        changeBank: function() {
            var self = this;
            var cardno = self.cardno;

            if(tool.isEmptyString(cardno)) {
                self.popModal({
                    str: '储蓄卡号不能为空！'
                });
                return;
            }

            if(!tool.regCheck(cardno, 'cardnoReg')) {
                self.popModal({
                    str: '储蓄卡号格式不对！'
                });
                return;
            }
            CLData.changeBank(cardno,function(res) {
                if(res.err) {
                    self.popModal({
                        str: res.err
                    });
                    return;
                }else{
                     if(self.return_url){
                         location.href=self.return_url;
                     }else{
                         self.$route.router.go('/debts');
                     }
                }
            });
        }
    }
}
</script>