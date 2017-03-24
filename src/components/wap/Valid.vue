<style>
    .valid_txt {
        line-height: 30px;
    }
    
    .box input {
        border: none;
        height: 50px;
        width: 70%
    }
    
    .btn_yanzheng2 {
        width: 20px;
        height: 20px;
        background: url("/vue_static/img/wen.png") no-repeat;
        border: none;
        margin: 15px 0 0 10%;
    }
    
    .login_btn2 {
        width: 24%;
        border: none;
        background: #fff;
        height: 50px;
        font-weight: bold;
        color: #333;
        text-align: left;
    }
    
    .line {
        width: 94%;
        margin-left: 6%;
    }
    
    .box {
        background: #fff;
    }
    
    .bot {
        border-bottom: 1px solid #eeeeee;
    }
    
    .text {
        background: #4a82e1;
        padding: 10px;
        color: #fff;
        line-height: 20px;
        font-size: 14px;
        font-weight: 100;
    }
    
    .valid-title {
        background: #fff;
        line-height: 50px;
        font-size: 18px;
        text-align: center;
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
    .btn_yanzheng2 {
        position: absolute;
    }
    
    .btn_yanzheng2 .tipTool {
        display: block;
        background: rgba(73, 166, 255, 1);
        border-radius: 5px;
        position: relative;
        width: 200px;
        height: 120px;
        padding: 10px;
        color: #fff;
        top: -130px;
        right: 170px;
        text-indent: 2em;
        font-size: 14px;
        font-weight: normal;
    }
    
    .tip_icon {
        width: 16px;
        height: 16px;
        display: block;
        position: absolute;
        background: #49a6ff;
        transform: rotate(45deg);
        top: 110px;
        right: 14px;
    }
</style>

<template>
    <div class="valid-title">
        <a v-touch:tap="rollback" class="back"></a>个人信息认证
        <a v-link="{ path:'/'}" class="home"></a>
        <a v-link="{ path:'/account'}" class="mine"></a>
    </div>
    <div class="text">
        根据相关监管部门要求,个人必须信息认证后才能购买理财产品，请完善信息：
    </div>
    <div style="height: 10px; background: rgb(237, 239, 245);"></div>
    <div class="box">
        <div class="line bot">
            <button class="login_btn2" type="button" disabled="disabled">姓名</button>
            <input v-model="user.realname" type="text" placeholder="请输入持卡人姓名"><br>
        </div>
        <div class="line bot">
            <button class="login_btn2" disabled="disabled">身份证</button><input v-model="user.idcard" type="tel" placeholder="请输入持卡人身份证">

        </div>
        <div class="line bot">
            <button class="login_btn2" disabled="disabled">卡号</button><input v-model="user.cardno" style="width:50%;" type="text"
                placeholder="请输入您的储蓄卡号">
            <button class="btn_yanzheng2" type="button" v-touch:tap="show_msg">
                <span class="tipTool" v-if="flag">{{supportBanks}}
                    <span class="tip_icon"></span>
                </div>
            </button>
        </div>
        <div class="box">
            <div class="line bot">
                <button class="login_btn2" disabled="disabled">交易密码</button><input v-model="user.tradepwd" type="password"
                    name="password" placeholder="设置交易密码">
            </div>
        </div>
    </div>
    <p class="valid_txt">&nbsp;&nbsp;&nbsp;*该交易密码用于投资/充值/提现</p>
    <button class="btn2" v-touch:tap="authentication">立即认证</button>
    <!--<alert :show.sync="alert_sucess.alertSuccess" style="top:45%;" :duration="alert_sucess.tick" type="success" width="270px"
        placement="top-right" dismissable>
        <span class="icon-ok-circled alert-icon-float-left"></span>
        <strong>{{alert_sucess.title}}</strong>
        <p class="valid_txt">{{alert_sucess.msg}}</p>
    </alert>
    <alert style="top:45%; " :show.sync="alert_failed.alertFailed" :duration="alert_failed.tick" type="danger" width="270px"
        placement="top" dismissable>
        <span class="icon-info-circled alert-icon-float-left"></span>
        <strong>{{alert_failed.title}}</strong>
        <p class="valid_txt">{{alert_failed.msg}}</p>
    </alert>-->
    <div class="errorBox" style="margin-bottom: 10px;" v-if="showError">
        <div class="top"></div>
        <div class="msg">{{errorMsg}}</div>
    </div>
</template>
<script>
export default {
    data () {
        this.CLData = CLData;
        return {
            alert_sucess:{title:'温馨提示',msg:'',alertSuccess:false,tick:1000},
            alert_failed:{title:'温馨提示',msg:'',alertFailed:false,tick:1000},
            idNoRE : /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/,
            bankNoRE : /^\d{12,19}$/,
            user : {
                realname : '',
                idcard : '',
                cardno : '',
                tradepwd : ''
            },
            supportBanks: '数据加载中...',
            userinfo : {},
            return_url:this.$route.query.href,
            flag : false,
            showError: false,
            errorMsg: ''
        }
    },
    components: {
        'alert': VueStrap.alert
    },
    computed: {
        validation: function () {
            return {
                realname: !!this.user.realname.trim(),
                idcard: this.idNoRE.test(this.user.idcard),
                cardno: this.bankNoRE.test(this.user.cardno),
                tradepwd: !!this.user.tradepwd.trim()
            }
        },
        isValid: function () {
            var validation = this.validation
            return Object.keys(validation).every(function (key) {
                return validation[key]
            })
        }
    },
    ready() {
        var self = this;
        self.fetchUserInfo();
        self.getSupportBank();
    },
    methods : {
        // 回退到上一个页面
        rollback: function() {
            window.history.back();
        },
        show_msg : function() {
            var self = this;
            if(self.flag) {
                self.flag = false;
            } else {
                self.flag = true;
            }
        },
        // 获取支持的银行
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
        popModal: function(param){
            var self = this;
            self.showError = true;
            self.errorMsg = param.str;

            setTimeout(function(){
                self.showError = false;
            }, 1200);
        },
        fetchUserInfo : function(){
            var self = this;
            CLData.fetchUserInfo(function(res){
                console.log(res);
                  if(res && !res.err) {
                      self.userinfo = res;
                      self.user.realname = res.realname == '***' ? '' : res.realname;
                      self.user.idcard = res.idcard;
                      self.user.cardno = res.defaultCardno;
                      self.user.tradepwd = res.tradepwd;
                  } else {
                      console.log(res.err);
                  }
            })
        },
        authentication : function (paras) {
            var self = this;
            if(!self.validation.realname) {
                if(tool.isEmptyString(self.userinfo.realname)) {
                    self.popModal({
                        str: '请输入姓名'
                    });
                    return;
                }
            }
            if(!self.validation.idcard) {
                if(tool.isEmptyString(self.userinfo.idcard)) {
                    self.popModal({
                        str: '请输入正确的身份证号'
                    });
                    return;
                }
            }
            if(!self.validation.cardno) {
                if(tool.isEmptyString(self.userinfo.defaultCardno)) {
                    self.popModal({
                        str: '请输入正确的银行卡号'
                    });
                    return;
                }
            }
            if(!self.validation.tradepwd) {
                if(tool.isEmptyString(self.userinfo.tradepwd)) {
                    self.popModal({
                        str: '请输入交易密码'
                    });
                    return;
                }
            }
            CLData.authentication(self.user, function(res) {
                if(res.err){
                    self.popModal({
                        str: res.err
                    });
                }else{
                    console.log("信息认证成功！跳转");
                    self.$route.router.go('/debts');
                }
            })
        }
    }
}
</script>