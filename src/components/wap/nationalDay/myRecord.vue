<template>
    <div class="errorBox" v-if="showError">
        <div class="top"></div>
        <div class="msg">{{errorMsg}}</div>
    </div>
    <div class="photos_head">
        <a v-touch:tap="rollback" class="back"></a>
        我的战绩
    </div>
    <div style="height: 50px;"></div>
    <div class="myRecord" v-if="showList">
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
            <div class="time">数据截止到{{time}}日</div>
        </div>
        <div style="color:#999;background:#fff;">
            <span v-touch:tap="fork(data._id)" class="good" :class="{ zan: ID == data._id}"></span><span v-if="!(ID == data._id)">{{data.comment}}</span>
            <span v-if="(ID == data._id)">{{data.comment+1}}</span>
        </div>
    </div>
</template>
<style>
    .myRecord .myRcd_head {
        background: #e75a12;
        color: #fff;
        padding: 10px 20px;
    }
    
    .myRecord .myRcd_head .mobile {
        font-size: 16px;
    }
    
    .myRecord .myData .myProfit {
        margin-bottom: 10px;
        color: #fff66e;
    }
    
    .myRecord .myData .myProfit span {
        font-size: 24px;
        color: #fff;
    }
    
    .myRecord .myData .myDay span {
        font-size: 20px;
    }
    
    .myRecord .myData .time {
        opacity: .5;
    }
    
    .myRecord .myData {
        color: #fff;
        padding: 10px 20px;
        background: url(/vue_static/national_img/record.png) 90% 60% no-repeat #ff691d;
        background-size: 30%;
    }
    
    .myRecord {
        background: #edeff5;
        padding: 26px 20px;
    }
    
    .photo_footer4 {
        padding: 6px 0;
        bottom: 0;
        width: 100%;
        margin-top: 10px;
    }
    
    .photo_footer4 span {
        width: 45%;
        margin-left: 3.1%;
        display: inline-block;
        border-radius: 4px;
        line-height: 35px;
        text-align: center;
        border: 1px solid rgb(213, 213, 213);
        background: rgb(213, 213, 213);
        color: #696e6f;
    }
    
    .photo_footer4 .upload {
        background: #adb850;
        color: #666d2f;
        border: 1px solid #adb850;
    }
    
    .photos_head .back {
        display: inline-block;
        width: 40px;
        height: 40px;
        position: absolute;
        left: 20px;
        top: 16px;
        background: url("/vue_static/national_img/back2.png") no-repeat;
        background-size: 10px;
    }
    
    .photos_head .share {
        display: inline-block;
        width: 40px;
        height: 40px;
        position: absolute;
        right: 10px;
        top: 16px;
        background: url("/vue_static/national_img/share.png") no-repeat;
        background-size: 20px;
    }
    
    .photos_head {
        position: fixed;
        width: 100%;
        top: 0;
        height: 50px;
        background: #adb850;
        line-height: 50px;
        text-align: center;
        color: #fff;
        font-size: 1.2em;
    }
    
    .tips {
        text-align: center;
        padding-top: 100px;
        background: #edeff5;
        color: #a3a3a3;
    }
    
    .photo_footer3 {
        padding: 6px 0;
        position: fixed;
        bottom: 40%;
        width: 100%;
        background: #edeff5;
        color: #666d2f;
    }
    
    .photo_footer3 span {
        width: 60%;
        margin-left: 20%;
        display: inline-block;
        border-radius: 4px;
        line-height: 43px;
        text-align: center;
        border: 1px solid #adb850;
    }
    
    .photo_footer3 .upload {
        background: #adb850;
    }
    
    .myRecord .good {
        padding-left: 40px;
        background: url(/vue_static/national_img/photo_03.png) 10px center no-repeat;
        background-size: 20px;
        line-height: 50px;
        color: #999999;
    }
    
    .myRecord .zan {
        padding-left: 40px;
        background: url(/vue_static/national_img/photo_05.png) 10px center no-repeat;
        background-size: 20px;
        line-height: 50px;
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
                time:'',
                ID:'',
                hasUpLoad:'',
                errorMsg:'',
                error:'',
                showError:false,
                data: [],
                showList:false
            }
        },
        components: {
        },
        ready() {
            document.title='感谢城城理财为我赚取了一大笔零花钱，有图为证哦！';
            this.getMyMilitaryExploits();
        },
        methods : {
            popModal: function(param){
                var self = this;
                self.showError = true;
                self.errorMsg = param.str;
                setTimeout(function(){
                    self.showError = false;
                }, 1200);
            },
            rollback: function() {
                window.history.back();
            },
            fork: function (id) {
                var self = this;
                CLData.pushPraise({recordId:id,type:2},function(res){
                   if(res.err){
                        if(res.errcode == 1 || res.errcode == 2){
                            self.$route.router.go('/signIn?path=/myRecord');
                        }else {
                            self.popModal({
                                str: res.err
                            });
                        }
                    } else {
                         self.ID = id;
                    }
                })
             },
            upLoad:function(){
                this.isShow = false;
                this.isResult =true;
                this.getMyMilitaryExploits()
            },
            getMyMilitaryExploits:function(){
                var self = this;
                var userid = self.$route.query.userid||'';
                CLData.getMyMilitaryExploits({userid:userid},function(res){
                    if(res.err) {
                        if (res.errcode == 1 || res.errcode == 2) {
                            self.$route.router.go('/signIn?path=/myRecord');
                        } else {
                            self.popModal({
                                str: res.err
                            });
                        }
                     } else {
                        self.showList=true;
                        self.data = res.data;
                        self.time = res.data.createtime.slice(6,11).replace("-","月");
                        if(res.data.state === '未上传'){
                            self.$route.router.go('/uploadRecord');
                        }
                    }
                });
            },
            cancel:function(){
                this.isResult = false;
                this.isShow = true;
            },
            confirm:function(){   
                this.isEnd = false;
            }
        }
    }
</script>