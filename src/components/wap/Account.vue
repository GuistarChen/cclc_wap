<style>
  body {
    font-family: Helvetica, sans-serif;
    background-color: #edeff5
  }
  .top_account {
    background: url("/vue_static/img/mine.png") center no-repeat;
    width: 100%;
    background-size: cover;
  }
  .top_account p {
    text-align: center;
    padding-top: 40px;
  }
  .my_wait {
    padding: 15px;
    background: url("/vue_static/img/mywait.png") no-repeat;
    background-size: cover;
    width: 100%;
  }
  table {
    width: 100%;
  }
  .my_wait td {
    font-size: 16px;
  }
  .my_wait tr {
    height: 30px;
    line-height: 30px;
  }
  .chakan_account {
    vertical-align: middle;
    background: url("/vue_static/img/ck_03.jpg") 40px center no-repeat;
    width: 22%;
  }
  .chakan_account2 {
    padding-right:20px;
    background: url("/vue_static/img/ck_03.jpg") right center no-repeat #fff;
  }
  .chongzhi {
    padding: 15px 0 0 15px;
    background: #fff;
    margin: 10px 0;
  }
  .chongzhi table span {
    color: #000;
    font-size: 20px;
  }
  
  table strong {
    font-size: 24px;
    font-weight: normal;
    color: #000;
  }
  
  .line {
    border-bottom: 1px solid #dfdfdf;
  }
  
  .zidong {
    padding: 15px;
    background: #fff;
  }
  
  .jifen {
    background: url("/vue_static/img/Group2.png") 50% 10px no-repeat #fff;
    float: left;
    width: 30%;
    padding: 50px 0 0 0;
  }
  
  .jifen2 {
    background: url("/vue_static/img/Group3.png") 50% 10px no-repeat #fff;
    float: left;
    width: 30%;
    padding: 50px 0 0 0;
  }
  .jifen3 {
    background: url("/vue_static/img/Group4.png") 50% 10px no-repeat #fff;
    float: left;
    width: 30%;
    padding: 50px 0 0 0;
  }
  .licai {
    margin: 10px 0 40px 0;
    text-align: center;
  }
  .hb {
    margin-left: 5%;
  }
  
  .licai p {
    font-size: 16px;
    margin-top: 5px;
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
  .clear {clear:both;}
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
  .hide2 {
    display: none;
  }
  .licai p{
    padding:6px 0;
  }
</style>
<template>
  <div id="app">
     <div class="shade" v-bind:class="{'hide': isHide2}">
      <div class="box-msg-bg2">
      
        <div class="box-msg-center">
          <br>
          <span>确定要退出吗？<span>
        </div>
        <div class="box-msg-bottom">
          <span class="cg" v-touch:tap="hideBox2">取消</span>
          <span class="cw" v-touch:tap="logoutAcount">确定</span>
        </div>
      </div>
    </div>
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
    <div class="top_account">
      <p>
        <a><img style="width:50px;" src="/vue_static/img/tx.png"></a>
      </p>
      <div style="color:#fff;text-align:center;padding-bottom:30px;">Hi,欢迎回来</div>
    </div>
    <div class="my_wait">
      <table>
        <tr>
          <td style="color: #4A4A4A; font-size: 16px;">我的待收（元）</td>
          <td rowspan="3" v-touch:tap="showBox" style="color: #929292;text-align: right;">
            查看详情
            <img style="margin-left: 10px;width:10px;" src="/vue_static/img/ck_03.png"/>
          </td>
        </tr>
        <tr style="height: 10px;"></tr>
        <tr>
          <td><strong>{{(+userInfo.debtamount).toMoneyStr()}}</strong></td>
        </tr>
      </table>
    </div>
    <div class="chongzhi">
      <table>
        <tr>
          <td style="color: #929292;">可用余额（元）</td>
          <td v-touch:tap="showBox" style="text-align: right; font-size: 15px; color: #999;padding-right:15px;">充值、提现
            <img style="margin-left: 10px;width:10px;" src="/vue_static/img/ck_03.png"/>
          </td>
        </tr>
        <tr class="line">
          <td  style="line-height:40px;" colspan="2"><span>{{(+userInfo.balance2).toMoneyStr()}}</span></td>
        </tr>
        <tr style="height:10px;">
          <td></td>
        </tr>
        <tr>
          <td style="color: #929292;">累计收益（元）</td>
        </tr>
        <tr>
          <td  style="line-height:40px;" ><span>{{(+userInfo.total_interest).toMoneyStr()}}</span></td>
        </tr>
      </table>
    </div>
    <div class="zidong">
      <table>
        <tr>
          <td><span style="font-size:18px;">自动购买</span></td>
          <td style="font-size: 15px; text-align: right; color: #999;" v-touch:tap="showBox">
            打开
            <img style="margin-left: 10px;width:10px;" src="/vue_static/img/ck_03.png"/>
          </td>
        </tr>
      </table>
    </div>
    <div class="licai">
      <div class="jifen" v-touch:tap="showBox">
        <p>{{investNum}}个</p>
      </div>
      <div class="jifen2 hb" v-touch:tap="showBox">
        <p>{{bonusNum}}个</p>
      </div>
      <div class="jifen3 hb" v-touch:tap="showBox">
        <p>{{userInfo.integral}}</p>
      </div>
    </div>
    <button v-touch:tap="showBox2" class="exit_btn">退出</button>
    <div id="footer">
         <ul class="menu boxed clearfix">
          <li v-link="{ path:'/'}">
          <a style="padding-top:20px;" ><img style="width:28px;" src="/vue_static/img/ic_06.png">
          <p>首页</p></a>
          </li>
          <li v-link="{path:'/debts'}">
              <br><br>
              <a style="color: #ffffff;">理财</a>
          </li>
          <li v-link="{path:'/account'}">
              <a style="padding-top:20px;"><img style="width:28px;" src="/vue_static/img/index_icon_03.png"><p>我的</p></a>
          </li>
         </ul> 
      </div>
  </div> 
   
</template>
<script>
export default {
    data () {
        return {
           userInfo:{
             integral: 0,
             debtamount: 0,
             balance2: 0,
             total_interest: 0
           },
           bonusNum:0,
           investNum:0,
           isHide: true,
           isHide2:true
        }
    },
    created() {
        this.fetchMyInvest();
    },
    ready() {
        this.fetchUserInfo();
        this.fetchVailableBonusNum();
    },
    methods : {
        fetchUserInfo : function(){
            var self = this;
            CLData.fetchUserInfo(function(res){
                  if(res && !res.err) {
                      self.userInfo = res;
                  } else {
                      console.log(res.err);
                  }
            })
        },
        fetchVailableBonusNum:function(){
            var self = this;
            CLData.fetchVailableBonusNum(function(res){
                  if(res && !res.err) {
                      self.bonusNum = res.total;
                  }
            })
        },
        fetchMyInvest:function(){
            var self = this;
            CLData.fetchMyInvest({pn:1,size:10},function(res){
                  if(res && !res.err) {
                      self.investNum = res.total;
                  } else {
                      self.$route.router.go('/signIn');
                  }
            })
        },
        hideBox:function() {
            var self = this;
            this.isHide = true;
        },
        showBox:function() {
            var self = this;
            this.isHide = false;
        },
        hideBox2:function() {
            var self = this;
            this.isHide2 = true;
        },
        showBox2:function() {
            var self = this;
            this.isHide2 = false;
        },
        jumpDownload:function(){
            location.href='http://a.app.qq.com/o/simple.jsp?pkgname=com.cc.ccfinance&g_f=991653';
        },
        // 账户注销
        logoutAcount: function() {
           var self = this;
           localStorage.removeItem("session");
           localStorage.removeItem("mobile");
            CLData.userLogout(function(res) {
                self.$route.router.go('/signIn');
            });
        },
        // 下载App
        download: function() {
          window.open('http://a.app.qq.com/o/simple.jsp?pkgname=com.cc.ccfinance&g_f=991653');
        }
    }
}
</script>