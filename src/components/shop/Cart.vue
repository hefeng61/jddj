<template>
  <div class="footer">
    <shopping theme="outline" size="20" fill="#333"/>
    <span class="price">总计：￥128</span>
    <div>去结算</div>
  </div>
</template>

<script>
import { Shopping } from '@icon-park/vue-next'
export default {
  name: 'Cart',
  components: {
    Shopping
  }

}
</script>

<style scoped>
.footer{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  line-height: 49px;
  background: #FFFFFF;
  display: flex;
  width: 100%;
  /*align-items: center;*/
  border-top: 1px solid #f1f1f1;
}
.footer div {
  height: 100%;
  width: 98px;
  background: #4FB0F9;
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #FFFFFF;
  text-align: center;
  position: absolute;
  right: 0;
}
</style>
