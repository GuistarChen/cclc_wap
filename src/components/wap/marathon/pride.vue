<template>
	<div class="ma_head">
		<img v-bind:src="cdn_url+'ma_05.png'" />
	</div>
	<div class="ma_pride" v-if="((prize !== '')&& !showNum)">
		<div style="height: 20px;"></div>
		<div class="pride_content">
			<img v-bind:src="cdn_url+'ma_10.png'" v-if="(type == 5)">
			<img v-bind:src="cdn_url+'ma_19.png'" v-if="(type == 4)">
			<button class="invest" v-touch:tap="goInvest" v-if="!showNum"></button>
			<div class="text" v-if="!(prize =='')">恭喜! {{prize}}</div>
			<div v-if="(type !== 4)" class="amount"><span>{{ prize.split("元")[0] }}</span></div>
		</div>
		<div style="height: 20px;"></div>
	</div>   
	<div class="ma_jifen" v-if="showNum">
		<div class="jifens">获得<span>{{jifen}}</span>积分</div>
		<button class="ma_btn" v-touch:tap="goExchange"></button>
	</div>
	<div class="ma_hongbao" v-if="(scratchOff > 0)  && (prize == '')">
		<div class="pride_content">
			<div v-if="isShow">
				<img v-bind:src="cdn_url+'ma_04.png'" />
				<button class="begin" v-touch:tap="begin"></button>
			</div>
			<div class="gua_box" id="prize">
				<div class="guajiang" v-if="!result">
					<img v-bind:src="cdn_url+'ma_16.png'" />
					<canvas id="c1" class="canvas"></canvas>
				</div>
			</div>
		</div>
	</div>
	<div class="box_mar" v-if="box"></div>
	<div class="ma_bg">
		<div class="ma_text">
			<img v-bind:src="ma_theme_pic" />
		</div>
	</div>
	<div class="main">{{ma_theme_msg}}</div>
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
<style>
	/*head*/
	
	.clear {
		clear: both;
	}
	
	.ma_head {
		width: 100%;
	}
	
	.ma_head img {
		width: 100%;
	}
	/*hongbao*/
	
	.ma_hongbao {
		background: #1bacff;
		position: relative;
	}
	
	.ma_hongbao .guajiang {
		width: 100%;
		float: left;
		background-color: #1bacff;
		position: relative;
		padding: 20px 0;
	}
	
	.ma_hongbao .gua_box {
		position: absolute;
		left: 0;
		z-index: -999;
		top: 0;
	}
	
	.ma_hongbao .guajiang img {
		width: 80%;
		display: block;
		margin: 0 auto;
	}
	
	@media screen and (max-width: 321px) {
		.box_mar {
			margin-top: 100px;
		}
		.ma_hongbao .canvas {
			width: 78.5%;
			height: 93px;
			left: 10.5%;
			top: 30px;
			background: #ccc;
			position: absolute;
		}
	}
	
	@media screen and (min-width:321px) and (max-width: 361px) {
		.box_mar {
			margin-top: 120px;
		}
		.ma_hongbao .canvas {
			width: 78.5%;
			height: 93px;
			left: 10.5%;
			top: 30px;
			background: #ccc;
			position: absolute;
		}
	}
	
	@media screen and (min-width:361px) and (max-width: 415px) {
		.box_mar {
			margin-top: 130px;
		}
		.ma_hongbao .canvas {
			width: 78.5%;
			height: 93px;
			left: 10.5%;
			top: 30px;
			background: #ccc;
			position: absolute;
		}
	}
	
	@media screen and (min-width:321px) and (max-width: 360px) {
		.box_mar {
			margin-top: 110px;
		}
		.ma_hongbao .canvas {
			width: 78.5%;
			height: 93px;
			left: 10.5%;
			top: 30px;
			background: #ccc;
			position: absolute;
		}
	}
	
	@media screen and (min-width: 321px) and (max-width:361px) {
		.ma_hongbao .canvas {
			width: 78.5%;
			height: 106px;
			left: 10.5%;
			top: 30px;
			background: #ccc;
			position: absolute;
		}
	}
	
	@media screen and (min-width: 361px) and (max-width:413px) {
		.ma_hongbao .canvas {
			width: 78.5%;
			height: 110px;
			left: 10.8%;
			top: 30px;
			background: #ccc;
			position: absolute;
		}
	}
	
	@media screen and (min-width: 413px) {
		.ma_hongbao .canvas {
			width: 78.5%;
			height: 120px;
			left: 10.8%;
			top: 30px;
			background: #ccc;
			position: absolute;
		}
	}
	
	.ma_hongbao .pride_content {
		position: relative;
		padding: 20px 0;
	}
	
	@media screen and (min-width: 320px) and (max-width:375px) {
		.ma_hongbao .begin {
			position: absolute;
			width: 158px;
			height: 35px;
			border: none;
			left: 29%;
			top: 40%;
			background: url(/vue_static/maLaSong_img/ma_08.png) no-repeat;
			background-size: contain;
		}
	}
	
	@media screen and (min-width: 376px) {
		.ma_hongbao .begin {
			position: absolute;
			width: 198px;
			height: 60px;
			border: none;
			left: 26%;
			top: 36%;
			background: url(/vue_static/maLaSong_img/ma_08.png) no-repeat;
			background-size: contain;
		}
	}
	
	@media screen and (max-width: 320px) {
		.ma_hongbao .begin {
			position: absolute;
			width: 158px;
			height: 35px;
			border: none;
			left: 26%;
			top: 34%;
			background: url(/vue_static/maLaSong_img/ma_08.png) no-repeat;
			background-size: contain;
		}
	}
	
	.ma_hongbao .pride_content img {
		width: 80%;
		margin-left: 10%;
	}
	/*pride*/
	
	@media screen and (max-width: 321px) {
		.ma_pride .text {
			position: absolute;
			top: 24px;
			left: 130px;
			color: #e63634;
			font-size: 16px;
		}
		.ma_pride .amount {
			position: absolute;
			top: 50px;
			left: 82px;
			color: #fec768;
			font-size: 20px;
		}
	}
	
	@media screen and (min-width: 322px) and (max-width:361px) {
		.ma_pride .text {
			position: absolute;
			top: 24px;
			left: 150px;
			color: #e63634;
			font-size: 18px;
		}
		.ma_pride .amount {
			position: absolute;
			top: 58px;
			left: 92px;
			color: #fec768;
			font-size: 20px;
		}
	}
	
	@media screen and (min-width: 361px) and (max-width:414px) {
		.ma_pride .text {
			position: absolute;
			top: 24px;
			left: 160px;
			color: #e63634;
			font-size: 18px;
		}
		.ma_pride .amount {
			position: absolute;
			top: 60px;
			left: 96px;
			color: #fec768;
			font-size: 20px;
		}
	}
	
	@media screen and (min-width: 414px) {
		.ma_pride .text {
			position: absolute;
			top: 24px;
			left: 184px;
			color: #e63634;
			font-size: 18px;
		}
		.ma_pride .amount {
			position: absolute;
			top: 68px;
			left: 106px;
			color: #fec768;
			font-size: 24px;
		}
	}
	
	.ma_pride {
		background: #1bacff;
	}
	
	.ma_pride .pride_content {
		position: relative;
	}
	
	.ma_pride .pride_content img {
		width: 80%;
		margin-left: 10%;
	}
	
	@media screen and (max-width: 320px) {
		.ma_pride .invest {
			position: absolute;
			width: 105px;
			border: none;
			height: 40px;
			background: url(/vue_static/maLaSong_img/ma_11.png) no-repeat;
			background-size: contain;
			left: 46%;
			top: 46%;
		}
	}
	
	@media screen and (min-width: 320px) and (max-width:375px) {
		.ma_pride .invest {
			position: absolute;
			width: 105px;
			border: none;
			height: 40px;
			background: url(/vue_static/maLaSong_img/ma_11.png) no-repeat;
			background-size: contain;
			left: 48%;
			top: 46%;
		}
	}
	
	@media screen and (min-width: 375px) and (max-width:450px) {
		.ma_pride .invest {
			position: absolute;
			width: 125px;
			border: none;
			height: 60px;
			background: url(/vue_static/maLaSong_img/ma_11.png) no-repeat;
			background-size: contain;
			left: 48%;
			top: 46%;
		}
	}
	/*jifen*/
	
	@media screen and (max-width:375px) {
		.ma_jifen {
			background: #1bacff;
			padding-top: 20px;
		}
	}
	
	@media screen and (min-width:375px) {
		.ma_jifen {
			background: #1bacff;
			padding: 20px 0;
		}
	}
	
	.ma_jifen .jifens {
		text-align: center;
		font-size: 1.6em;
		color: #fff;
		margin-bottom: 15px;
	}
	
	.ma_jifen .jifens span {
		color: #ffe44d;
	}
	
	.ma_jifen .ma_btn {
		width: 50%;
		border: none;
		margin-left: 25%;
		height: 70px;
		background: url(/vue_static/maLaSong_img/ma_13.png) no-repeat;
		background-size: contain;
	}
	/*bottom*/
	
	.ma_bg {
		background: #5e92c2;
		padding: 20px 0;
		width: 100%;
	}
	
	.ma_text {
		width: 100%;
		background: #5e92c2;
		color: #fff;
		background: url(/vue_static/maLaSong_img/ma.png) center -1px no-repeat;
		padding: 20px 0;
		background-size: cover;
	}
	
	.main {
		padding: 10px 20px 30px 20px;
		text-align: justify;
		background: #5e92c2;
		color: #fff;
	}
	
	.ma_text img {
		width: 77.2%;
		display: block;
		margin: -2px auto 0 auto;
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
<script>
    export default {
    data () {
        return{
            showError: false,
            errorMsg: '',
            cdn_url:CLData.getCDN_URL() + '/vue_static/maLaSong_img/',
            scratchOff: '0',
            prize: '',
            ismousedown: '', //标志用户是否按下鼠标或开始触摸
            show:true,
            isShow:true,
            result:false,
            jifen: '0',
            box:false,
            start:false,
			isHide: true,
            showNum: true,
            type:'',
            ma_theme:{
                pic:{
                    '1':CLData.getCDN_URL() +'/vue_static/maLaSong_img/bg_1.jpg',
                    '2':CLData.getCDN_URL() + '/vue_static/maLaSong_img/bg_2.jpg',
                    '3':CLData.getCDN_URL() + '/vue_static/maLaSong_img/bg_3.jpg',
                    '4':CLData.getCDN_URL() + '/vue_static/maLaSong_img/bg_4.jpg',
                    '5':CLData.getCDN_URL() + '/vue_static/maLaSong_img/bg_5.jpg',
                    '6':CLData.getCDN_URL() + '/vue_static/maLaSong_img/bg_6.jpg',
                    '7':CLData.getCDN_URL() + '/vue_static/maLaSong_img/bg_7.jpg',
                    '8':CLData.getCDN_URL() + '/vue_static/maLaSong_img/bg_8.jpg',
                    '9':CLData.getCDN_URL() + '/vue_static/maLaSong_img/bg_9.jpg',
                    '10':CLData.getCDN_URL() + '/vue_static/maLaSong_img/bg_10.jpg',
                    '11':CLData.getCDN_URL() + '/vue_static/maLaSong_img/bg_11.jpg',
                    '12':CLData.getCDN_URL() + '/vue_static/maLaSong_img/bg_12.jpg',
                    '13':CLData.getCDN_URL() + '/vue_static/maLaSong_img/bg_13.jpg',
                    '14':CLData.getCDN_URL() + '/vue_static/maLaSong_img/bg_14.jpg'
                },
                msg:{
                    '1':' 2013年7月，城城理财诞生了，三年间勤勤恳恳的为87万城理人创造近3亿元理财收益，总成交额近60亿，雄踞中国网贷平台前100强',
                    '2':'中超绿城的主场， 杭城得天独厚的体育、文化、商贸、旅游等交汇之地，各种大型赛事的主办地 被视为杭州体育精神的图腾',
                    '3':'马拉松，不是炫技，不是时尚，更不是一时脑热的跟风，而是发自内心的一种身体与大自然的交流对话，如果已经做好全面的心理、生理准备 那就随风而动吧',
                    '4':'2015年3月，浙江光大金盛资产管理有限公司战略入股城城理财，依托国有企业资源优势，提升平台公信力的同时 有效增强了平台的综合竞争力',
                    '5':'千百年来，西湖风景有着经久不衰的魅力，她的丰姿倩影 青碧透亮 令人一见钟情，正如健康活力的体魄总是令人艳羡不已',
                    '6':'工欲善其事 必先利其器，马拉松是一场漫长的奔跑 充分的热身是顺利完成跑马的重要开端，热身之后在初秋季节的早晨保持体温也非常重要 ',
                    '7':'2015年10月，城城理财以全票通过，正式成为中国国资系互联网金融行业联盟理事单位，成为国资系网贷平台的一员',
                    '8':'银行、证券机构、保险公司等各种金融服务机构汇聚之地，这里是杭州的金融中心 掌握着城市的金融命脉，体现着杭州国际化都市风貌的一面',
                    '9':'行百里者 半九十，马拉松是对身体、意志力的全面考验，完成一次马拉松 不仅是人生的一次独特经历，更会从身到心实现一次酣畅淋漓的洗涤',
                    '10':'2016年6月，深圳中富民强资产管理有限公司战略入股城城理财，助力城城理财进军PPP领域，创新性打造“PPP+P2P”业务，在资产为王的时代 率先起跑',
                    '11':'更低城市密度，更充裕体育设施配套，更年轻居住人群，闻涛路最美樱花跑道已经成为网红，依托奥体博览城的优势  健康、休闲滨江的概念越来越成为现实',
                    '12':'第一座国人自行设计建造的现代化大桥，79年岿然不动，代表着是国人自强不息 拼搏向上的民族气概，是马拉松爱好者心中坚韧不拔的完美体现',
                    '13':'杨公堤坡多 湾多 水多 景多，奔跑此间不仅能充分醉美马拉松的意境，更可以有效地锻炼心肺循环功能  提高耐力、体力',
                    '14':'独乐乐 不如众乐乐，马拉松虽好也不要独享 将自己的经验进行传递让更多人感受跑步的乐趣，祝杭马30年生快，也祝每位跑友突破自己的PB（个人最佳成绩）'
                }
            },
            ma_theme_pic:'',
            ma_theme_msg:''
        }
    },
    ready(){
       this.getScratchOffInfo(); 
       this.getPunchRecord();
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
        getPunchRecord: function () {
            var self = this;
            CLData.getPunchRecord(function (res) {
                if(res.err) {
                    if(res.errcode == 1 || res.errcode == 2) {
                        self.$route.router.go('/signIn?path=/clock');
                    } else {
                        self.popModal({
                            str: res.err
                        });
                    }
                } else {
                    self.ma_theme_pic=self.ma_theme.pic[res.continuousdays?res.continuousdays:3];
                    self.ma_theme_msg=self.ma_theme.msg[res.continuousdays?res.continuousdays:3];
                    if(res.continuousdays % 2 && res.continuousdays < 13) {
                        self.jifen = (res.continuousdays+1)/2*50;
                        self.showNum = true;
                    } else {
                        self.showNum = false;
                    }
                }
            });
        },
        getScratchOffInfo: function () {
            var self = this;
            CLData.getScratchOffInfo(function (res) {
                if(res.err) {
                    if(res.errcode == 1 || res.errcode == 2) {
                        self.$route.router.go('/signIn?path=/clockPride');
                    } else {
                        self.popModal({
                            str: res.err
                        });
                    }
                } else {
                    self.scratchOff = res.scratchOff;
                    self.prize = res.prize;
                     if(res.prize && res.prize.indexOf("抵扣")>-1){
                          self.type =5;
                      }else if(res.prize && res.prize.indexOf("加息")>-1){
                          self.type=4;
                      }
                      console.log(self.type);
                }
            });
        },
        scratchOff_service: function () {
            var self = this;
            CLData.scratchOff({code:'Marathon2016'},function (res) {
                if(res.err) {
                    if(res.errcode == 1 || res.errcode == 2) {
                        self.$route.router.go('/signIn?path=/clockPride');
                    } else {
                        self.popModal({
                            str: res.err
                        });
                    }
                } else {
                      self.scratchOff = res.scratchOff;
                      self.prize = res.prize;
                      self.type = res.type;
                      if(res.prize && res.prize.indexOf("抵扣")>-1){
                          self.type =5;
                      }else if(res.prize && res.prize.indexOf("加息")>-1){
                          self.type=4;
                      }
                }
            });
        },
        initCanvas:function(){
            var c1 = document.getElementById("c1");
            console.log(c1);
            c1.width=c1.clientWidth;
            c1.height=c1.clientHeight;
            var ctx = c1.getContext("2d");
            c1.addEventListener('touchstart', this.eventDown,false);
            c1.addEventListener('touchend', this.eventUp,false);
            c1.addEventListener('touchmove', this.eventMove,false);
            ctx.globalCompositeOperation = "source-over";
            ctx.fillStyle = '#aaaaaa';
            ctx.fillRect(0,0,c1.clientWidth,c1.clientHeight);
            ctx.fill();
            ctx.font = "Bold 30px Arial";
            ctx.textAlign = "center";
            ctx.fillStyle = "#999999";
            ctx.fillText("刮一刮",c1.width/2,50);//把这个属性设为这个就可以做出圆形橡皮擦的效果
            //有些老的手机自带浏览器不支持destination-out,下面的代码中有修复的方法
            ctx.globalCompositeOperation = 'destination-out';
        },
        eventDown:function(e){
            var self = this;
            e.preventDefault();
            self.ismousedown=true;
        },
        eventUp:function(e){
            var self = this;
            var c1 = document.getElementById("c1");
            var ctx = c1.getContext("2d");
            e.preventDefault();
            //得到canvas的全部数据
            var a = ctx.getImageData(0,0,c1.width,c1.height);
            var j=0;
            for(var i=3;i<a.data.length;i+=4){
                if(a.data[i]==0)j++;
            }
            //当被刮开的区域等于一半时，则可以开始处理结果
            if(j>=a.data.length/600){
                self.box = false;
                self.result = true;
                self.scratchOff_service();
            }
            self.ismousedown=false;
        },
        //鼠标移动 和 触摸移动
        eventMove:function(e){
            var self = this;
            var c1 = document.getElementById("c1");
            var ctx = c1.getContext("2d");
            e.preventDefault();
            if(self.ismousedown) {
                if(e.changedTouches){
                    e=e.changedTouches[e.changedTouches.length-1];
                }
                var topY = document.getElementById("prize").offsetTop;
                var oX = c1.offsetLeft,
                oY = c1.offsetTop+topY;
                var x = (e.clientX + document.body.scrollLeft || e.pageX) - 40 || 0,
                y = (e.clientY + window.scrollTop || e.pageY) - 245 || 0;
                var a = document.body.scrollTop
                //画360度的弧线，就是一个圆，因为设置了ctx.globalCompositeOperation = 'destination-out';
                //画出来是透明的
                ctx.beginPath();
                ctx.arc(x, y, 40, 0, Math.PI * 2);
                //下面3行代码是为了修复部分手机浏览器不支持destination-out
                //我也不是很清楚这样做的原理是什么
                c1.style.display = 'none';
                c1.offsetHeight;
                c1.style.display = 'inherit'; 
                ctx.fill();
            }
        },
        //显示刮刮卡
        begin:function(){
            var self = this;
            self.show = true;
            self.isShow = false;
            self.box = true;
            var a =document.getElementById("prize");
            a.style.zIndex='99';
            if(self.show){
                 self.initCanvas();
            }
        }
    }
}
</script>
