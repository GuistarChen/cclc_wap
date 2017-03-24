<template>
    <div class="errorBox" v-if="showError">
        <div class="top"></div>
        <div class="msg">{{errorMsg}}</div>
    </div>
    <div class="photos_head">
        <a v-touch:tap="rollback" class="back"></a>
        霸气照集
    </div>
    <div style="height: 50px;"></div>
    <div class="photo_display">
        <div class="photo_content" v-for="list in list">
            <div class="mobile">{{list.mobile}}</div>
            <div class="photo">
                <div class="imgBox">
                    <img :src="(list.image_url + '!/fwfh/300x300/rotate/auto')" alt="图片加载中" v-touch:tap="showImg(list.image_url)">
                </div>
            </div>
            <div style="color:#999;">
                <span v-touch:tap="fork(list._id,list.comment,$event)" class="good" ></span>
                <span>{{list.comment}}</span>           
            </div>
        </div>
        <infinite-loading :distance="distance" :on-infinite="onInfinite" v-if="isLoadedAllData">
        </infinite-loading>
        <div class="clear"></div>
    </div>
    <div class="photo_footer">
        <span class="upload" v-touch:tap="upload">我要上传</span>
        <span v-touch:tap="myPhoto">我的照片</span>
    </div>

    <!--显大图start-->
    <div class="photo_shade" v-if="isShow">
        <div class="photo_img">
            <img :src="showUrl" />
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
        top: 0;
        width: 100%;
        height: 50px;
        background: #adb850;
        line-height: 50px;
        text-align: center;
        color: #fff;
        z-index:999;
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
        overflow-y: auto;
    }
    
    .photo_img img {
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
        overflow-y: hidden;
    }
    
    .imgBox img {
        width: 100%;
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
            temp: '',
            list:[],
            isA:false,
            isShow: false,
            showUrl: '',
            isCheck: false,
            pn: 0,
			distance: 100,
			total: 0,
			isLoadedAllData: true,
            showError:false
        }

    },
    components: {
        InfiniteLoading,
    },
    ready() {
        document.title='你敢传，我敢送；城城理财邀您展示霸气照';
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
                CLData.pushPraise({recordId:id,type:1},function(res){
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

        showImg: function (src) {
            this.showUrl = src + '!/fwfh/1000x1000/rotate/auto';
            this.isShow = true;
        },

        onInfinite: function () {
            var self = this;
            self.pn++;
            CLData.getPhotoList({pn: self.pn, size: 4}, function(res){
                self.total += res.list.length;
                self.list = self.list.concat(res.list);
                if(self.total === res.total){
                    self.isLoadedAllData = false;
                }
                self.$broadcast('$InfiniteLoading:loaded');
            });
		},

        myPhoto: function () {
            var self = this;
            if(!localStorage['session']) {
                self.$route.router.go('/signIn?path=/myPhoto');
            } else {
                self.$route.router.go('/myPhoto');
            }
        },

        upload: function () {
            var self = this;
            CLData.getActivityInfo(function (res) {
                console.log(res);
                if(res.err) {
                    self.popModal({
                        str: res.err
                    });
                } else {
                    if(!localStorage['session']) {
                        self.$route.router.go('/signIn?path=/uploadPhoto');
                    } else {
                        self.$route.router.go('/uploadPhoto');
                    }
                } 
            });
        },

        pullDownFlush: function() {
            var self = this;
            self.pn = 0;
            self.list = [];
            self.distance = 100;
            self.total = 0;
            self.isLoadedAllData = true;
            self.onInfinite();
        }
    }
}
</script>