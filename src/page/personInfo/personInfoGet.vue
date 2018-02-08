<template>
    <div class="container">
        <v-display :isShowBtn="true"></v-display>
    </div>
</template>

<script>
    export default {
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