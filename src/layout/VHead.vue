<template>
    <div class="v-head_squre">
       <div class="font-pos-center show show-name">{{name}}</div>
       <div class="show show-person">
           <div class="show show-info">欢迎您梁钧元</div>
           <div class="show show-person-img">
               <div class="bg-url pos-center img-url"></div>
           </div>
       </div>
    </div>
</template>

<script>
import helper from "@/helper";

export default {
  data: function() {
    return {
      message: 123321
    };
  },
  created: function() {},
  props:['name']
};
</script>

<style scoped>
.show{
   float: left;
   height: 100%;
   font-size:20px;
   line-height: 72px;
   text-align: center;
   position: relative;
   color: #fff;
}
.show-name{
   width: 200px;
   float: left;
   font-family:'PingFang SC';
}
.show-person{
    width: 320px;
    float: right;
}
.show-info{
    width: 200px;
    text-align: right;
    font-size: 16px;
}
.show-person-img{
    width: 100px;
}
.img-url{
    width: 60px;
    height: 60px;
    margin-top: -30px;
    margin-left: -30px;
    border: 1px solid #ffffff;
    background: url('https://oss.aliyuncs.com/aliyun_id_photo_bucket/default_handsome.jpg') 50% 50%;
    border-radius: 50%;
}
</style>