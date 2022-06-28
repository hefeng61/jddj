<template>
  <div class="mine">
    <div class="content">
      <div class="info">
        <div class="avatar">
          <img src="../assets/user.png">
        </div>
        <div>
          <div class="name">热心市民李世民</div>
          <div class="id">ID: 1069643013</div>
        </div>
        <div class="detail">
          <div>
            <span>红包</span>
            <div>218</div>
          </div>
          <div>
            <span>优惠券</span>
            <div>12张</div>
          </div>
          <div>
            <span>鲜豆</span>
            <div>88</div>
          </div>
          <div>
            <span>白条</span>
            <div>1000</div>
          </div>
        </div>
      </div>
      <div class="menu">
        <div class="item">
          <div>
            <wallet-three theme="outline" size="20" fill="#333"/>
            <span>我的钱包</span>
          </div>
          <right theme="outline" size="20" fill="#333"/>
        </div>
        <div class="item">
          <div>
            <local theme="outline" size="20" fill="#333"/>
            <span>我的地址</span>
          </div>
          <right theme="outline" size="20" fill="#333"/>
        </div>
        <div class="item">
          <div>
            <user theme="outline" size="20" fill="#333"/>
            <span>客服与帮助</span>
          </div>
          <right theme="outline" size="20" fill="#333"/>
        </div>
      </div>
    </div>

  </div>
  <Dock/>
</template>

<script>
import { WalletThree, Right, Local, User } from '@icon-park/vue-next'
import Dock from '@/components/home/Dock'

export default {
  name: 'Mine',
  components: {
    Dock,
    WalletThree,
    Right,
    Local,
    User
  }
}
</script>

<style scoped>
.mine {
  display: flex;
  justify-content: center;
  padding: 0 18px;
}

.content {
  width: 100%;
}

.info {
  border: 1px solid #f1f1f1;
  border-radius: 8px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.08);
  margin-top: 108px;
}

.avatar {
  /*margin: 0;*/
  position: relative;
  top: -50px;
}

.info .avatar img {
  display: block;
  width: 94px;
  height: 94px;
  margin: 0 auto;
}

.name {
  font-size: 24px;
  color: #262628;
  text-align: center;
  line-height: 36px;
}

.id {
  font-size: 14px;
  color: #C1C0C9;
  text-align: center;
  line-height: 20px;
  margin-bottom: 12px;
}

.detail {
  height: 76px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-top: 1px solid #f1f1f1;
  text-align: center;
}

.detail span {
  font-size: 12px;
  line-height: 17px;
  color: #C1C0C9;
}

.detail div {
  font-size: 20px;
  line-height: 28px;
  color: #262628;
}

.menu {
  width: 100%;
  margin-top: 12px;
  border: 1px solid #f1f1f1;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 0 16px;
  box-sizing: border-box;
}

.item {
  display: flex;
  justify-content: space-between;
  height: 48px;
  line-height: 48px;
  font-size: 14px;
  color: #262626;
}
.item span{
  margin-left: 12px;
}
.item right{
  line-height: 48px;
}
</style>
