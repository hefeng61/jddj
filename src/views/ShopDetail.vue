<template>
  <div class="content">
    <Search/>
    <Shop :item="item"/>
    <Content/>
    <Cart/>
  </div>

</template>

<script>

import Shop from '@/components/home/ShopInfo'
import Content from '@/components/shop/Content'
import SearchComponent from '@/components/shop/SearchComponent'
import Cart from '@/components/shop/Cart'

export default {
  name: 'ShopDetail',
  components: {
    Cart,
    Content,
    Shop,
    Search: SearchComponent
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

</style>
