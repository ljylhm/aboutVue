<template>
    <div class="container">
        <v-display :isShowBtn="true"></v-display>
    </div>
</template>

<script>
    export default {
        getName:"个人信息>查看信息",
        data:function(){
           return{
              message:"info come from personInfoGet"
           } 
        }
    }
</script>

<style scoped>
.container{
    width: 100%;
}
</style>