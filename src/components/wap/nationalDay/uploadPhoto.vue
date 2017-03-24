<template>
    <div class="photos_head">
        <a v-touch:tap="rollback" class="back"></a>
        我要上传
    </div>

    <div class="view_box">
        <div class="view_img">
            <img v-if="showView" id="view" :src="imgUrl" />
        </div>
        <div class="upload_box">
            <form id="fileinfo" target="f" method="POST" action="/api/uploadBase64Photo">
                <input id="imgFile" name="file" style="display: none;" type="file" accept="image/*" capture="camera" @change="checkEnd"/>
                <input type="hidden" name="bucket" value="cclcupload" />
                <input type='hidden' name='save-key' value='' />
                <input type='hidden' name='signature' value='' />
                <input type='hidden' name='policy' value='' />
                <input type='hidden' name='base64Photo' value='' />
                <input type='hidden' name='expiration' value='' />
            </form>
            <div class="btn1" v-touch:tap="check">选择</div>
            <div class="btn2" v-touch:tap="post">确认上传</div>
            <canvas id="c" width="640" height="480"></canvas>
        </div>
        <iframe name="f" style="display: none;" id="f"></iframe>
    </div>

    <div class="errorBox" style="margin-bottom: 10px;" v-if="showError">
        <div class="top"></div>
        <div class="msg">{{errorMsg}}</div>
    </div>
    <div class="successBox" style="margin-bottom: 10px;" v-if="showSuccess">
        <div class="top"></div>
        <div class="msg">{{successMsg}}</div>
    </div>
</template>

<style>
    .nation_btn {
        width: 45%;
        margin-left: 3.1%;
        margin-top: 200px;
    }
    
    body {
        background-color: #fff;
        height: 100%;
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
    
    .photos_head {
        position: relative;
        height: 50px;
        background: #adb850;
        line-height: 50px;
        text-align: center;
        color: #fff;
        font-size: 1.2em;
    }
    
    .photo_iframe {
        width: 100%;
        position: fixed;
        top: 50px;
        bottom: 0;
    }
    
    .photo_iframe iframe {
        width: 100%;
        height: 100%;
    }
    
    .view_box {
        position: fixed;
        top: 50px;
        width: 100%;
        bottom: 0;
    }
    
    .view_img {
        width: 60%;
        height: 60%;
        margin: 0 auto;
        margin-top: 30px;
        overflow-y: auto;
        background: url(/vue_static/national_img/tip.jpg) no-repeat 0 20px;
        background-size: 100% 40%;
    }
    
    .view_img img {
        width: 100%;
    }
    
    .upload_box {
        width: 90%;
        height: 40px;
        margin: 0 auto;
        margin-top: 30px;
    }
    
    .upload_box div {
        width: 47%;
        height: 100%;
        text-align: center;
        line-height: 40px;
        border-radius: 4px;
    }
    
    .upload_box .btn1 {
        background: rgb(213, 213, 213);
        color: rgb(144, 144, 144);
        float: left;
    }
    
    .upload_box .btn2 {
        background: rgb(173, 183, 87);
        color: rgb(119, 126, 60);
        float: right;
    }
</style>

<script>
    export default {
        data(){
            this.CLData = CLData;
            return {
                imgUrl: '',
                cdnUrl : 'https://activitystatic.b0.upaiyun.com',
                showError: false,
                errorMsg: '',
                showSuccess: false,
                successMsg: '',
                time: 0,
                save_key: '',
                setTime: 0,
                disableUpload:false,
                showView: false
            }
        },
        ready() {
        },
        methods: {
            popModal: function(param){
                var self = this;
                self.showError = true;
                self.errorMsg = param.str;

                setTimeout(function(){
                    self.showError = false;
                }, 2400);
            },
            popModal2: function(param){
                var self = this;
                self.showError = true;
                self.errorMsg = param.str;

                setTimeout(function(){
                    self.showError = false;
                }, 4000);
            },
            successModal: function(param){
                var self = this;
                self.showSuccess = true;
                self.successMsg = param.str;

                setTimeout(function(){
                    self.showSuccess = false;
                }, 1200);
            },
            // 回退到上一个页面
            rollback: function() {
                window.history.back();
            },
            check: function () {
                document.getElementById("imgFile").click();
            },
            checkEnd: function (event) {
                this.imgUrl = window.URL.createObjectURL(event.target.files[0]);
                this.showView = true;
            },
            post: function() {
                var self = this;
                if(document.getElementById("imgFile").value == "") {
                    this.popModal({
                        str: '请选择照片'
                    });
                    return;
                }
                self.showSuccess = true;
                self.successMsg = '请稍等...'; 
                CLData.getUploadSignature({type: 1}, function (res) {
                    console.log(res);
                    if(res.err) {
                        if(res.errcode == 1 || res.errcode == 2) {
                            self.$route.router.go('/signIn?path=/uploadPhoto');
                        } else {
                            self.showSuccess = false;
                            self.successMsg = ''; 
                            self.popModal({
                                str: res.err
                            });
                            return;
                        }
                    }
                    var form = document.forms.namedItem("fileinfo");
                    form['save-key'].value  = res.data['save_key'];
                    form.signature.value  = res.data['signature'];
                    form.policy.value  = res.data['policy'];
                    form.expiration.value  = res.data['expiration'];
                    var url = self.cdnUrl + res.data['save_key'] + '!/fwfh/300x300/rotate/auto';
                    self.save_key = res.data['save_key'];
                    self.successMsg = '照片处理中...'; 
                    //form.base64Photo.value =  self.compressImg(document.getElementById('view'), 0.1, 500, 500);
                    form.action = CLData._createUrl('/api/uploadBase64Photo');
                    //form.submit();
                    self.compressImg(document.getElementById('view'), 0.5, 500, 500,function(err,base64Data){
                        if(self.disableUpload || err)
                            return;
                        CLData.uploadImg({
                            "save-key" : res.data['save_key'],
                            "base64Photo" : base64Data,
                            "signature" : res.data['signature'],
                            "policy" : res.data['policy'],
                            "expiration":res.data['expiration']
                        
                        },function(){}); 
                    });
                    if(self.disableUpload)
                            return;


                                 
                    self.setTime = 0;
                    var http = new XMLHttpRequest();
                    var isCancelUpload = false;
                    var interval = setInterval(function () {
                        if(self.disableUpload)
                            clearInterval(interval);
                        self.setTime ++;
                        if(self.setTime > 30) {
                            isCancelUpload = true;
                            clearInterval(interval);
                            self.showSuccess = false;
                            self.successMsg = '';
                            self.popModal({
                                str: '上传超时,请重新上传'
                            });
                            return;
                        }
                        http.open('HEAD', url, true);
                        http.onreadystatechange = function () {
                            console.log("http.readyState: " + http.readyState);
                            console.log("http.status: " + http.status);
                            if(isCancelUpload)
                                return;
                            if(http.readyState == 4 && (http.status == 200 || http.status == 304)) {
                                clearInterval(interval);
                                self.showSuccess = false;
                                self.successMsg = '';
                                CLData.savePhotoRecord({path: self.cdnUrl+self.save_key}, function (res) {
                                    console.log(res);
                                    if(res.err) {
                                        if(res.errcode == 1 || res.errcode == 2) {
                                            self.$route.router.go('/signIn?path=/uploadPhoto');
                                        } else {
                                            self.popModal({
                                                str: res.err
                                            });
                                        }
                                    } else {
                                        if(res.count == 1) {
                                            self.successModal({
                                                str: '上传成功，恭喜您获得100积分'
                                            });
                                        } else {
                                            self.successModal({
                                                str: '上传成功'
                                            });
                                        }
                                        self.$route.router.go('/myPhoto');
                                    }
                                });
                            }
                        };
                        http.send();
                    },1000);
                });
            },
            /**
             * ========== 图片压缩 ==========
             * source: 目标img的dom
             * qualityLevel: 图片压缩程度 0 - 1
             * dstWidth: 压缩后的高度
             * dstHeight: 压缩后的宽度
             * cb(err, dataUrl): 回调函数
             * 
             * eg: 
             *  var source = document.getElementById('source');
             *  var preview = document.getElementById('preview');
             *  compressImg(source, 0.5, 300, 300, function(err, dataUrl) {
             *    preview.src = dataUrl;
             *  });
             */
            compressImg : function(source, qualityLevel, dstWidth, dstHeight, cb) {
                var self = this;
                if(typeof qualityLevel === 'function') {
                    cb = qualityLevel;
                    qualityLevel = null;
                    dstWidth = null;
                    dstHeight = null;
                }

                if(typeof dstWidth === 'function') {
                    cb = dstWidth;
                    dstWidth = null;
                    dstHeight = null;
                }

                if(typeof dstHeight === 'function') {
                    cb = dstHeight;
                    dstHeight = null;
                }

                //source.onload = function() {
                    try {
                        var canvas = document.createElement('canvas');
                        var width = source.naturalWidth;
                        var height = source.naturalHeight;
                        var context = canvas.getContext('2d');


                        qualityLevel = qualityLevel || 1;
                        dstWidth = dstWidth || width;
                        dstHeight = parseInt((dstWidth/width)*height);
                        //dstWidth =  width;
                        //dstHeight = height;

                        canvas.width = dstWidth;
                        canvas.height = dstHeight;

                        var sx = 0;
                        var sy = 0;
                        var sWidth = width;
                        var sHeight = height;
                        var dx = 0;
                        var dy = 0;
                        var dWidth = dstWidth;
                        var dHeight = dstHeight;
                        
                        EXIF.getData(document.getElementById('imgFile').files[0], function () {
                            switch(this.exifdata.Orientation){
                                case 8:        
                                case 3:
                                case 6:
                                
                                    self.disableUpload = true;
                                    self.showSuccess = false;
                                    self.successMsg = ''; 
                                    self.popModal2({
                                        str: '哎,程序员哥哥说:还是去图库选吧'
                                    });
        
                                    break;
                                //横后1
                                default:
                                    self.disableUpload = false;
                                    context.drawImage(source, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
                                    break;
                            }
                            

                            var dataUrl = canvas.toDataURL('image/jpeg', qualityLevel);
                            cb(self.disableUpload ? 'err' : null,dataUrl);
                        });
                        
                    } catch(e) {
                        cb(e);
                    }
                //};
            }
        }
    }
</script>