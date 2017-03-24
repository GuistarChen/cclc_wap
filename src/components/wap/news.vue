<style>
    .noRecord {
        background: url(/vue_static/img/nocopy_03.png) 50% no-repeat #edeff5;
        ;
        width: 100%;
        height: 40px;
        padding-top: 100px;
        background-size: 40px;
        text-align: center;
        color: #c8c7cc;
    }
    
    .clear {
        clear: both;
    }
    
    .new_pride {
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
    
    .class-a {
        color: #ff3b4c;
        display: inline-block;
        border-bottom: 2px solid #ff3b4c;
    }
    
    .head_new {
        width: 50%;
        float: left;
        text-align: center;
        font-size: 16px;
        background: #fff;
        height: 40px;
        line-height: 38px;
    }
    
    .invite_fr {
        float: left;
        width: 30%;
        color: #ff3b4c;
        line-height: 62px;
        font-size: 16px;
        text-align: center;
    }
    
    .invite_fl {
        float: left;
        width: 60%;
        padding-left: 20px;
        font-size:12px;
    }
    .invite_fr2 {
        float: left;
        width: 40%;
        color: #ff3b4c;
        line-height: 36px;
        font-size: 16px;
        text-align: center;
    }
    
    .invite_fl2 {
        float: left;
        width: 60%;
        padding-left: 20px;
        font-size:12px;
    }
    
    .invite {
        border-bottom: 1px solid #eaeaeb;
        padding: 10px;
        background: #fff;
    }
    
    .ivt_time {
        color: #afafaf;
    }
    
    .ivt_phone {
        color: #3c3c3c;
        font-size: 16px;
    }
    
    .active {
        color: #ff3b4c;
    }
    
    .active span {
        border-bottom: 2px solid #ff3b4c;
        height: 40px;
        display: inline-block;
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
    <div class="new_pride">
        <a v-touch:tap="rollback" class="back"></a>我的战绩
    </div>

    <div class="head_new" @click="sortBy1" :class="{active: isShow ==true}"><span>已奖励</span></div>
    <div class="head_new" @click="sortBy2" :class="{active: isShow ==false}"><span>未奖励</span></div>
    <div class="clear"></div>
    <div style="height:10px;background:#edeff5"></div>
    <div class="invite_box" v-if="isShow">
        <div class="invite" v-for="list in lists">
            <div class="invite_fl">
                <div class="ivt_phone">{{list.mobile}}</div>
                
                <div class="ivt_time">注册时间：{{list.time}}</div>
                <div class="ivt_time">奖励时间：{{list.bonustime}}</div>
            </div>
            <div class="invite_fr">
                {{list.bonus}}元
            </div>
            <div class="clear"></div>
        </div>

    </div>
    <div class="invite_box" v-if="!isShow">
        <div class="noPride">
            <div class="invite" v-for="list in lists">
                <div class="invite_fl2">
                    <div class="ivt_phone">{{list.mobile}}</div>
                    <div class="ivt_time">注册时间：{{list.time}}</div>
                </div>
                <div class="invite_fr2">
                    {{list.stateN}}
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
    <div class="noRecord" v-if="noRecord">
        您未获得邀请奖励，快去邀请吧！
    </div>
    <button style="position:fixed;bottom:0;margin-bottom:8px;" v-touch:tap="showBox"
        class="btn2">继续邀请好友</button>
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
    export default{
        data(){
            this.CLData = CLData;
            return{
                isA:true,
                isB:false,
                sortKey: '已奖励',
                lists:[],
                isShow:true,
                isHide: true,
                noRecord:false,
                inviteLink:'',
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
            // 回退到上一个页面
            rollback: function() {
                window.history.back();
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
                        self.inviteLink = res.invite_link;
                        self.fetchInviteRecord();
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
            fetchInviteRecord:function(){
                var self = this;
                CLData.fetchInviteRecord(function(res){
                    if(res.list.length == 0 ){
                        self.noRecord = true;
                    }else {
                        self.lists = res.list;
                        console.log(res);
                    }
                })
            },
            sortBy1: function () {
                var self = this;
                CLData.fetchInviteRecord(function(res){
                    if(res.list.length ==0 ){
                        self.noRecord = true;
                    }else {
                        self.lists = res.list;
                    }
                });
                self.isShow = true;
            },
            sortBy2: function () {
                var self = this;
                CLData.fetchInviteRecord({ state: 2 },function(res){
                    if(res.list.length ==0 ){
                        self.noRecord = true;
                    }else {
                        self.lists = res.list;
                    }
                });
                self.isShow = false;
            }
        }
    }
</script>