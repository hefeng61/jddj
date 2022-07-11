<template>
  <div class="docker">
    <router-link to="{name: Home}">
      <span class="docker_item" @click="handleClick('home')">
        <div>
          <home theme="outline" size="20" fill="#333"/>
        </div>
        <span>首页</span>
      </span>
    </router-link>
<!--    <router-link to="/cart">-->
      <span class="docker_item" @click="handleClick('cart')">
      <div>
          <shopping theme="outline" size="20" fill="#333"/>
        </div>
        <span>购物车</span>
    </span>
<!--    </router-link>-->
    <router-link to="">
       <span class="docker_item" @click="handleClick('order')">
        <div>
          <order theme="outline" size="20" fill="#333"/>
        </div>
        <span>订单</span>
      </span>
    </router-link>
   <router-link to="">
     <span class="docker_item" @click="handleClick('mine')">
        <div>
          <user theme="outline" size="20" fill="#333"/>
        </div>
        <span>我的</span>
    </span>
   </router-link>
  </div>
</template>

<script>
import { Home, Shopping, Order, User } from '@icon-park/vue-next'
import { useRouter } from 'vue-router'

export default {
  name: 'Dock',
  components: {
    Home,
    Shopping,
    Order,
    User
  },
  setup () {
    const router = useRouter()
    const handleClick = (arg) => {
      if (arg === 'mine') {
        router.push({ path: '/mine' })
      } else if (arg === 'home') {
        router.push({ path: '/' })
      }
    }
    return { handleClick }
  }
}
</script>

<style scoped>
.docker {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 49px;
  border-top: 1px solid #f1f1f1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f5f5f5;
}

.docker_item {
  font-size: 10px;
}
</style>
