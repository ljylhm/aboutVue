<template>
    <div class="container-upload">
           
       <div class="input-area" v-for="(item,index) in imgList" :key = index>
          <label for="getFile" class="label-area"  v-if="item.isImg" >
              <i class="el-icon-plus"></i>
          </label>
          <div style="position:relative" v-else>
              <img :src="item.imgSrc" class="img-show" @mouseenter="handleEnter" @mouseleave="handleLeave">
              <div class="hover-show">
                 <!-- <i class="el-icon-plus"></i> -->
              </div>
          </div>
          <input type="file" id="getFile" @change="getFile" accept="image/*"/>
       </div> 

       <div style="clear:both"></div>  
    </div>
</template>

<script>
// 上传组件
export default {
  props: ["width", "height"],
  data: function() {
    return {
      curWidth: "80",
      curHeight: "80",
      imgList: [
        {
          imgSrc: null,
          isImg: true
        }
      ]
    };
  },
  methods: {
    getFile: function(img) {
      let files = img.target;
      this.imgList[0].isImg = false;

      if (navigator.userAgent.indexOf("MSIE") >= 1) {
        //IE浏览器的处理方式
        this.imgList[0].imgSrc = files.value;
      } else {
        //其他浏览器的处理方式
        this.imgList[0].imgSrc = window.URL.createObjectURL(files.files[0]);
      }

      let obj = {
        imgSrc: null,
        isImg: true
      };

      this.imgList.unshift(obj);
    },

    handleEnter: function() {
      console.log("enter.....");
    },

    handleLeave: function() {
      console.log("leave......");
    },

    handleBefore: function() {}
  },
  created: function() {
    this.curWidth = this.width || "80";
    this.curHeight = this.height || "80";
  }
};
</script>

<style scope>
.container-upload {
  width: 100%;
}

.img-show {
  width: 80px;
  height: 80px;
  cursor: pointer;
  border: 1px solid #c0ccda;
}

.input-area {
  width: 80px;
  height: 80px;
  margin-right: 20px;
  float: left;
}

.label-area {
  width: 100%;
  height: 100%;
  cursor: pointer;
  text-align: center;
  line-height: 80px;
  display: inline-block;
  border: 1px dashed #d9d9d9;
}

.label-area:hover {
  border-color: #409eff;
}

.label-area i {
  width: 30px;
  height: 30px;
  color: #8c939d;
  text-align: center;
  font-size: 28px;
}

input[type="file"] {
  display: none;
  border: 1px solid black;
}

.hover-show {
  width: 80px;
  height: 80px;
  position: absolute;
  top: 0px;
  left: 0px;
  cursor: pointer;
  background: #000;
  opacity: 0.3;
  border: 1px solid black;
}
</style>