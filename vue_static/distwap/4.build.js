webpackJsonp([4],{2:function(t,i,e){function n(t,i){for(var e=0;e<t.length;e++){var n=t[e],s=d[n.id];if(s){s.refs++;for(var o=0;o<s.parts.length;o++)s.parts[o](n.parts[o]);for(;o<n.parts.length;o++)s.parts.push(c(n.parts[o],i))}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(c(n.parts[o],i));d[n.id]={id:n.id,refs:1,parts:a}}}}function s(t){for(var i=[],e={},n=0;n<t.length;n++){var s=t[n],o=s[0],a=s[1],r=s[2],c=s[3],p={css:a,media:r,sourceMap:c};e[o]?e[o].parts.push(p):i.push(e[o]={id:o,parts:[p]})}return i}function o(t,i){var e=h(),n=b[b.length-1];if("top"===t.insertAt)n?n.nextSibling?e.insertBefore(i,n.nextSibling):e.appendChild(i):e.insertBefore(i,e.firstChild),b.push(i);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");e.appendChild(i)}}function a(t){t.parentNode.removeChild(t);var i=b.indexOf(t);i>=0&&b.splice(i,1)}function r(t){var i=document.createElement("style");return i.type="text/css",o(t,i),i}function c(t,i){var e,n,s;if(i.singleton){var o=v++;e=g||(g=r(i)),n=p.bind(null,e,o,!1),s=p.bind(null,e,o,!0)}else e=r(i),n=l.bind(null,e),s=function(){a(e)};return n(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;n(t=i)}else s()}}function p(t,i,e,n){var s=e?"":n.css;if(t.styleSheet)t.styleSheet.cssText=_(i,s);else{var o=document.createTextNode(s),a=t.childNodes;a[i]&&t.removeChild(a[i]),a.length?t.insertBefore(o,a[i]):t.appendChild(o)}}function l(t,i){var e=i.css,n=i.media,s=i.sourceMap;if(n&&t.setAttribute("media",n),s&&(e+="\n/*# sourceURL="+s.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}var d={},u=function(t){var i;return function(){return"undefined"==typeof i&&(i=t.apply(this,arguments)),i}},f=u(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=u(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,v=0,b=[];t.exports=function(t,i){i=i||{},"undefined"==typeof i.singleton&&(i.singleton=f()),"undefined"==typeof i.insertAt&&(i.insertAt="bottom");var e=s(t);return n(e,i),function(t){for(var o=[],a=0;a<e.length;a++){var r=e[a],c=d[r.id];c.refs--,o.push(c)}if(t){var p=s(t);n(p,i)}for(var a=0;a<o.length;a++){var c=o[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete d[c.id]}}}};var _=function(){var t=[];return function(i,e){return t[i]=e,t.filter(Boolean).join("\n")}}()},5:function(t,i,e){t.exports={"default":e(6),__esModule:!0}},6:function(t,i,e){var n=e(4),s=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return s.stringify.apply(s,arguments)}},22:function(t,i,e){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(i,"__esModule",{value:!0});var s=e(5),o=n(s);i["default"]={data:function(){return{isOpen:!1,isFinished:!1,isSend:!1,isInTime:!1,hasChange:!0,isLastDay:!1,isOutTime:!1,isBegin:!0,isRight:!1,isDayOver:!1,timer:"",time:"",answer:[],params:{answers:[]},pm:[{mobile:"待定",score:"待定"},{mobile:"待定",score:"待定"},{mobile:"待定",score:"待定"}],questions:[],score:"",h_score:"0",user_answers:[],right_answers:[],restChance:"",error:{err:!1,errMsg:""},jifen:"",designation:"",showError:!1,errorMsg:"",isFirst:!0,isHide:!0,msg:"",isReady:!1}},destroyed:function(){var t=this;clearInterval(t.time)},ready:function(){this.fetchMidAutumnInvitationRank(),this.fetchMidAutumnInfo(),this.getMidAutumnLevel()},methods:{popModal:function(t){var i=this;i.showError=!0,i.errorMsg=t.str,setTimeout(function(){i.showError=!1},2200)},invite:function(){window.open(window.cclc_data.url+"/account/invite")},fetchMidAutumnInvitationRank:function(){var t=this;CLData.fetchMidAutumnInvitationRank(function(i){if(3===i.arr.length)t.pm=i.arr;else if(i.arr.length<3)for(var e=0;e<i.arr.length;e++)t.pm[e].mobile=i.arr[e].mobile,t.pm[e].score=i.arr[e].score})},fetchMidAutumnPaper:function(){var t=this;CLData.fetchMidAutumnPaper(function(i){if(console.log(i),i.err){if(clearInterval(t.time),2==i.errcode)return void(location.href=window.cclc_data.url+"/member/login?r="+encodeURIComponent("/home/#!/midautumn"));"今天答题机会已经全部用完了！"==i.err?(t.isOpen=!0,t.hasChange=!1):t.popModal({str:i.err}),t.isBegin=!0}else t.questions=i.arr,t.isOpen=!0})},fetchMidAutumnResult:function(){var t=this;CLData.fetchMidAutumnResult({answers:(0,o["default"])(this.params.answers)},function(i){if(i.err)alert(i.err);else{var e=i.arr;0==e.restChance&&(t.hasChange=!1),t.score=e.score,t.h_score=e.h_score,t.user_answers=e.user_answers,t.right_answers=e.right_answers,t.restChance=e.restChance,t.designation=e.designation}})},toggleJZ:function(){var t=this;t.isFirst&&(t.isHide=!1,t.msg="本次猜谜您有90秒时间，准备好了吗？",t.isFirst=!1),t.isReady&&(this.fetchMidAutumnPaper(),t.setTime(90))},endMidAutumnAnswer:function(){var t=this;CLData.endMidAutumnAnswer(function(i){t.h_score=i.h_score,t.restChance=i.restChance}),window.location.href=window.cclc_data.url+"/debts/lctz"},getMidAutumnLevel:function(){var t=this;this.isSend?(console.log("提交"),CLData.getMidAutumnLevel(function(i){t.designation=i.res.designation,console.log(i)})):(console.log("超时"),CLData.getMidAutumnLevel(function(i){i&&i.res&&(t.designation=i.res.designation,t.h_score=i.res.h_score,t.restChance=i.res.restChance),console.log(i)}))},active:function(t,i){1==t?this.answer[0]=i.target.innerHTML:2==t?this.answer[1]=i.target.innerHTML:3==t&&(this.answer[2]=i.target.innerHTML);for(var e=i.target.parentNode.children,n=0;n<e.length;n++)e[n].style.cssText="background-color: ''; color=rgb(131,63,47)";i.target.style.cssText="background: rgb(192,64,84); color: rgb(236,219,189);"},submit:function(){if(this.answer[0]&&this.answer[1]&&this.answer[2]){this.isFinished=!0,this.isSend=!0,clearInterval(this.time),this.params.answers=[];for(var t=0;t<this.questions.length;t++){var i={qid:"",answer:""};i.qid=this.questions[t].qid,i.answer=this.answer[t],this.params.answers.push(i)}this.fetchMidAutumnResult()}else this.popModal({str:"您还有题目未答完，请答完以后再提交！"})},resolve:function(){this.isFinished=!1,this.fetchMidAutumnPaper(),this.setTime(90)},setTime:function(t){var i=this;this.timer=t,this.answer=[],this.time=setInterval(function(){0==i.timer?(clearInterval(i.time),i.isFinished=!0,i.isSend=!1,i.getMidAutumnLevel()):i.timer--},1e3)},fetchMidAutumnInfo:function(){var t=this;CLData.fetchMidAutumnInfo(function(i){t.isLastDay=i.isLastDay})},begin:function(){this.isReady=!0,this.isHide=!0,this.fetchMidAutumnPaper(),this.setTime(90),this.isBegin=!1},cancel:function(){this.isHide=!0,this.isReady=!1,this.isFirst=!0}}}},110:function(t,i,e){i=t.exports=e(1)(),i.push([t.id,'body,html{color:#333;background:#315563;min-width:1200px}blockquote,body,button,dd,dl,dt,fieldset,form,h1,h2,h3,h4,h5,h6,hr,input,legend,li,ol,p,pre,td,textarea,th,ul{margin:0;padding:0}body,button,dd,div,dt,input,li,p,select,span,td,textarea{font-size:14px;font-family:Microsoft Yahei,arial,verdana}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:400;font-family:Microsoft Yahei,arial,verdana}address,cite,dfn,em,var{font-style:normal}code,kbd,pre,samp{font-family:courier new,courier,monospace}ol,ul{list-style:none outside none}a{color:#333;hide-focus:expression(this.hideFocus=true);outline:none}a,a:hover{text-decoration:none}a:hover{color:#ff6e03}a:focus{outline:0}legend{color:#333}fieldset,img{border:none}img{vertical-align:bottom}button,input,select,textarea{margin:0;padding:0;font-size:14px;outline:0 none;vertical-align:middle}button{cursor:pointer}input[type=radio]{position:relative;top:-2px}table{border-collapse:collapse;border-spacing:0}.clear,.wrapper{clear:both}.wrapper{width:1000px;margin:0 auto;overflow:hidden;*padding-top:15px}.cclc-ellipsis{overflow:hidden;position:relative;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}.orages{color:#ff6e03}.gold{color:#ffb503}.fl{float:left;vertical-align:bottom}.fl,.fr{display:inline}.fr{float:right}.head{background:url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/bg_01.png") 50% top no-repeat;height:762px;width:100%}.box{background:url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/bg_03.png") 50% top no-repeat}.caimi{background:url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/bg_02.png") 50% top no-repeat;padding-top:223px}.huabu{background:url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/hb.png") no-repeat;width:1000px;height:62px}.rbtn,.rbtn2,.rbtn3{cursor:pointer}.rbtn{margin:0 auto;margin-top:70px;margin-left:-122px}.rbtn,.rbtn2{width:244px;height:72px;background:url(https://newcclcstatic.b0.upaiyun.com/vue_static/img/btn.png) no-repeat;color:#501c24;text-align:center;line-height:72px;font-size:24px;position:absolute;left:50%}.rbtn2{margin-left:-122px;margin-top:70px}.rbtn3{left:50%;margin-left:-122px;background:url(https://newcclcstatic.b0.upaiyun.com/vue_static/img/btn.png) no-repeat;text-align:center;line-height:72px;margin-top:70px;position:absolute;z-index:9}.btn,.rbtn3{width:244px;height:72px;color:#501c24;font-size:24px}.btn{background:url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/btn.png") no-repeat;border:none;margin-left:378px}.btns2{background:url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/btn2.png") no-repeat;margin-left:45px}.btn3,.btns2{width:244px;height:72px;border:none;font-size:24px;color:#501c24}.btn3{background:url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/btn.png") no-repeat;margin-left:247px}.text{text-align:center}.rule p,.text{color:#629eb7;font-size:16px}.rule p{margin-top:272px}@-webkit-keyframes jz_content_open-in{0%{height:8px}to{height:465px}}@keyframes jz_content_open-in{0%{height:8px}to{height:465px}}@-webkit-keyframes jz_content_open-out{0%{height:465px}to{height:8px}}@keyframes jz_content_open-out{0%{height:465px}to{height:8px}}.jz_content_open-enter{-webkit-animation:jz_content_open-in .5s;animation:jz_content_open-in .5s}.jz_content_open-leave{-webkit-animation:jz_content_open-out .5s;animation:jz_content_open-out .5s}.jz_content_close{width:1000px;height:8px;background:url(https://newcclcstatic.b0.upaiyun.com/vue_static/img/close_03.png) no-repeat}.jz_content_open{width:912px;height:465px;overflow:hidden;margin:0 auto;background:url(https://newcclcstatic.b0.upaiyun.com/vue_static/img/caimi.png)}.caiti{padding:30px 60px 0}.question_end2{margin-top:90px;font-size:16px;color:#853f2c;position:relative}.question_end{text-align:center;margin-top:120px;float:right}.caiti_1{padding:30px 60px;position:relative}.question{width:620px;float:left}.question_option{float:left;width:119px;height:36px;border-radius:6px;border:2px solid #853f2c;margin-left:26px;text-align:center;font-size:14px;font-weight:700;cursor:pointer;line-height:36px;margin-bottom:50px;color:#853f2c}.caiti_1_fl,.caiti_lf{width:600px;float:left}.caiti_1_fr{float:right;width:280px;color:#853f2c;line-height:18px;margin-top:40px}.caiti_1_fr span{font-size:12px}.caiti_1 ul li{float:left;font-weight:700;font-size:14px;color:#853f2c;width:90px}.item{color:#853f2c}.answer{width:500px;height:40px}.caiti_1_pic{background:url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/icon_04.png") center 0 no-repeat}.caiti_1_pic,.caiti_1_pic2{position:absolute;right:110px;padding-top:153px;top:100px;color:#853f2c}.caiti_1_pic2{background:url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/icon_03.png") center 0 no-repeat}.caiti_1_pic3{background:url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/icon_05.png") center 0 no-repeat}.caiti_1_pic3,.caiti_1_pic4{position:absolute;right:110px;padding-top:153px;top:100px;color:#853f2c}.caiti_1_pic4{background:url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/icon_06.png") center 0 no-repeat}.caiti_1_pic5{position:absolute;right:110px;padding-top:153px;background:url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/icon_07.png") center 0 no-repeat;top:100px;color:#853f2c}.caiti_2_pic{background:url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/icon_04.png") center 0 no-repeat}.caiti_2_pic,.caiti_2_pic2{position:absolute;right:50px;padding-top:153px;top:0;color:#853f2c}.caiti_2_pic2{background:url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/icon_03.png") center 0 no-repeat}.caiti_2_pic3{background:url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/icon_05.png") center 0 no-repeat}.caiti_2_pic3,.caiti_2_pic4{position:absolute;right:50px;padding-top:153px;top:0;color:#853f2c}.caiti_2_pic4{background:url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/icon_06.png") center 0 no-repeat}.caiti_2_pic5{position:absolute;right:50px;padding-top:153px;background:url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/icon_07.png") center 0 no-repeat;top:0;color:#853f2c}.btn4{cursor:pointer;font-size:20px;line-height:62px;margin-top:24px}.btn4,.btn5{background:url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/cai_18.png") no-repeat;width:174px;height:62px;border:none;color:#501c24;font-weight:400}.btn5{font-size:18px;margin-top:40px}.result,.result2{color:#853f2c}.result2{float:left;margin-top:20px}li.selected{background:#c23e52;color:#eddcbb}.caiti_end{color:#853f2c;position:relative}.caiti_end_over{padding:80px;color:#853f2c}.tip{font-size:22px;font-weight:700}.caiti_timeout_end,.tip{color:#853f2c}.caiti_timeout{padding:80px;color:#853f2c;position:relative}.btn6{background:url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/cai_18.png") no-repeat;width:174px;height:62px;border:none;font-size:18px;color:#501c24;margin-top:40px;font-weight:400}.btn_bg{background-position:-227px 0;margin-left:54px}.special{margin-top:37px;width:488px;line-height:22px;font-size:12px}.question_title{color:#713626;font-size:16px;font-weight:700;margin-bottom:16px}.select{float:left;width:260px;font-size:14px;color:#853f2c;font-weight:700;margin-bottom:10px;padding-left:20px}.top{font-size:60px}.bottom,.top{color:#9f3545}.bottom{font-size:22px}.yqpm{margin-top:404px}.yqpm span{font-size:16px;margin-left:100px;height:50px;display:inline-block}.yqpm .item{padding-left:120px}.yqpm .username{text-align:right;width:240px;height:80px}.yqpm .num{margin-left:160px;color:#fed334}.yqpm .num1{margin-left:160px;color:#ddd}.yqpm .num2{margin-left:160px;color:#d48c67}.question_box{width:532px;float:left;height:210px}.caiti_2_fl{float:left}.shade{top:0;bottom:0;width:100%;background:transparent;position:fixed;background-color:rgba(0,0,0,.3);z-index:999}.shade .confirm_box{width:380px;height:150px;background:#fff;margin:0 auto;position:relative;top:150px;border-radius:10px}.shade .confirm_box .top{width:100%;height:100px;text-align:center;line-height:100px;font-size:20px}.shade .confirm_box .bottom{width:100%;height:50px}.shade .confirm_box .bottom span{display:block;width:50%;height:50px;line-height:50px;text-align:center;float:left}',""])},179:function(t,i){t.exports=' <div class=shade v-if=!isHide> <div class=confirm_box> <div class=top> {{msg}} </div> <div class=bottom> <span style="background: rgb(241,241,241); border-bottom-left-radius: 10px" @click=cancel>取消</span> <span style="background: rgb(235,78,83); color: #fff; border-bottom-right-radius: 10px" @click=begin>确定</span> </div> </div> </div> <div class=head></div> <div class=caimi> <div class=wrapper> <div class=huabu></div> <div v-if=!isOpen class=jz_content_close></div> <div v-if=isOpen class=jz_content_open transition=jz_content_open> <div class=caiti v-if=!isFinished> <div class=caiti_1_fl v-if=hasChange> <div class=question v-for="question in questions"> <div class=question_title>{{questions.indexOf(question) + 1}}.{{question.title}}</div> <div class=question_options><div class="question_option fl" @click="active(questions.indexOf(question) + 1, $event)">{{question.options[0]}}</div><div class="question_option fr" @click="active(questions.indexOf(question) + 1, $event)">{{question.options[1]}}</div><div class="question_option fl mt10" @click="active(questions.indexOf(question) + 1, $event)">{{question.options[2]}}</div><div class="question_option fr mt10" @click="active(questions.indexOf(question) + 1, $event)">{{question.options[3]}}</div></div> </div> </div> <div class=question_end v-if=hasChange> <div class=timer> <div class=top>{{timer}}</div> <div class=bottom>倒计时</div> </div> <div class=btn4 @click=submit>提交</div> </div> <div class=question_end2 v-if=!hasChange> <div class=caiti_2_pic v-if="(designation == \'秀才\')"> <p style="font-weight:bold; font-size: 16px">再接再厉,您是{{ designation }}!</p> </div> <div class=caiti_2_pic2 v-if="(designation == \'举人\')"> <p style="font-weight:bold; font-size: 16px">再接再厉,您是{{ designation }}!</p> </div> <div class=caiti_2_pic3 v-if="(designation == \'状元\')"> <p style="font-weight:bold; font-size: 16px">太厉害了,您是{{ designation }}!</p> </div> <div class=caiti_2_pic4 v-if="(designation == \'榜眼\')"> <p style="font-weight:bold; font-size: 16px">再接再厉,您是{{ designation }}!</p> </div> <div class=caiti_2_pic5 v-if="(designation == \'探花\')"> <p style="font-weight:bold; font-size: 16px">再接再厉,您是{{ designation }}!</p> </div> <div style=margin-top:40px v-if=isLastDay><span class=tip>SORRY，您的猜谜旅途已经结束啦，去看看别的活动吧</span></div> <div style=margin-top:40px v-if=!isLastDay><span class=tip>SORRY，您今天没有猜谜机会了，明天再来吧~</span></div><br> <div style=line-height:22px v-if=!isLastDay> 今日最好成绩：<strong>答对{{h_score}}题 <br> <span style="font-weight: bold" v-if="(h_score == 1) ">可获8.15元抵扣红包</span> <span style="font-weight: bold" v-if="(h_score == 2) ">可获58.15元抵扣红包</span> <span style="font-weight: bold" v-if="(h_score == 3) ">可获188.15元抵扣红包</span> <span v-if="!(h_score == 0)">已经发放到您的账户了，赶快去使用吧！</span></strong></div> <div style=line-height:22px v-if=isLastDay> 今日最好成绩：<strong>答对{{h_score}}题 <br> <span style="font-weight: bold" v-if="(h_score == 1) ">可获8.15元抵扣红包</span> <span style="font-weight: bold" v-if="(h_score == 2) ">可获58.15元抵扣红包</span> <span style="font-weight: bold" v-if="(h_score == 3) ">可获188.15元抵扣红包</span> <font v-if="isLastDay && ((designation == \'榜眼\') || (designation == \'状元\'))">和<font v-if="(designation == \'榜眼\')">158</font> <font v-if="(designation == \'状元\')">815</font>积分</font>已经发放到您的账户了，赶快去使用吧！</strong> </div> <a href=/debts/lctz target=_blank><button class=btn5>去投资</button></a> </div> <div class=clear></div> </div> <div class=caiti_1 v-if=isFinished> <div class=caiti_2_fl v-if=isSend> <div class=question_box> <div class=question_finished v-for="question in questions"> <div class=question_title>{{questions.indexOf(question) + 1}}.{{question.title}}</div> <div class=question_result> <div class=select>您的选择： <span v-if="(questions.indexOf(question) + 1) == 1">{{user_answers[0]}}</span> <span v-if="(questions.indexOf(question) + 1) == 2">{{user_answers[1]}}</span> <span v-if="(questions.indexOf(question) + 1) == 3">{{user_answers[2]}}</span> </div> <div class=select>正确答案： <span v-if="(questions.indexOf(question) + 1) == 1"> <font v-if="(user_answers[0] == right_answers[0])">{{right_answers[0]}}</font> <font v-if="!(user_answers[0] == right_answers[0])" style="color: rgb(192,64,84)">{{right_answers[0]}}</font> </span> <span v-if="(questions.indexOf(question) + 1) == 2"> <font v-if="(user_answers[1] == right_answers[1])">{{right_answers[1]}}</font> <font v-if="!(user_answers[1] == right_answers[1])" style="color: rgb(192,64,84)">{{right_answers[1]}}</font> </span> <span v-if="(questions.indexOf(question) + 1) == 3"> <font v-if="(user_answers[2] == right_answers[2])">{{right_answers[2]}}</font> <font v-if="!(user_answers[2] == right_answers[2])" style="color: rgb(192,64,84)">{{right_answers[2]}}</font> </span> </div> </div> </div> </div> <div class=caiti_1_pic v-if="(designation == \'秀才\')"> <p style="font-weight:bold; font-size: 16px">再接再厉,您是{{ designation }}!</p> </div> <div class=caiti_1_pic2 v-if="(designation == \'举人\')"> <p style="font-weight:bold; font-size: 16px">再接再厉,您是{{ designation }}!</p> </div> <div class=caiti_1_pic3 v-if="(designation == \'状元\')"> <p style="font-weight:bold; font-size: 16px">太厉害了,您是{{ designation }}!</p> </div> <div class=caiti_1_pic4 v-if="(designation == \'榜眼\')"> <p style="font-weight:bold; font-size: 16px">再接再厉,您是{{ designation }}!</p> </div> <div class=caiti_1_pic5 v-if="(designation == \'探花\')"> <p v-if="!(designation == \'草包\')" style="font-weight:bold; font-size: 16px">再接再厉,您是{{ designation }}!</p> </div> <div class=caiti_1_fr v-if=hasChange> <div><span>温馨提示：<br> 1、若您选择【我要使用红包】，系统会自动发放相应红包至您的账号，可直接使用；但今日就无猜谜机会了！</span> </div> <div> <span> 2、若您选择【继续猜谜】，则您可以继续作答，最后系统会根据您今日猜谜的最好成绩发放红包。</span> </div> </div> <div class=result2> <div style="font-size:16px;font-weight: bold" v-if=!isOutTime>恭喜您，答对{{score}}题</div> <div v-if=!hasChange> <p>今日您还有<span style=color:#c23e52>{{restChance}}次</span>猜谜机会</p> <p>今日最好成绩：<strong>答对{{h_score}}题 <span v-if="!(h_score == 0)"> ( <span style="font-weight: bold" v-if="(h_score == 1) ">8.15元抵扣红包</span> <span style="font-weight: bold" v-if="(h_score == 2) ">58.15元抵扣红包</span> <span style="font-weight: bold" v-if="(h_score == 3) ">188.15元抵扣红包</span> 已经躺在您的账户啦，赶快去使用吧）</span></strong> </p> </div> <div v-if=hasChange> <p>今日最好成绩：<strong>答对{{h_score}}题 <span v-if="!(h_score == 0)">(<span style="font-weight: bold" v-if="(h_score == 1)">可获8.15元抵扣红包</span> <span style="font-weight: bold" v-if="(h_score == 2) ">可获58.15元抵扣红包</span> <span style="font-weight: bold" v-if="(h_score == 3) ">可获188.15元抵扣红包</span>)</span></strong></p> <p>今日您还有<span style=color:#c23e52>{{restChance}}次</span>猜谜机会,是否继续猜谜？</p> </div> <div class=btn_box> <button v-if=hasChange class=btn4 @click=resolve>继续猜谜</button> <a href=/debts/lctz target=_blank><button v-if=!hasChange class=btn4>去投资</button></a> <button @click=endMidAutumnAnswer class="btn4 btn_bg" v-if="hasChange && (h_score > 0)">\b我要使用红包</button> </div> <div class=jifen v-if="isLastDay && ((designation == \'榜眼\') || (designation == \'状元\')) && (!hasChange)"> 感谢您参与本次猜谜活动，鉴于您的智力超群，再送您 <font v-if="(designation == \'榜眼\')">{{158}}</font><font v-if="(designation == \'状元\')">{{815}}</font> 积分 </div> </div> </div> <div class=result v-if=!isSend> <div class=caiti_1_pic v-if="(designation == \'秀才\')"> <p style="font-weight:bold; font-size: 16px">再接再厉,您是{{ designation }}!</p> </div> <div class=caiti_1_pic2 v-if="(designation == \'举人\')"> <p style="font-weight:bold; font-size: 16px">再接再厉,您是{{ designation }}!</p> </div> <div class=caiti_1_pic3 v-if="(designation == \'状元\')"> <p style="font-weight:bold; font-size: 16px">太厉害了,您是{{ designation }}!</p> </div> <div class=caiti_1_pic4 v-if="(designation == \'榜眼\')"> <p style="font-weight:bold; font-size: 16px">再接再厉,您是{{ designation }}!</p> </div> <div class=caiti_1_pic5 v-if="(designation == \'探花\')"> <p v-if="!(designation == \'草包\')" style="font-weight:bold; font-size: 16px">再接再厉,您是{{ designation }}!</p> </div> <div class=caiti_end> <p style=margin-top:40px><span class=tip>SORRY，作答时间已过，好可惜浪费了一次机会！</span></p> <br> <div style=line-height:22px v-if=!isLastDay>今日最好成绩：<strong>答对{{h_score}}题<br> <span v-if="!(h_score == 0)"><span style="font-weight: bold" v-if="(h_score == 1) && hasChange">可获8.15元抵扣红包</span> <span style="font-weight: bold" v-if="(h_score == 2) && hasChange">可获58.15元抵扣红包</span> <span style="font-weight: bold" v-if="(h_score == 3) && hasChange">可获188.15元抵扣红包</span>已经发放到您的账户了，赶快去使用吧！<span></span></span></strong></div> <div style=line-height:22px v-if=isLastDay>今日最好成绩：<strong>答对{{h_score}}题<br>58.15元抵扣红包和158积分已经发放到您的账户了，赶快去使用吧！</strong></div> <div class=btn_box> <button v-if=hasChange class=btn4 @click=resolve>继续猜谜</button> <a href=/debts/lctz><button v-if=!hasChange class=btn4>去投资</button></a> <button @click=endMidAutumnAnswer class="btn4 btn_bg" v-if="hasChange && (h_score != 0)">不猜了 使用红包</button> </div> <div class=special v-if=hasChange>温馨提示：<br> 1、若您选择【我要使用红包】，系统会自动发放相应红包至您的账号，可直接使用；但今日就无猜谜机会了！<br> 2、若您选择【继续猜谜】，则您可以继续作答，最后系统会根据您今日猜谜的最好成绩发放红包。 </div> </div> <div style=margin-top:10px v-if="isLastDay && ((designation == \'榜眼\') || (designation == \'状元\'))">感谢您参与本次猜谜活动，鉴于您的智力超群，再送您<span v-if="(designation == \'榜眼\')">158</span><span v-if="(designation == \'状元\')">185</span>积分！</div> </div> </div> </div> <div class=huabu></div> <div v-if="(!isOpen) && isBegin" class=rbtn2 @click=toggleJZ>开始猜谜</div> <div v-if="(!isOpen) && (!isBegin)" class=rbtn2 @click="isOpen = true">开始猜谜</div> <div v-if=isOpen class=rbtn @click="isOpen = false">收起</div> <p class=text style="padding:178px 0 87px 0">活动期间，每人每天最多有3次猜谜机会，每次3个题目限时90秒作答时间，根据成绩发放红包。点击【开始猜谜】赢取红包吧！</p> </div> </div> <div class=box> <div class=wrapper> <div style=margin-top:630px></div> <a href=/debts/lctz target=_blank><button class=btn>去投资</button></a> <div class=yqpm> <div class=pm> <div class=item><span class=username style="color: rgb(254,211,52)">{{pm[0].mobile}}</span><span class=num>{{pm[0].score}}</span></div> <div class=item><span class=username style="color: rgb(221,221,221)">{{pm[1].mobile}}</span><span class=num1>{{pm[1].score}}</span></div> <div class=item><span class=username style="color: rgb(212,140,103)">{{pm[2].mobile}}</span><span class=num2>{{pm[2].score}}</span></div> </div> </div> <div style=margin-top:90px></div> <button @click=invite class=btn3>去邀请</button><button @click=invite class=btns2>我的邀请</button> <p class=text style=margin-top:68px>活动期间，邀请5人及以上注册城城理财并投资成功，取邀请人数最多的前3名，分别奖励哈根达斯礼品券500元、300元、200元；邀请人数相同时，取邀请的投资数额最多者。</p> <div class=rule> <p>1、【你猜谜 我送红包】<br> 每人每天最多有3次猜谜机会，每次3题，作答限时90秒； <br> 第1、2次答题结束后可选择“继续答题”或“使用红包”，第3次答题结束后只能“使用红包”； <br> 用户选择“使用红包”后，红包自动发放到用户帐号，并且当天不能再答题； <br> 红包金额以用户当天答题次数中成绩最好的一次为标准进行发放； <br><br> 红包金额奖励标准如下 <br> 最好一次答对3题，可获得188.15元抵扣红包； <br> 最好一次答对2题，可获得58.15元抵扣红包； <br> 最好一次答对1题，可获得8.15元抵扣红包； <br> 最好一次答对0题无红包。 <br><br> 积分奖励标准如下 <br> 任意2天获得188.15元抵扣红包，奖励积分158分； <br> 任意3天及以上均获得188.15元抵扣红包，奖励积分815分； <br><br><br> 2、【你投资 我报销月饼】赠送的月饼报销红包即抵扣红包，在投资后立即发放至用户账户；<br><br> 3、【你猜谜 我送红包】和【你投资 我报销月饼】发放的红包可在【我的账户】-【我的抵扣红包】中查看，具体使用条件见票面详情；<br><br> 4、活动期间，邀请好友注册并成功投资，除可得8元抵扣红包外，邀请人数最多的前3名（需邀请5人及以上）分别奖励哈根达斯礼品券500元、300元、200元；邀请人数相同时，取邀请的投资数额最多者。礼品券为实体券，于活动结束后5个工作日内发放。； <br><br> 5、【你邀请进城 我送哈根达斯】活动的邀请必须真实有效，禁止恶意刷奖，若发现任何作弊或非法手段获得奖励的，一经核实，将取消全部奖励，并追究相关责任。<br><br> 6、本活动最终解释权归城城理财享有； <br><br> <span style=font-size:20px>如对活动有任何疑问，请致电客服热线400-711-0018。</span> </p> <div style=height:92px></div> </div> </div> </div> <div class=errorBox v-if=showError> <div class=top></div> <div class=msg>{{errorMsg}}</div> </div> '},201:function(t,i,e){var n,s;e(225),n=e(22),s=e(179),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},225:function(t,i,e){var n=e(110);"string"==typeof n&&(n=[[t.id,n,""]]);e(2)(n,{});n.locals&&(t.exports=n.locals)}});
//# sourceMappingURL=4.build.js.map