<template>
    <div class="container">
       <v-display :isShowBtn="true"></v-display>
       <v-list :isShowPage="true" @pageChange="pageChange" :totalSize=100 :alertInfo="alertInfo">
         <template>
             <el-table :data="tableData" style="width: 100%" border :show-header="true">
                  <el-table-column prop="date" label="日期" width="400"></el-table-column>
                  <el-table-column prop="name" label="姓名" width="600"></el-table-column>
                  <el-table-column prop="address" label="地址"></el-table-column>
             </el-table> 
         </template>    
       </v-list>
    </div>
</template>

<script>
import helper from "@/helper";
import $ from "jquery";
export default {
  data: function() {
    return {
      alertInfo:"<span><b>提醒 : </b>以下联系人都可设置为消息接收人，同程不会将这些信息对外披露或向第三方提供。</span>",
      message: "info come from index.vue",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods:{
     pageChange:function(val){
         
     }
  },
  created: function() {
    // helper.httpAll([helper.httpGet('http://10.101.68.29:8081/cube/Coupon/GetCouponStatus'),helper.httpGet('http://10.101.68.29:8081/cube/Coupon/GetCouponStatus')],function(para1,para2){
    //      console.log(para1);
    //      console.log(para2);
    // })
  },
  // 挂载以后
  mounted() {

  }
};
</script>

<style scoped>
.container {
  width: 100%;
}
</style>
