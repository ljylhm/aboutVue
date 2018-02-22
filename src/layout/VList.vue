<template>
    <div class="container-list">
       <div class="alert">
           <!-- v-if="alertInfo" v-html="alertInfo"  -->
           <div class="prompt" v-html="alertInfo">
             
           </div>
       </div>
       <div class="table">
           <slot></slot> 
       </div> 
       <div class="pagination" v-if="mIsShowPage">
         <div class="pagination-container">
            <el-pagination 
            background
            @size-change="handleSizeChange" 
            @current-change="handleCurrentChange" 
            :current-page="mCurrentPage"
            :page-sizes="mPageSizeList"
            :page-size="mPageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalSize">
            </el-pagination>
        </div>
       </div>
    </div>
</template>

<script>

export default {
  data: function() {
    return {
      mIsShowPage: true,
      mCurrentPage: 1,
      mPageSizeList: null,
      mPageSize: 0, 
    };
  },
  methods:{
    // 获得每页的条数和当前页数
    getPageSize(){
       return{
          currentPage:this.mCurrentPage,
          currentPageSize:this.mPageSize
       }
    },
    // 每页条数size
    handleSizeChange(val){
       this.mPageSize = val;
       this.$emit("pageChange",this.getPageSize());
    },
    // 当前第几页
    handleCurrentChange(val){
       this.mCurrentPage = val;
       this.$emit("pageChange",this.getPageSize());
    }
  },
  created:function(){
       this.mIsShowPage = this.isShowPage || false,
       this.mCurrentPage = this.currentPage || 1,
       this.mPageSizeList = this.pageSizeList || [10,20,30,50],
       this.mPageSize = this.pageSize || this.mPageSizeList[0];
       this.mTotalSize = this.totalSize || 0
  },
  mounted:function(){
  },
  props:["isShowPage","pageSizeList","currentPage","pageSize","totalSize","alertInfo"]
};
</script>

<style>
.container-list {
  width: 100%;
  box-sizing: border-box;
  padding: 20px 0px 20px 0px;
}
.alert {
  width: 100%;
  border: 1px solid #dddddd;
}
.alert span {
  font-size: 12px;
  margin-left: 16px;
}

.table {
  width: 100%;
  min-width:1200px;
  margin-top: 15px;
  border: 1px solid #dddddd;
}

.pagination{
  width: 100%;
  min-width:1200px;
  margin-top: 15px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  padding: 10px 0px 10px 0px;
  border-top: 1px solid #dddddd;
}

.pagination-container{
    right: 0px;
    float: right;
    height: 100%; 
}

</style>