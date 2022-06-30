<template>
  <div class="register">
    <div class="content">
      <div class="logo">
        <img src="../../assets/user.png">
      </div>
      <div class="btn">
        <div>
          <input type="text" placeholder="请输入手机号">
        </div>
        <div>
          <input type="password" placeholder="请输入密码">
        </div>
        <div>
          <input type="password" placeholder="确认密码">
        </div>
      </div>
      <div class="login_btn">
        注册
      </div>
      <div class="tips">
        <span @click="handleLogin">已有账号去登陆</span>
      </div>
    </div>

  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'register',
  setup () {
    const router = useRouter()
    const handleLogin = () => {
      router.push({ path: '/login' })
    }
    return { handleLogin }
  }
}
</script>

<style scoped>
.register {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
}

.content {
  /*height: 340px;*/
}

.logo {
  margin-bottom: 40px;
}

.logo img {
  display: block;
  height: 66px;
  width: 66px;
  margin: 0 auto;
}

.content {
  width: 295px;
}

.content .btn input {
  height: 48px;
  width: 100%;
  margin-bottom: 16px;
  border-radius: 6px;
  background: #F9F9F9;
  /*border: 1px solid #000000;*/
  border: 1px solid rgba(0, 0, 0, 0.10);
  padding-left: 16px;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.50);
}

.login_btn {
  height: 48px;
  border-radius: 4px;
  background: #0091FF;
  font-size: 16px;
  color: #FFFFFF;
  text-align: center;
  line-height: 48px;
  margin: 16px 0;
  box-shadow: 0 4px 8px 0;
}

.tips {
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.50);
}
</style>
