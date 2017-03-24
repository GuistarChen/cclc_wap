<template>
    <div class="errorBox" v-if="showError">
        <div class="top"></div>
        <div class="msg">{{errorMsg}}</div>
    </div>
    <div class="photos_head">
        <a v-touch:tap="rollback" class="back"></a>
        围观战绩
    </div>
    <div style="height: 50px;"></div>
    <div class="photo_display">
        <div class="photo_content" v-for="list in list">
            <div class="mobile">{{list.mobile}}</div>
            <div class="photo">
                <div class="imgBox" v-touch:tap="showImg(list.mobile, list.income, list.remaintime, list.buy_num, list.createtime)">
                    <div class="Record">
                        <div class="myData">
                            <div class="myProfit">
                                <div>在城城共赚取</div>
                                <div><span>{{list.income}}元</span></div>
                            </div>
                            <div>陪城城走过</div>
                            <div class="myDay"><span>{{list.remaintime}}</span>天</div>
                            <div style="margin-top:10px;">在城城投资</div>
                            <div class="myDay"><span>{{list.buy_num}}</span>笔</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="color:#999;">
                <span v-touch:tap="fork(list._id,list.comment,$event)" class="good" ></span>
                <span>{{list.comment}}</span>           
            </div>
        </div>
        <div class="clear"></div>
        <infinite-loading :distance="distance" :on-infinite="onInfinite" v-if="isLoadedAllData">
    </div>
    <div class="photo_footer">
        <span class="upload" v-touch:tap="test2">上传战绩</span>
        <span v-touch:tap="test">我的战绩</span>
    </div>
    <!--显大图start-->
    <div class="photo_shade" v-if="isShow">
        <div class="photo_img">
            <!---->
            <div class="myRecord">
                <div class="myRcd_head">
                    <div><strong>城里人</strong></div>
                    <div class="mobile">{{detial.mobile}}</div>
                </div>

                <div class="myData">
                    <div class="myProfit">
                        <div>在城城共赚取</div>
                        <div><span>{{detial.income}}元</span></div>
                    </div>
                    <div>陪城城走过</div>
                    <div class="myDay"><span>{{detial.remaintime}}</span>天</div>
                    <div style="margin-top:10px;">在城城投资</div>
                    <div class="myDay"><span>{{detial.buy_num}}</span>笔</div>
                    <div class="time">数据截止到{{detial.createtime.substring(0, 10)}}</div>
                </div>
            </div>
            <!---->
        </div>
        <div class="photo_close" v-touch:tap="isShow = false"></div>
    </div>
    <!--显大图end-->
</template>
<style>
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
        z-index:999;
        height: 50px;
        background: #adb850;
        line-height: 50px;
        text-align: center;
        color: #fff;
        font-size: 1.2em;
    }
    
    .photo_display {
        background: #edeff5;
        padding: 10px 0 60px 0;
    }
    
    .clear {
        clear: both;
    }
    
    .photo_display .mobile {
        line-height: 30px;
        padding-left: 10px;
        color: #b8b8b8;
    }
    
    .photo_content {
        width: 45%;
        background: #fff;
        margin-left: 3.1%;
        margin-bottom: 10px;
        float: left;
    }
    
    .photo_content img {
        width: 100%;
    }
    
    .photo_content .good {
        padding-left: 40px;
        background: url(/vue_static/national_img/photo_03.png) 10px center no-repeat;
        background-size: 20px;
        line-height: 50px;
        color: #999999;
    }
    
    .photo_content .zan {
        padding-left: 40px;
        background: url(/vue_static/national_img/photo_05.png) 10px center no-repeat;
        background-size: 20px;
        line-height: 50px;
    }
    
    .photo_footer {
        padding: 6px 0;
        position: fixed;
        bottom: 0;
        width: 100%;
        background: #fff;
    }
    
    .photo_footer span {
        width: 45%;
        margin-left: 3.1%;
        display: inline-block;
        border-radius: 4px;
        line-height: 35px;
        text-align: center;
        border: 1px solid #adb850;
        color: #666d2f;
    }
    
    .photo_footer .upload {
        background: #adb850;
        color: #666d2f;
    }
    
    .photo_shade {
        width: 100%;
        position: fixed;
        top: 50px;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
    }
    
    .photo_img {
        width: 80%;
        height: 80%;
        margin: 0 auto;
        margin-top: 20px;
    }
    
    .photo_img img {
        height: 100%;
        width: 100%;
        margin: 0 auto;
    }
    
    .photo_shade .photo_close {
        width: 32px;
        height: 32px;
        background: url(/vue_static/national_img/close.png) no-repeat;
        background-size: cover;
        margin: 0 auto;
        margin-top: 15px;
    }
    
    .imgBox {
        width: 100%;
        height: 170px;
    }
    
    .b {
        border: 1px solid #000;
    }
    
    .Record .myData .myProfit {
        margin-bottom: 10px;
        color: #fff66e;
    }
    
    .Record .myData .myProfit span {
        font-size: 14px;
        color: #fff;
    }
    
    .Record .myData .myDay span {
        font-size: 14px;
    }
    
    .Record .myData .time {
        opacity: .5;
    }
    
    .Record .myData {
        color: #fff;
        padding: 10px 20px;
        background: url(/vue_static/national_img/record.png) 140% 120% no-repeat #ff691d;
        background-size: 67%;
    }
    
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
    }
</style>
<script>
    import InfiniteLoading from 'vue-infinite-loading';
export default {
    data () {
        this.CLData = CLData;
        return {
            toggleClass:1,
            ID:'',
            list:[],
            isShow: false,
            isCheck: false,
            pn: 0,
			distance: 100,
            data:{},
			total: 0,
            temp:'',
			isLoadedAllData: true,
            showUrl: '',
            showError:false,
            error:'',
            error3:'',
            praise:true,
            detial: {},
            errorMsg:''
        }
    },
    components: {
        InfiniteLoading,
    },
    ready() {
        document.title='土豪在哪里呀，土豪在哪里，土豪就在城城理财里！';
        // this.fetchNationdalDayPaper();
         
         this.$broadcast('$InfiniteLoading:reset');
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
        fork: function (id,com,event) {
            var self = this;
                CLData.pushPraise({recordId:id,type:2},function(res){
                    self.error = res.err;
              if(res.err){
                         self.popModal({
                             str: self.error
                            });
                    }else {
                        event.target.style.cssText = 'padding-left: 40px;background: url(/vue_static/national_img/photo_05.png) 10px center no-repeat;background-size: 20px;line-height: 50px;';
                        com ++;
                        self.temp = com;
                        var s = event.target.parentNode.children;
                        s[1].innerHTML = self.temp;
                    }
                })
        },
        showImg: function (mobile, income, remaintime, buy_num, createtime) {
            this.isShow = true;
            this.detial.mobile = mobile;
            this.detial.income = income;
            this.detial.remaintime = remaintime;
            this.detial.buy_num = buy_num;
            this.detial.createtime = createtime;
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
        onInfinite: function () {
				var self = this;
				self.pn++;
				CLData.getMilitaryExploitsList({pn: self.pn, size: 6}, function(res){
                    console.log(res)
					self.total += res.list.length;
					self.list = self.list.concat(res.list);
					if(self.total === res.total){
						self.isLoadedAllData = false;
					}
					self.$broadcast('$InfiniteLoading:loaded');
				});
		},
        take: function () {
            document.getElementById("imgFile").click();
        },
        checkEnd: function (event) {
            var imgUrl = window.URL.createObjectURL(event.target.files[0]);
            localStorage['imgUrl'] = imgUrl; 
            this.upload();
        },
        test:function(){
            var self = this;
                if(!localStorage['session']) {
                self.$route.router.go('/signIn?path=/nationalDay');
            } else {
                self.$route.router.go('/myRecord');
            }
        },
        test2:function(){
            var self = this;
            if(!localStorage['session']) {
                self.$route.router.go('/signIn?path=/nationalDay');
            } else {
                this.getMyMilitaryExploits();
            }
        },
        pushPraise:function(){

        },
    }
}
</script>