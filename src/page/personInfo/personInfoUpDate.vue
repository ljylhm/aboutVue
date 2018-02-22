<template>
     <div class="container">
        <v-display :isShowBtn="false"></v-display>
     </div>
</template>

<script>
    export default {
       getName:"个人信息>修改个人信息",
       data:function(){
           return{
               message:'information come from personInfoUpDate'
           }
       } 
    }
</script>

<style scoped>
.container{
    width: 100%;
}
</style>