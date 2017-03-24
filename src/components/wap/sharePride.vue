<style>
    body {
        background-color: #edeff5;
    }
    
    .yq_pride {
        background: #fff;
        line-height: 50px;
        font-size: 20px;
        text-align: center;
        border-bottom: 1px solid #f4f4f4;
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
    
    .red_yq {
        color: #d93c4c;
        font-size: 12px;
    }
    
    .yaoqing_head {
        background: #fff;
        padding-top: 30px;
        text-align: center;
        background-size: 120px;
        position: relative;
        padding-bottom: 20px;
    }
    
    .btn_yq {
        width: 40px;
        height: 10px;
        background: url("/vue_static/img/yq2_03.png") no-repeat;
        border: none;
        background-size: cover;
        position: absolute;
        left: 50%;
        margin-left: -20px;
        bottom: 0;
    }
    
    .btn_yq2 {
        width: 40px;
        height: 10px;
        background: url("/vue_static/img/yq_07.png") no-repeat;
        border: none;
        background-size: cover;
        position: absolute;
        left: 50%;
        margin-left: -20px;
        bottom: 0;
    }
    
    .app_yq {
        width: 100%;
        background: #f5f5f5;
        background-size: 200px;
        overflow: hidden;
    }
    
    .app_yq img {
        width: 70%;
        margin-left: 15%;
        margin-top: 10px;
    }
    
    .myResult {
        border-left: 2px solid #ff3b4c;
        background: #fff;
        margin-top: 10px;
        height: 60px;
        line-height: 60px;
        font-size: 16px;
    }
    
    .clear {
        clear: both;
    }
    
    .my_fl {
        float: left;
        padding-left: 10px;
    }
    
    .my_fr {
        float: right;
        padding-right: 30px;
        background: url("/vue_static/img/ck_03.png") 160px center no-repeat;
        background-size: 12px;
        color: #b3b3b3;
    }
    
    .myResult span {
        color: #ff3b4c;
    }
    
    .steps {
        background: url("/vue_static/img/step.png") 50% 20px no-repeat #fff;
        margin-top: 10px;
        height: 320px;
        background-size: 300px;
        padding: 12px;
        margin-bottom: 60px;
        font-size: 16px;
    }
    
    .jz_content_open-enter {
        animation: jz_content_open-in .9s;
    }
    
    .jz_content_open-leave {
        animation: jz_content_open-out .9s;
    }
    
    @keyframes jz_content_open-in {
        from {
            height: 0;
        }
        to {
            height: 290px;
        }
    }
    
    @keyframes jz_content_open-out {
        from {
            height: 290px;
        }
        to {
            height: 0;
        }
    }
    
    .click {
        background: url(/vue_static/img/yq_03_01.png) no-repeat;
        width: 66px;
        height: 66px;
        background-size: 66px;
        position: relative;
        margin-left: 50%;
        left: -33px;
    }
    
    .saomiao {
        position: absolute;
        background: url(/vue_static/img/yq_03_03.png) no-repeat;
        width: 40px;
        height: 40px;
        background-size: 40px;
        left: 84px;
    }
    
    .text_yq {
        margin-top: 10px;
    }
    
    /* 弹窗 */
    .shade {
        width: 100%;
        background: transparent;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.3);
        top: 0;
        bottom: 0;
    }
    
    .box-msg-bg {
        width: 90%;
        height: 180px;
        margin: 0 auto;
        background: #fff;
        position: relative;
        top: 100px;
        border-radius: 8px;
    }
    
    .box-msg-bg2 {
        width: 90%;
        height: 120px;
        margin: 0 auto;
        background: #fff;
        position: relative;
        top: 100px;
        border-radius: 8px;
    }
    
    .box-msg-top {
        width: 100%;
        display: block;
        height: 70px;
    }
    
    .box-msg-top img {
        width: 50px;
        height: 50px;
        position: relative;
        top: 15px;
        display: block;
        margin: 0 auto;
    }
    
    .box-msg-center {
        font-size: 19px;
        color: #4A4A4A;
        height: 100px;
        position: relative;
        top: 10px;
    }
    
    .box-msg-center span {
        display: block;
        text-align: center;
        height: 20px;
        line-height: 20px;
    }
    
    .box-msg-bottom {
        width: 100%;
        font-size: 14px;
        height: 50px;
        position: relative;
        top: -10px;
    }
    
    .box-msg-bottom span {
        width: 50%;
        height: 100%;
        float: left;
        text-align: center;
        display: block;
        line-height: 50px;
    }
    
    .clear {
        clear: both;
    }
    
    .cw {
        color: #FFF;
        background: rgb(235, 78, 83);
        border-bottom-right-radius: 8px;
    }
    
    .cg {
        color: #4A4A4A;
        background: rgb(241, 241, 241);
        border-bottom-left-radius: 8px;
    }
    /* 弹窗 */
</style>
<template>
    <div class="yq_pride">
        <a v-touch:tap="rollback" class="back"></a>邀请有奖
    </div>
    <div class="yaoqing_head">
        <div class="click" @click="toggleJZ">
            <div class="saomiao">

            </div>
        </div>
        <div class="text_yq">邀请您的好友来理财</div>
        <div class="red_yq">成功邀请一位好友理财，即可获得8元红包奖励哦！</div>
        <button v-if="isOpen" class="btn_yq" @click="toggleJZ"></button>
        <button v-if="!isOpen" class="btn_yq2" @click="toggleJZ"></button>
    </div>
    <div class="app_yq" v-if="isShow" transition="jz_content_open">
        <img class="app_yq_img" :src="'http://qr.liantu.com/api.php?&w=200&text='+inviteLink" alt="">
    </div>

    <div class="myResult">
        <div class="my_fl">我的战绩</div>
        <div v-link="{path:'/new'}" class="my_fr">邀请过<span>{{userInfo.total_invite}}</span>人，交易<span>{{userInfo.total_invite_buy}}</span>人</div>
        <div class="clear"></div>
    </div>
    <div class="steps">
        邀请流程
    </div>
    <button style="position: fixed; bottom: 0; margin-bottom: 8px;" v-touch:tap="showBox"
        class="btn2">发送邀请链接</button>
    <div class="errorBox" style="margin-bottom: 10px;" v-if="showError">
        <div class="top"></div>
        <div class="msg">{{errorMsg}}</div>
    </div>
    <div class="successBox" style="margin-bottom: 10px;" v-if="showSuccess">
        <div class="top"></div>
        <div class="msg">{{successMsg}}</div>
    </div>
    <!--提示下载框-->
    <div class="shade" v-bind:class="{'hide': isHide}">
        <div class="box-msg-bg">
            <div class="box-msg-top">
                <img class="box-msg-top" src="/vue_static/img/box_img.png" />
            </div>
            <div class="box-msg-center">
                <span>更多操作请下载使用App<span>
              <span>是否立即下载？</span>
            </div>
            <div class="box-msg-bottom">
                <span class="cg" v-touch:tap="hideBox">取消</span>
                <span class="cw" v-touch:tap="download">确定</span>
            </div>
        </div>
    </div>
    <!--提示下载框-->
</template>
<script>
    export default {
        data () {
            this.CLData = CLData;
            return {
                isOpen: true,
                isShow: false,
                inviteLink:'',
                userInfo: {
                    total_invite: 0,
                    total_invite_buy: 0
                },
                isHide: true,
                showError: false,
                errorMsg: '',
                showSuccess: false,
                successMsg: ''
            }
        },
        ready() {    
            this.fetchUserInfo();
        },
        methods: {
            toggleJZ: function () {
                var self = this;
                this.isShow = !this.isShow;
                this.isOpen = !this.isOpen;
            },
            // 隐藏弹窗
            hideBox: function() {
                var self = this;
                this.isHide = true;
            },
            // 显示弹窗
            showBox:function() {
                var self = this;
                this.isHide = false;
            },
            // 下载App
            download: function() {
                window.open('http://a.app.qq.com/o/simple.jsp?pkgname=com.cc.ccfinance&g_f=991653');
            },
            // 获取邀请链接
            fetchUserInfo : function(){
                var self = this;
                CLData.fetchUserInfo(function(res){
                    if(res && !res.err) {
                        self.userInfo = res;
                        self.inviteLink = res.invite_link;
                    } else {
                        console.log(res.err);
                        self.$route.router.go('/signIn');
                    }
                })
            },
            // 剪切板事件
            copySucess: function(e) {
                var self = this;

                if(self.inviteLink == '') {
                    var self = this;
                    self.showError = true;
                    self.errorMsg = '请先登录后再次获取邀请链接';

                    setTimeout(function(){
                        self.showError = false;
                    }, 1200);
                } else {
                    self.showSuccess = true;
                    self.successMsg = '邀请链接已经复制到您的粘贴板中';

                    setTimeout(function(){
                        self.showSuccess = false;
                    }, 1200);
                }
            },
            copyError: function(e) {
                var self = this;
                self.showError = true;
                self.errorMsg = '当前浏览器不支持复制功能';

                setTimeout(function(){
                    self.showError = false;
                }, 1200);
            },
            rollback: function() {
                window.history.back();
            }
        }
    }
</script>