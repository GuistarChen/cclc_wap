<template>
    <div class="outTime">
        Sorry，作答时间已过，请明日再接再厉！<br>
        {{timer}}秒后返回~
    </div>
</template>
<style>
    .outTime {
        padding:40px;
        font-size:20px;
        text-align:center;
    }
    body {
        background-color:#edeff5;
        height:100%;
    }
</style>
<script>
    export default{
        data(){
            return{
                timer:'',
                time:''
            }
        },
        ready(){
            this.back();
            this.setTime(3);
        },
        methods:{
            back:function(){
                var self = this;
                setTimeout(function(){
                  self.$route.router.go('/nationalDay');
                },3000)
            },
            setTime: function (time) {
                var self = this;
                this.timer = time;
                this.time = setInterval (function () {
                     if(self.timer == 0) {
                         clearInterval(self.time);
                     } else {
                         self.timer --;
                     }
                 }, 1000);
            }
        }
    }
</script>