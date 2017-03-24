<template>
    <div class="photos_head">
        <a v-touch:tap="rollback" class="back"></a>
        活动规则
    </div>
    <div style="height: 50px;"></div>
    <div class="rule_head">
        <span>活动规则</span>
    </div>
    <div class="rule_text">
        1、霸气外露的照片必须健康阳光，对于不符合要求的照片城城理财有权删除；<br>
        2、花样阅兵的点赞，同一张照片每人每天只有一次机会，同一手机号、同一设备视为同一人；<br>
        3、本活动最终解释权归城城理财享有；<br><br><br>
        <span>如对活动有任何疑问，请致电客服热线：</span><br>
        <div class="phone"><a href="tel:4007110018"> 400-711-0018</a></div>
    </div>
</template>
<style>
    .rule_text .phone {
        border: 1px solid #ccc;
        border-radius: 4px;
        line-height: 40px;
        font-size: 20px;
        width:200px;
        margin-top: 20px;
        padding-left:50px;
        background: url("/vue_static/national_img/rule.png") 16px center no-repeat;
        background-size: 20px;
    }
    .rule_text {
        color: #666;
        padding: 10px 5%;
        background: #edeff5;;
        line-height: 24px;
    }
    .rule_text span {
        color: #999;
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
    .photos_head{
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
    .rule_head {
        padding: 20px 5%;
    }
    .rule_head span {
        border-left:5px solid #adb850;
        font-size: 20px;
        line-height: 20px;
        padding-left: 10px;
        font-weight: bold;
        color: #333;
    }
</style>
<script>

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{

        },
        methods:{
            // 回退到上一个页面
            rollback: function() {
                window.history.back();
            },
        }

    }
</script>
