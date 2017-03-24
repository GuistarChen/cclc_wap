<template>
    <div>
       <div v-show="(id == 1)" class="loading_pic l1" @click="hide(2)">
           <img v-bind:src="cdn_url+'/vue_static/national_img/1.png'">
       </div>
       <div v-show="(id == 2)" class="loading_pic l2 "  @click="hide(3)" >
           <img v-bind:src="cdn_url+'/vue_static/national_img/2.png'">
       </div>
       <div  v-show="(id == 3)" class="loading_pic l3"  @click="hide(4)" >
           <img v-bind:src="cdn_url+'/vue_static/national_img/3.png'">
       </div>
       <div  v-show="(id == 4)" class="loading_pic l4"  @click="hide(5)">
           <img v-bind:src="cdn_url+'/vue_static/national_img/4.png'">
       </div>
       <div  v-show="(id == 5)" class="loading_pic l5"  @click="hide(6)">
           <img v-bind:src="cdn_url+'/vue_static/national_img/5.png'">
       </div>
       <div  v-show="(id ==6)" class="loading_pic l6" @click="hide(7)">
           <img v-bind:src="cdn_url+'/vue_static/national_img/6.png'">
       </div>
       <div   class="loading_pic l7"  @click="hide(8)">
           <img v-bind:src="cdn_url+'/vue_static/national_img/7.png'">
       </div>
    </div>
</template>
<style>
    .loading_pic {
        width:100%;
        position:absolute;
    }
    .loading_pic img {
        width:100%;
    }
    .l1 {
        z-index:9;
    }
    .l2 {
        z-index:8;
    }
    .l3 {
        z-index:7;
    }
    .l4 {
        z-index:6;
    }
    .l5 {
        z-index:5;
    }
    .l6 {
        z-index:4;
    }
    .l7 {
        z-index:3;
    }
</style>
<script>
      export default{
          data(){
              this.CLData = CLData;
              return{
                 id:1,
                 cdn_url:this.CLData.getCDN_URL()
              }
          },
          methods:{
            endNationalDayInvestDemo:function(){
                var self = this;
                CLData.endNationalDayInvestDemo(function(res){
                    if(res.err){
                        if(res.errcode == 1 || res.errcode == 2){
                            self.$route.router.go('/signIn?path=/loading');
                        }
                    }
                    console.log(res);
                })
            },
            hide:function(key){
                var self = this;
                if(key == 8){
                    self.$route.router.go('/nationalDay');
                    self.endNationalDayInvestDemo();
                }else {
                    self.id = key 
                    console.log(self.id)
                }
            }
        }
    }
</script>