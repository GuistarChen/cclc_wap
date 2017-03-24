<style>
    .b {
        border: 1px solid;
    }
    
    .fl {
        float: left;
    }
    
    .fr {
        float: right;
    }
    
    .mt10 {
        margin-top: 10px;
    }
    
    .midAutumn {
        width: 100%;
        background: rgb(49, 85, 99);
    }
    
    .midAutumn .head {
        width: 100%;
    }
    
    .midAutumn .head img {
        width: 100%;
    }
    
    .midAutumn .jz {
        width: 100%;
        height: 25px;
        background: url(https://newcclcstatic.b0.upaiyun.com/vue_static/img/jz.png);
        background-size: 100% 100%;
    }
    
    .midAutumn .jz_content_close {
        width: 100%;
        height: 8px;
        background: url(https://newcclcstatic.b0.upaiyun.com/vue_static/img/jz_content.png);
        background-size: 100% 100%;
    }
    
    .midAutumn .jz_content_open {
        width: 100%;
        background: url(https://newcclcstatic.b0.upaiyun.com/vue_static/img/jz_open.png);
        background-size: 100% 100%;
        overflow-y: hidden;
    }
    
    .midAutumn .jz_content_open-enter {
        animation: jz_content_open-in .9s;
    }
    
    .midAutumn .jz_content_open-leave {
        animation: jz_content_open-out .9s;
    }
    
    @keyframes jz_content_open-in {
        from {
            height: 0;
        }
        to {
            height: 530px;
        }
    }
    
    @keyframes jz_content_open-out {
        from {
            height: 530px;
        }
        to {
            height: 0;
        }
    }
    
    .midAutumn .jz_content_open .question_content {
        width: 100%;
        height: 530px;
    }
    
    .midAutumn .jz_content_open .question_content .question_end {
        width: 70%;
        margin: 0 auto;
        height: 50px;
        margin-top: 15px;
    }
    
    .midAutumn .jz_content_open .question_content .question_end .timer {
        width: 20%;
        height: 100%;
        float: left;
    }
    
    .midAutumn .jz_content_open .question_content .question_end .timer .top {
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: rgb(157, 54, 70);
        font-size: 30px;
        display: block;
    }
    
    .midAutumn .jz_content_open .question_content .question_end .timer .bottom {
        width: 100%;
        height: 20px;
        line-height: 20px;
        display: block;
        text-align: center;
        font-size: 12px;
        color: rgb(157, 54, 70);
    }
    
    .midAutumn .jz_content_open .question_content .question_end .sennbtn {
        width: 50%;
        float: right;
        height: 40px;
        margin-top: 5px;
        text-align: center;
        line-height: 40px;
        background: url(https://newcclcstatic.b0.upaiyun.com/vue_static/img/sendbtn.png);
        color: rgb(74, 32, 37);
        font-size: 13px;
        background-size: 100% 100%;
    }
    
    .midAutumn .jz_content_open .question {
        width: 70%;
        height: 150px;
        margin: 0 auto;
        padding-top: 20px;
    }
    
    .midAutumn .jz_content_open .question .question_title {
        width: 100%;
        height: 40px;
        font-size: 13px;
        line-height: 20px;
        color: rgb(131, 63, 47);
    }
    
    .midAutumn .jz_content_open .question .question_options {
        width: 100%;
        height: 80px;
        font-size: 13px;
        line-height: 20px;
        color: rgb(131, 63, 47);
        margin-top: 10px;
    }
    
    .midAutumn .jz_content_open .question .question_options .question_option {
        width: 47%;
        height: 32px;
        border: 1px solid rgb(131, 63, 47);
        border-radius: 4px;
        color: rgb(131, 63, 47);
        text-align: center;
        line-height: 35px;
        background: rgba(0, 0, 0, 0);
    }
    
    .midAutumn .jz_content_open .question .question_options .question_active {
        background: rgb(192, 64, 84);
        color: rgb(236, 219, 189);
        border: 1px solid rgb(131, 63, 47);
        width: 47%;
        height: 32px;
        border-radius: 4px;
        text-align: center;
        line-height: 35px;
    }
    
    .midAutumn .rbtn {
        width: 150px;
        height: 35px;
        margin: 0 auto;
        background: url(https://newcclcstatic.b0.upaiyun.com/vue_static/img/rbtn.png) no-repeat;
        background-size: 100% 100%;
        margin-top: 20px;
        color: rgb(74, 32, 37);
        text-align: center;
        line-height: 35px;
        font-size: 12px;
    }
    
    .midAutumn .cm_rule {
        width: 100%;
    }
    
    .midAutumn .cm_rule img {
        width: 100%;
    }
    
    .midAutumn .gift {
        width: 100%;
    }
    
    .midAutumn .gift img {
        width: 100%;
    }
    
    .midAutumn .yqpm {
        width: 100%;
        height: 350px;
        background: url(https://newcclcstatic.b0.upaiyun.com/vue_static/img/pm.png) no-repeat;
        background-size: 100% 100%;
        margin-top: 20px;
    }
    
    .midAutumn .yqpm .pm {
        width: 60%;
        height: 126px;
        margin-left: 27%;
        margin-top: 165px;
        float: left;
    }
    
    .midAutumn .yqpm .pm .item {
        width: 100%;
        height: 42px;
    }
    
    .midAutumn .yqpm .pm .item .username {
        width: 35%;
        height: 100%;
        display: block;
        text-align: center;
        line-height: 42px;
        font-size: 13px;
        float: left;
    }
    
    .midAutumn .yqpm .pm .item .num {
        width: 35%;
        height: 100%;
        display: block;
        text-align: center;
        line-height: 42px;
        color: rgb(100, 158, 181);
        font-size: 13px;
        float: right;
    }
    
    .midAutumn .yqbtn {
        width: 80%;
        height: 35px;
        margin: 0 auto;
    }
    
    .midAutumn .yqbtn .rbtn-s {
        width: 45%;
        height: 35px;
        background: url(https://newcclcstatic.b0.upaiyun.com/vue_static/img/rbtn.png);
        background-size: 100% 100%;
        text-align: center;
        line-height: 35px;
        color: rgb(74, 32, 37);
        font-size: 12px;
        float: left;
    }
    
    .midAutumn .yqbtn .gbtn-s {
        width: 45%;
        height: 35px;
        background: url(https://newcclcstatic.b0.upaiyun.com/vue_static/img/gbtn.png);
        background-size: 100% 100%;
        text-align: center;
        line-height: 35px;
        color: rgb(44, 80, 62);
        font-size: 12px;
        float: right;
    }
    
    .midAutumn .rule {
        width: 100%;
    }
    
    .midAutumn .rule img {
        width: 100%;
    }
    
    .midAutumn .jz_content_open .question_content .question_finished {
        width: 70%;
        margin: 0 auto;
        padding-top: 20px;
        color: rgb(131, 63, 47);
        font-size: 12px;
    }
    
    .midAutumn .jz_content_open .question_content .question_finished .question_result {
        width: 100%;
        height: 20px;
        margin-top: 10px;
    }
    
    .midAutumn .jz_content_open .question_content .question_finished .question_result div {
        width: 50%;
        height: 20px;
        line-height: 20px;
        float: left;
    }
    
    .midAutumn .jz_content_open .question_content .result {
        width: 70%;
        margin: 0 auto;
        margin-top: 10px;
        height: 70px;
    }
    
    .midAutumn .jz_content_open .question_content .result .left_autumn {
        width: 60%;
        height: 100%;
        float: left;
    }
    
    .midAutumn .jz_content_open .question_content .result .right {
        width: 40%;
        height: 100%;
        float: right;
    }
    
    .midAutumn .jz_content_open .question_content .result .left_autumn .top {
        width: 100%;
        height: 25px;
        line-height: 25px;
        font-size: 15px;
        color: rgb(131, 63, 47);
        font-weight: bold;
        display: block;
    }
    
    .midAutumn .jz_content_open .question_content .result .left_autumn .bottom {
        width: 100%;
        height: 15px;
        line-height: 15px;
        font-size: 12px;
        color: rgb(131, 63, 47);
        display: block;
    }
    
    .midAutumn .jz_content_open .question_content .result .right .top {
        width: 100%;
        height: 50px;
        text-align: center;
    }
    
    .midAutumn .jz_content_open .question_content .result .right .top img {
        width: 50px;
        height: 50px;
        margin: 0 auto;
        display: block;
    }
    
    .midAutumn .jz_content_open .question_content .result .right .bottom {
        width: 100%;
        height: 20px;
        text-align: center;
        font-size: 10px;
        display: block;
        font-weight: bold;
        color: rgb(131, 63, 47);
    }
    
    .midAutumn .jz_content_open .question_content .btns {
        width: 70%;
        margin: 0 auto;
        height: 35px;
        margin-top: 15px;
    }
    
    .midAutumn .jz_content_open .question_content .btns .rbtn {
        width: 45%;
        height: 100%;
        text-align: center;
        line-height: 35px;
        color: rgb(131, 63, 47);
        background: url(https://newcclcstatic.b0.upaiyun.com/vue_static/img/sendbtn.png);
        background-size: 100% 100%;
        float: left;
        margin-top: 10px;
        font-size: 12px;
    }
    
    .midAutumn .jz_content_open .question_content .btns .bbtn {
        width: 45%;
        height: 100%;
        text-align: center;
        line-height: 35px;
        color: rgb(29, 53, 79);
        background: url(https://newcclcstatic.b0.upaiyun.com/vue_static/img/use.png);
        background-size: 100% 100%;
        float: right;
        margin-top: 10px;
        font-size: 12px;
    }
    
    .midAutumn .jz_content_open .question_content .question_rule {
        width: 70%;
        height: 120px;
        margin: 0 auto;
        margin-top: 20px;
        border-top: 1px dashed rgb(218, 196, 167);
        background: url(https://newcclcstatic.b0.upaiyun.com/vue_static/img/q_rule.png);
        background-size: 100% 100%;
    }
    
    .midAutumn .jz_content_open .question_content .timeoutResult {
        width: 70%;
        height: 250px;
        padding-top: 70px;
        margin: 0 auto;
    }
    
    .midAutumn .jz_content_open .question_content .timeoutResult .top {
        width: 100%;
        height: 40px;
        font-size: 19px;
        color: rgb(131, 63, 47);
        line-height: 40px;
        display: block;
    }
    
    .midAutumn .jz_content_open .question_content .timeoutResult .bottom {
        width: 100%;
        height: 40px;
        font-size: 22px;
        color: rgb(131, 63, 47);
        line-height: 40px;
        font-weight: bold;
        display: block;
    }
    
    .midAutumn .jz_content_open .question_content .jifen1 {
        width: 70%;
        height: 20px;
        color: rgb(131, 63, 47);
        line-height: 20px;
        font-size: 12px;
        margin: 0 auto;
        margin-top: 20px;
    }
    
    .midAutumn .shade {
        top: 0;
        bottom: 0;
        width: 100%;
        background: transparent;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.3);
    }
    
    .midAutumn .shade .confirm_box {
        width: 80%;
        height: 150px;
        background: #fff;
        margin: 0 auto;
        position: relative;
        top: 150px;
        border-radius: 10px;
    }
    
    .midAutumn .shade .confirm_box .top {
        width: 100%;
        height: 100px;
        text-align: center;
        line-height: 100px;
    }
    
    .midAutumn .shade .confirm_box .bottom {
        width: 100%;
        height: 50px;
    }
    
    .midAutumn .shade .confirm_box .bottom span {
        display: block;
        width: 50%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        float: left;
    }
</style>

<template>
    <div class="midAutumn">
        <!--confirm-start-->
        <div class="shade" v-if="!isHide">
            <div class="confirm_box">
                <div class="top">
                    {{msg}}
                </div>
                <div class="bottom">
                    <span style="background: rgb(241,241,241); border-bottom-left-radius: 10px;" v-touch:tap="cancel">取消</span>
                    <span style="background: rgb(235,78,83); color: #fff; border-bottom-right-radius: 10px;" v-touch:tap="begin">确定</span>
                </div>
            </div>
        </div>
        <!--comfirm-end-->
        <div class="head">
            <img src="https://newcclcstatic.b0.upaiyun.com/vue_static/img/title.png" />
        </div>
        <div class="jz"></div>
        <div v-if="!isOpen" class="jz_content_close"></div>
        <div v-if="isOpen" class="jz_content_open" transition="jz_content_open">
            <div class="question_content" v-if="!isFinished">
                <div class="question" v-for="question in questions">
                    <div class="question_title">{{questions.indexOf(question) + 1}}.{{question.title}}</div>
                    <div class="question_options">
                        <div class="question_option fl" v-touch:tap="active(questions.indexOf(question) + 1, $event)">{{question.options[0]}}</div>
                        <div class="question_option fr" v-touch:tap="active(questions.indexOf(question) + 1, $event)">{{question.options[1]}}</div>
                        <div class="question_option fl mt10" v-touch:tap="active(questions.indexOf(question) + 1, $event)">{{question.options[2]}}</div>
                        <div class="question_option fr mt10" v-touch:tap="active(questions.indexOf(question) + 1, $event)">{{question.options[3]}}</div>
                    </div>
                </div>
                <div class="question_end">
                    <div class="timer">
                        <span class="top">{{timer}}</span>
                        <span class="bottom">倒计时</span>
                    </div>
                    <div class="sennbtn" v-touch:tap="submit">提交</div>
                </div>
            </div>
            <div class="question_content" v-if="isFinished">
                <!--显示用户选项与正确答案-->
                <div v-if="isSend">
                    <div class="question_finished" v-for="question in questions">
                        <div class="question_title">{{questions.indexOf(question) + 1}}.{{question.title}}</div>
                        <div class="question_result">
                            <div>您的选择：
                                <span v-if="(questions.indexOf(question) + 1) == 1">{{user_answers[0]}}</span>
                                <span v-if="(questions.indexOf(question) + 1) == 2">{{user_answers[1]}}</span>
                                <span v-if="(questions.indexOf(question) + 1) == 3">{{user_answers[2]}}</span>
                            </div>
                            <div>正确答案：
                                <span v-if="(questions.indexOf(question) + 1) == 1">
                                    <font v-if="(user_answers[0] == right_answers[0])">{{right_answers[0]}}</font>
                                    <font v-if="!(user_answers[0] == right_answers[0])" style="color: rgb(192,64,84);">{{right_answers[0]}}</font>
                                </span>
                                <span v-if="(questions.indexOf(question) + 1) == 2">
                                    <font v-if="(user_answers[1] == right_answers[1])">{{right_answers[1]}}</font>
                                    <font v-if="!(user_answers[1] == right_answers[1])" style="color: rgb(192,64,84);">{{right_answers[1]}}</font>
                                </span>
                                <span v-if="(questions.indexOf(question) + 1) == 3">
                                    <font v-if="(user_answers[2] == right_answers[2])">{{right_answers[2]}}</font>
                                    <font v-if="!(user_answers[2] == right_answers[2])" style="color: rgb(192,64,84);">{{right_answers[2]}}</font>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="timeoutResult" v-if="!isSend && isTimeout">
                    <span class="top">SORRY，作答时间已过</span>
                    <span class="bottom">好可惜浪费了一次机会</span>
                </div>
                <div class="timeoutResult" v-if="(!isLastDay) && (!hasChange) && (!isSend)">
                    <span class="top">SORRY</span>
                    <span class="bottom">您今天没有猜谜机会了</span>
                    <span class="bottom">明天再来吧</span>
                </div>
                <div class="timeoutResult" v-if="(isLastDay) && (!hasChange) && (!isSend)">
                    <span class="top">SORRY</span>
                    <span class="bottom">您的猜谜旅途结束了</span>
                    <span class="bottom">去看看其他活动吧～</span>
                </div>
                <!--显示答题结果-->
                <div class="result">
                    <div class="left_autumn">
                        <span class="top" v-if="isSend">恭喜您，答对{{score}}题</span>
                        <span class="top" v-if="!isSend"></span>
                        <span class="bottom">今日最好成绩：<span style="font-weight: bold;">答对{{h_score}}题</span></span>
                        <span class="bottom" v-if="!(h_score == 0) && hasChange">
                            <span style="font-weight: bold;" v-if="(h_score == 1) && hasChange">可获8.15元抵扣红包</span>
                        <span style="font-weight: bold;" v-if="(h_score == 2) && hasChange">可获58.15元抵扣红包</span>
                        <span style="font-weight: bold;" v-if="(h_score == 3) && hasChange">可获188.15元抵扣红包</span>
                        </span>
                        <span class="bottom" v-if="!((isLastDay) && (!hasChange))">今日剩余机会：<span style="font-weight: bold; color: rgb(192,64,84);">{{restChance}}次</span></span>
                        <span class="bottom" v-if="!hasChange && (h_score !== 0)">
                            <span style="font-weight: bold;">
                                <span v-if="(h_score == 1)">8.15</span>
                        <span v-if="(h_score == 2)">58.15</span>
                        <span v-if="(h_score == 3)">188.15</span> 元抵扣红包已经躺在您的账户啦，赶快去使用吧
                        </span>
                        </span>
                    </div>
                    <div class="right">
                        <span class="top">
                            <img v-if="(designation == '举人')" src="https://newcclcstatic.b0.upaiyun.com/vue_static/img/icon_03.png"/>
                            <img v-if="(designation == '秀才')" src="https://newcclcstatic.b0.upaiyun.com/vue_static/img/icon_04.png"/>
                            <img v-if="(designation == '状元')" src="https://newcclcstatic.b0.upaiyun.com/vue_static/img/icon_05.png"/>
                            <img v-if="(designation == '榜眼')" src="https://newcclcstatic.b0.upaiyun.com/vue_static/img/icon_06.png"/>
                            <img v-if="(designation == '探花')" src="https://newcclcstatic.b0.upaiyun.com/vue_static/img/icon_07.png"/>
                        </span>
                        <span v-if="!(designation == '草包')" class="bottom" style="padding-top: 5px;">
                            <font v-if="!(designation == '状元')">再接再厉</font><font v-if="(designation == '状元')">太厉害了</font>,您是{{designation}}!</span>
                    </div>
                </div>
                <!--显示用户方向-->
                <div class="btns">
                    <div class="rbtn" v-if="hasChange && showJX" v-touch:tap="resolve">继续猜谜</div>
                    <div class="rbtn" v-if="!hasChange" v-touch:tap="endMidAutumnAnswer">去投资</div>
                    <div class="bbtn" v-if="hasChange && (h_score !== 0)" v-touch:tap="endMidAutumnAnswer">我要使用红包</div>
                </div>
                <!--显示游戏规则-->
                <div class="question_rule" v-if="hasChange"></div>
                <!--显示积分-->
                <div class="jifen1" v-if="isLastDay && ((designation == '榜眼') || (designation == '状元')) && (!hasChange)">
                    感谢您参与本次猜谜活动，鉴于您的智力超群，再送您
                    <font v-if="(designation == '榜眼')">{{158}}</font>
                    <font v-if="(designation == '状元')">{{815}}</font>
                    积分
                </div>
            </div>
        </div>
        <div class="jz"></div>
        <div v-if="(!isOpen) && isBegin" class="rbtn" v-touch:tap="toggleJZ">开始猜谜</div>
        <div v-if="(!isOpen) && (!isBegin)" class="rbtn" v-touch:tap="isOpen = true">开始猜谜</div>
        <div v-if="isOpen" class="rbtn" v-touch:tap="isOpen = false">收起</div>
        <div class="cm_rule">
            <img src="https://newcclcstatic.b0.upaiyun.com/vue_static/img/cm_rule.png" />
        </div>
        <div class="gift">
            <img src="https://newcclcstatic.b0.upaiyun.com/vue_static/img/gift.png" />
        </div>
        <div class="rbtn" v-touch:tap="touzi">去投资</div>
        <div class="yqpm">
            <div class="pm">
                <div class="item"><span class="username" style="color: rgb(254,211,52);">{{pm[0].mobile}}</span><span class="num">{{pm[0].score}}</span></div>
                <div class="item"><span class="username" style="color: rgb(221,221,221);">{{pm[1].mobile}}</span><span class="num">{{pm[1].score}}</span></div>
                <div class="item"><span class="username" style="color: rgb(212,140,103);">{{pm[2].mobile}}</span><span class="num">{{pm[2].score}}</span></div>
            </div>
        </div>
        <div class="yqbtn">
            <div v-touch:tap="goShare()" class="rbtn-s">去邀请</div>
            <div v-touch:tap="goNew()" class="gbtn-s">我的邀请</div>
        </div>
        <div class="rule">
            <img src="https://newcclcstatic.b0.upaiyun.com/vue_static/img/rule.png" />
        </div>
    </div>
    <div class="errorBox" v-if="showError">
        <div class="top"></div>
        <div class="msg">{{errorMsg}}</div>
    </div>
</template>

<script>
    export default {
        data () {
            this.CLData = CLData;
            return {
                isOpen: false,
                isFinished: false,
                isSend: false,
                hasChange: true,
                isLastDay: false,
                isBegin: true,
                timer: '',
                time: '',
                answer: [],
                params: {
                    answers: []
                },
                pm: [{mobile: '待定', score: '待定'}, {mobile: '待定', score: '待定'}, {mobile: '待定', score: '待定'}],
                questions: [],
                score: '',
                h_score: '',
                user_answers: [],
                right_answers: [],
                restChance: '',
                designation: '',
                showError: false,
                errorMsg: '',
                isFirst: true,
                isHide: true,
                msg: '',
                isReady: false,
                showJX: false,
                isTimeout: false
            }
        },
        ready() {
            var self = this;
            var sessionid = encodeURIComponent(self.$route.query.sessionid+'=');
            var sign = self.$route.query.sign;
            CLData.autoSignFromApp({sessionid: sessionid, sign: sign}, function(data){
                if(data && data.sessionid){
                    localStorage['session']=data.sessionid;
                }
                self.fetchMidAutumnInvitationRank();
                self.fetchMidAutumnInfo();
                self.getMidAutumnLevel();
            });
        },
        destroyed() {
            var self = this;
            // 销毁定时器
            clearInterval(self.time);
        },
        methods: {
            // 去邀请
            goShare: function() {
                var self = this;
                var ua = window.navigator.userAgent.toLowerCase();
                if(ua.match(/CCLC_Android|cclc_ios/i)){
                    window.location.href='cclc://www.cclc.co/cclc?action=invite';
                } else {
                    CLData.fetchAccount(function(res) {
                        if(res.errcode || !res.mobile) {
                            self.$route.router.go('/signIn?gotoUrl=share');
                        } else {
                            self.$route.router.go('/share');
                        }
                    });
                }
            },
            // 我的邀请
            goNew: function() {
                var self = this;

                var ua = window.navigator.userAgent.toLowerCase();
                if(ua.match(/CCLC_Android|cclc_ios/i)){
                    window.location.href='cclc://www.cclc.co/cclc?action=myinvite';
                } else {
                    CLData.fetchAccount(function(res) {
                        if(res.errcode || !res.mobile) {
                            self.$route.router.go('/signIn?gotoUrl=new');
                        } else {
                            self.$route.router.go('/new');
                        }
                    });
                }
            },
            popModal: function(param){
                var self = this;
                self.showError = true;
                self.errorMsg = param.str;
                setTimeout(function(){
                    self.showError = false;
                }, 1200);
            },
            fetchMidAutumnInvitationRank: function () {
                var self = this;
                CLData.fetchMidAutumnInvitationRank(function (res) {
                    if(res.arr.length === 3) {
                        self.pm = res.arr;
                    } else if(res.arr.length < 3) {
                        for(var i = 0; i < res.arr.length; i ++) {
                            self.pm[i].mobile = res.arr[i].mobile;
                            self.pm[i].score = res.arr[i].score;
                        }
                    }
                });
            },
            fetchMidAutumnResult: function () {
                var self = this;
                CLData.fetchMidAutumnResult({answers:JSON.stringify(this.params.answers)}, function (res) {
                    if(res.err) {
                        self.popModal({
                            str: res.err
                        });
                    } else {
                        var o = res.arr;
                        if(o.restChance == 0) {
                            self.hasChange = false;
                        }
                        self.score = o.score;
                        self.h_score = o.h_score;
                        self.user_answers = o.user_answers;
                        self.right_answers = o.right_answers;
                        self.restChance = o.restChance;
                        self.designation = o.designation;
                    }
                    self.showJX = true;
                });
            },
            fetchMidAutumnPaper: function () {
                var self = this;
                CLData.fetchMidAutumnPaper(function (res) {
                    console.log(res);
                    if(res.err) {
                        clearInterval(self.time);
                        if(res.errcode == 2) {
                            self.$route.router.go('/signIn?path=/midAutumn');
                            return;
                        } else if(res.err == "今天答题机会已经全部用完了！") {
                            self.isOpen = true;
                            self.hasChange = false;
                            self.isFinished = true;
                            console.log(self.hasChange);
                        } else {
                            self.popModal({
                                str: res.err
                            });
                        }
                        self.isBegin = true;
                    } else {
                        self.questions = res.arr;
                        self.isOpen = true;
                        self.showJX = false;
                    }             
                });
            },
            toggleJZ: function () {
                var self = this;
                if(!localStorage['session']) {
                    self.$route.router.go('/signIn?path=/midAutumn');
                } else {
                    if(self.isFirst) {
                        if(self.hasChange) {
                            self.isHide = false;
                            self.msg = "本次猜谜您有90秒时间，准备好了吗？";
                            self.isFirst = false;
                        } else {
                            this.isOpen = true;
                            this.isFinished = true;
                        }
                    }
                    if(self.isReady) {
                        this.fetchMidAutumnPaper();
                        self.setTime(90);
                    }
                }
            },
            active: function (no, event) {
                if(no == 1) {
                    this.answer[0] = event.target.innerHTML;
                } else if(no == 2) {
                    this.answer[1] = event.target.innerHTML;
                } else if(no == 3) {
                    this.answer[2] = event.target.innerHTML;                                    
                }
                var s = event.target.parentNode.children;
                for(var i = 0; i < s.length; i ++) {
                    s[i].style.cssText = "background-color: ''; color=rgb(131,63,47)";
                }
                event.target.style.cssText = "background: rgb(192,64,84); color: rgb(236,219,189);";
            },
            submit: function () {
                if(this.answer[0] && this.answer[1] && this.answer[2]) {
                    var self = this;
                    self.isFinished = true;
                    self.isSend = true;
                    clearInterval(self.time);
                    self.params.answers = [];
                    for(var i = 0; i < self.questions.length; i ++) {
                        var item = { qid: '', answer: '' };
                        item.qid = self.questions[i].qid;
                        item.answer = self.answer[i];
                        self.params.answers.push(item);
                    }
                    self.fetchMidAutumnResult();
                } else {
                    this.popModal({
                        str: '您还有题目未答完，请答完以后再提交！'
                    });
                }
            },
            resolve: function () {
                this.isFinished = false;
                this.fetchMidAutumnPaper();
                this.setTime(90);
            },
            setTime: function (time) {
                var self = this;
                this.timer = time;
                this.answer = [];
                this.time = setInterval (function () {
                     if(self.timer == 0) {
                         clearInterval(self.time);
                         self.isFinished = true;
                         self.isSend = false;
                         self.isTimeout = true;
                         self.showJX = true;
                         self.getMidAutumnLevel();
                     } else {
                         self.timer --;
                     }
                 }, 1000);
            },
            endMidAutumnAnswer: function () {
                var self = this;
                CLData.endMidAutumnAnswer(function (res) {
                    self.h_score = res.h_score;
                    self.restChance = res.restChance;
                });
                this.$route.router.go('/debts');
            },
            getMidAutumnLevel: function () {
                var self = this;
                CLData.getMidAutumnLevel(function (res) {
                    if(res && res.res) {
                        self.designation = res.res.designation;
                        self.h_score = res.res.h_score;
                        self.restChance = res.res.restChance;
                        if (res.res.restChance == 0) {
                            self.hasChange = false;
                        }
                    }
                    console.log(res);
                });
            },
            fetchMidAutumnInfo: function () {
                var self = this;
                CLData.fetchMidAutumnInfo(function (res) {
                    self.isLastDay = res.isLastDay;
                });
            },
            touzi: function () {
                this.$route.router.go('/debts');
            },
            begin: function () {
                this.isReady = true;
                this.isHide = true;
                this.fetchMidAutumnPaper();
                this.setTime(90);
                this.isBegin = false;
            },
            cancel: function () {
                this.isHide = true;
                this.isReady = false;
                this.isFirst = true;
            }
        }
    }
</script>