<template>
    <div class="errorBox" v-if="showError">
        <div class="top"></div>
        <div class="msg">{{errorMsg}}</div>
    </div>
    <!--confirm-start-->
    <div class="national_day">
        <div class="shade" v-if="isHide">
            <div class="confirm_box">
                <div class="top">
                    {{msg}}
                </div>
                <div class="bottom">
                    <span style="background: rgb(241,241,241); border-bottom-left-radius: 10px;" v-touch:tap="cancel">取消</span>
                    <span style="background: rgb(235,78,83); color: #fff; border-bottom-right-radius: 10px;" v-touch:tap="begin">确定</span>
                </div>
            </div>
        </div>
    </div>
    <!--comfirm-end-->
    <!--顶部背景图-->
    <div class="nation_head">
        <img v-bind:src="cdn_url+'/vue_static/national_img/nation_01.png'">
    </div>
    <!--tab切换-->
    <div class="nation_tab">
        <div class="nation_nav" v-touch:tap="toggle(1)" :class="{current: isActive ==true}">花样阅兵</div>
        <div class="nation_nav" v-touch:tap="toggle(2)" :class="{current: isActive ==false}">实战演习</div>
        <div class="clear"></div>
    </div>
    <!--内容-->
    <div class="nation_parade" v-if="show">
        <!--霸气外露-->
        <div class="tab action_out" v-touch:tap="toggle2(1)" :class="{current: active ==true}">
            <label style=' text-align: center;width: 100%;'>霸气外露</label>
            <button class="btn" v-if="active">当前进行</button>
            <button class="btn" v-if="!active">点击参与</button>
        </div>
        <!--战绩展示-->
        <div class="tab show_result" v-touch:tap="toggle2(2)" :class="{current: active ==false}">
            <label style=' text-align: center;width: 100%;'>战绩展示</label>
            <button class="btn" v-if="active">点击参与</button>
            <button class="btn" v-if="!active">当前进行</button>
        </div>
        <div class="clear"></div>
        <!--活动规则-->
        <div class="parade_rule" v-if="isShow">
            <div class="text">
                活动期间，当天上传健身照、肌肉照、墨镜照等等，只要能彰显霸气，当天即送最高100积分；<br> 活动结束后，点赞数最多的3张照片分别奖励相应用户30000积分、20000积分、10000积分，奖励积分将于活动结束后3个工作日发放。
            </div>
            <div v-link="{ path:'/photos'}" class="photos">
                <img v-bind:src="cdn_url+'/vue_static/national_img/photo.png'">
            </div>
        </div>
        <div class="result_rule" v-if="!isShow">
            <div class="text">
                活动期间，上传您在城城理财的战绩即可获得1000积分；<br> 活动结束后，在参与该活动且在2015年10月8日－2016年10月7日期间，投资总额满10万元，投资次数≥6的投资人中，评选出以下获奖人员（奖励积分将于活动结束后3个工作日发放）：
                <br>——开城元勋：注册时间最早的前3名，奖励50000／30000 / 10000积分；<br> ——开城功臣：邀请投资额最多的前3名，奖励50000／30000 / 10000积分；<br> ——城理泰斗：被赞最多的1名，奖励20000积分。
            </div>
            <div v-link="{ path:'/record'}" class="result">
                <img v-bind:src="cdn_url+'/vue_static/national_img/nation_16.png'">
            </div>
        </div>
        <div class="direction" v-if="isShow">
            <span v-touch:tap="upload2">上传照片</span>
            <span v-touch:tap="myphoto" class="myPhoto">我的照片</span>
        </div>
        <div class="direction" v-if="!isShow">
            <span v-touch:tap="upload">我要上传</span>
            <span v-touch:tap="myRecord" class="myPhoto">我的战绩</span>
        </div>
    </div>
    <div class="nation_exercise" v-if="!show">
        <div class="nav">
            <div class="army" v-touch:tap="toggle3(1)">
                城理军训
                <button class="btns hover" v-if="running">当前进行</button>
                <button class="btns" v-if="!running">点击参与</button>

            </div>
            <div class="invest" v-touch:tap="toggle3(2)">投资演习

                <button class="btns" v-if="!running2">点击参与</button>
                <button class="btns hover" v-if="running2">当前进行</button>
            </div>
            <div class="operate" v-touch:tap="toggle3(3)">实战操作
                <button class="btns hover" v-if="running3">当前进行</button>
                <button class="btns" v-if="!running3">点击参与</button>
            </div>
        </div>
        <div class="army_rule" v-if="running">
            <div class="text">
                活动期间，每人每天1次答题机会，每次限时2分钟，共5题，答对3题以下无奖励，答对3题奖300积分，答对4题奖励400积分，答对5题奖励500积分。
            </div>
            <button v-touch:tap="toggleJZ" class="btn_begin">开始答题</button>
        </div>
        <div class="invest_rule" v-if="running2">
            <div class="text">
                2016年8月31日后注册的新用户，活动期间根据投资流程演示学习完成后，获200积分奖励。
            </div>
            <button v-touch:tap="demo" class="btn_begin">查看演示</button>
        </div>
        <div class="operate_rule" v-if="running3">
            <div class="text">
                活动期间内注册的新用户，活动期间投资额度给予平时2倍积分，即
                <div style="font-size:20px;text-align:center; margin-top:10px">积分值＝2*[投资额/100(取整)]</div>
            </div>
            <button v-touch:tap="goInvest" class="btn_begin">去投资</button>
        </div>
    </div>
    <div v-link="{ path:'/nationRule'}" class="nation_rule">
        活动规则 》
    </div>
</template>
<style>
    .errorBox {
        z-index: 999;
    }
    /*提示答题开始*/
    
    .national_day .shade {
        top: 0;
        bottom: 0;
        width: 100%;
        background: transparent;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.3);
    }
    
    .national_day .shade .confirm_box {
        width: 80%;
        height: 150px;
        background: #fff;
        margin: 0 auto;
        position: relative;
        top: 150px;
        border-radius: 10px;
    }
    
    .national_day .shade .confirm_box .top {
        width: 100%;
        height: 100px;
        text-align: center;
        line-height: 100px;
    }
    
    .national_day .shade .confirm_box .bottom {
        width: 100%;
        height: 50px;
    }
    
    .national_day .shade .confirm_box .bottom span {
        display: block;
        width: 50%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        float: left;
    }
    /*顶部背景图*/
    
    .nation_head {
        width: 100%;
    }
    
    .nation_head img {
        width: 100%;
    }
    /*Tab切换*/
    
    .nation_nav {
        width: 50%;
        float: left;
        background: #bbc756;
        font-size: 1em;
        line-height: 40px;
        text-align: center;
        font-size: 16px;
        color: #6a7132;
    }
    
    .nation_tab .current {
        background: url(/vue_static/national_img/nation_04.png) 15% center no-repeat #9ba547;
        background-size: 20px;
    }
    
    .nation_parade .current {
        border: 2px solid #f5d179;
    }
    
    .nation_nav_current {
        color: #565c22;
        background: url(/vue_static/national_img/nation_01.png) no-repeat #9ba547;
    }
    /*Tab切换*/
    
    .tab {
        width: 45%;
        margin-left: 3.1%;
        background: #aeba44;
        height: 50%;
        float: left;
        padding: 10px;
        font-size: 1.2em;
        margin-top: 10px;
        color: #596c24;
        font-weight: bold;
        border: 2px solid transparent;
    }
    
    .action_out {
        background: url(/vue_static/national_img/nation_11.png) center no-repeat #aeba44;
        background-size: 70%;
    }
    
    .show_result {
        background: url(/vue_static/national_img/nation_08.png) center no-repeat #f49024;
        background-size: 40%;
    }
    
    .clear {
        clear: both;
    }
    
    .nation_rule {
        background: #667c36;
        color: #bbc756;
        text-align: center;
        padding: 30px 0;
    }
    
    .nation_parade {
        background: #667c36;
    }
    
    .nation_parade .direction {}
    
    .nation_parade .direction span {
        display: inline-block;
        width: 45%;
        border-radius: 6px;
        margin-left: 3.1%;
        line-height: 50px;
        text-align: center;
        background: url(/vue_static/national_img/nation_19.png) left bottom no-repeat;
        background-size: cover;
        color: #6f560a;
    }
    
    .nation_parade .direction .myPhoto {
        background: url(/vue_static/national_img/nation_21.png) left bottom no-repeat;
        background-size: cover;
    }
    
    .nation_parade .parade_rule,
    .nation_parade .result_rule {
        position: relative;
        margin-bottom: 20px;
    }
    
    .nation_parade .parade_rule .text,
    .nation_parade .result_rule .text {
        width: 70%;
        padding-left: 3.1%;
        margin-top: 20px;
        color: #bbc756;
        line-height: 24px;
    }
    
    .tab .btn {
        width: 70%;
        margin-top: 58%;
        margin-left: 15%;
        line-height: 16px;
        border-radius: 20px;
        background: #d13855;
        color: #fff;
        border: 2px solid #d9e56f;
    }
    
    .nation_parade .photos {
        position: absolute;
        width: 90px;
        right: 0;
        bottom: 24%;
    }
    
    .nation_parade .photos img {
        width: 100%;
    }
    
    .nation_parade .result {
        position: absolute;
        width: 90px;
        right: 0;
        bottom: 50%;
    }
    
    .nation_parade .result img {
        width: 100%;
    }
    /*实战演习*/
    
    .nation_exercise {
        padding: 20px 5px 0 5px;
        background: #667c36;
    }
    
    .nation_exercise .nav>div {
        display: inline-block;
        width: 30%;
        height: 145px;
        padding: 10px;
        font-weight: bold;
        font-size: 16px;
        margin-left: 2%;
    }
    
    .nation_exercise .army {
        background: url("/vue_static/national_img/yanxi_06.png") center no-repeat #ff9125;
        background-size: 32%;
        color: #9a5613;
    }
    
    .nation_exercise .invest {
        background: url("/vue_static/national_img/yanxi_09.png") center no-repeat #fbc213;
        background-size: 54%;
        color: #965a0d;
    }
    
    .nation_exercise .operate {
        background: url("/vue_static/national_img/yanxi_03.png") center no-repeat #aeba44;
        background-size: 44%;
        color: #596c24;
    }
    
    .nation_exercise .nav .btns {
        font-size: 14px;
        width: 100%;
        text-align: center;
        border-radius: 26px;
        line-height: 26px;
        color: #ffffff;
        margin-top: 74px;
        border: 2px solid #f6d672;
        background: #d13855;
    }
    
    .nation_exercise .nav .hover {
        border: 2px solid #f4af65;
    }
    
    .nation_exercise .army_rule .text,
    .nation_exercise .invest_rule .text,
    .nation_exercise .operate_rule .text {
        color: #bbc756;
        padding: 3.1%;
        margin-top: 20px;
    }
    
    .nation_exercise .army_rule .btn_begin,
    .nation_exercise .invest_rule .btn_begin,
    .nation_exercise .operate_rule .btn_begin {
        width: 90%;
        margin-left: 5%;
        line-height: 40px;
        border-radius: 8px;
        margin-top: 10px;
        color: #72461c;
        font-size: 18px;
        border: none;
        background: url("/vue_static/national_img/btn.png") left bottom no-repeat;
        background-size: cover;
    }
</style>
<script>
    export default{
     
        data(){
            this.CLData = CLData;
            return{
                show:true,
                isShow:true,
                active:true,
                isActive:true,
                running:true,
                running2:false,
                running3:false,
                isHide:false,
                hasChange:true,
                showError:false,
                errorMsg:'',
                error:'',
                error2:'',
                cdn_url:this.CLData.getCDN_URL(),
                userInfo:null,
                timeErr: ''
            }
        },
        ready(){
            document.title='城城理财国庆活动';
            var self = this;
            var sessionid = self.$route.query.sessionid?encodeURIComponent(self.$route.query.sessionid+'='):'';
            var sign = self.$route.query.sign||'';
   
            var ua = window.navigator.userAgent.toLowerCase();
            if(ua.match(/CCLC_Android|cclc_ios/i)){
                // 先清空WAP登录数据
                if(self.$route.query.sessionid){
                    localStorage.removeItem("session");
                    CLData.userLogout(function() {
                        CLData.autoSignFromApp({sessionid: sessionid, sign: sign}, function(data){
                            if(data && data.sessionid){
                                localStorage['session']=data.sessionid;
                            }
                            CLData.fetchUserInfo(function(res){
                                if(res && !res.err) {
                                    self.userInfo = res;
                                }else{
                                    localStorage.removeItem("session");
                                    localStorage.removeItem("mobile");
                                }
                            })
                        });
                    });
                }else{
                    CLData.fetchUserInfo(function(res){
                        if(res && !res.err) {
                            self.userInfo = res;
                        }else{
                            localStorage.removeItem("session");
                            localStorage.removeItem("mobile");
                        }
                    });
                }
            }
        },
        methods:{
             popModal: function(param){
                var self = this;
                self.showError = true;
                self.errorMsg = param.str;
                setTimeout(function(){
                    self.showError = false;
                }, 1200);
            },
            toggle:function(key){
                if(key ==1 ){
                    this.isActive = true;
                    this.show =true;
                }
                if(key ==2){
                    this.isActive =false;
                    this.show = false;
                }
            },
            toggle2:function(key){
                if(key ==1){
                    this.active = true;
                    this.isShow =true;
                }
                if(key ==2 ){
                    this.active = false;
                    this.isShow =false;
                }
            },
            toggle3:function(key){
                    if (key ==1) {
                        this.running = true;
                        this.running2 =false;
                        this.running3 =false;
                    }
                    if(key ==2){
                        this.running = false;
                        this.running2 =true;
                        this.running3 =false;
                    }
                    if(key ==3 ){
                        this.running = false;
                        this.running2 =false;
                        this.running3 =true;
                    }
            },
            getMyMilitaryExploits:function(){
                var self = this;
                 CLData.getMyMilitaryExploits({}, function(res){
                    if (res.err) {
                        if (res.errcode == 1 || res.errcode == 2) {
                            self.$route.router.go('/signIn?path=/nationalDay');
                        } else {
                            self.popModal({
                                str: res.err
                            });
                        }
                    } else {
                        if (res.data.state === '已上传') {
                            self.popModal({
                                str: '您已经上传过啦!'
                            });
                        } else {
                            self.$route.router.go('/uploadRecord');
                        }
                    }
                });
             },
             getMyMilitaryExploits2:function(){
                var self = this;
                CLData.getMyMilitaryExploits({}, function(res){
                    if(res.err){
                          if(res.errcode == 1 || res.errcode ==2){
                         self.$route.router.go('/signIn?path=/nationalDay');
                            }else {
                                    self.popModal({
                                        str: res.err
                            });
                        }
                    }else{
                        if(res.data.state === '已上传'){
                            self.$route.router.go('/myRecord?userid='+(self.userInfo?self.userInfo.userId:''));
                        }else{
                            self.$route.router.go('/uploadRecord');
                        }
                    }
                })
             },
            toggleJZ: function () {
                var self = this;
                CLData.getActivityInfo(function (res) {
                    if(res.err) {
                           if(res.errcode == 1 || res.errcode ==2){
                         self.$route.router.go('/signIn?path=/nationalDay');
                            }else {
                                    self.popModal({
                                        str: res.err
                            });
                        }
                    }else {
                        if(!localStorage['session']|| localStorage['session']==='undefined') {
                                self.$route.router.go('/signIn?path=/nationalDay');
                         } else {
                                self.isHide = true;
                                self.msg = "本次猜谜您有120秒时间，准备好了吗？";
                                self.isFirst = false;
                         }
                    }
                });
              
            },
            goInvest: function() {
                var self = this;
                var ua = window.navigator.userAgent.toLowerCase();
                if(ua.match(/CCLC_Android|cclc_ios/i)){
                    window.location.href='cclc://www.cclc.co/cclc?action=projectlist';
                } else {
                    CLData.fetchAccount(function(res) {
                        if(res.errcode || !res.mobile) {
                            self.$route.router.go('/signIn?gotoUrl=debts');
                        } else {
                            self.$route.router.go('/debts');
                        }
                    });
                }
            },
            begin: function () {
                this.$route.router.go('/question');
            },
            cancel: function () {
                this.isHide = false;
                this.isReady = false;
                this.isFirst = true;
            },
            demo:function(){
                var self = this;
                CLData.getActivityInfo(function (result) {
                    if(result.err) {
                        self.popModal({
                            str: result.err
                        });
                        return;
                    } else {
                        CLData.fetchNationalDayInvestDemo(function (res) {
                            if(res.err) {
                                if(res.errcode == 1 || res.errcode == 2) {
                                    self.$route.router.go('/signIn?path=/nationalDay');
                                } else {
                                    self.popModal({
                                        str: res.err
                                    });
                                }
                            } else {
                                if(res.data.new_user == 1 && res.data.hadInvestDemo == 0) {
                                    self.$route.router.go('/loading');
                                } else {
                                    self.$route.router.go('/oldLoading');
                                }
                            }
                        });
                    }
                });
            },
            upload2:function(){
                var self = this;
                CLData.getActivityInfo(function (res) {
                    console.log(res);
                    if(res.err) {
                        self.popModal({
                            str: res.err
                        });
                    } else {
                        if(!localStorage['session']|| localStorage['session']==='undefined') {
                            self.$route.router.go('/signIn?path=/nationalDay');
                        } else {
                            self.$route.router.go('/uploadPhoto');
                        }
                    }
                });
            },
            myRecord:function(){
                var self = this;
                CLData.getActivityInfo(function (result) {
                    if(result.err) {
                        self.popModal({
                            str: result.err
                        });
                    } else {
                       CLData.fetchUserInfo(function (res) {
                            if(res.err) {
                                if(res.errcode == 1 || res.errcode == 2) {
                                    self.$route.router.go('/signIn?path=/nationalDay');
                                } else {
                                    self.popModal({
                                        str: res.err
                                    });
                                }
                            } else {
                                self.$route.router.go('/myRecord?userid=' + res.userId);
                            }
                        });
                    }
                });
            },
            upload: function () {
                var self = this;
                CLData.getActivityInfo(function (res) {
                    if(res.err) {
                        self.popModal({
                            str: res.err
                        });
                    } else {
                        if(!localStorage['session']|| localStorage['session']==='undefined') {
                            self.$route.router.go('/signIn?path=/nationalDay');
                        } else {
                            self.getMyMilitaryExploits();
                        }
                    }
                });
            },
            myphoto: function () {
                var self = this;
                CLData.getActivityInfo(function (res) {
                    if(res.err) {
                        self.popModal({
                            str: res.err
                        });
                    } else {
                       if(!localStorage['session'] || localStorage['session']==='undefined') {
                            self.$route.router.go('/signIn?path=/myPhoto');
                        } else {
                            self.$route.router.go('/myPhoto');
                        }
                    }
                });
            }
        }
    }
</script>