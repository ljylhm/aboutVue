<template>
     <div class="container">
        <v-display :isShowBtn="false"></v-display>
        <el-upload
          class="avatar-uploader"
          ref="uploadImg"
          action="http://10.101.70.31:3000" 
          :multiple = false
          :on-change="fileChange"
          :show-file-list="false"
          :auto-upload = "false"
          :before-upload="handleBefore"
          :on-success="handleAvatarSuccess"
        >
        <i class="el-icon-plus avatar-uploader-icon" v-if="!imgUrl"></i>
        <div class="show-one-img" v-else>
           <img :src="imgUrl" alt="">
        </div>
        </el-upload>

        <!-- <div class="img-look" v-for="(item,index) in imgLookArr" :key = index>
           <img :src=item alt="">
        </div> -->

        <el-button size="medium" type="primary" style="margin:10px 0px 0px 5px" @click="postFile">点击</el-button>
       

     </div>
</template>

<script>
import helper from "@/helper";
export default {
  getName: "个人信息>修改个人信息",
  data: function() {
    return {
        imgUrl:null,
        imgLookArr:[],
        file:null
    };
  },
  methods:{
      
      handleBefore:function(file){
        //  console.log("进入......");
        //  console.log(file);   
      },

      handleAvatarSuccess:function(res, file){
           //console.log(file.raw);  
      },

      fileChange:function(file,fileList){
           
          let url = file.url;
          this.imgUrl = url;
          this.file = file;
          //this.imgLookArr.push(url);
          
      },

      // 利用这个函数实现不自动上传
      postFile:function(){
          if(!this.file){
            console.error("请选择文件....");
            return;
          }
          let formData = new FormData();
          formData.append("file",this.file.raw);
          helper.httpPost("http://10.101.70.31:3000",formData)
          .then(res=>{
              console.log(res);
          })
      }

  }
};
</script>

<style>
.container {
  width: 100%;
}
.show-upload {
  margin-top: 10px;
  width: 500px;
}
.handle-up {
  width: 70px;
  height: 70px;
  margin-top: 3px;
  cursor: pointer;
  border: 2px solid #000;
  border-radius: 50%;
}
.img-look{
  width: 80px;
  height: 80px;
  float: left;
  margin-right: 20px;
}
.img-look img{
  width: 100%;
  height: 100%;
}
.show-one-img{
  width: 78px;
  height: 78px;
}
.show-one-img img{
  width: 100%;
  height: 100%;
}
.avatar-uploader .el-upload {
    border-radius: 50%;
    border: 1px dashed #d9d9d9;

    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 78px;
    height: 78px;
    line-height: 78px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>