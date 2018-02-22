<template>
    <div class="v-menu_squre">
       <div class="menu-all">
           <el-menu  background-color="#545c64" 
                     :unique-opened=true 
                     active-text-color="#ffd04b" 
                     text-color="#ffffff"
                     :router=true>
             <el-submenu index="">
                 <template slot="title">
                 <i class="el-icon-news"></i>
                 <span>个人信息</span>
                 </template>
                 <el-menu-item-group>
                     <el-menu-item index="/personInfo/personInfoGet">查看信息</el-menu-item>
                     <el-menu-item index="/personInfo/personInfoUpDate">修改信息</el-menu-item>
                 </el-menu-item-group>
             </el-submenu>

             <el-menu-item index="2">
                 <i class="el-icon-menu"></i>
                 <span slot="title">成绩查询</span>
             </el-menu-item>

             <el-menu-item index="3">
               <i class="el-icon-menu"></i>
               <span slot="title">导航二</span>
             </el-menu-item>


           </el-menu>
       </div> 
    </div>
</template>

<script>
import helper from '@/helper'
export default {
  data: function() {
    return {};
  },
  methods:{
    //   handleOpen:function(key, keyPath){
    //       var pathStr = keyPath.join('/') 
    //       helper.routerGo('/index')
    //   }
  }
};
</script>

<style scoped>
.menu-all {
  width: 100%;
}
</style>