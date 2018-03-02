<template>
    <div class="container">
        <v-display :isShowBtn="true" @displayBtnClick = "displayBtnClick"></v-display>
    </div>
</template>

<script>
    import helper from '@/helper.js'
    export default {
        getName:"个人信息>查看信息",
        data:function(){
           return{
              message:"info come from personInfoGet"
           } 
        },
        methods:{
           displayBtnClick:function(val){
              console.log("来到这里......"); 
              helper.httpPost("http://10.101.70.31:3000").then((res)=>{
                  console.log(res);
              })
           }
        },
        created:function(){
        
        }
    }
</script>

<style scoped>
.container{
    width: 100%;
}
</style>