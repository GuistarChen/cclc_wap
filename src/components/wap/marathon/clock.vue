<style>
	.clock {
		width: 100%;
		background: rgb(41, 173, 252);
		height: 721px;
	}
	
	.clock .title {
		width: 100%;
	}
	
	.title img {
		width: 100%;
		margin-bottom: 20px;
	}
	
	.clock .center {
		width: 100%;
		background: url('/vue_static/maLaSong_img/ma_03.png') center no-repeat;
		background-size: 100% 100%;
		height: 210px;
		margin-bottom: 40px;
	}
	
	.center .btns {
		width: 90%;
		height: 180px;
		margin: 0 auto;
	}
	
	.btns .btn {
		width: 25%;
		height: 65px;
		position: relative;
		top: -18px;
		float: right;
	}
	
	.btns .sum {
		width: 45%;
		height: 26px;
		background: rgb(22, 138, 214);
		float: left;
		text-align: center;
		line-height: 26px;
		border-radius: 15px;
		position: relative;
		top: -5px;
		color: rgb(164, 224, 251);
	}
	
	.btns .sum span {
		color: rgb(233, 228, 110);
	}
	
	.btn .img_active {
		width: 34px;
		height: 34px;
		background: url('/vue_static/maLaSong_img/ma_15.png') no-repeat;
		background-size: 100% 100%;
		color: #fff;
		font-weight: bold;
		text-align: center;
		line-height: 34px;
		font-size: 15px;
		margin: 0 auto;
	}
	
	.btn .img {
		width: 34px;
		height: 34px;
		background: url('/vue_static/maLaSong_img/ma_14.png') no-repeat;
		background-size: 100% 100%;
		color: #fff;
		font-weight: bold;
		text-align: center;
		line-height: 34px;
		font-size: 15px;
		margin: 0 auto;
	}
	
	.clock .bottom {
		width: 100%;
	}
	
	.bottom .jifen_btn {
		width: 20%;
		margin-left: 10%;
		float: left;
		position: relative;
		top: 30px;
	}
	
	.bottom .clock_btn {
		width: 30%;
		margin-left: 5%;
		margin-right: 5%;
		float: left;
	}
	
	.bottom .rule_btn {
		width: 20%;
		margin-right: 10%;
		float: left;
		position: relative;
		top: 18px;
	}
	
	.clock .bottom img {
		width: 100%;
		margin-bottom: 20px;
	}
	
	.clear {
		clear: both;
	}
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
  .cw {
    color: #FFF;
    background: rgb(235, 78, 83);
    border-bottom-right-radius: 8px;
  }
  .exit_btn{
    background:#c0c0c0;
    color:#fff;
    border-radius:6px;
    width:90%;
    margin-left:5%;
    margin-bottom:130px;
    border:none;
    font-size:18px;
    height:40px;
    line-height:40px;
    margin-top:20px;
  }
  .cg {
    color: #4A4A4A;
    background: rgb(241, 241, 241);
    border-bottom-left-radius: 8px;
  }
  .exit{margin:10px 0 0px 0;padding-right:5%;text-align:right;line-height:40px;height:40px;background:#fff;}
  .hide {
    display: none;
  }
</style>

<template>
	<div class="clock">
		<div class="title">
			<img v-bind:src="cdn_url+'ma_01.png'" />
		</div>
		<div class="center">
			<div class="btns">
				<div class="btn">
					<div v-if="records[3] == 0" class="img">04</div>
					<div v-if="records[3] == 1" class="img_active">04</div>
				</div>
				<div class="btn">
					<div v-if="records[2] == 0" class="img">03</div>
					<div v-if="records[2] == 1" class="img_active">03</div>
				</div>
				<div class="btn">
					<div v-if="records[1] == 0" class="img">02</div>
					<div v-if="records[1] == 1" class="img_active">02</div>
				</div>
				<div class="btn">
					<div v-if="records[0] == 0" class="img">01</div>
					<div v-if="records[0] == 1" class="img_active">01</div>
				</div>
				<div class="btn">
					<div v-if="records[4] == 0" class="img">05</div>
					<div v-if="records[4] == 1" class="img_active">05</div>
				</div>
				<div class="btn">
					<div v-if="records[5] == 0" class="img">06</div>
					<div v-if="records[5] == 1" class="img_active">06</div>
				</div>
				<div class="btn">
					<div v-if="records[6] == 0" class="img">07</div>
					<div v-if="records[6] == 1" class="img_active">07</div>
				</div>
				<div class="btn">
					<div v-if="records[7] == 0" class="img">08</div>
					<div v-if="records[7] == 1" class="img_active">08</div>
				</div>
				<div class="btn">
					<div v-if="records[11] == 0" class="img">12</div>
					<div v-if="records[11] == 1" class="img_active">12</div>
				</div>
				<div class="btn">
					<div v-if="records[10] == 0" class="img">11</div>
					<div v-if="records[10] == 1" class="img_active">11</div>
				</div>
				<div class="btn">
					<div v-if="records[9] == 0" class="img">10</div>
					<div v-if="records[9] == 1" class="img_active">10</div>
				</div>
				<div class="btn">
					<div v-if="records[8] == 0" class="img">09</div>
					<div v-if="records[8] == 1" class="img_active">09</div>
				</div>
				<div class="btn">
					<div v-if="records[12] == 0" class="img">13</div>
					<div v-if="records[12] == 1" class="img_active">13</div>
				</div>
				<div class="btn">
					<div v-if="records[13] == 0" class="img">14</div>
					<div v-if="records[13] == 1" class="img_active">14</div>
				</div>
				<div class="sum">已连续打卡<span>{{continuousdays}}</span>天</div>
			</div>
		</div>
		<div class="bottom">
			<div class="jifen_btn">
				<img v-bind:src="cdn_url + 'ma_09.png'" v-touch:tap="goExchange" />
			</div>
			<div class="clock_btn">
				<div v-if="punchIn == 0"><img v-bind:src="cdn_url + 'ma_06.png'" v-touch:tap="punchInF" /></div>
				<div v-if="punchIn == 1"><img v-bind:src="cdn_url + 'ma_02.png'" v-link="{ path: '/clockPride'}" /></div>
			</div>
			<div class="rule_btn">
				<img v-bind:src="cdn_url + 'ma_12.png'" v-link="{ path:'/clockRule'}" />
			</div>
		</div>
		<div class="clear"></div>
		<div class="bot_box"></div>
	</div>
	<!--errorBoxStart-->
	<div class="errorBox" v-if="showError">
		<div class="top"></div>
		<div class="msg">{{errorMsg}}</div>
	</div>
	<!--errorBoxEnd-->
	<!--提示下载框-->
    <div class="shade" v-bind:class="{'hide': isHide}">
      <div class="box-msg-bg">
        <div class="box-msg-top">
          <img class="box-msg-top" src="/vue_static/img/box_img.png"/>
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
        data() {
            return {
                showError: false,
                errorMsg: '',
                cdn_url:CLData.getCDN_URL() + '/vue_static/maLaSong_img/',
                punchIn: '0',
                continuousdays: '0',
                records: [],
				isHide: true,
				userInfo:null
            }
        },
        ready() {
			var ua = window.navigator.userAgent.toLowerCase();
            if(ua.match(/cclc_android/i)){
				if (window.WebViewJavascriptBridge) {
					var bridge=WebViewJavascriptBridge
					bridge.registerHandler("receiveSessionidFromApp", function(data, responseCallback) {
						alert(JSON.stringify(data));
						location.reload();
						//responseCallback(data);
					});
				} else {
					document.addEventListener('WebViewJavascriptBridgeReady', function onBridgeReady(event) {
						var bridge = event.bridge;
						bridge.registerHandler("receiveSessionidFromApp", function(data, responseCallback) {
							alert(JSON.stringify(data));
							location.reload();
							//responseCallback(data);
						});
					},false);
				}

			}else if(ua.match(/cclc_ios/i)){
				this.setupWebViewJavascriptBridge(function(bridge) {
					//注册OC可以调用的JS方法
					bridge.registerHandler('receiveSessionidFromApp', function(data, responseCallback) {
						var responseData = { 'Javascript Says':'Right back atcha!' }
						//alert(JSON.stringify(data));
						location.reload();
						//responseCallback(responseData);
					})
				})
			}
			this.fetchUserInfo();
        },
        methods: {
            popModal: function(param){
                var self = this;
                self.showError = true;
                self.errorMsg = param.str;
                setTimeout(function(){
                    self.showError = false;
                }, 1200);
            },
			fetchUserInfo : function(){
				var self = this;
				var sessionid = self.$route.query.sessionid?encodeURIComponent(self.$route.query.sessionid+'='):'';
            	var sign = self.$route.query.sign||'';
           	 	var ua = window.navigator.userAgent.toLowerCase();
            	if(ua.match(/cclc_android|cclc_ios/i) && self.$route.query.sessionid){
					localStorage.removeItem("session");
					CLData.userLogout(function() {
						CLData.autoSignFromApp({sessionid: sessionid, sign: sign}, function(data){
							if(data && data.sessionid){
								localStorage['session']=data.sessionid;
							}
							CLData.fetchUserInfo(function(res){
								if(res && !res.err) {
									self.userInfo = res;
								}
								self.getPunchRecord();
							});
						});
					});
				}else{
	               CLData.fetchUserInfo(function(res){
						if(res && !res.err) {
							self.userInfo = res;
						}
						self.getPunchRecord();
					});
				}
			},
			punchInF: function () {
                var self = this;
				var sessionid = self.$route.query.sessionid?encodeURIComponent(self.$route.query.sessionid+'='):'';
            	var sign = self.$route.query.sign||'';
           	 	var ua = window.navigator.userAgent.toLowerCase();
            	if(!self.userInfo && ua.match(/cclc_android|cclc_ios/i) && self.$route.query.sessionid){
					localStorage.removeItem("session");
					CLData.userLogout(function() {
						CLData.autoSignFromApp({sessionid: sessionid, sign: sign}, function(data){
							if(data && data.sessionid){
								localStorage['session']=data.sessionid;
							}
							CLData.punchIn(function (res) {
			                    CLData.signIn(function (res1) {
			                        if(res.err) {
			                            if(res.errcode == 1 || res.errcode == 2) {
			                            	var ua = window.navigator.userAgent.toLowerCase();
											if(ua.match(/cclc_ios/i)){
												window.location.href='cclc://www.cclc.co/cclc?action=login';
											}else{
												self.$route.router.go('/signIn?path=/clock');
											}
			                            } else {
			                                self.popModal({
			                                    str: res.err
			                                });
			                            }
			                        }else{
			                            self.$route.router.go('/clockPride');
			                        }
			                    });
			                });
						});
					});
				}else{
	                CLData.punchIn(function (res) {
	                    CLData.signIn(function (res1) {
	                        if(res.err) {
	                            if(res.errcode == 1 || res.errcode == 2) {
									var ua = window.navigator.userAgent.toLowerCase();
									if(ua.match(/cclc_ios/i)){
										window.location.href='cclc://www.cclc.co/cclc?action=login';
									}else{
										self.$route.router.go('/signIn?path=/clock');
									}
	                            } else {
	                                self.popModal({
	                                    str: res.err
	                                });
	                            }
	                        }else{
	                            self.$route.router.go('/clockPride');
	                        }
	                    });
	                });
				}
            },
			hideBox:function() {
				var self = this;
				this.isHide = true;
        	},
			// 下载App
        	download: function() {
				var self = this;
				this.isHide = true;  
          		window.open('http://a.app.qq.com/o/simple.jsp?pkgname=com.cc.ccfinance&g_f=991653');
			},
			goExchange: function() {
				var self = this;
				var ua = window.navigator.userAgent.toLowerCase();
				if(ua.match(/CCLC_Android|cclc_ios/i)){
					window.location.href='cclc://www.cclc.co/cclc?action=intergation';
				} else {
            		self.isHide = false;
				}
            },
            getPunchRecord: function () {
            	var self = this;
				CLData.getPunchRecord(function (res) {
					if(res.err) {
						self.records = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
						self.continuousdays = 0;
						self.punchIn = 0;
					} else {
						self.records = res.list;
						self.continuousdays = res.continuousdays;
						self.punchIn = res.punchIn;
					}
				});
            },
			setupWebViewJavascriptBridge:function(callback){
				if (window.WebViewJavascriptBridge) { 
					return callback(WebViewJavascriptBridge);
				}
				if (window.WVJBCallbacks) { 
					return window.WVJBCallbacks.push(callback);
				}
				window.WVJBCallbacks = [callback];
				var WVJBIframe = document.createElement('iframe');
				WVJBIframe.style.display = 'none';
				WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
				document.documentElement.appendChild(WVJBIframe);
				setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
			}
        }
    }
</script>
