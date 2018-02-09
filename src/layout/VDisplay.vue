<template>
    <div class="container">
         <div class="diplay-info">
             <div class="display-info_item">{{message1}}>{{message2}}</div>
         </div>
         <div class="diplay-btn" v-if="isShowBtn == true">
              <div class="btn btn-middle display-btn_item">
                    {{btnMseeage}}
              </div>
         </div>
    </div>
</template>

<script>
    import helper from '@/helper'  

    // var i = 0;
    // var reg = /b/g;
    // var str = 'abcdebfsl';
    // console.log(str.replace(reg,function(){
    //     i++
    // }))
    

    export default { 
         data:function(){
             return{
                 message1:"个人信息",
                 message2:"查看信息",
                 btnMseeage:"点击查看"
             }
         },
         created:function(){
           console.log(this.$route)
         },
         mounted:function(){
            
         },
         props:["isShowBtn"]
    }
</script>

<style scoped>
.container{
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #DDDDDD;
}
.center{
   position:absolute;
   top: 50%;
   left: 50%;
}
.diplay-info{
    width: 50%;
    height: 100%;
    position: relative;
    float: left;
    
}
.display-info_item{
    width: 100%;
    height: 20px;
    top:50%;
    position: absolute;
    font-size:14px;
    line-height: 18px;
    box-sizing: border-box;
    padding-left: 20px;
    margin-top:-10px;
    border-left: 2px solid #88B7E0;
}
.diplay-btn{
    width: 100px;
    height: 100%;
    float: right;
    position: relative;
}
.display-btn_item{
    position:absolute;
    top: 50%;
    margin-top: -15px;
    font-size:14px; 
}
</style>