<template>
    <div class="buysuccess">
            购买失败
    </div>
    <div class="failed">
            <span style="font-size:20px">购买失败!</span><br><br>可能是订单超时了<br>请查看我的账户余额或者重新购买
            <a v-link="{ path:'/debt/'+debtId}"><button  style="margin-top:100px" class="btn2" >我知道了</button></a>
    </div>
</template>
<style>
    body{
        background:#edeff5;
    }
    .buysuccess {
        border-bottom: 1px solid #ccc;
        background: #fff;
        line-height: 50px;
        font-size: 20px;
        text-align: center;
    }
    .failed{
        background:url("/vue_static/img/failed.png") center 80px no-repeat;
        text-align:center;
        padding:160px 20px 0 20px;
        color:#929292;
    }
</style>
<script>
    export default{
         data() {
              this.CLData = CLData;
              return {
              debtId:this.$route.params.id
              }
         }
    }
</script>