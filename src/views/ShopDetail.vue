<template>
  <div class="content">
    <Search/>
    <Shop :item="item"/>
    <Content/>
  </div>

  <div class="footer">
    <shopping theme="outline" size="20" fill="#333"/>
    <span>购物车是空的</span>
    <div>去结算</div>
  </div>
</template>

<script>

import { Shopping } from '@icon-park/vue-next'
import Shop from '@/components/home/ShopInfo'
import Content from '@/components/shop/Content'
import SearchComponent from '@/components/shop/SearchComponent'

export default {
  name: 'ShopDetail',
  components: {
    Content,
    Shop,
    Search: SearchComponent,
    Shopping
  },
  setup () {
    const item = {
      id: 1,
      name: '沃尔玛',
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      sales: 100,
      expressLimit: 0,
      expressPrice: 5,
      slogan: 'VIP尊享满89元减4元运费券（每月3张）'
    }

    return {
      item
    }
  }
}
</script>

<style scoped>
.content {
  /*padding: 0 18px;*/
}
.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 49px;
  line-height: 49px;
  background: #FFFFFF;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
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
}
</style>
