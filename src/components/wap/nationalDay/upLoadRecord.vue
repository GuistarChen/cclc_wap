<template>
    <div class="errorBox" v-if="showError">
        <div class="top"></div>
        <div class="msg">{{errorMsg}}</div>
    </div>
    <div class="photos_head">
        <a v-touch:tap="rollback" class="back"></a>
            我要上传
    </div>

    <div v-if="isResult" style="height: 50px;"></div>

    <div v-if="isShow">
        <div class="tips"  v-if="hasUpLoad" >您还未展示您的战绩，点击上传吧！</div>
        <div class="tips"  v-if="!hasUpLoad" >您已经上传过您的战绩，快去看看吧！</div>
        <div class="photo_footer3">
        <span class="upload" v-if="hasUpLoad" v-touch:tap="upLoad">我要上传</span>
        </div>
    </div>

    <div class="myRecord" v-if="isResult">
        <div class="myRcd_head">
            <div><strong>尊敬的城里人</strong></div>
            <div class="mobile">{{data.mobile}}</div>
        </div>
        <div class="myData">
            <div class="myProfit">
                <div>您在城城共赚取</div>
                <div><span>{{data.income}}元</span></div>
            </div>
            <div>您陪城城走过</div>
            <div class="myDay"><span>{{data.remaintime}}</span>天</div>
            <div style="margin-top:10px;">您在城城投资</div>
            <div class="myDay"><span>{{data.buy_num}}</span>笔</div>
            <div class="time">数据截止到{{(time)}}日</div>
        </div>
        <div class="photo_footer4" v-if="isEnd">
            <span v-touch:tap="cancel">取消</span>
            <span  class="upload" v-touch:tap="confirm">确认上传</span>
        </div>
    </div>
</template>
<style>
    .myRecord .myRcd_head{
        background:#e75a12;
        color:#fff;
        padding:10px 20px ;
    }
    .myRecord .myRcd_head .mobile {
        font-size:16px;
    }
    .myRecord .myData .myProfit {
        margin-bottom:10px;
        color:#fff66e;
    }
    .myRecord .myData .myProfit span{
        font-size:24px;
        color:#fff;
    }
    .myRecord .myData .myDay span {
        font-size:20px;
    }
    .myRecord .myData .time {
        opacity:.5;
    }
    .myRecord .myData {

        color:#fff;
        padding:10px 20px;
        background:url(/vue_static/national_img/record.png) 90% 60% no-repeat #ff691d;
        background-size:30%;
    }
    .myRecord {
        background:#edeff5;
        padding:26px 20px;

    }
    .photo_footer4 {
        padding:6px 0;
        bottom:0;
        width:100%;
        margin-top: 10px;
    }
    .photo_footer4 span{
        width:45%;
        margin-left:3.1%;
        display:inline-block;
        border-radius:4px;
        line-height:35px;
        text-align:center;
        border: 1px solid rgb(213,213,213);
        background: rgb(213,213,213);
        color: #696e6f;
    }
    .photo_footer4 .upload {
        background:#adb850;
        color: #666d2f;
        border:1px solid #adb850;
    }
    .photos_head .back {
        display: inline-block;
        width: 40px;
        height: 40px;
        position: fixed;
        width: 100%;
        top: 0;
        left: 20px;
        top: 16px;
        background: url("/vue_static/national_img/back2.png")  no-repeat;
        background-size:10px;
    }
    .photos_head .share{
        display: inline-block;
        width: 40px;
        height: 40px;
        position: absolute;
        right: 10px;
        top: 16px;
        background: url("/vue_static/national_img/share.png")  no-repeat;
        background-size:20px;
    }
    .photos_head{
        position: fixed;
        top: 0;
        width: 100%;
        height: 50px;
        background: #adb850;
        line-height:50px;
        text-align:center;
        color:#fff;
        font-size:1.2em;
    }
    .tips{
        text-align:center;
        padding-top:100px;
        background:#edeff5;
        color:#a3a3a3;
    }
    .photo_footer3 {
        padding:6px 0;
        position:fixed;
        bottom:40%;
        width:100%;
        background:#edeff5;
        color: #666d2f;
    }
    .photo_footer3 span{
        width:60%;
        margin-left:20%;
        display:inline-block;
        border-radius:4px;
        line-height:43px;
        text-align:center;
        border:1px solid #adb850;
    }
    .photo_footer3 .upload {
        background:#adb850;
    }
    .myRecord .good {
        padding-left:40px;
        background:url(/vue_static/national_img/photo_05.png) 10px center no-repeat #fff;
        background-size:20px;
        line-height:50px;
        color: #999999;
    }
</style>
<script>
    export default {
        data () {
            this.CLData = CLData;
            return {
                isShow:true,
                isResult:false,
                isEnd:true,
                data:[],
                ID:'',
                errorMsg:'',
                showError:false,
                hasUpLoad:true,
                time:''
            }
        },
        components: {
        },
        ready() {
           
        },
        methods : {
               popModal: function(param){
                var self = this;
                self.showError = true;
                self.errorMsg = param.str;
                setTimeout(function(){
                    self.showError = false;
                    if(param.str === '战绩上传失败'){
                        return
                    }else {
                         self.$route.router.go('/myRecord');
                    }
                }, 3000);
            },
            upLoad: function() {
                var self = this;
                CLData.getActivityInfo(function (res) {
                    console.log(res);
                    if(res.err) {
                        self.popModal({
                            str: res.err
                        });
                    } else {
                        self.isShow = false;
                        self.isResult =true;
                        self.getMyMilitaryExploits();
                    }
                });
            },
            rollback: function() {
                window.history.back();
            },
            uploadMilitaryExploits:function(){
                var self = this;
                CLData.uploadMilitaryExploits(function(res){
                    if(res.err){
                        if(res.errcode == 1 || res.errcode == 2) {
                            self.$route.router.go('/signIn?path=/uploadRecord');
                        } else {
                            self.popModal({
                                str: res.err
                            });
                        }
                    }else {
                        self.popModal({
                            str: '上传中。。。'
                        });
                        self.$route.router.go('/myRecord');
                    }
                })
            },
            getMyMilitaryExploits:function(){
                var self = this;
                CLData.getMyMilitaryExploits({}, function(res){
                    console.log(res);
                    if(res.err) {
                        if(res.errcode == 1 || res.errcode == 2) {
                            self.$route.router.go('/signIn?path=/uploadRecord');
                        } else {
                            self.popModal({
                                str: res.err
                            });
                        }
                    } else {
                        self.data = res.data;
                        self.time = self.data.createtime.slice(6,11).replace("-","月");
                        console.log(self.data);
                    }
                });
            },
            cancel:function(){
                   window.history.back();
            },
            confirm:function(){   
                var self = this
                this.uploadMilitaryExploits();
            }
        }
    }
</script>

