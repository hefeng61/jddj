<template>
  <div class="toast">{{ msg }}</div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'Toast',
  props: ['msg']
}
export const handleToastEffect = () => {
  const toastData = reactive({
    showToast: false,
    msg: ''
  })
  const showToast = (message) => {
    console.log(message)
    toastData.showToast = true
    toastData.msg = message
    setTimeout(() => {
      toastData.showToast = false
      toastData.msg = ''
    }, 2000)
  }
  return {
    showToast,
    toastData
  }
}
</script>

<style scoped>
.toast {
  height: 20px;
  padding: 5px 5px;
  background: rgba(0, 0, 0, 0.35);
  color: #f1f1f1;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 2px;
}
</style>
