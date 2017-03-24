<style>
    .login {
        color: #4a82e1;
        text-decoration: underline;
    }
    
    .box {
        background: #fff;
    }
    
    body {
        background-color: #efeff4;
    }
    
    .bot {
        border-bottom: 1px solid #eeeeee;
    }
    
    .login_btn {
        width: 30%;
        border: none;
        background: #fff;
        height: 50px;
        font-weight: bold;
        color: #333;
        text-align: left;
    }
    
    .btn_yanzheng {
        width: 26%;
        border: none;
        background: #fff;
        height: 50px;
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
    .line {
        width: 94%;
        margin-left: 6%;
    }
    
    p {
        text-align: center;
    }
    
    input {
        border: none;
        height: 50px;
        width: 70%
    }
    
    h2 {
        text-align: center;
        padding: 20px 0;
    }
    .tradePwd {
        background: #fff;
        line-height: 50px;
        font-size: 16px;
        text-align: center;
    }
    .greyColor {
        color: #ccc;
    }
</style>

<template>
    <div class="tradePwd">
        <a v-touch:tap="rollback" class="back"></a>重置交易密码
        <a v-link="{ path:'/'}" class="home"></a>
        <a v-link="{ path:'/account'}" class="mine"></a>
    </div>
    <h2><img src="/vue_static/img/tx2.png">
        <p style="padding-top:10px;font-size:20px;font-weight:normal">{{mobile}}</p>
    </h2>
    <div class="box">
        <div class="line bot">
            <button class="login_btn" disabled="disabled">身份证</button><input type="tel" v-model="user.idcard" placeholder="请输入您的身份证">
        </div>
    </div>
    <div class="box">
        <div class="line bot">
            <button class="login_btn" disabled="disabled">图形验证码</button>
            <input type="text" v-model="user.imageCode" style="width:37%;" placeholder="请输入图形验证码"><img :src="imageCodeSrc" v-touch:tap="reflushImageCodeSrc"
                alt="" style="height: 4%;width: 30%;margin-top: 3%">
        </div>
    </div>
    <div class="box ">
        <div class="line bot">
            <button class="login_btn" disabled="disabled">验证码</button><input style="width:40%;" type="text" v-model="user.mobcode"
                placeholder="请输入短信验证码"><button class="btn_yanzheng" type="button" v-touch:tap="getMobileCode"><span :class="{'greyColor': countdown}">{{countdown ? countdown : '获取验证码'}}</span></button>
        </div>
        <div class="line">
            <button class="login_btn" disabled="disabled">交易密码</button><input type="password" v-model="user.tradepwd" placeholder="请输入6位数字">
        </div>
    </div>
    <br><br>
    <button style="margin-top:2 0px;" v-touch:tap="resetTradePwd" class="btn2">保存</button>
    <div style="margin-bottom:100px;"></div>

   
    <!--<alert :show.sync="alert_sucess.alertSuccess" style="top:45%;" :duration="alert_sucess.tick" type="success" width="270px"

        placement="top-right" dismissable>
        <span class="icon-ok-circled alert-icon-float-left"></span>
        <strong>{{alert_sucess.title}}</strong>
        <p>{{alert_sucess.msg}}</p>
    </alert>
    <alert style="top:45%; " :show.sync="alert_failed.alertFailed" :duration="alert_failed.tick" type="danger" width="270px"
        placement="top" dismissable>
        <span class="icon-info-circled alert-icon-float-left"></span>
        <strong>{{alert_failed.title}}</strong>
        <p>{{alert_failed.msg}}</p>
    </alert>-->
    <div class="errorBox" style="margin-bottom: 10px;" v-if="showError">
        <div class="top"></div>
        <div class="msg">{{errorMsg}}</div>
    </div>
    <div class="successBox" style="margin-bottom: 10px;" v-if="showSuccess">
        <div class="top"></div>
        <div class="msg">{{successMsg}}</div>
    </div>
</template>
<script>
export default {
    data () {
        this.CLData = CLData;
        return {
            alert_sucess:{title:'温馨提示',msg:'',alertSuccess:false,tick:1000},
            alert_failed:{title:'温馨提示',msg:'',alertFailed:false,tick:1000},
            imageCodeSrc:'',
            mobile:'',
            user : {
                imageCode:'',
                mobile:'',
                mobcode:'',
                idcard : '',
                tradepwd : '',
                reduceHander: 0, // 保存定时器句柄
                countdown: 0
            },
            return_url:this.$route.query.href,
            showError: false,
            errorMsg: '',
            showSuccess: false,
            successMsg: ''
        }
    },
    components: {
        'alert': VueStrap.alert
    },
    created() {
        var self = this;
        self.getUserInfo();
        self.reflushImageCodeSrc();
    },
    destroyed() {
        var self = this;
        // 销毁定时器
        clearInterval(self.reduceHander);
    },
    methods : {
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
        // 验证码刷新
        reflushImageCodeSrc: function() {
            var self = this;
            CLData.fetchPicCode(function(res) {
                self.imageCodeSrc = res;
            });
        },
        getUserInfo: function() {
            var self = this;
            CLData.fetchAccount(function(res) {
                if(!res.err){
                    self.mobile = res.mobile;
                    var mobile=localStorage['mobile']||'';
                    if(mobile &&mobile.replace(/^(\d{3})(.+)(\d{4})$/, "$1****$3")==res.mobile){
                        self.user.mobile=mobile;
                    }
                }else{
                    localStorage.removeItem("session");
                    localStorage.removeItem("mobile");
                    self.$route.router.go('/signIn');
                }
            });
        },
        // 获取手机验证码
        getMobileCode: function() {
            var self = this;
            var imageCode = self.user.imageCode;   
            var mobile = self.user.mobile;
            if(!tool.regCheck(mobile, 'mobileReg')) {
                 self.popModal({
                    str: '手机号格式不对！'
                 });
                 return;
             }
             if(tool.isEmptyString(imageCode)) {
                self.popModal({
                    str: '图片验证不能为空！'
                });
                return;
            } 

            // 如果倒计时为0则进入倒计时状态，并发送验证码请求
            if(!self.countdown) {
                CLData.fetchMobileCode({
                    imagecode: imageCode, 
                    ctype: 12, 
                    mobile: mobile
                }, function(res) {
                    if(res.err) {
                        self.popModal({
                            str: res.err
                        });
                        self.reflushImageCodeSrc();
                        return;
                    }else{
                        self.showSuccess = true;
                        self.successMsg = '验证码已成功发送到您的手机';
                        setTimeout(function(){
                            self.showSuccess = false;
                        }, 1200);
                        self.countdown = 120;
                        self.reduceHander = setInterval(function(){
                            self.countdown--;
                            if(self.countdown <= 0) {
                                clearInterval(self.reduceHander);
                                self.countdown = 0;
                            }
                        }, 1000);
                    }
                });
            }
        },
        //重置交易密码
        resetTradePwd:function(){
            var self = this;
                if(!tool.regCheck(self.user.idcard, 'idcardReg')) {
                    self.popModal({
                        str: '身份证格式不对！'
                    });
                    return;
                }
                if(tool.isEmptyString(self.user.tradepwd)) {
                    self.popModal({
                        str: '交易密码不能为空！'
                    });
                    return;
                }
                if(tool.isEmptyString(self.user.mobcode)) {
                    self.popModal({
                        str: '请先填写短信验证码'
                    });
                    return;
                }
            CLData.postResetTradePwd( {
                idcard: self.user.idcard,
                newpwd: self.user.tradepwd,
                mobcode:self.user.mobcode,
                type: 2
            }, function(res) {
                if(res.err){
                    self.popModal({
                        str: res.err
                    });
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