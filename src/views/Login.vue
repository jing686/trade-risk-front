<template>
  <div style="margin-top: 60px;">
    <h1>风控交易系统</h1>

    <div class="login_div">
      <el-form ref="form" :model="form">
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onLogin">登录</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    onLogin() {
      console.log("进行登录！");
      // 发送请求给后端，进行登录逻辑的处理
      this.$$.ajax({
        url: "/test/login",
        data: this.form,
        success: (data) => {
          console.log(data);
          //跳转到首页
          this.$message.success("登录成功！");
          this.$router.push("/Index");
        }
      });
    }
  }
}
</script>

<style scoped="scoped">
.login_div {
  width: 30%;
  padding: 20px;
  margin: 0px auto;
  margin-top: 100px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
</style>
