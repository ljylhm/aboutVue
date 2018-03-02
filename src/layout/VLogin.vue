<template>
  <div class="container-lr" id="lr">
    <el-dialog style="margin-top:-8vh" :visible="dialogVisiable" :show-close="false" @close="dialogClose" :close-on-click-modal="false" width="600px" >
            
            <div slot="title" class="dialog-title">
                {{titleName}}
            </div>

            <div class="diglog-middle" id="middle">
                
                <el-form v-model="LoginForm" v-if="false">
                    <el-form-item label="手机号或email">
                        <el-input ></el-input>
                    </el-form-item>

                    <el-form-item label="密码">
                        <el-input type="password"></el-input>
                    </el-form-item>

                    <el-button type="primary">登录</el-button>
                    <div class="register-btn" @click="switchAccount()">注册新账号</div>
                </el-form>

                <el-form v-model="registerForm">
                    <el-form-item label="你的手机号">
                        <el-input ></el-input>
                    </el-form-item>

                    <el-form-item label="你的email">
                        <el-input></el-input>
                    </el-form-item>

                    <el-form-item label="你的密码">
                        <el-input type="password"></el-input>
                    </el-form-item>

                    <el-form-item label="重输你的密码">
                        <el-input type="password"></el-input>
                    </el-form-item>
                    <el-button type="primary">注册</el-button>

                    <div class="register-btn" @click="switchAccount()">已有账号登录</div>  
                </el-form>

            </div>

    </el-dialog>
  </div>    
</template>

<script>
export default {
  // 登陆框和注册框的组件
  data: function() {
    return {
      message: "this is a message from v-lr component",
      dialogVisiable: true, // 表单是否显示
      LoginForm: null, // 登陆表单
      registerForm:null, // 注册表单
      titleName: "登录", // 弹出框名字
      isLogin: true // 当前的
    };
  },
  methods: {
    dialogClose: function() {
      this.dialogVisiable = false;
    },
    switchAccount:function(){

    }
  },
  created:function(){
    console.log("this is a message from Login component")
    console.log(this.$parent);
  }
};
</script>

<style>
.dialog-title {
  width: 100%;
  height: 60px;
  line-height: 60px;
  box-sizing: border-box;
  padding-left: 15px;
  font-size: 18px;
  border-bottom: 1px solid #e5e5e5;
  background-color: #f3f3f3;
}

.diglog-middle {
  width: 325px;
  margin: 0 auto;
}

#middle .el-form-item {
  margin-bottom: 0px;
}
/* #006741 */
#middle .el-button--primary {
  width: 100%;
  height: 34px;
  background-color: #009a61;
  border-color: #008151;
  margin-top: 18px;
  padding: 0px;
}

#middle .el-button--primary:hover {
  background-color: #006741;
}

.diglog-middle input {
  background-color: #faffbd;
  height: 34px;
}

.diglog-middle .el-form-item__label {
  color: #000;
  font-weight: 600;
}

.container-lr .el-dialog__header {
  padding: 0px;
}

.register-btn {
  width: 100%;
  height: 34px;
  margin-top: 18px;
  text-align: center;
  line-height: 34px;
  border-radius: 4px;
  color: #333;
  cursor: pointer;
  border: 1px solid #ccc;
}

.register-btn:hover {
  background-color: #dddddd;
}
</style>
