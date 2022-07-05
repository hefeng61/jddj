<template>
  <div class="content">
    <div class="category">
      <div>全部商品</div>
      <div>秒杀</div>
      <div>新鲜水果</div>
      <div>休闲食品</div>
      <div>时令蔬菜</div>
      <div>肉蛋家禽</div>
    </div>
    <div class="products">
      <div class="product">
        <div class="img">
          <img src="http://www.dell-lee.com/imgs/vue3/near.png">
        </div>
        <div class="detail">
          <div>番茄250g/份</div>
          <div>番茄250g/份</div>
          <div>
            <span>￥33.6</span>
            <span>￥33.6</span>
          </div>
        </div>
        <div class="operation">
        <span>
          <add-one theme="outline" size="20" fill="#333"/>
        </span>
          <span>1</span>
          <span>
          <reduce-one theme="outline" size="20" fill="#333"/>
        </span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { AddOne, ReduceOne } from '@icon-park/vue-next'

export default {
  name: 'Content',
  components: {
    AddOne, ReduceOne
  }
}
</script>

<style scoped>
.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 150px;
  bottom: 50px;
}

.category {
  width: 76px;
  height: 100%;
  background: #F5F5F5;
}

.category div {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  text-align: center;
  font-family: PingFangSC-Regular;
  color: #333333;
}

.products {
  width: 100%;
  /*padding-left: 16px;*/
  /*display: flex;*/
  /*justify-content: space-between;*/
}

.product {
  display: flex;
  justify-content: space-evenly;
}

.img img {
  height: 68px;
  width: 68px;
}
</style>
