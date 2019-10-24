<template>
  <div id="loginForm">
    <el-form 
      size="medium"
      label-width="120px"
      :model="loginForm"
      status-icon
      ref="loginForm"
      >
      <el-row type="flex" justify="center">
        <el-col :span="4">
          <el-form-item>
            <font size=5>CargoSmart</font>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row></el-row>
      <el-row type="flex" justify="center">
        <el-col :span="5">
          <el-form-item label="账号" prop='account'>
            <el-input v-model="loginForm.account"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="5">
          <el-form-item label="密码" prop='password'>
            <el-input type="password" autocomplete="off" v-model="loginForm.password"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="4">
          <el-form-item>
            <el-button type="primary"  @click="submitForm('loginForm')">提交</el-button>
            <el-button @click="resetForm('loginForm')">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      loginForm: {
        account: "",
        password: ""
      }
    };
  },
  methods: {
    submitForm(formName){
      window.console.log(this.$refs[formName])
      this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            window.console.log('error submit!!');
            return false;
          }
      });
    },
    resetForm(formName){
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#loginForm {
  margin-top: 8%;
}
</style>
