<style>
    .errorBox {
        width: 85%;
        height: 140px;
        margin: 0 auto;
        background: rgb(64, 64, 64);
        background-size: 100%;
        border-radius: 12px;
        opacity: 0.9;
        position: fixed;
        z-index: 999;
        top: 30%;
        left: 7.5%;
    }
    
    .errorBox .top {
        width: 30px;
        height: 70px;
        background: url(/vue_static/img/false.png) center 30px no-repeat;
        background-size: 100%;
        margin: 0 auto;
    }
    
    .errorBox .msg {
        width: 100%;
        margin: 0 auto;
        color: #fff;
        text-align: center;
        margin-top: 15px;
        font-size: 14px;
        font-weight: 100;
    }
</style>

<template>
    <div class="errorBox" v-if="showError">
        <div class="top"></div>
        <div class="msg">{{errorMsg}}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                //errorMsg: '',
                //showError: false
            }
        },

        props: ['errorMsg', 'showError'],

        methods: {
            /*return {
                popModal: function(param) {
                    var self = this;
                    self.showError = true;
                    self.errorMsg = param.str;
                    setTimeout(function() {
                        self.showError = false;
                    }, 1200);
                }
            }*/
        }
    }
</script>