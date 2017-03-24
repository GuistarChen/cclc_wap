<style>
    /* CSS Document */
    
    html,
    body {
        color: #333;
        background: #315563;
        min-width: 1200px;
    }
    
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    p,
    blockquote,
    dl,
    dt,
    dd,
    ul,
    ol,
    li,
    pre,
    form,
    fieldset,
    legend,
    button,
    input,
    textarea,
    th,
    td {
        margin: 0;
        padding: 0;
    }
    
    body,
    button,
    input,
    select,
    textarea,
    li,
    dt,
    dd,
    div,
    td,
    p,
    span {
        font-size: 14px;
        font-family: Microsoft Yahei, arial, verdana;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: 100%;
        font-weight: normal;
        font-family: Microsoft Yahei, arial, verdana;
    }
    
    address,
    cite,
    dfn,
    em,
    var {
        font-style: normal;
    }
    
    code,
    kbd,
    pre,
    samp {
        font-family: courier new, courier, monospace;
    }
    
    ul,
    ol {
        list-style: none outside none;
    }
    
    a {
        color: #333;
        text-decoration: none;
        hide-focus: expression(this.hideFocus=true);
        outline: none;
    }
    
    a:hover {
        color: #ff6e03;
        text-decoration: none;
    }
    
    a:focus {
        outline: 0;
    }
    
    legend {
        color: #333;
    }
    
    fieldset,
    img {
        border: none;
    }
    
    img {
        vertical-align: bottom;
    }
    
    button,
    input,
    select,
    textarea {
        margin: 0;
        padding: 0;
        font-size: 14px;
        outline: 0 none;
        vertical-align: middle;
    }
    
    button {
        cursor: pointer;
    }
    
    input[type="radio"] {
        position: relative;
        top: -2px;
    }
    
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    
    .clear {
        clear: both;
    }
    /*layout*/
    
    .wrapper {
        clear: both;
        width: 1000px;
        margin: 0 auto;
        overflow: hidden;
        *padding-top: 15px;
    }
    /*ellipsis*/
    
    .cclc-ellipsis {
        overflow: hidden;
        position: relative;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
    }
    /*fontcolor*/
    
    .orages {
        color: #ff6e03;
    }
    
    .gold {
        color: #ffb503;
    }
    /*float*/
    
    .fl {
        display: inline;
        float: left;
        vertical-align: bottom;
    }
    
    .fr {
        display: inline;
        float: right
    }
    /*猜谜*/
    
    .head {
        background: url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/bg_01.png") 50% top no-repeat;
        height: 762px;
        width: 100%;
    }
    
    .box {
        background: url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/bg_03.png") 50% top no-repeat;
    }
    
    .caimi {
        background: url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/bg_02.png") 50% top no-repeat;
        padding-top: 223px;
    }
    
    .huabu {
        background: url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/hb.png") no-repeat;
        width: 1000px;
        height: 62px;
    }
    
    .rbtn,
    .rbtn2,
    .rbtn3 {
        cursor: pointer;
    }
    
    .rbtn {
        width: 244px;
        height: 72px;
        margin: 0 auto;
        background: url(https://newcclcstatic.b0.upaiyun.com/vue_static/img/btn.png) no-repeat;
        color: #501c24;
        text-align: center;
        line-height: 72px;
        font-size: 24px;
        margin-top: 70px;
        position: absolute;
        left: 50%;
        margin-left: -122px;
    }
    
    .rbtn2 {
        width: 244px;
        height: 72px;
        left: 50%;
        margin-left: -122px;
        background: url(https://newcclcstatic.b0.upaiyun.com/vue_static/img/btn.png) no-repeat;
        color: #501c24;
        text-align: center;
        line-height: 72px;
        font-size: 24px;
        margin-top: 70px;
        position: absolute;
    }
    
    .rbtn3 {
        width: 244px;
        height: 72px;
        left: 50%;
        margin-left: -122px;
        background: url(https://newcclcstatic.b0.upaiyun.com/vue_static/img/btn.png) no-repeat;
        color: #501c24;
        text-align: center;
        line-height: 72px;
        font-size: 24px;
        margin-top: 70px;
        position: absolute;
        z-index: 9;
    }
    
    .btn {
        background: url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/btn.png") no-repeat;
        width: 244px;
        height: 72px;
        border: none;
        margin-left: 378px;
        font-size: 24px;
        color: #501c24;
    }
    
    .btns2 {
        background: url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/btn2.png") no-repeat;
        width: 244px;
        height: 72px;
        border: none;
        margin-left: 45px;
        font-size: 24px;
        color: #501c24;
    }
    
    .btn3 {
        background: url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/btn.png") no-repeat;
        width: 244px;
        height: 72px;
        border: none;
        margin-left: 247px;
        font-size: 24px;
        color: #501c24;
    }
    
    .text {
        color: #629eb7;
        font-size: 16px;
        text-align: center;
    }
    
    .rule p {
        color: #629eb7;
        font-size: 16px;
        margin-top: 272px;
    }
    
    @keyframes jz_content_open-in {
        from {
            height: 8px;
        }
        to {
            height: 465px;
        }
    }
    
    @keyframes jz_content_open-out {
        from {
            height: 465px;
        }
        to {
            height: 8px;
        }
    }
    
    .jz_content_open-enter {
        animation: jz_content_open-in .5s;
    }
    
    .jz_content_open-leave {
        animation: jz_content_open-out .5s;
    }
    
    .jz_content_close {
        width: 1000px;
        height: 8px;
        background: url(https://newcclcstatic.b0.upaiyun.com/vue_static/img/close_03.png) no-repeat;
    }
    
    .jz_content_open {
        width: 912px;
        height: 465px;
        overflow: hidden;
        margin: 0 auto;
        background: url(https://newcclcstatic.b0.upaiyun.com/vue_static/img/caimi.png);
    }
    
    .caiti {
        padding: 30px 60px 0 60px;
    }
    
    .question_end2 {
        margin-top: 90px;
        font-size:16px;
        color:#853f2c;
        position:relative;
    }
    .question_end {
        text-align: center;
        margin-top: 120px;
        float:right;
    }
    .caiti_1 {
        padding: 30px 60px;
        position: relative;
    }
    
    .question {
        width: 620px;
        float: left;
    }
    
    .question_option {
        float: left;
        width: 119px;
        height: 36px;
        border-radius: 6px;
        border: 2px solid #853f2c;
        margin-left: 26px;
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        line-height: 36px;
        margin-bottom: 50px;
        color: #853f2c;
    }
    
    .caiti_lf {
        width: 600px;
        float: left;
    }
    
    .caiti_1_fl {
        float: left;
        width: 600px;
    }
    
    .caiti_1_fr {
        float: right;
        width: 280px;
        color: #853f2c;
        line-height: 18px;
        margin-top: 40px;
    }
    .caiti_1_fr span {
        font-size: 12px;
    }
    .caiti_1 ul li {
        float: left;
        font-weight: bold;
        font-size: 14px;
        color: #853f2c;
        width: 90px;
    }
    .item {
        color: #853f2c;
    }
    
    .answer {
        width: 500px;
        height: 40px;
    }
    
    .caiti_1_pic {
        position: absolute;
        right: 110px;
        padding-top: 153px;
        background: url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/icon_04.png") center 0 no-repeat;
        top: 100px;
        color: #853f2c;
    }
    .caiti_1_pic2 {
        position: absolute;
        right: 110px;
        padding-top: 153px;
        background: url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/icon_03.png") center 0 no-repeat;
        top: 100px;
        color: #853f2c;
    }
    .caiti_1_pic3{
        position: absolute;
        right: 110px;
        padding-top: 153px;
        background: url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/icon_05.png") center 0 no-repeat;
        top: 100px;
        color: #853f2c;
    }
    .caiti_1_pic4 {
        position: absolute;
        right: 110px;
        padding-top: 153px;
        background: url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/icon_06.png") center 0 no-repeat;
        top: 100px;
        color: #853f2c;
    }
    .caiti_1_pic5 {
        position: absolute;
        right: 110px;
        padding-top: 153px;
        background: url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/icon_07.png") center 0 no-repeat;
        top: 100px;
        color: #853f2c;
    }
    /*机会用完了*/
    .caiti_2_pic {
        position: absolute;
        right: 50px;
        padding-top: 153px;
        background: url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/icon_04.png") center 0 no-repeat;
        top: 0;
        color: #853f2c;
    }
    .caiti_2_pic2 {
        position: absolute;
        right: 50px;
        padding-top: 153px;
        background: url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/icon_03.png") center 0 no-repeat;
        top: 0;
        color: #853f2c;
    }
    .caiti_2_pic3{
        position: absolute;
        right: 50px;
        padding-top: 153px;
        background: url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/icon_05.png") center 0 no-repeat;
        top: 0;
        color: #853f2c;
    }
    .caiti_2_pic4 {
        position: absolute;
        right: 50px;
        padding-top: 153px;
        background: url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/icon_06.png") center 0 no-repeat;
        top: 0;
        color: #853f2c;
    }
    .caiti_2_pic5 {
        position: absolute;
        right: 50px;
        padding-top: 153px;
        background: url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/icon_07.png") center 0 no-repeat;
        top: 0;
        color: #853f2c;
    }
    .btn4 {
        background: url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/cai_18.png") no-repeat;
        cursor:pointer;
        width: 174px;
        height: 62px;
        border: none;
        font-size: 20px;
        color: #501c24;
        line-height: 62px;
        margin-top: 24px;
        font-weight: normal;
    }
    
    .btn5 {
        background: url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/cai_18.png") no-repeat;
        width: 174px;
        height: 62px;
        border: none;
        font-size: 18px;
        color: #501c24;
        margin-top: 40px;
        font-weight: normal;
    }
    
    .result {
        color: #853f2c;
    }
    
    .result2 {
        float: left;
        color: #853f2c;
        margin-top:20px;
    }
    
    li.selected {
        background: #c23e52;
        color: #eddcbb;
    }
    /*caimi_end*/
    
    .caiti_end {
        color: #853f2c;
        position: relative;
    }
    /*caimi_end_over*/
    
    .caiti_end_over {
        padding: 80px;
        color: #853f2c;
    }
    
    .tip {
        color: #853f2c;
        font-size: 22px;
        font-weight: 700;
    }
    /*caiti_timeout_end*/
    
    .caiti_timeout_end {
        color: #853f2c;
    }
    
    .caiti_timeout {
        padding: 80px;
        color: #853f2c;
        position: relative;
    }
    
    .btn6 {
        background: url("https://newcclcstatic.b0.upaiyun.com/vue_static/img/cai_18.png") no-repeat;
        width: 174px;
        height: 62px;
        border: none;
        font-size: 18px;
        color: #501c24;
        margin-top: 40px;
        font-weight: normal;
    }
    
    .btn_bg {
        background-position: -227px 0;
        margin-left: 54px;
    }
    
    .special {
        margin-top: 37px;
        width: 488px;
        line-height: 22px;
        font-size: 12px;
    }
    
    .question_title {
        color: #713626;
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 16px;
    }
    
    .select {
        float: left;
        width: 260px;
        font-size: 14px;
        color: #853f2c;
        font-weight: bold;
        margin-bottom: 10px;
        padding-left: 20px;
    }
    
    .top {
        font-size: 60px;
        color: #9f3545;
    }
    
    .bottom {
        font-size: 22px;
        color: #9f3545;
    }
    
    .yqpm {
        margin-top: 404px;
    }
    
    .yqpm span {
        font-size: 16px;
        margin-left: 100px;
        height: 50px;
        display: inline-block;
    }
    
    .yqpm .item {
        padding-left: 120px;
    }
    
    .yqpm .username {
        text-align: right;
        width: 240px;
        height: 80px;
    }
    
    .yqpm .num {
        margin-left: 160px;
        color: rgb(254,211,52);
    }
    .yqpm .num1 {
        margin-left: 160px;
        color:rgb(221, 221, 221);
    }
    .yqpm .num2 {
        margin-left: 160px;
        color: rgb(212, 140, 103);
    }
    .question_box {
        width: 532px;
        float: left;
        height: 210px;
    }
    
    .caiti_2_fl {
        float: left;
    }
    .shade {
        top: 0;
        bottom: 0;
        width: 100%;
        background: transparent;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.3);
        z-index:999;
    }

    .shade .confirm_box {
        width: 380px;
        height: 150px;
        background: #fff;
        margin: 0 auto;
        position: relative;
        top: 150px;
        border-radius: 10px;
    }

    .shade .confirm_box .top {
        width: 100%;
        height: 100px;
        text-align: center;
        line-height: 100px;
        font-size: 20px;
    }

  .shade .confirm_box .bottom {
        width: 100%;
        height: 50px;
    }
    .shade .confirm_box .bottom span {
        display: block;
        width: 50%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        float: left;
    }
</style>
<template>
     <!--confirm-start-->
        <div class="shade" v-if="!isHide">
            <div class="confirm_box">
                <div class="top">
                    {{msg}}
                </div>
                <div class="bottom">
                    <span style="background: rgb(241,241,241); border-bottom-left-radius: 10px;" @click="cancel">取消</span>
                    <span style="background: rgb(235,78,83); color: #fff; border-bottom-right-radius: 10px;" @click="begin">确定</span>
                </div>
            </div>
        </div>
    <div class="head"></div>
    <div class="caimi">
        <div class="wrapper">
            <div class="huabu"></div>
            <div v-if="!isOpen" class="jz_content_close"></div>
            <div v-if="isOpen" class="jz_content_open" transition="jz_content_open">
                <div class="caiti" v-if="!isFinished">
                    <div class="caiti_1_fl" v-if="hasChange">
                        <div class="question" v-for="question in questions" >
                            <div class="question_title">{{questions.indexOf(question) + 1}}.{{question.title}}</div>
                            <div class="question_options"><div class="question_option fl" @click="active(questions.indexOf(question) + 1, $event)">{{question.options[0]}}</div><div class="question_option fr" @click="active(questions.indexOf(question) + 1, $event)">{{question.options[1]}}</div><div class="question_option fl mt10" @click="active(questions.indexOf(question) + 1, $event)">{{question.options[2]}}</div><div class="question_option fr mt10" @click="active(questions.indexOf(question) + 1, $event)">{{question.options[3]}}</div></div>
                        </div>
                    </div>
                    <div class="question_end"  v-if="hasChange">
                        <div class="timer">
                            <div class="top">{{timer}}</div>
                            <div class="bottom">倒计时</div>
                        </div>
                        <div class="btn4" @click="submit">提交</div>
                    </div>
                    <div class="question_end2" v-if="!hasChange">
                         <div class="caiti_2_pic" v-if="(designation == '秀才')">
                            <p style="font-weight:bold; font-size: 16px;">再接再厉,您是{{ designation }}!</p>
                        </div>
                        <div class="caiti_2_pic2" v-if="(designation == '举人')">
                            <p style="font-weight:bold; font-size: 16px;">再接再厉,您是{{ designation }}!</p>
                        </div>
                        <div class="caiti_2_pic3" v-if="(designation == '状元')">
                            <p style="font-weight:bold; font-size: 16px;">太厉害了,您是{{ designation }}!</p>
                        </div>
                        <div class="caiti_2_pic4" v-if="(designation == '榜眼')">
                            <p style="font-weight:bold; font-size: 16px;">再接再厉,您是{{ designation }}!</p>
                        </div>
                        <div class="caiti_2_pic5" v-if="(designation == '探花')">
                            <p  style="font-weight:bold; font-size: 16px;">再接再厉,您是{{ designation }}!</p>
                        </div>
                        <div style="margin-top:40px;" v-if="isLastDay"><span class="tip">SORRY，您的猜谜旅途已经结束啦，去看看别的活动吧</span></div>
                        <div style="margin-top:40px;" v-if="!isLastDay"><span class="tip">SORRY，您今天没有猜谜机会了，明天再来吧~</span></div><br>
                        <div style="line-height:22px;" v-if="!isLastDay">
                            今日最好成绩：<strong>答对{{h_score}}题 <br>
                            <span style="font-weight: bold;" v-if="(h_score == 1) ">可获8.15元抵扣红包</span>
                            <span style="font-weight: bold;" v-if="(h_score == 2) ">可获58.15元抵扣红包</span>
                            <span style="font-weight: bold;" v-if="(h_score == 3) ">可获188.15元抵扣红包</span>
                            <span v-if="!(h_score == 0)">已经发放到您的账户了，赶快去使用吧！</span></strong></div>
                        <div style="line-height:22px;" v-if="isLastDay">
                            今日最好成绩：<strong>答对{{h_score}}题 <br>
                            <span style="font-weight: bold;" v-if="(h_score == 1) ">可获8.15元抵扣红包</span>
                            <span style="font-weight: bold;" v-if="(h_score == 2) ">可获58.15元抵扣红包</span>
                            <span style="font-weight: bold;" v-if="(h_score == 3) ">可获188.15元抵扣红包</span>
                            <font v-if="isLastDay && ((designation == '榜眼') || (designation == '状元'))">和<font v-if="(designation == '榜眼')">158</font>
                            <font v-if="(designation == '状元')">815</font>积分</font>已经发放到您的账户了，赶快去使用吧！</strong>
                        </div>
                          <a href="/debts/lctz" target="_blank"><button class="btn5">去投资</button></a>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="caiti_1" v-if="isFinished">
                    <!--显示用户选项与正确答案-->
                    <div class="caiti_2_fl" v-if="isSend">
                        <div class="question_box">
                            <div class="question_finished" v-for="question in questions">
                                <div class="question_title">{{questions.indexOf(question) + 1}}.{{question.title}}</div>
                                <div class="question_result">
                                    <div class="select">您的选择：
                                        <span v-if="(questions.indexOf(question) + 1) == 1">{{user_answers[0]}}</span>
                                        <span v-if="(questions.indexOf(question) + 1) == 2">{{user_answers[1]}}</span>
                                        <span v-if="(questions.indexOf(question) + 1) == 3">{{user_answers[2]}}</span>
                                    </div>
                                    <div class="select">正确答案：
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
                          <div class="caiti_1_pic" v-if="(designation == '秀才')">
                            <p style="font-weight:bold; font-size: 16px;">再接再厉,您是{{ designation }}!</p>
                        </div>
                        <div class="caiti_1_pic2" v-if="(designation == '举人')">
                            <p style="font-weight:bold; font-size: 16px;">再接再厉,您是{{ designation }}!</p>
                        </div>
                        <div class="caiti_1_pic3" v-if="(designation == '状元')">
                            <p style="font-weight:bold; font-size: 16px;">太厉害了,您是{{ designation }}!</p>
                        </div>
                        <div class="caiti_1_pic4" v-if="(designation == '榜眼')">
                            <p style="font-weight:bold; font-size: 16px;">再接再厉,您是{{ designation }}!</p>
                        </div>
                        <div class="caiti_1_pic5" v-if="(designation == '探花')">
                            <p  v-if="!(designation == '草包')" style="font-weight:bold; font-size: 16px;">再接再厉,您是{{ designation }}!</p>
                        </div>
                        <div class="caiti_1_fr" v-if="hasChange">
                            <div><span>温馨提示：<br>
                                    1、若您选择【我要使用红包】，系统会自动发放相应红包至您的账号，可直接使用；但今日就无猜谜机会了！</span>
                            </div>
                            <div>
                                <span> 2、若您选择【继续猜谜】，则您可以继续作答，最后系统会根据您今日猜谜的最好成绩发放红包。</span>
                            </div>
                        </div>
                        <div class="result2">
                            <div style="font-size:16px;font-weight: bold;" v-if="!isOutTime">恭喜您，答对{{score}}题</div>
                            <div v-if="!hasChange">
                                <p>今日您还有<span style="color:#c23e52;">{{restChance}}次</span>猜谜机会</p> 
                                <p>今日最好成绩：<strong>答对{{h_score}}题 
                                  <span v-if="!(h_score == 0)"> ( <span style="font-weight: bold;" v-if="(h_score == 1) ">8.15元抵扣红包</span>
                            <span style="font-weight: bold;" v-if="(h_score == 2) ">58.15元抵扣红包</span>
                            <span style="font-weight: bold;" v-if="(h_score == 3) ">188.15元抵扣红包</span>
                            已经躺在您的账户啦，赶快去使用吧）</span></strong>
                                </p>
                            </div>
                            <div v-if="hasChange">
                                <p>今日最好成绩：<strong>答对{{h_score}}题 <span v-if="!(h_score == 0)">(<span style="font-weight: bold;" v-if="(h_score == 1)">可获8.15元抵扣红包</span>
                            <span style="font-weight: bold;" v-if="(h_score == 2) ">可获58.15元抵扣红包</span>
                            <span style="font-weight: bold;" v-if="(h_score == 3) ">可获188.15元抵扣红包</span>)</span></strong></p>
                                <p>今日您还有<span style="color:#c23e52;">{{restChance}}次</span>猜谜机会,是否继续猜谜？</p>
                            </div>
                            <div class="btn_box">
                                <button v-if="hasChange" class="btn4" @click="resolve">继续猜谜</button>
                                  <a href="/debts/lctz" target="_blank"><button v-if="!hasChange" class="btn4">去投资</button></a>
                                <button @click="endMidAutumnAnswer" class="btn4 btn_bg" v-if="hasChange && (h_score > 0)">我要使用红包</button>
                            </div>
                         <div class="jifen" v-if="isLastDay && ((designation == '榜眼') || (designation == '状元')) && (!hasChange)">
                    感谢您参与本次猜谜活动，鉴于您的智力超群，再送您
                    <font v-if="(designation == '榜眼')">{{158}}</font><font v-if="(designation == '状元')">{{815}}</font>
                    积分
                </div>
                        </div>
                    </div>

                    <div class="result" v-if="!isSend">
                     <div class="caiti_1_pic" v-if="(designation == '秀才')">
                            <p style="font-weight:bold; font-size: 16px;">再接再厉,您是{{ designation }}!</p>
                        </div>
                        <div class="caiti_1_pic2" v-if="(designation == '举人')">
                            <p style="font-weight:bold; font-size: 16px;">再接再厉,您是{{ designation }}!</p>
                        </div>
                        <div class="caiti_1_pic3" v-if="(designation == '状元')">
                            <p style="font-weight:bold; font-size: 16px;">太厉害了,您是{{ designation }}!</p>
                        </div>
                        <div class="caiti_1_pic4" v-if="(designation == '榜眼')">
                            <p style="font-weight:bold; font-size: 16px;">再接再厉,您是{{ designation }}!</p>
                        </div>
                        <div class="caiti_1_pic5" v-if="(designation == '探花')">
                            <p  v-if="!(designation == '草包')" style="font-weight:bold; font-size: 16px;">再接再厉,您是{{ designation }}!</p>
                        </div>
                        <div class="caiti_end">
                            <p style="margin-top:40px;"><span class="tip">SORRY，作答时间已过，好可惜浪费了一次机会！</span></p>
                            <br>
                            <div style="line-height:22px;" v-if="!isLastDay">今日最好成绩：<strong>答对{{h_score}}题<br> <span v-if="!(h_score == 0)"><span style="font-weight: bold;" v-if="(h_score == 1) && hasChange">可获8.15元抵扣红包</span>
                            <span style="font-weight: bold;" v-if="(h_score == 2) && hasChange">可获58.15元抵扣红包</span>
                            <span style="font-weight: bold;" v-if="(h_score == 3) && hasChange">可获188.15元抵扣红包</span>已经发放到您的账户了，赶快去使用吧！<span></strong></div>
                            <div style="line-height:22px;" v-if="isLastDay">今日最好成绩：<strong>答对{{h_score}}题<br>58.15元抵扣红包和158积分已经发放到您的账户了，赶快去使用吧！</strong></div>
                            <div class="btn_box">
                                <button v-if="hasChange" class="btn4" @click="resolve">继续猜谜</button>
                                <a href="/debts/lctz"><button v-if="!hasChange" class="btn4">去投资</button></a>
                                <button  @click="endMidAutumnAnswer" class="btn4 btn_bg" v-if="hasChange && (h_score != 0)">不猜了 使用红包</button>
                            </div>
                            <div class="special" v-if="hasChange">温馨提示：</br>
                            1、若您选择【我要使用红包】，系统会自动发放相应红包至您的账号，可直接使用；但今日就无猜谜机会了！<br>
                            2、若您选择【继续猜谜】，则您可以继续作答，最后系统会根据您今日猜谜的最好成绩发放红包。
                        </div>
                        </div>
                        <div style="margin-top:10px;"  v-if="isLastDay && ((designation == '榜眼') || (designation == '状元'))">感谢您参与本次猜谜活动，鉴于您的智力超群，再送您<span  v-if="(designation == '榜眼')">158</span><span v-if="(designation == '状元')">185</span>积分！</div>
                    </div>
                </div>
            </div>
            <div class="huabu"></div>
            <div v-if="(!isOpen) && isBegin" class="rbtn2" @click="toggleJZ">开始猜谜</div>
            <div v-if="(!isOpen) && (!isBegin)" class="rbtn2" @click="isOpen = true">开始猜谜</div>
            <div v-if="isOpen" class="rbtn" @click="isOpen = false">收起</div>
            <p class="text" style="padding:178px 0 87px 0;">活动期间，每人每天最多有3次猜谜机会，每次3个题目限时90秒作答时间，根据成绩发放红包。点击【开始猜谜】赢取红包吧！</p>
        </div>
    </div>
    <div class="box">
        <div class="wrapper">
            <div style="margin-top:630px;"></div>
            <a href="/debts/lctz" target="_blank"><button class="btn">去投资</button></a>
            <div class="yqpm">
                <div class="pm">
                    <div class="item"><span class="username" style="color: rgb(254,211,52);">{{pm[0].mobile}}</span><span class="num">{{pm[0].score}}</span></div>
                    <div class="item"><span class="username" style="color: rgb(221,221,221);">{{pm[1].mobile}}</span><span class="num1">{{pm[1].score}}</span></div>
                    <div class="item"><span class="username" style="color: rgb(212,140,103);">{{pm[2].mobile}}</span><span class="num2">{{pm[2].score}}</span></div>
                </div>
            </div>
            <div style="margin-top:90px"></div>
            <button @click="invite" class="btn3">去邀请</button><button @click="invite" class="btns2">我的邀请</button>
            <p class="text" style="margin-top:68px;">活动期间，邀请5人及以上注册城城理财并投资成功，取邀请人数最多的前3名，分别奖励哈根达斯礼品券500元、300元、200元；邀请人数相同时，取邀请的投资数额最多者。</p>
            <div class="rule">
                <p>1、【你猜谜 我送红包】<br> 每人每天最多有3次猜谜机会，每次3题，作答限时90秒；
                    <br> 第1、2次答题结束后可选择“继续答题”或“使用红包”，第3次答题结束后只能“使用红包”；
                    <br> 用户选择“使用红包”后，红包自动发放到用户帐号，并且当天不能再答题；
                    <br> 红包金额以用户当天答题次数中成绩最好的一次为标准进行发放；
                    <br><br> 红包金额奖励标准如下

                    <br> 最好一次答对3题，可获得188.15元抵扣红包；
                    <br> 最好一次答对2题，可获得58.15元抵扣红包；
                    <br> 最好一次答对1题，可获得8.15元抵扣红包；
                    <br> 最好一次答对0题无红包。
                    <br><br> 积分奖励标准如下
                    <br> 任意2天获得188.15元抵扣红包，奖励积分158分；
                    <br> 任意3天及以上均获得188.15元抵扣红包，奖励积分815分；
                    <br><br><br> 2、【你投资 我报销月饼】赠送的月饼报销红包即抵扣红包，在投资后立即发放至用户账户；</br><br> 3、【你猜谜 我送红包】和【你投资 我报销月饼】发放的红包可在【我的账户】-【我的抵扣红包】中查看，具体使用条件见票面详情；<br><br>     
                                   4、活动期间，邀请好友注册并成功投资，除可得8元抵扣红包外，邀请人数最多的前3名（需邀请5人及以上）分别奖励哈根达斯礼品券500元、300元、200元；邀请人数相同时，取邀请的投资数额最多者。礼品券为实体券，于活动结束后5个工作日内发放。；
                    <br><br> 5、【你邀请进城 我送哈根达斯】活动的邀请必须真实有效，禁止恶意刷奖，若发现任何作弊或非法手段获得奖励的，一经核实，将取消全部奖励，并追究相关责任。<br><br> 6、本活动最终解释权归城城理财享有；
                    <br><br>
                    <span style="font-size:20px;">如对活动有任何疑问，请致电客服热线400-711-0018。</span>
                </p>
                <div style="height:92px;"></div>
            </div>
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
            return {
            isOpen: false,
            isFinished: false,
            isSend: false,
            isInTime:false,
            hasChange:true,
            isLastDay: false,
            isOutTime:false,
            isBegin: true,
            isRight:false,
            isDayOver:false,
            timer: '',
            time: '',
            answer: [],
            params: {
                answers: []
            },
            pm: [{mobile: '待定', score: '待定'}, {mobile: '待定', score: '待定'}, {mobile: '待定', score: '待定'}],
            questions: [],
            score: '',
            h_score: '0',
            user_answers: [],
            right_answers: [],
            restChance: '',
            error: {
                    err: false,
                    errMsg: ''
                },
            jifen: '',
            designation: '',
            showError: false,
            errorMsg: '',
            isFirst: true,
            isHide: true,
            msg: '',
            isReady: false
            }
        },
        destroyed() {
            var self = this;
            // 销毁定时器
            clearInterval(self.time);
        },
        ready() {
            this.fetchMidAutumnInvitationRank();
            this.fetchMidAutumnInfo();
            this.getMidAutumnLevel();
        },
        methods: {
            popModal: function(param){
                var self = this;
                self.showError = true;
                self.errorMsg = param.str;
                setTimeout(function(){
                    self.showError = false;
                }, 2200);
            },
            invite:function(){
                   window.open(window.cclc_data.url+'/account/invite');
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
            fetchMidAutumnPaper: function() {
                var self = this;
                CLData.fetchMidAutumnPaper(function (res) {
                    console.log(res);
                    if(res.err) {
                        clearInterval(self.time);
                        if(res.errcode == 2){
                            location.href = window.cclc_data.url + '/member/login?r='+encodeURIComponent('/home/#!/midautumn');
                            return;
                        } else if(res.err == "今天答题机会已经全部用完了！") {
                            self.isOpen = true;
                            self.hasChange = false;
                        } else {
                            self.popModal({
                                str: res.err
                            });
                        }
                        self.isBegin = true;
                    } else {
                        self.questions = res.arr;
                        self.isOpen = true;
                    }         
                });
            },
             fetchMidAutumnResult: function () {
                var self = this;
                CLData.fetchMidAutumnResult({answers:JSON.stringify(this.params.answers)}, function (res) {
                    if(res.err) {
                        alert(res.err);
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
                });
            },
            toggleJZ: function () {
                var self = this;
                if(self.isFirst) {
                    self.isHide = false;
                    self.msg = "本次猜谜您有90秒时间，准备好了吗？";
                    self.isFirst = false;
                }
                if(self.isReady) {
                    this.fetchMidAutumnPaper();
                    self.setTime(90);
                }
            },
             endMidAutumnAnswer: function () {
                var self = this;
                CLData.endMidAutumnAnswer(function (res) {
                    self.h_score = res.h_score;
                    self.restChance = res.restChance;
                });
                window.location.href=window.cclc_data.url + '/debts/lctz';
            },
            getMidAutumnLevel: function () {
                var self = this;
                if(this.isSend) {
                    console.log("提交");
                    CLData.getMidAutumnLevel(function (res) {
                        self.designation = res.res.designation;
                        console.log(res);
                    });
                } else {
                    console.log("超时");
                    CLData.getMidAutumnLevel(function (res) {
                        if(res && res.res) {
                            self.designation = res.res.designation;
                            self.h_score = res.res.h_score;
                            self.restChance = res.res.restChance;
                        }
                        console.log(res);
                    });
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
                    this.isFinished = true;
                    this.isSend = true;
                    clearInterval(this.time);
                    this.params.answers = [];
                    for(var i = 0; i < this.questions.length; i ++) {
                        var item = { qid: '', answer: '' };
                        item.qid = this.questions[i].qid;
                        item.answer = this.answer[i];
                        this.params.answers.push(item);
                    }
                    this.fetchMidAutumnResult();
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
                         self.getMidAutumnLevel();
                     } else {
                         self.timer --;
                     }
                 }, 1000);
            },
            fetchMidAutumnInfo: function () {
                var self = this;
                CLData.fetchMidAutumnInfo(function (res) {
                    self.isLastDay = res.isLastDay;
                });
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