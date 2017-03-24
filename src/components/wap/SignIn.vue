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
        width: 20%;
        border: none;
        background: #fff;
        height: 50px;
        font-weight: bold;
        color: #333;
        text-align: left;
    }
    
    .login_line {
        width: 90%;
        margin: 0 auto;
    }
    
    .login_line input {
        border: none;
        height: 50px;
        width: 70%;
        font-size: 15px;
        font-weight: 100;
        color: #000;
    }
    
    .login_line input[placeholde] {
        color: rgb(177, 177, 177);
    }
    
    .login_line button {
        width: 30%;
        float: left;
    }
    
    p {
        text-align: center;
    }
    
    .login_h2 {
        text-align: center;
        padding: 20px 0;
    }
    
    .login_title {
        background: #fff;
        line-height: 50px;
        font-size: 20px;
        text-align: center;
    }
    
    .back {
        display: inline-block;
        width: 40px;
        height: 45px;
        position: absolute;
        left: 20px;
        top: 16px;
        background: url("/vue_static/img/back.png") no-repeat;
        background-size: 20px;
    }
    
    .home {
        width: 30px;
        height: 29px;
        display: inline-block;
        background: url("/vue_static/img/ic_06.png") no-repeat;
        background-size: 28px;
        position: absolute;
        right: 50px;
        top: 11px;
    }
    
    .mine {
        width: 30px;
        height: 29px;
        display: inline-block;
        background: url("/vue_static/img/index_icon_03.png") no-repeat;
        background-size: 28px;
        position: absolute;
        right: 10px;
        top: 11px;
    }
</style>

<template>
    <div class="login_title">
        <div v-touch:tap="rollback" class="back"></div>登录
        <a v-link="{ path:'/'}" class="home"></a>
        <a v-link="{ path:'/account'}" class="mine"></a>
    </div>
    <div class="login_h2"><img src="/vue_static/img/tx2.png"></div>
    <div class="box">
        <div class="login_line bot">
            <button class="login_btn" type="button" disabled="disabled">手机号</button>
            <input v-model="mobile" type="tel" placeholder="请输入手机号码"><br>
        </div>
        <div class="login_line">
            <button class="login_btn" disabled="disabled">登录密码</button>
            <input v-model="pwd" type="password" placeholder="请输入登录密码">
        </div>
    </div>
    <button style="margin-top:30px;" class="btn2" v-touch:tap="userLogin">登录</button>
    <p style="margin-top:20px;"><a class="login" v-link="{ path:'/signUp'}">注册账号</a><a class="login" style="margin-left:20px;" v-link="{ path:'/resetLoginPwd'}">忘记密码</a></p>
    <div class="errorBox" v-if="showError">
        <div class="top"></div>
        <div class="msg">{{errorMsg}}</div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                alert_sucess:{title:'温馨提示',msg:'',alertSuccess:false,tick:1000},
                alert_failed:{title:'温馨提示',msg:'',alertFailed:false,tick:1000},
                mobile:'',
                pwd:'',
                url:'',
                return_path:this.$route.query.path ? decodeURIComponent(this.$route.query.path) : '',
                return_url:this.$route.query.href ? decodeURIComponent(this.$route.query.href) : '',
                errorMsg: '',
                showError: false
            }
        },
        components: {
            'alert': VueStrap.alert
        },
        ready(){
            //var self = this;
            //var ua = window.navigator.userAgent.toLowerCase();
            //if(ua.match(/CCLC_Android|cclc_ios/i)){
            //     window.location.href='cclc://www.cclc.co/cclc?action=login';
            //}
        },
        watch: {
            
        },
        methods: {
            // 回退到上一个页面
            rollback: function() {
               /* var self = this;
                var sourceUrl = self.$route.query.sourceUrl;
                // 如果有原地址则返回原地址
                if(sourceUrl) {
                    self.$route.router.go('/' + sourceUrl);
                } else {
                    window.history.go(-2);
                }*/
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
            userLogin: function () {
                var self = this;
                if(!tool.regCheck(self.mobile, 'mobileReg')) {
                    self.popModal({
                        str: '手机号格式不对！'
                    });
                    return;
                }
                if(tool.isEmptyString(self.pwd)) {
                    self.popModal({
                        str: '密码不能为空！'
                    });
                    return;
                }
                CLData.SignIn({mobile: self.mobile, pwd: self.pwd}, function (res) {
                    if(res.errcode == 0 && !res.err){
                        localStorage['session']=res.sessionid || self.mobile;
                        localStorage['mobile']=self.mobile;

                        var gotoUrl = self.$route.query.gotoUrl;
                        if(gotoUrl) {
                            self.$route.router.go('/' + gotoUrl);
                        } else if(self.return_path){
                            self.$route.router.go(self.return_path);
                        } else if(self.return_url){
                            location.href=self.return_url;
                        } else{
                            self.$route.router.go('/account');
                        }
                    }else{
                        localStorage.removeItem("session");
                        localStorage.removeItem("mobile");
                        self.popModal({
                            str: res.err
                        });
                    }
                })
            }
        }
    }
</script>