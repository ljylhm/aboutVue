<template>
    <div class="container">
         <div class="diplay-info">
             <div class="display-info_item">{{navInfo}}</div>
         </div>
         <div class="diplay-btn" v-if="isShowBtn == true">
              <div class="btn btn-middle display-btn_item" @click="butClick(btnMseeage)">
                    {{btnMseeage}}
              </div>
         </div>
    </div>
</template>

<script>
    import helper from '@/helper'  

    export default { 
         data:function(){
             return{
                 navInfo:null,                
                 btnMseeage:"点击查看"
             }
         },
         methods:{
            butClick:function(val){
                this.$emit('displayBtnClick',val)
            }
         },
         created:function(){
           this.navInfo = this.$route.name
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