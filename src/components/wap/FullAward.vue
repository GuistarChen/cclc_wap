
<template>
    <div class="fu_head">
        <a v-link="{ path:'/'}" class="back"></a>满额奖
    </div>
    <div class="paim">
        <img src="/vue_static/img/paim_06.jpg">
        <p>奖励将于次月8日以现金红包形式发放至您的账户！<br>(遇周末及节假日顺延)</p>
    </div>
    <div class="pride">
        <div class="pride3"><a v-link="{path:'/fullAward'}" style="color:red;"><span >满额奖</span></a></div>
        <div class="pride3"><a v-link="{path:'/rankAward'}">排名奖</a></div>
        <div class="clear"></div>
    </div>
    <div class="fu_content">
        <div class="fu_content_tip">
            <ul>
                <li>当月购买一个月（30天）及以上理财产品满10万即可获得当月满额奖。</li>
                <li>总额奖励=每个期限产品理财金额*相应奖励系数</li>
                <li>活动期限：长期。</li>
            </ul>
        </div>
        <div class="example">举个例子：本月购买城城理财网30天及以上理财产品10万，其中一个月的5万，六个月的5万，则所得满额奖励为：50000*0.06%+50000*0.06%=210元</div>
        <div class="table_header">
            <span style="width:38%;">理财期限</span>
            <span style="width:38%;">当月理财总额(N)</span>
            <span>理财总额</span>
        </div>
        <table class="full_table">
            <tr class="fu_table_bg">
                <td></td>
                <td class="on_border">10万元≤N＜50万元</td>
                <td class="on_border rate_color">0.06%</td>
            </tr>
            <tr class="fu_table_bg">
                <td>一个月</td>
                <td class="on_border">50万元≤N＜100万元</td>
                <td class="on_border rate_color">0.10%</td>
            </tr>
            <tr class="no_border fu_table_bg">
                <td></td>
                <td class="on_border">100万元≤N</td>
                <td class="on_border rate_color">0.15%</td>
            </tr>
            <tr>
                <td></td>
                <td class="on_border">10万元≤N＜50万元</td>
                <td class="on_border rate_color">0.06%</td>
            </tr>
            <tr>
                <td>30天≤天标≤60天</td>
                <td class="on_border">50万元≤N＜100万元</td>
                <td class="on_border rate_color">0.10%</td>
            </tr>
            <tr class="no_border">
                <td></td>
                <td class="on_border">100万元≤N</td>
                <td class="on_border rate_color">0.15%</td>
            </tr>
            <tr  class="fu_table_bg">
                <td></td>
                <td class="on_border">10万元≤N＜50万元</td>
                <td class="on_border rate_color">0.06%x2</td>
            </tr>
            <tr class="fu_table_bg">
                <td>60天≤天标≤90天</td>
                <td class="on_border">50万元≤N＜100万元</td>
                <td class="on_border rate_color">0.10%x2</td>
            </tr>
            <tr class="no_border fu_table_bg">
                <td></td>
                <td class="on_border">100万元≤N</td>
                <td class="on_border rate_color">0.15%x2</td>
            </tr>
            <tr >
                <td></td>
                <td class="on_border">10万元≤N＜50万元</td>
                <td class="on_border rate_color">0.06%x3</td>
            </tr>
            <tr>
                <td>三个月</td>
                <td class="on_border">50万元≤N＜100万元</td>
                <td class="on_border rate_color">0.10%x3</td>
            </tr>
            <tr class="no_border">
                <td></td>
                <td class="on_border">100万元≤N</td>
                <td class="on_border rate_color">0.15%x3</td>
            </tr>
            <tr class="fu_table_bg">
                <td></td>
                <td class="on_border">10万元≤N＜50万元</td>
                <td class="on_border rate_color">0.06%x6</td>
            </tr>
            <tr class="fu_table_bg">
                <td>六个月</td>
                <td class="on_border">50万元≤N＜100万元</td>
                <td class="on_border rate_color">0.10%x6</td>
            </tr>
            <tr class="no_border fu_table_bg">
                <td></td>
                <td class="on_border">100万元≤N</td>
                <td class="on_border rate_color">0.15%x6</td>
            </tr>
            <tr >
                <td></td>
                <td class="on_border">10万元≤N＜50万元</td>
                <td class="on_border rate_color">0.06%x9</td>
            </tr>
            <tr >
                <td>九个月</td>
                <td class="on_border">50万元≤N＜100万元</td>
                <td class="on_border rate_color">0.10%x9</td>
            </tr>
            <tr class="no_border">
                <td></td>
                <td class="on_border">100万元≤N</td>
                <td class="on_border rate_color">0.15%x9</td>
            </tr>
            <tr class="fu_table_bg">
                <td></td>
                <td class="on_border">10万元≤N＜50万元</td>
                <td class="on_border rate_color">0.06%x12</td>
            </tr>
            <tr class="fu_table_bg">
                <td>十二个月</td>
                <td class="on_border">50万元≤N＜100万元</td>
                <td class="on_border rate_color">0.10%x12</td>
            </tr>
            <tr class="fu_table_bg">
                <td></td>
                <td class="on_border">100万元≤N</td>
                <td class="on_border rate_color">0.15%x12</td>
            </tr>
        </table>
        <div style="width: 100%; height: 50px;"></div>
    </div>
    <button class="btn2" style="position: fixed; bottom: 0; margin-bottom: 8px;" v-link="{path:'/debts'}">立即购买</button>
</template>
<style>
    .example{
        padding:10px 5%;
        background:#efeff4;
        color:#aeaeaf;
    }
    .no_border{
        border-bottom:1px solid #ccc;
    }
    .btn {
        margin-top: 20px;
        margin-bottom: 100px;
    }
    .fu_table_bg{
        background:#f9f9f9;
    }
    .clear{
        clear:both;
    }
    .on_border{
        border:1px solid #ccc;
    }
    .fu_content ul{
     padding:0 5%;
    }
    .table_header{
        margin:0 5%;
        border:1px solid #ccc;
        border-bottom:none;
    }
    .table_header span {
        display:inline-block;
        text-align:center;
    }
    .bg {
        background: #f9f9f9;
    }
    .fu_content table {
        width: 90%;
        background: #fff;
        margin-left: 5%;
        text-align: center;
        border: 1px solid #ccc;
        font-size:12px;
    }
    .fu_content ul li {
        list-style:disc;  
    }
    .fu_content_tip  {
        padding-left:20px;
    }
    .fu_content table td {
        height: 30px;
        text-align:center;
    }
    .pride {
        width: 90%;
        margin-left: 5%;
        background: #fff;
        border: 1px solid #eee;
        border-bottom:1px dashed #eee;
    }
    .pride3 {
        width: 50%;
        height: 40px;
        display: inline-block;
        text-align: center;
        line-height: 40px;
        font-size: 18px;
        font-weight: bold;
        color:#333;
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
        width: 40px;
        height: 40px;
        position: absolute;
        left: 20px;
        top: 16px;
        background: url("/vue_static/img/back.png")  no-repeat;
        background-size:20px;
    }
    .fu_head {
        background: #fff;
        line-height: 50px;
        font-size: 20px;
        text-align: center;
        height:50px
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
    .rate_color{
        color:red;
    }
</style>

<script>
export default{
    
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