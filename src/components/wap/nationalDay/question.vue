<template>
    
    <div class="noChange" v-if="hasChange">
        今天答题机会已经全部用完了！<br>
        {{timer2}}秒后返回
    </div>
    <div v-if="!hasChange">
        <div class="photos_head">
            <a  v-touch:tap="rollback" class="back"></a>
            <span  v-if="isFinish">开始答题</span><span  v-if="!isFinish">答题结果</span>
        </div>
        <div style="height: 50px;"></div>
        
        <div class="question_box"  v-if="isFinish">
            <div class="question_item" v-for="question in questions">
                <div class="title"><span>{{questions.indexOf(question) + 1}}.{{question.title}}</span></div>
                <div class="options">
                    <div class="option fl" v-for="option in question.options" v-touch:tap="active(questions.indexOf(question) + 1, $event)">{{option}}</div>
                </div>
            </div>
        </div>
        <div class="photo_footer2" v-if="isFinish">
            <span v-touch:tap="submit" class="upload">提交答案（{{timer}}）</span>
        </div>
        <div class="rule_head"  v-if="!isFinish">
            <div class="question_result">
                恭喜您答对{{score}}题<br>
                <i>本次获得<span v-if="(score == 0 || score == 2 || score == 1 )">0</span><span v-if="(score == 3)">300</span><span v-if="(score == 4)">400</span><span v-if="(score == 5)">500</span>积分，明天继续哦</i>
            </div>
        </div>
        <div  v-if="!isFinish">
            <div class="question_finished" v-for="question in questions">
                <div class="question_title">{{questions.indexOf(question) + 1}}.{{question.title}}</div>
                <div class="question_result">
                        <div class="select">您的选择：
                            <span v-if="(questions.indexOf(question) + 1) == 1">{{user_answers[0]}}</span>
                            <span v-if="(questions.indexOf(question) + 1) == 2">{{user_answers[1]}}</span>
                            <span v-if="(questions.indexOf(question) + 1) == 3">{{user_answers[2]}}</span>
                            <span v-if="(questions.indexOf(question) + 1) == 4">{{user_answers[3]}}</span>
                            <span v-if="(questions.indexOf(question) + 1) == 5">{{user_answers[4]}}</span>
                        </div>
                        <div  class="select">正确答案：
                            <span v-if="(questions.indexOf(question) + 1) == 1">
                            <font v-if="(user_answers[0] == right_answers[0])">{{right_answers[0]}}</font>
                            <font v-if="!(user_answers[0] == right_answers[0])" style="color: rgb(235,0,44);">{{right_answers[0]}}</font>
                            </span>
                            <span v-if="(questions.indexOf(question) + 1) == 2">
                            <font v-if="(user_answers[1] == right_answers[1])">{{right_answers[1]}}</font>
                            <font v-if="!(user_answers[1] == right_answers[1])" style="color: rgb(235,0,44);">{{right_answers[1]}}</font>
                            </span>
                            <span v-if="(questions.indexOf(question) + 1) == 3">
                            <font v-if="(user_answers[2] == right_answers[2])">{{right_answers[2]}}</font>
                            <font v-if="!(user_answers[2] == right_answers[2])" style="color: rgb(235,0,44);">{{right_answers[2]}}</font>
                            </span>
                            <span v-if="(questions.indexOf(question) + 1) == 4">
                            <font v-if="(user_answers[3] == right_answers[3])">{{right_answers[3]}}</font>
                            <font v-if="!(user_answers[3] == right_answers[3])" style="color: rgb(235,0,44);">{{right_answers[3]}}</font>
                            </span>
                            <span v-if="(questions.indexOf(question) + 1) == 5">
                            <font v-if="(user_answers[4] == right_answers[4])">{{right_answers[4]}}</font>
                            <font v-if="!(user_answers[4] == right_answers[4])" style="color: rgb(235,0,44);">{{right_answers[4]}}</font>
                            </span>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
            </div>
        </div>
        <button  v-if="!isFinish" v-touch:tap="rollback" class="answer_btn">返回活动</button>
        <div class="errorBox" v-if="showError">
            <div class="top"></div>
            <div class="msg">{{errorMsg}}</div>
        </div>
    </div>
</template>

<style>
    .noChange {
        font-size:16px;
        padding:20px;
        text-align:center;
    }
    body{
        background-color:#edeff5;
    }
    .fl {
        float: left;
        
    }
    .fr {
        float: right;
      
    }
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
    .photos_head {
        position: fixed;
        width: 100%;
        top: 0;
        height: 50px;
        background: #adb850;
        line-height:50px;
        text-align:center;
        color:#fff;
        font-size:1.2em;
    }
    .question_box {
        width: 90%;
        margin: 0 auto;
        margin-top: 10px;
        padding-bottom:60px;
    }
    .question_item {
        height: 150px;
    }
    .question_item .title {
        
    }
    .question_item .title span {
        height: 20px;
        line-height: 20px;
        font-size: 13px;
        color: #676969;
    }
    .question_item .options {
        height: 110px;
    }
    .question_item .options .option {
        margin-left: 3.1%;
        height: 40px;
        width: 45%;
        line-height: 40px;
        text-align: center;
        color: #676969;
        font-size: 12px;
        border: 1px solid #999;
        border-radius: 4px;
        margin-top: 10px;
    }
    .photo_footer2 {
        padding:6px 0;
        position:fixed;
        bottom:0;
        width:100%;
        background:#fff;
    }
    .photo_footer2 .upload {
        background:#adb850;
        color: #666d2f;
        display:block;
        width:50%;
        margin-left:25%;
        text-align:center;
        line-height:35px;
        border-radius:4px;
        font-size:18px;
    }
    .b {
        border: 1px solid #000;
    }
       .answer_btn {
        width:70%;
        margin-left:15%;
        background: #adb850;
        border:none;
        border-radius:4px;
        color:#666d2f;
        line-height:40px;
        margin-top:40px;
        margin-bottom:40px;
    }
    .clear {
        clear:both;
    }
    .question_finished .select {
    
   
        margin-left:3.1%;
    }
    .question_finished {
        border-bottom:1px solid #ccc;
        padding:10px 20px;
        background:#edeff5;
        color:rgba(0,0,0,.72);
    }
    .question_result {
        color:#999;
    }
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
     .rule_head {
        padding: 20px 5%;
        background:#fff;
    }
    .rule_head  .question_result {
        padding-top:4px;
        height:50px;
        border-left:5px solid #adb850;
        font-size: 20px;
        line-height: 20px;
        padding-left: 10px; 
        color: #333;
    }
     .rule_head i {
         font-size:12px;
         color:#999;
         font-weight:normal;
         line-height:20px;
         padding-top:4px;
     }
    .photos_head{
        position: fixed;
        z-index:999;
        width: 100%;
        top: 0;
        height: 50px;
        background: #adb850;
        line-height:50px;
        text-align:center;
        color:#fff;
        font-size:1.2em;
    }
</style>

<script>
    export default {
        data() {
            this.CLData = CLData;
            return {
                questions: [],
                answer: [],
                timer:'',
                timer2:'',
                time:'',
                time2:'',
                answer: [],
                params: {
                    answers: []
                },
                score:0,
                h_score:'',
                isFinish:true,
                user_answers: [],
                right_answers: [],
                restChance: '',
                designation: '',
                showError: false,
                errorMsg: '',
                isFirst: true,
                isHide: true,
                hasChange:false,
                msg: '',
                isReady: false,
                showJX: false,
                isTimeout: false

            }
        },
        ready(){
               this.fetchNationdalDayPaper();
               this.setTime(120);
        },
        methods: {
            // 回退到上一个页面
            rollback: function() {
                window.history.back();
            },
            popModal: function(param){
                var self = this;
                self.showError = true;
                self.errorMsg = param.str;
                setTimeout(function(){
                    self.showError = false;
                }, 1200);
            },
            active: function (no, event) {
                if(no == 1) {
                    this.answer[0] = event.target.innerHTML;
                    console.log(this.answer[0])
                } else if(no == 2) {
                    this.answer[1] = event.target.innerHTML;
                } else if(no == 3) {
                    this.answer[2] = event.target.innerHTML;                                    
                } else if(no == 4) {
                     this.answer[3] = event.target.innerHTML;    
                } else if(no == 5) {
                    this.answer[4] = event.target.innerHTML;  
                }
                var s = event.target.parentNode.children;
                for(var i = 0; i < s.length; i ++) {
                    s[i].style.cssText = "background-color: ''; color=rgb(255,255,255)";
                }
                event.target.style.cssText = "background: rgb(173,184,80); color: rgb(255,255,255);border:1px solid #adb850";
                
            },
            fetchNationdalDayResult:function(){
                   var self = this;
                CLData.fetchNationdalDayResult({answers:JSON.stringify(this.params.answers)}, function (res) {
                    if(res.err) {
                        self.popModal({
                            str: res.err
                        });
                    } else {
                        var o = res.arr;
                        self.score = o.score;
                        console.log(self.score);
                        self.h_score = o.h_score;
                        self.user_answers = o.user_answers;
                        self.right_answers = o.right_answers;
                    }
                
                });
            },
         
            fetchNationdalDayPaper: function () {
                var self = this;
                CLData.fetchNationdalDayPaper(function (res) {
                    console.log(res);
                    self.questions = res.arr;
                    if(res.err) {
                        self.hasChange = true; 
                        self.setTime2(3);    
                        setTimeout(function(){
                        clearInterval(self.time);
                        self.$route.router.go('/nationalDay');
                        }, 3000);
                    }       
                });
            },
            submit: function () {
                var self =this;
                console.log(self.answer)
                if(this.answer[0] && this.answer[1] && this.answer[2]&& this.answer[3] && this.answer[4] ) {
                    var self = this;
                    self.isFinish= false;
                    
                    clearInterval(self.time);
                    self.params.answers = [];
                    for(var i = 0; i < self.questions.length; i ++) {
                        var item = { qid: '', answer: '' };
                        item.qid = self.questions[i].qid;
                        item.answer = self.answer[i];
                        self.params.answers.push(item);
                    }
                    self.fetchNationdalDayResult();
                    
                } else {
                    this.popModal({
                        str: '您还有题目未答完，请答完以后再提交！'
                    });
                }
            },
            setTime: function (time) {
                var self = this;
                this.timer = time;
                this.answer = [];
                this.time = setInterval (function () {
                     if(self.timer == 0) {
                         clearInterval(self.time);
                        self.$route.router.go('/answer');
                     } else {
                         self.timer --;
                     }
                 }, 1000);
            },
            setTime2: function (time) {
                var self = this;
                this.timer2 = time;
                this.time2 = setInterval (function () {
                     if(self.timer == 0) {
                         clearInterval(self.time);
                     } else {
                         self.timer2 --;
                     }
                 }, 1000);
            }
        }
    }
</script>