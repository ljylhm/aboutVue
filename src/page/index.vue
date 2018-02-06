<template>
    <div class="container">
       测试模块{{message}}
    </div>
</template>

<script>
import helper from "@/helper";

export default {
  data: function() {
    return {
      message: "info come from index.vue"
    };
  },
  created: function() {
 
    helper.httpAll([helper.httpGet('http://10.101.68.29:8081/cube/Coupon/GetCouponStatus'),helper.httpGet('http://10.101.68.29:8081/cube/Coupon/GetCouponStatus')],function(para1,para2){
         console.log(para1);
         console.log(para2);
    })
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 20px;
  font-size: 30px;
  background: #000;
  color: #fff;
  line-height: 20px;
  text-align: center;
}
</style>
