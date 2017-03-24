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
    
    .login_btn3 {
        width: 30%;
        border: none;
        background: #fff;
        height: 50px;
        font-weight: bold;
        color: #333;
        text-align: left;
    }
    
    .btn_yanzheng3 {
        width: 26%;
        border: none;
        background: #fff;
        height: 50px;
        font-weight: bold;
        color: red;
        float: right;
        margin-right: 5px;
    }
    
    .btn_yanzheng3 img {
        width: 100%;
        border: none;
        height: 70%;
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
    
    .reset_h2 {
        text-align: center;
        padding: 20px 0;
    }
    
    .reset_pwd {
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
    <div class="reset_pwd">
        <a v-touch:tap="rollback" class="back"></a>重置登录密码
        <a v-link="{ path:'/'}" class="home"></a>
        <a v-link="{ path:'/account'}" class="mine"></a>
    </div>
    <div class="reset_h2">
        <img src="/vue_static/img/tx2.png">
    </div>
    <div class="box ">
        <div class="line bot">
            <button class="login_btn3" disabled="disabled">手机号</button><input type="text" v-model="mobile" name="password"
                placeholder="请输入手机号">
        </div>
        <div class="line bot">
            <button class="login_btn3" disabled="disabled">图形验证码</button>
            <input type="text" v-model="imageCode" style="width:40%;" placeholder="请输入图形验证码">
            <button class="btn_yanzheng3" type="button" v-touch:tap="reflushImageCodeSrc">
                <img :src="imageCodeSrc" alt="">
            </button>
        </div>
        <div class="line bot">
            <button class="login_btn3" disabled="disabled">验证码</button>
            <input style="width:40%;" v-model="mobcode" type="tel" placeholder="请输入验证码">
            <button class="btn_yanzheng3" type="button" v-touch:tap="getMobileCode"><span :class="{'greyColor': countdown}">{{countdown ? countdown : '获取验证码'}}</span></button>
        </div>
        <div class="line bot">
            <button class="login_btn3" disabled="disabled">登录密码</button><input type="password" v-model="newpwd" name="password"
                placeholder="请输入新密码">
        </div>
    </div>
    <br>
    <button v-touch:tap="resetLoginPwdparas" style="margin-top:2 0px;" class="btn2">保存</button><br>
    <div class="errorBox" v-if="showError">
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
        data() {
            return {
                alert_sucess:{title:'温馨提示',msg:'',alertSuccess:false,tick:1000},
                alert_failed:{title:'温馨提示',msg:'',alertFailed:false,tick:1000},
                imageCode: '',
                mobile: '',
                imageCodeSrc: '',        
                mobcode: '',
                newpwd: '',
                reduceHander: 0, // 保存定时器句柄
                countdown: 0,
                showError: false,
                errorMsg: '',
                showSuccess: false,
                successMsg: ''
            }
        },
        components: {
            'alert': VueStrap.alert
        },
        destroyed() {
            var self = this;
            self.reflushImageCodeSrc();
            // 销毁定时器
            clearInterval(self.reduceHander);
        },
        ready() {
            var self = this;
            self.reflushImageCodeSrc();
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
            // 获取用户信息
            getUserInfo: function() {
                var self = this;
                CLData.fetchAccount(function(res) {
                    if(res.err) {
                        self.popModal({
                            str: res.err
                        });
                        return;
                    }
                    self.popModal({
                        str: res
                    });
                    self.mobile = res.mobile;
                });
            },
            // 验证码刷新
            reflushImageCodeSrc: function() {
                var self = this;
                CLData.fetchPicCode(function(res) {
                    self.imageCodeSrc = res;
                });
            },
            // 获取手机验证码
            getMobileCode: function() {
                var self = this;
                var imageCode = self.imageCode;   
                var mobile = self.mobile;
                var ctype = 11;
                
                if(tool.isEmptyString(mobile)) {
                    self.popModal({
                        str: '手机号不能为空！'
                    });
                    return;
                }
                if(!tool.regCheck(mobile, 'mobileReg')) {
                    self.popModal({
                        str: '手机号格式不对！'
                    });
                    return;
                }
                if(tool.isEmptyString(imageCode)) {
                    self.popModal({
                        str: '请先填写图形验证码'
                    });
                    return;
                }
                if(!tool.regCheck(imageCode, 'imageCodeReg')) {
                    self.popModal({
                        str: '图形验证码格式不对！'
                    });
                    return;
                }

                // 如果倒计时为0则进入倒计时状态，并发送验证码请求
                if(!self.countdown) {
                    CLData.fetchMobileCode({
                        imagecode: imageCode, 
                        ctype: ctype, 
                        mobile: mobile
                    }, function(res) {
                        if(res.err){
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
            // 重置登录密码
            resetLoginPwdparas: function() {
                var self = this;
                var imageCode = self.imageCode;
                var mobile = self.mobile;
                var newpwd = self.newpwd;
                var mobcode = self.mobcode;
                var type = 1;

                if(tool.isEmptyString(mobile)) {
                    self.popModal({
                        str: '手机号不能为空！'
                    });
                    return;
                }

                if(!tool.regCheck(mobile, 'mobileReg')) {
                    self.popModal({
                        str: '手机号格式不对！'
                    });
                    return;
                }

                if(tool.isEmptyString(imageCode)) {
                    self.popModal({
                        str: '请先填写图形验证码'
                    });
                    return;
                }

                if(!tool.regCheck(imageCode, 'imageCodeReg')) {
                    self.popModal({
                        str: '图形验证码格式不对！'
                    });
                    return;
                }

                if(tool.isEmptyString(mobcode)) {
                    self.popModal({
                        str: '请先填写短信验证码'
                    });
                    return;
                }

                if(!tool.regCheck(mobcode, 'mobcodeReg')) {
                    self.popModal({
                        str: '短信证码格式不对！'
                    });
                    return;
                }

                if(tool.isEmptyString(newpwd)) {
                    self.popModal({
                        str: '新密码不能为空！'
                    });
                    return;
                }

                if(!tool.regCheck(newpwd, 'passwordReg')) {
                    self.popModal({
                        str: '新密码格式不对！密码只能是由`-`,`_`，字母，数字组成的6-20字符串'
                    });
                    return;
                }

                CLData.postResetLoginPwdparas( {
                    mobile: mobile,
                    newpwd: newpwd,
                    mobcode: mobcode,
                    type: type
                }, function(res) {
                    if(res.err) {
                        self.popModal({
                            str: res.err
                        });
                        return;
                    }else{
                        self.$route.router.go('/signIn');
                    }
                });
                
            }
        }
    }
</script>