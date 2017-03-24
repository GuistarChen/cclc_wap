<style>
     .chakan2 {
        display: inline-block;
        background: url("/vue_static/img/dui2.png") 0 4px no-repeat;
        line-height: 30px;
        padding-left: 24px;
        margin-left: 5%;
        margin-top: 6px;
    }
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
        height: 42px;
        font-weight: 200;
        border-left: 1px solid rgb(237, 237, 237);
        margin-top: 4px;
        color: rgb(235, 78, 83);
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
    
    .sign_h2 {
        text-align: center;
        padding: 20px 0;
    }
    .sign_title {
        background: #fff;
        line-height: 50px;
        font-size: 20px;
        text-align: center;
    }
   
    .greyColor {
        color: #ccc;
    }
</style>

<template>
    <div class="sign_title">
        <a v-touch:tap="rollback" class="back"></a>注册
        <a v-link="{ path:'/'}" class="home"></a>
        <a v-link="{ path:'/account'}" class="mine"></a>
    </div>
    <div class="sign_h2"><img src="/vue_static/img/tx2.png"></div>
    <div class="box">
        <div class="line bot">
            <button class="login_btn" type="button" disabled="disabled">手机号</button><input v-model="mobile" type="tel" placeholder="请输入手机号"><br>
        </div>
        <div class="line bot">
            <button class="login_btn" disabled="disabled">图形验证码</button><input style="width: 35%" v-model="imagecode" type="text"
                placeholder="请输入验证码">
            <img v-touch:tap="graphicsCode()" v-bind:src="src" style="height: 4%;width: 30%;margin-top: 3%">
        </div>
        <div class="line bot">
            <button class="login_btn" disabled="disabled">短信验证码</button><input v-model="mobcode" style="width:40%;" type="text"
                placeholder="请输入短信验证码">
            <button class="btn_yanzheng" type="button" v-touch:tap="messageAuthentication()"><span :class="{'greyColor': countdown}">{{countdown ? countdown : '获取验证码'}}</span></button>
        </div>
        <div class="line">
            <button class="login_btn" disabled="disabled">登录密码</button><input v-model="pwd" type="password" name="password"
                placeholder="设置登录密码">
        </div>
    </div>
    <div class="chakan2">
    <span></span>
    我同意
    <span style="color:#49a6ff;" v-touch:tap="popProtocol">《城城理财服务协议》</span>
    </div>
  
    <button style="margin-top: 10px;" class="btn2" v-touch:tap="userRegistration()">注册</button><br>
    <p style="margin-top: 10px;"><a v-link="{ path:'/signIn'}" class="login">已有账号，请登录</a></p>
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
            return {
                alert_sucess:{title:'温馨提示',msg:'',alertSuccess:false,tick:1000},
                alert_failed:{title:'温馨提示',msg:'',alertFailed:false,tick:1000},
                mobile:'',
                pwd:'',
                mobcode:'',
                src: '',
                imagecode:'',
                mobcode:'',
                reduceHander: 0, // 保存定时器句柄
                countdown: 0,
                showError: false,
                errorMsg : '',
                successMsg: '',
                showSuccess: false
            }
        },
        created() {
            var self = this;
            self.graphicsCode();
        },
        components: {
            'alert': VueStrap.alert
        },
        ready(){

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
            userRegistration : function(){
                var self = this;
                if(!tool.regCheck(self.mobile, 'mobileReg')) {
                    self.popModal({
                        str: '手机号格式不对！'
                    });
                    return;
                } else if(tool.isEmptyString(self.imagecode)) {
                    self.popModal({
                        str: '图片验证码不能为空！'
                    });
                    return;
                } else if(tool.isEmptyString(self.mobcode)) {
                    self.popModal({
                        str: '短信验证码不能为空！'
                    });
                    return;
                } else if(tool.isEmptyString(self.pwd)) {
                    self.popModal({
                        str: '密码不能为空！'
                    });
                    return;
                }
                CLData.SignUp({mobile:self.mobile,pwd:self.pwd,mobcode:self.mobcode},function(res){
                   if(res.errcode == 0 && !res.err){
                        // 注册成功之后进行自动登录
                        CLData.SignIn({mobile: self.mobile, pwd: self.pwd}, function (res) {
                            if(res.errcode == 0 && !res.err){
                                localStorage['session']=res.sessionid;
                                localStorage['mobile']=self.mobile;
                                if(self.return_path){
                                    self.$route.router.go(self.return_path);
                                }
                                else if(self.return_url){
                                    location.href=self.return_url;
                                }else{
                                    self.$route.router.go('/account');
                                }
                            }else{
                                self.$route.router.go('/signIn');
                            }
                        })
                        
                    }else{
                        self.popModal({
                            str: res.err
                        });
                    }
                })
            },
            messageAuthentication: function () {
                var self = this;
                if(!tool.regCheck(self.mobile, 'mobileReg')) {
                    self.popModal({
                        str: '手机号格式不对！'
                    });
                    return;
                }
                if(tool.isEmptyString(self.imagecode)) {
                    self.popModal({
                        str: '图片验证不能为空！'
                    });
                    return;
                }

                // 如果倒计时为0则进入倒计时状态，并发送验证码请求
                if(!self.countdown) {
                    
                    CLData.fetchMobileCode({imagecode:self.imagecode,ctype:10,mobile:self.mobile},function(res){
                        if(res.err){
                            self.popModal({
                                str: res.err
                            });
                            self.graphicsCode();
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
            graphicsCode :function(){
                var self = this;
                CLData.fetchPicCode(function(res){
                    self.src = res;
                })
            },
            // 展示城城协议
            popProtocol: function() {
                window.open('http://www.cclc.co/api/help?code=serviceprotocol');
            }
        }
    }
</script>