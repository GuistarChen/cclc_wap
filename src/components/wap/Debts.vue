<style>
	list_right {
		width: 30%;
		float: left;
		position: relative;
	}
	
	.progress_circle {
		width: 62px;
		height: 62px;
		position: absolute;
		border-radius: 50%;
		background: #dbdbdb;
		right: 30px;
		top: 0;
	}
	
	.pie_left {
		width: 62px;
		height: 62px;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.mask {
		width: 58px;
		height: 58px;
		border-radius: 50%;
		left: 2px;
		top: 2px;
		background: #fff;
		position: absolute;
		text-align: center;
		line-height: 56px;
		font-size: 13px;
		color: #777;
	}
	
	.left {
		display: block;
		width: 62px;
		height: 62px;
		background: #ff511c;
		-webkit-border-radius: 50%;
		border-radius: 50%;
		position: absolute;
		top: 0;
		left: 0;
		-webkit-transform: rotate(54deg);
		transform: rotate(54deg);
	}
	
	p,
	h1 {
		margin: 0;
		padding: 0;
	}
	
	h1 {
		text-align: left;
	}
	
	body {
		font-family: Helvetica, sans-serif;
		background: #edeff5;
	}
	
	.fl {
		float: left;
	}
	
	.clear {
		clear: both;
	}
	
	.list_content {
		margin: 10px 0;
		background-color: #fff;
		padding-bottom: 10px;
		overflow: hidden;
	}
	
	.list_main {
		margin-top: 10px;
		position: relative;
	}
	
	.list_title {
		border-bottom: 1px solid #dcdcdc;
		line-height: 35px;
		padding-left: 5%;
		font-size: 16px;
		position: relative;
	}
	
	.list_box {
		margin-bottom: 100px;
		margin-top: 60px;
	}
	
	.list_rate {
		width: 28%;
		font-size: 20px;
		line-height: 40px;
		height: 40px;
		text-align: left;
		padding-top: 8px;
		padding-left: 5%;
	}
	
	.list_rate p {
		color: #bbc4cd;
	}
	
	.list_date {
		font-size: 16px;
		width: 45%;
		text-align: center;
		line-height: 20px;
		padding: 5px 0;
		color: #a5a5a5;
	}
	
	.list_btn {
		font-size: 16px;
		color: #fff;
		background-color: #ff2f46;
		border: none;
		width: 80px;
		height: 40px;
		border-radius: 6px;
		margin-left: 15px;
	}
	
	 .back {
        display: inline-block;
        width: 40px;
        height: 40px;
        position: absolute;
        left: 20px;
        top: 16px;
        background: url("/vue_static/img/back.png")  no-repeat;
        background-size:20px;
    }
      
    .home {
        width: 30px;
        height: 29px;
        display: inline-block;
        background: url("/vue_static/img/ic_06.png") no-repeat;
        background-size:28px;
        position: absolute;
        right: 50px;
        top: 11px;
    }
      .mine {
        width: 30px;
        height: 29px;
        display: inline-block;
        background: url("/vue_static/img/index_icon_03.png") no-repeat;
        background-size:28px;
        position: absolute;
        right: 10px;
        top: 11px;
    }
	.debts_head {
		background: #fff;
		line-height: 50px;
		font-size: 20px;
		text-align: center;
		margin: 0;
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		border-bottom: 1px solid #ccc;
		z-index: 10;
	}
	.debts_mark_xinshou {
		background: url("/vue_static/img/tips.jpg") no-repeat;
		width: 80px;
		height: 24px;
		transform: rotate(30deg);
		display: inline-block;
		padding-left: 34px;
		line-height: 20px;
		color: #fff;
		font-size: 12px;
		position: absolute;
		right: -14px;
		top: 0;
	}
	.debts_mark_jiaxi {
		background: #fdcf00;
		width: 80px;
		height: 20px;
		transform: rotate(30deg);
		display: inline-block;
		padding-left: 34px;
		line-height: 20px;
		color: #fff;
		font-size: 12px;
		position: absolute;
		right: -14px;
		top: 0;
	}
	.debts_mark_huodong {
		background: #ff2f46;
		width: 80px;
		height: 20px;
		transform: rotate(30deg);
		display: inline-block;
		padding-left: 34px;
		line-height: 20px;
		color: #fff;
		font-size: 12px;
		position: absolute;
		right: -14px;
		top: 0;
	}
	.memo {
		background: url("/vue_static/img/memo.jpg") no-repeat;
		width: 80px;
		height: 20px;
		font-size: 12px;
		line-height: 20px;
		display: inline-block;
		color: #fff;
		padding-left: 14px;
		text-align: center;
	}
	/*预期年化收益字体样式*/
	.rateText {
		width: 35%;
		text-align: left;
		color: #c8c7cc;
		font-size: 14px;
		font-family: Helvetica;
		padding-left: 5%;
	}
</style>
<template>
	<div class="debts_head" v-touch:swipedown="pullDownFlush">
		<a v-touch:tap="rollback" class="back"></a>理财列表
		<a v-link="{ path:'/'}" class="home"></a>
		<a v-link="{ path:'/account'}" class="mine"></a>
	</div>
	<div class="list_box">
		<div class="list_content" v-touch:tap="goDebt(debt.id)" v-for="debt in debts">
			<div class="list_title"><span style="line-height:35px;">{{debt.title.length>15? debt.title.substr(0,20)+'...': debt.title}}</span>
				<span :class="getTypeName(debt)">{{getDoings(debt)}}</span><span class="memo" v-if="!!debt.title_memo">{{debt.title_memo}}</span></div>
			<div class="list_main">
				<div class="list_rate fl" style="color: #ff3b4c;" v-if="debt.state == 10 || debt.state == 2"><span style="font-size:36px">{{debt.rate}}</span>%</div>
				<div class="list_rate fl" style="color: #000;" v-else><span style="font-size:30px">{{debt.rate}}%</span></div>
				<div class="list_date fl">
					<p>期限<span style="color:red;" v-if="debt.state == 10 || debt.state == 2">{{debt.period}}</span><span style="color: #787878;"
							v-else>{{debt.period}}</span>{{CLData.formatType(debt.byday)}}</p>
					<p>{{debt.buymin}}元起购</p>
				</div>
				<div class="progress_circle">
					<div class="pie_left">
						<div class="left" :style="clipCircle(debt)" v-if="debt.state == 10 || debt.state == 2"></div>
					</div>
					<div class="mask"><span style="color:#ff3b4c;font-size:16px;" v-if="debt.state == 10 || debt.state == 2">
						{{(debt.inboxtmp / debt.amount * 100).toFixed(1)}}%</span>
						<span v-if="debt.state == -6">已撤销</span>
						<span v-if="debt.state == 11">已售罄</span>
						<span v-if="debt.state == 20">还款中</span>
						<span v-if="debt.state == 22">已还款</span>
					</div>
				</div>
			</div>
			<p class="rateText">预期年化收益</p>
			<div class="clear"></div>
		</div>
		<infinite-loading :distance="distance" :on-infinite="onInfinite" v-if="isLoadedAllData">
		</infinite-loading>
		<div id="footer">
			<ul class="menu boxed clearfix">
				<li v-link="{ path:'/'}">
					<a style="padding-top:20px;"><img style="width:28px;" src="/vue_static/img/ic_06.png">
						<p>首页</p>
					</a>
				</li>
				<li v-link="{path:'/debts'}">
					<br><br>
					<a style="color: #ffffff;">理财</a>
				</li>
				<li v-link="{path:'/account'}">
					<a style="padding-top:20px;"><img style="width:28px;" src="/vue_static/img/index_icon_03.png">
						<p>我的</p>
					</a>
				</li>
			</ul>
		</div>
	</div>
	<div class="successBox" style="margin-bottom: 10px;" v-if="showSuccess">
        <div class="top"></div>
        <div class="msg">{{successMsg}}</div>
    </div>
</template>
<script>
	import InfiniteLoading from 'vue-infinite-loading';
	export default {
		props: {
			now: 30,
			label: true,
		},
		data () {
			this.CLData = CLData;
			return {
				pn: 0,
				debts: [],
				distance: 100,
				total: 0,
				isLoadedAllData: true,
				successMsg: '',
                showSuccess: false
			}
		},
		components: {
			InfiniteLoading,
			'progressbar':VueStrap.progressbar
		},
		ready(){
			this.$broadcast('$InfiniteLoading:reset');
		},
		computed: {
			
		},
		methods : {
			// 理财信息页跳转
			goDebt: function(debtId) {
				var self = this;
				var ua = window.navigator.userAgent.toLowerCase();
				if(ua.match(/CCLC_Android|cclc_ios/i)){
					window.location.href='cclc://www.cclc.co/cclc?action=projectdetails&debtid=' + debtId;
				} else {
					self.$route.router.go('/debt/' + debtId);
				}

			},
			// 下拉刷新
			pullDownFlush: function() {
				var self = this;
				self.pn = 0;
				self.debts = [];
				self.distance = 100;
				self.total = 0;
				self.isLoadedAllData = true;
				self.onInfinite();

				self.showSuccess = true;
				self.successMsg = '刷新成功';
				setTimeout(function(){
					self.showSuccess = false;
				}, 800);
			},
			// 计算圆弧百分比
			clipCircle: function(debt) {
				return 'clip:rect(0,'+(debt.inboxtmp / debt.amount ) * 62+'px,auto,0);'
			},
			// 回退到上一个页面
			rollback: function() {
				window.history.back();
			},
			// 初始化数据
			onInfinite: function () {
				var self = this;
				self.pn++;
				CLData.fetchDebtList({pn: self.pn, size: 6}, function(res){
					self.total += res.list.length;
					self.debts = self.debts.concat(res.list);
					if(self.total === res.total){
						self.isLoadedAllData = false;
					}
					self.$broadcast('$InfiniteLoading:loaded');
				});
			},
			// 计算活动表字段
			getDoings: function(debt) {
				var doing = '';
				if(debt.type == 33) {
					doing = '新手';
				} else if(debt.type == 35) {
					doing = '活动';
				} else if(+debt.increase_rate > 0) {
					doing = '加息';
				}
				return doing;
			},
			// 根据类型返回相应类名
			getTypeName: function(debt) {
				var typeName = '';
				if(debt.type == 33) {
					typeName = 'debts_mark_xinshou';
				} else if(debt.type == 35) {
					typeName = 'debts_mark_huodong';
				} else if(+debt.increase_rate > 0) {
					typeName = 'debts_mark_jiaxi';
				}
				return typeName;
			}
		}
	}
</script>