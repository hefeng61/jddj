<template>
  <div class="login">
    <div class="content">
      <div class="logo">
        <img src="../../assets/user.png">
      </div>
      <div class="btn">
        <div>
          <input type="text" placeholder="请输入手机号" v-model="form.account">
        </div>
        <div>
          <input type="password" placeholder="请输入密码" v-model="form.password">
        </div>
      </div>
      <div class="login_btn" @click="handleLogin">
        登录
      </div>
      <div class="tips">
        <span @click="handleRegister">立即注册</span> |
        <span>忘记密码</span>
      </div>
    </div>
    <Toast v-if="toastData.showToast" :msg="toastData.msg"/>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { get } from '../../util/request'
import Toast, { handleToastEffect } from '@/components/Toast'

export default {
  name: 'login',
  components: { Toast },
  setup () {
    const router = useRouter()
    const form = reactive({
      account: 'admin',
      password: '123'
    })
    const {
      toastData,
      showToast
    } = handleToastEffect()
    const handleLogin = async () => {
      const res = await get('/api/login', { ...form })
      console.log(res)
      if (res.code === 0) {
        localStorage.setItem('isLogin', true)
        router.push({ path: '/' })
      } else {
        showToast('登陆失败')
      }
      // res.then(res => {
      //   console.log(res)
      //   if (res.code === 0) {
      //     localStorage.setItem('isLogin', true)
      //     router.push({ path: '/' })
      //   } else {
      //     showToast('登陆失败')
      //   }
      // })
    }

    const handleRegister = () => {
      router.push({ name: 'register' })
    }
    return {
      form,
      handleLogin,
      handleRegister,
      toastData,
      showToast
    }
  }
}
</script>

<style scoped>
.login {
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
