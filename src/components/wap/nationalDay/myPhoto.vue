<template>
    
       <div class="errorBox" v-if="showError">
        <div class="top"></div>
        <div class="msg">{{errorMsg}}</div>
       </div>
     <div class="photos_head">
        <a  v-touch:tap="rollback" class="back"></a>
            我的照片
     </div>

     <div style="height: 50px;"></div>
     
     <div class="photo_display">
         <div v-for="list in dateList">
            <div style="width: 100%; height: 40px;">
                <div class="date">{{list.date.substring(5,7)}}月{{list.date.substring(8,10)}}号</div>
                <div class="photo_content" v-for="arr in list.arr">
                    <div class="photo">
                        <div class="imgBox">
                            <img :src="(arr.image_url + '!/fwfh/300x300/rotate/auto')" alt="图片加载中" v-touch:tap="showImg(arr.image_url)">
                        </div>
                    </div>
                       <div style="color:#999;background:#fff;">
                        <span  v-touch:tap="fork(arr._id,arr.comment,$event)" class="good"></span><span>{{arr.comment}}</span>
                    </div>
                </div>
            </div>
            <div class="clear"></div>
         </div>
     </div>

     <div class="photo_footer2">
        <span class="upload" v-touch:tap="upload">我要上传</span>
     </div>

     <!--显大图start-->
     <div class="photo_shade" v-if="isShow">
         <div class="photo_img">
             <img :src="showUrl"/>
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
        background: url("/vue_static/national_img/back2.png")  no-repeat;
        background-size:10px;
    }
    .photos_head .share {
        display: inline-block;
        width: 40px;
        height: 40px;
        position: absolute;
        right: 10px;
        top: 16px;
        background: url("/vue_static/national_img/share.png")  no-repeat;
        background-size:20px;
    }
    .photos_head {
        position: fixed;
        top: 0;
        z-index:999;
        width: 100%;
        height: 50px;
        background: #adb850;
        line-height:50px;
        text-align:center;
        color:#fff;
        font-size:1.2em;
    }
    .photo_footer2 {
        padding:6px 0;
        position:fixed;
        bottom:0;
        width:100%;
        background:#fff;
    }
    .photo_footer2 span {
        width:50%;
        margin-left:25%;
        display:inline-block;
        border-radius:4px;
        line-height:35px;
        text-align:center;
        border:1px solid #adb850;
    }
    .photo_footer2 .upload {
        background:#adb850;
        color: #666d2f;
    }

    .photo_display {
        background:#edeff5;
        padding:10px 0 60px 0; 
    }
    .photo_display .date {
        margin-left: 3.1%;
        margin-bottom: 5px;
        color: #6d6d6d;
    }
    .clear {
        clear:both;
    }
    .photo_display .mobile {
        line-height:30px;
        padding-left:10px;
        color: #b8b8b8;
    }
    .photo_content {
        width:45%;
        background:#fff;
        margin-left:3.1%;
        margin-bottom:10px;
        float:left;
    }
    .photo_content img {
        width:100%;
    }
    .photo_content .good {
        padding-left:40px;
        background:url(/vue_static/national_img/photo_05.png) 10px center no-repeat ;
        background-size:20px;
        line-height:50px;
        color: #999999;
    }
  
    .photo_shade {
        width: 100%;
        position: fixed;
        top:50px;
        bottom: 0;
        background:rgba(0,0,0,0.4);
    }
    .photo_img {
        width: 80%;
        height: 75%;
        margin: 0 auto;
        margin-top: 20px;
        overflow-y: auto;
    }
    .photo_img img {
        width: 100%; 
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
     .photo_content .good {
        padding-left:40px;
        background:url(/vue_static/national_img/photo_03.png) 10px center no-repeat ;
        background-size:20px;
        line-height:50px;
        color: #999999;
    }
    .photo_content .zan {
        padding-left:40px;
        background:url(/vue_static/national_img/photo_05.png) 10px center no-repeat ;
        background-size:20px;
        line-height:50px;
    }
</style>
<script>
export default {
   data () {
        this.CLData = CLData;
        return {
            toggleClass:1,
            ID:'',
            list:[],
            isShow: false,
            showUrl: '',
            dateList: [],
            showError:false,
            temp: 0,
            errorMsg: ''
        }
    },
    components: {
    },
    ready() {
        document.title='我在城城理财上传了霸气外露的照片，小伙伴们快来给我点赞吧！';
        this.getMyPhotos();
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
            CLData.pushPraise({recordId:id,type:1},function(res) {
                if(res.err) {
                    if(res.errcode == 1 || res.errcode == 2) {
                        self.self.$route.router.go('/signIn?path=/myRecord');
                    } else {
                        self.popModal({
                            str: res.err
                        });
                    }
                } else {
                    event.target.style.cssText = 'padding-left: 40px;background: url(/vue_static/national_img/photo_05.png) 10px center no-repeat;background-size: 20px;line-height: 50px;';
                    com ++;
                    self.temp = com;
                    var s = event.target.parentNode.children;
                    s[1].innerHTML = self.temp;
                }
            });
         },
        showImg: function (src) {
            this.showUrl = src + '!/fwfh/1000x1000/rotate/auto';
            this.isShow = true;
        },

        getMyPhotos: function () {
            var self = this;
            CLData.getMyPhotos({pn: 1, size: 21}, function(res){
                if(res.err) {
                    if(res.errcode == 1 || res.errcode == 2) {
                        self.self.$route.router.go('/signIn?path=/myRecord');
                    } else {
                        self.popModal({
                            str: res.err
                        });
                    }
                } else {
                    self.dateList = res.list;
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
                    self.$route.router.go('/uploadPhoto');
                } 
            });
        }
    }
}
</script>
