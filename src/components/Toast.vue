<template>
  <div class="toast">{{ msg }}</div>
</template>

<script>
export default {
  name: 'Toast',
  props: ['msg']
}
</script>

<style scoped>
.toast {
  background: rgba(0, 0, 0, 0.35);
  color: #f1f1f1;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 2px;
}
</style>
