webpackJsonp([19],{2:function(t,e,a){function o(t,e){for(var a=0;a<t.length;a++){var o=t[a],i=u[o.id];if(i){i.refs++;for(var n=0;n<i.parts.length;n++)i.parts[n](o.parts[n]);for(;n<o.parts.length;n++)i.parts.push(d(o.parts[n],e))}else{for(var s=[],n=0;n<o.parts.length;n++)s.push(d(o.parts[n],e));u[o.id]={id:o.id,refs:1,parts:s}}}}function i(t){for(var e=[],a={},o=0;o<t.length;o++){var i=t[o],n=i[0],s=i[1],r=i[2],d=i[3],c={css:s,media:r,sourceMap:d};a[n]?a[n].parts.push(c):e.push(a[n]={id:n,parts:[c]})}return e}function n(t,e){var a=b(),o=v[v.length-1];if("top"===t.insertAt)o?o.nextSibling?a.insertBefore(e,o.nextSibling):a.appendChild(e):a.insertBefore(e,a.firstChild),v.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");a.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=v.indexOf(t);e>=0&&v.splice(e,1)}function r(t){var e=document.createElement("style");return e.type="text/css",n(t,e),e}function d(t,e){var a,o,i;if(e.singleton){var n=g++;a=f||(f=r(e)),o=c.bind(null,a,n,!1),i=c.bind(null,a,n,!0)}else a=r(e),o=l.bind(null,a),i=function(){s(a)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}function c(t,e,a,o){var i=a?"":o.css;if(t.styleSheet)t.styleSheet.cssText=m(e,i);else{var n=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(n,s[e]):t.appendChild(n)}}function l(t,e){var a=e.css,o=e.media,i=e.sourceMap;if(o&&t.setAttribute("media",o),i&&(a+="\n/*# sourceURL="+i.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}var u={},p=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},h=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),b=p(function(){return document.head||document.getElementsByTagName("head")[0]}),f=null,g=0,v=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=h()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var a=i(t);return o(a,e),function(t){for(var n=[],s=0;s<a.length;s++){var r=a[s],d=u[r.id];d.refs--,n.push(d)}if(t){var c=i(t);o(c,e)}for(var s=0;s<n.length;s++){var d=n[s];if(0===d.refs){for(var l=0;l<d.parts.length;l++)d.parts[l]();delete u[d.id]}}}};var m=function(){var t=[];return function(e,a){return t[e]=a,t.filter(Boolean).join("\n")}}()},25:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return this.CLData=CLData,{screenWidth:document.body.clientWidth,showGateways:!1,gateways:[],gateway:18,gatewayUrl:"http://newcclcstatic.b0.upaiyun.com/images/",showAuthpay:!1,authpayUrl:"",debtId:this.$route.query.id,amount:+this.$route.query.amount,bankAmount:0,remainAmount:0,showTradePwdModal:!1,tradePwd:"",selRatecouponid:null,selRebateid:null,defaultRatecoupon:null,defaultRebate:null,ratecoupons:[],rebates:[],userInfo:{},showRebate:!1,showRatecoupon:!1,isHide:!0,showError:!1,errorMsg:"",showSuccess:!1,showExecuting:!1,successMsg:""}},components:{modal:VueStrap.modal,aside:VueStrap.aside},created:function(){var t=this;t.fetchAccount()},ready:function(){},watch:{},computed:{earnings:function(){return this.debt.rate}},methods:{rollback:function(){window.history.back()},popModal:function(t){var e=this;e.showError=!0,e.errorMsg=t.str,setTimeout(function(){e.showError=!1},1200)},reCalAmount:function(){var t=this.amount+this.defaultRebate,e=+this.userInfo.balance2;this.bankAmount=parseFloat(t-e).toFixed(2),this.bankAmount=this.bankAmount<0?0:this.bankAmount,this.remainAmount=t<e?t:e,this.remainAmount=this.remainAmount.toFixed(2)},clearUseRebate:function(){this.showRebate=!1,this.selRebateid=null,this.defaultRebate=0,this.reCalAmount()},clearUseRatecoupon:function(){this.showRatecoupon=!1,this.selRatecouponid=null,this.defaultRatecoupon=0},chooseRebate:function(t){console.log(t);var e=this,a=t.amount,o=t.buymin,i=t._id,n=e.amount;n>=o?(e.defaultRebate=-a,e.selRebateid=i,this.showRebate=!1,this.reCalAmount()):e.popModal({str:"不符合抵扣券的最低使用要求"})},chooseRatecoupon:function(t){console.log(t);var e=this,a=t.name,o=t.buymin,i=t._id,n=e.amount;n>=o?(e.defaultRatecoupon=a,e.selRatecouponid=i,this.showRatecoupon=!1):e.popModal({str:"不符合加息券的最低使用要求"})},buy:function(){var t=this;18==this.gateway?this.showPwdBox():CLData.buyAuthpay({ratecouponid:this.selRatecouponid,rebateid:this.selRebateid,rechargeAmount:this.bankAmount,debtid:this.debtId,amount:this.amount,gateway:this.gateway},function(e){return e.err?void t.popModal({str:e.err}):void(0==e.errcode&&e.buyrecid&&(e.recharge_amount>0?CLData.redirectLianAuthpay({amount:t.amount,buyrecid:e.buyrecid,returl:CLData.url+"/!buyresult?debtid="+t.debtId+"&id="+e.buyrecid+"&amount="+e.recharge_amount}):t.$route.router.go("/buysuccess?id="+t.debtId+"&amount="+t.amount)))}),setTimeout(function(){var t=document.querySelector(".pwdInput");t.blur(),t.focus(),t.select(),t.setSelectionRange(0,9999)},0)},buyWithholding:function(){var t=this;!this.tradePwd||this.tradePwd.length<6||CLData.buyWithholding({ratecouponid:this.selRatecouponid,rebateid:this.selRebateid,rechargeAmount:this.bankAmount,debtid:this.debtId,amount:this.amount,gateway:this.gateway,tradepwd:this.tradePwd},function(e){return t.showSuccess=!1,e.err?void t.popModal({str:e.err}):(0==e.errcode&&1==e.buystate&&t.$route.router.go("/buysuccess?id="+e.buyrecid+"&amount="+t.amount),void(0==e.errcode&&33==e.buystate&&(t.showExecuting=!0,setTimeout(function(){t.$route.router.go("/account")},1e3))))})},fetchAccount:function(){var t=this;console.log(t.$route),CLData.fetchAccount(function(e){e.errcode?t.$route.router.go("/signIn?path="+encodeURIComponent(t.$route.path)):(1==e.bindFlag?t.fetchGateway():t.gateway=11,t.userInfo=e,t.fetchEnabledRatecoupons(),t.fetchEnabledRebates())})},fetchGateway:function(){var t=this;CLData.fetchGatewayList(function(e){e&&0==e.errcode&&(t.gateways=e.gateway,t.showGateways=!0),console.log(e)})},fetchEnabledRatecoupons:function(){var t=this;CLData.fetchEnabledRatecoupons(t.$route.params.id,1,10,function(e){if(e&&0==e.errcode){t.ratecoupons=e.list;var a=t.ratecoupons;if(console.log(a),a.length>0)for(var o=0;o<a.length;o++){var i=a[o],n=i.name,s=i.buymin,r=i._id,d=t.amount;if(d>=s){t.defaultRatecoupon=n,t.selRatecouponid=r;break}}}})},fetchEnabledRebates:function(){var t=this;CLData.fetchEnabledRebates(t.$route.params.id,1,10,function(e){if(e&&0==e.errcode){t.rebates=e.list;var a=t.rebates;if(console.log(a),a.length>0)for(var o=0;o<a.length;o++){var i=a[o],n=i.amount,s=i.buymin,r=i._id,d=t.amount;if(d>=s){t.defaultRebate=-n,t.selRebateid=r;break}}t.reCalAmount()}})},showPwdBox:function(){this.isHide=!1,this.tradePwd="",this.showError=!1},hidePwdBox:function(){this.isHide=!0},enter_pwd:function(t){this.tradePwd+=t.target.innerHTML,6===this.tradePwd.length&&(this.showSuccess=!0,this.successMsg="请求提交中，请稍等...",this.buyWithholding(),this.hidePwdBox())},delete_pwd:function(){this.tradePwd=this.tradePwd.substring(0,this.tradePwd.length-1)}}}},113:function(t,e,a){e=t.exports=a(1)(),e.push([t.id,'.none{color:#ccc}.rebate{color:#ee5a5f;font-weight:400;font-size:16px}.buyTitle{color:#333;font-weight:700}.baofu{background:url("/vue_static/img/2.png") 50% no-repeat;background-size:contain}.baofu2{background:url("/vue_static/img/1.png") 50% no-repeat;background-size:contain}.baofu3{background:url("/vue_static/img/yinlian_2.png") 50% no-repeat;background-size:contain}.box table{width:94%;margin-left:6%;line-height:40px}.box2 table{width:96%;margin-left:4%}.box table tr{height:40px}.box2 table tr{height:60px}.chakan{background:url("/vue_static/img/ck_03.png") 0 no-repeat;background-size:12px}.chakan,.chakan2{vertical-align:middle}.chakan2{background:url("/vue_static/img/dui.png") 6px no-repeat}.chakan3{vertical-align:middle;background:url("/vue_static/img/Group.png") 6px no-repeat}.login_btn{width:20%;background:#fff;font-weight:700;color:#333;text-align:left}.login_btn,input{border:none;height:50px}input{width:80%}.bot{border-bottom:1px solid #eee}.line{width:94%;margin-left:6%}.box,.box2{background:#fff;margin-top:10px}.back{display:inline-block;width:40px;height:40px;position:absolute;left:20px;top:18px;background:url("/vue_static/img/back_04.jpg") no-repeat}.buy_confirm{background:#fff;line-height:50px;font-size:20px;text-align:center}.home{width:30px;height:29px;display:inline-block;background:url("/vue_static/img/ic_06.jpg") no-repeat;position:absolute;right:50px;top:11px;z-index:1}.clear{clear:both}.mine{width:30px;height:29px;display:inline-block;background:url("/vue_static/img/index_icon_03.jpg") no-repeat;position:absolute;right:10px;top:11px;z-index:1}.title_hb{font-size:16px;text-align:center}.hb_content,.hb_forbid{margin-top:10px;background:#f2f2f2}.hb_forbid,.hb_forbid span,.hb_forbid strong{color:#ccc}.box3{padding:5px 20px}.font,.font2{font-size:16px;color:red}.hb_amount{font-size:30px}.date_hb{padding:5px 20px;border-top:1px solid #fff}.fl{float:left}.fr{float:right}.contentMain{width:70%}.shade{width:100%;background:rgba(0,0,0,.4);top:0;bottom:0}.shade,.shadeTip{position:fixed;z-index:99}.shadeTip{width:75%;height:120px;margin:0 auto;background:#404040;background-size:100%;border-radius:12px;opacity:.9;top:30%;left:13%}.shade .top{width:30px;height:70px;background:url("/vue_static/img/false.png") center 30px no-repeat;background-size:100%;margin:0 auto}.shade .msg{width:100%;margin:0 auto;color:#fff;text-align:center;margin-top:15px;font-size:14px;font-weight:100}.pwd_box{width:90%;height:140px;margin:0 auto;background:#fff;border-radius:8px;position:relative;top:125px}.box-top{text-align:center;font-size:15px;line-height:50px}.box-center,.box-top{width:100%;height:50px}.box-center{float:left;margin-top:-20px}.box-center .pwd{width:96%;margin:0 auto;text-align:center}.box-center .pwd .pwdInput{width:250px;height:40px;background:url(/vue_static/img/bg.jpg);background-size:100%;letter-spacing:35.5px;padding-left:17px}.box-center .link{width:96%;margin:0 auto;height:30px;line-height:30px}.box-center .link span{float:right;color:#6c94e0}.hide{display:none}.box-top img{width:18px;height:18px;display:block;float:right;position:relative;margin-right:20px;top:-35px}.pwd_enter{width:100%;height:160px;position:fixed;bottom:0}.pwd_enter table{width:100%;height:100%;text-align:center;background:#fff;font-size:15px}.pwd_enter table tr{border-bottom:1px solid #d3d3d3}.pwd_enter table tr td{border-right:1px solid #d3d3d3}.del{background:url(/vue_static/img/del.png) 50% no-repeat;background-color:#d3d3d3}.mydiv-enter{-webkit-animation:mydiv-in .3s;animation:mydiv-in .3s}.mydiv-leave{-webkit-animation:mydiv-out .3s;animation:mydiv-out .3s}@-webkit-keyframes mydiv-in{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%);opacity:0}to{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes mydiv-in{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%);opacity:0}to{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@-webkit-keyframes mydiv-out{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}to{-webkit-transform:translateX(-100%);transform:translateX(-100%);opacity:0}}@keyframes mydiv-out{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}to{-webkit-transform:translateX(-100%);transform:translateX(-100%);opacity:0}}.showModel{background:#fff;position:fixed;bottom:0;top:0;z-index:9999;left:0;width:100%}.showModel .overflow{-webkit-overflow-scrolling:touch;overflow-y:auto;position:absolute;bottom:0;top:0}',""])},182:function(t,e){t.exports=' <div class=showModel v-if=showRebate> <div class=overflow> <div class="{{amount >= rebate.buymin ? \'hb_content\': \'hb_forbid\'}}" v-for="rebate in rebates" v-touch:tap=chooseRebate(rebate)> <div class=box3> <div class="contentMain fl"> <div style=font-size:14px>来源：{{rebate.source}}</div> <div style=font-size:12px>{{rebate.memo}}</div> </div> <div class=fr> <span class=font>￥<strong class=hb_amount>{{rebate.amount}}</strong></span> </div> <div class=clear></div> </div> <div class=date_hb> <span>{{rebate.effective_date}}天后过期</span> <span class=fr>有效期：{{rebate.useendtime}}</span> </div> </div> <button style="margin-top: 20px; margin-bottom: 20px" v-touch:tap=clearUseRebate class=btn2>不使用抵扣红包</button> </div> </div> <div class=showModel v-if=showRatecoupon> <div class="{{amount >= ratecoupon.buymin ? \'hb_content\': \'hb_forbid\'}}" v-for="ratecoupon in ratecoupons" v-touch:tap=chooseRatecoupon(ratecoupon)> <div class=box3> <div class="contentMain fl"> <div style=font-size:14px>来源：{{ratecoupon.condition}}</div> <div style=font-size:12px>{{ratecoupon.memo}}</div> </div> <div class=fr> <span class=font2><strong class=hb_amount>{{ratecoupon.couponper}}</strong>%</span> </div> <div class=clear></div> </div> <div class=date_hb> <span>{{ratecoupon.effective_date}}天后过期</span> <span class=fr>有效期：{{ratecoupon.expire}}</span> </div> </div> <button style="margin-top: 20px" v-touch:tap=clearUseRatecoupon class=btn2>不使用加息券</button> </div> <div class=shadeTip v-if=showError> <div class=errorBox> <div class=top v-touch:tap=buy></div> <div class=msg>{{errorMsg}}</div> </div> </div> <div class=shadeTip v-if=showSuccess> <div class=successBox> <div class=top></div> <div class=msg>{{successMsg}}</div> </div> </div> <div class=shadeTip v-if=showExecuting> <div class=executingBox> <div class=top></div> <div class=msg>请稍后查询充值状态和订单信息</div> </div> </div> <div class=shade v-bind:class="{\'hide\': isHide}" tabindex=0> <div class=pwd_box> <div class=box-top> <div style="width: 60%; margin: 0 auto">请输入交易密码</div><img src=/vue_static/img/close.png v-touch:tap=hidePwdBox /> </div> <div class=box-center> <div class=pwd> <input class=pwdInput type=password maxlength=6 v-model=tradePwd disabled=true tabindex=0 /> </div> <div class=link> <span v-link="{ path:\'/resetTradePwd\'}">忘记密码？</span> </div> </div> </div> <div class=pwd_enter> <table> <tr> <td v-touch:tap=enter_pwd>1</td> <td v-touch:tap=enter_pwd>2</td> <td v-touch:tap=enter_pwd>3</td> </tr> <tr> <td v-touch:tap=enter_pwd>4</td> <td v-touch:tap=enter_pwd>5</td> <td v-touch:tap=enter_pwd>6</td> </tr> <tr> <td v-touch:tap=enter_pwd>7</td> <td v-touch:tap=enter_pwd>8</td> <td v-touch:tap=enter_pwd>9</td> </tr> <tr> <td style="background: rgb(211, 211, 211)"></td> <td v-touch:tap=enter_pwd>0</td> <td class=del v-touch:tap=delete_pwd></td> </tr> </table> </div> </div> <div class=buy_confirm> <a v-touch:tap=rollback class=back></a>确认购买 <a v-link="{ path:\'/\'}" class=home></a> <a v-link="{ path:\'/account\'}" class=mine></a> </div> <div class=box style="position: relative; top: -9px"> <table> <tr class=bot @click="showRebate=true"> <td width=30% class=buyTitle>抵扣红包</td> <td width=60% v-if="defaultRebate == null" class=none>无可用抵扣红包</td> <td width=60% v-if="defaultRebate == 0" class=none>不使用抵扣红包</td> <td width=60% v-if="defaultRebate != null && defaultRebate != 0" style="color: rgb(238,90,95)"><span class=rebate>{{defaultRebate}}</span></td> <td width=10% class=chakan></td> </tr> <tr @click="showRatecoupon=true"> <td class=buyTitle>加息券</td> <td v-if="defaultRatecoupon == null" class=none>无可用加息券</td> <td v-if="defaultRatecoupon == 0" class=none>不使用加息券</td> <td v-if="defaultRatecoupon != null && defaultRatecoupon != 0"><span class=rebate>{{defaultRatecoupon}}</span></td> <td class=chakan></td> </tr> </table> </div> <div class=box style="position: relative; top: -9px"> <table> <tr class=bot> <td style=width:30% class=buyTitle>余额支付</td> <td style="color: rgb(238,90,95); font-size: 16px">{{(+remainAmount).toMoneyStr()}}元</td> <td class=chakan style=width:10%></td> </tr> <tr> <td class=buyTitle>银行卡支付</td> <td style="color: rgb(238,90,95); font-size: 16px">{{(+bankAmount).toMoneyStr()}}元</td> <td class=chakan style=width:10%></td> </tr> </table> </div> <div class=box2 style="position: relative; top: -9px" v-if=showGateways> <table v-for="gate in gateways"> <tr class=bot style="height: 50px"> <td style=width:30%><img height=35px :src=gatewayUrl+gate.icon></td> <td style="font-size:12px; padding-left: 5px"><span style=font-size:14px;font-weight:bold>{{gate.name}}</span><br>单笔限额{{gate.singlelimit/10000}}万,每日限额{{gate.daylimit/10000}}万</td> <td :class="{ \'chakan3\': gateway!=gate.type, \'chakan2\': gateway==gate.type }" style=width:15% v-touch:tap="gateway=gate.type;"></td> </tr> </table> </div> <br> <button class=btn2 type=button v-touch:tap=buy>立即支付</button> <p style="text-align:right; margin-top:10px;padding-right:5%;cursor:pointer"> <a v-link="{ path:\'/changeCard\'}" v-if="userInfo.bindFlag == 0"> 更换银行卡</a></p> <div style="height: 150px"></div> '},204:function(t,e,a){var o,i;a(228),o=a(25),i=a(182),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},228:function(t,e,a){var o=a(113);"string"==typeof o&&(o=[[t.id,o,""]]);a(2)(o,{});o.locals&&(t.exports=o.locals)}});
//# sourceMappingURL=19.build.js.map