<template>
    <div class="fu_head">
        <a v-link="{ path:'/'}" class="back"></a>排名奖
    </div>
    <div class="paim">
        <img src="/vue_static/img/paim_06.jpg">
        <p>奖励将于次月8日以现金红包形式发放至您的账户！<br>(遇周末及节假日顺延)</p>
    </div>
     <div class="pride">
        <div class="pride3"><a v-link="{path:'/fullAward'}">满额奖</a></div>
        <div class="pride3"><a style="color:red;" >排名奖</a></div>
        <div class="clear"></div>
    </div>
    <div class="content">
        <p style=" text-align:center;line-height:30px;">当月购买理财产品总额前10名的投资者奖励如下</p>
        <table>
            <tr class="bg">
                <td class="big icon">第1名</td>
                <td><span class="amount2 big">998元</span></td>
            </tr>
            <tr class="big">
                <td class="big icon2">第2名</td>
                <td><span class="amount2 big">888元</span></td>
            </tr>
            <tr class="bg ">
                <td class="big icon3">第3名</td>
                <td><span class="amount2 big">788元</span></td>
            </tr>
            <tr>
                <td>第4名</td>
                <td><span class="amount2">688元</span></td>
            </tr>
            <tr class="bg">
                <td>第5名</td>
                <td><span class="amount2">588元</span></td>
            </tr>
            <tr>
                <td>第6名</td>
                <td><span class="amount2">488元</span></td>
            </tr>
            <tr class="bg">
                <td>第7名</td>
                <td><span class="amount2">388元</span></td>
            </tr>
            <tr>
                <td>第8名</td>
                <td><span class="amount2">288元</span></td>
            </tr>
            <tr class="bg">
                <td>第9名</td>
                <td><span class="amount2">188元</span></td>
            </tr>
            <tr>
                <td>第10名</td>
                <td><span class="amount2">88元</span></td>
            </tr>
        </table>
        <div style="width: 100%; height: 50px;"></div>
    </div>
    <button class="btn2" style="position: fixed; bottom: 0; margin-bottom: 8px;" v-link="{path:'/debts'}">立即购买</button>
</template>
<style>
    .icon {
        background: url("/vue_static/img/paim_09.jpg") 20px 6px no-repeat;
    }
    
    .icon2 {
        background: url("/vue_static/img/paim_12.jpg") 20px 6px no-repeat;
    }
    
    .icon3 {
        background: url("/vue_static/img/paim_14.jpg") 20px 6px no-repeat;
    }
    
    .btn {
        margin-top: 20px;
        margin-bottom: 100px;
    }
    
    .big {
        font-size: 15px;
    }
    
    .amount2 {
        color: red;
    }
    
    .bg {
        background: #f9f9f9;
    }
    
    .content table {
        width: 90%;
        background: #fff;
        margin-left: 5%;
        text-align: center;
        font-weight: bold;
    }
    
    .content table td {
        height: 30px;
        border: 1px solid #ccc;
        line-height: 30px;
    }
    
    .pride {
        width: 90%;
        margin-left: 5%;
        background: #fff;
        border: 1px dash #333;
        border: 1px solid #eee;
        border-bottom:1px dashed #eee;
    }
    .clear{
        clear:both;
    }
    .pride3 {
        width: 50%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        font-size: 18px;
        font-weight: bold;
        float:left;
    }
    
    .paim p {
        text-align: center;
        color: #cacaca;
        line-height: 20px;
    }
    
    .paim img {
        width: 100%;
    }
    
    .paim {
        background: #efeff4;
    }
    .back {
        display: inline-block;
        width: 20px;
        height: 40px;
        position: absolute;
        left: 20px;
      
        background: url("/vue_static/img/back.png")  no-repeat;
        background-size:20px;
    }
   .fu_head {
        background: #fff;
        line-height: 50px;
        font-size: 20px;
        text-align: center;
    }
    
    .share {
        background: url("/vue_static/img/paim_03.jpg") no-repeat;
        display: inline-block;
        width: 24px;
        height: 24px;
        position: absolute;
        right: 20px;
        top: 10px;
    }
</style>


<script>
export default {
    data() {
        this.CLData = CLData;
        return {
            
        }
    },
    ready() {
        
    },
    methods: {
        // 回退到上一个页面
        rollback: function() {
            window.history.back();
        },
        // 信息展示处理函数
        popModal: function(param){
            var str = param.str;

            // 弹出层处理效果待补充（将console替换为所需展示形式代码）
            
            console.log(str);
        }
    }
}
</script>