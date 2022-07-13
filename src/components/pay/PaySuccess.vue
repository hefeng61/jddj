<template>
<div class="wrapper">
  <div class="content">
    <div class="close">
      <span>
        <close-small theme="outline" size="24" fill="#999999" strokeLinejoin="miter" strokeLinecap="square"/>
      </span>
    </div>
    <div class="success">
      <span>
        <check theme="filled" size="43" fill="#000000" strokeLinejoin="miter" strokeLinecap="square"/>
      </span>
    </div>
    <div class="tip">支付成功，等待配送</div>
  </div>
</div>
</template>

<script>
import { CloseSmall, Check } from '@icon-park/vue-next'
export default {
  name: 'PaySuccess',
  components: {
    CloseSmall,
    Check
  }
}
</script>

<style scoped>
.wrapper{
  width: 301px;
  height: 157px;
  background: #FFFFFF;
  border-radius: 4px;
  border: 1px solid #E5E5E5;
  display: flex;
  justify-content: center;
  /*align-items: center;*/
  margin-top: 12px;
}
.content{
  width: 100%;
}
.close{
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-right: 12px;
  box-sizing: border-box;
}
.success{
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
}
.tip{
  display: flex;
  justify-content: center;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #333333;
}
</style>
