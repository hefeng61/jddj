<template>
  <div class="content">
    <div>
      <div class="title">确认要离开收银台？</div>
      <div class="tip">请尽快完成支付，否则将被取消</div>
      <div class="btns">
        <span class="cancel">取消订单</span>
        <span class="confirm" @click="hanlePayConfirm">确认支付</span>
      </div>
    </div>
  </div>
</template>

<script>
const usePayConfirm = () => {
  const showPayConfirm = ref(false)
}
export default {
  name: 'PayConfirm',
  setup () {

  }
}
</script>

<style scoped>
.content {
  width: 301px;
  height: 157px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #E5E5E5;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 2;
}

.title {
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #333333;
  padding-bottom: 8px;
}

.tip {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #666666;
  padding-bottom: 24px;
}

.btns {
  display: flex;
  justify-content: space-between;
}

.cancel {
  width: 80px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #4FB0F9;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  text-align: center;
  line-height: 32px;
  color: #0091FF;
}

.confirm {
  width: 80px;
  height: 32px;
  background: #4FB0F9;
  border: 1px solid #4FB0F9;
  border-radius: 16px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  text-align: center;
  line-height: 32px;
  color: #FFFFFF;
}
</style>
