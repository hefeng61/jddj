<template>
  <div class="footer">
    <div class="icon">
      <img src="../../../src/assets/basket.png">
      <span class="count">{{ total }}</span>
    </div>
    <span class="price">总计：￥{{ price }}</span>
    <div class="balance">去结算</div>
  </div>

</template>

<script>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from 'vue'
import ProductDetail from '@/components/shop/ProductDetail'

const useCartEffect = () => {
  const route = useRoute()
  const store = useStore()
  const shopId = route.params.id
  const total = computed(() => {
    const cartList = store.state.cartList
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        count += product.count
      }
    }
    return count
  })
  const price = computed(() => {
    const cartList = store.state.cartList
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        count += (product.count * product.price)
      }
    }
    return count.toFixed(2)
  })
  const productList = computed(() => {
    const cartList = store.state.cartList
    const productList = cartList[shopId] || []
    console.log(productList)
    return productList
  })

  // const productList = () => {
  //   const cartList = store.state.cartList
  //   const productList = cartList[shopId] || []
  //   console.log(productList)
  //   return productList
  // }
  return { total, price, productList }
}

export default {
  name: 'Cart',
  components: { ProductDetail },
  setup () {
    const { total, price, productList } = useCartEffect()
    return { total, price, productList }
  }
}
</script>

<style scoped>
.footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  line-height: 49px;
  background: #FFFFFF;
  display: flex;
  width: 100%;
  border-top: 1px solid #f1f1f1;
}

.footer .icon {
  width: 76px;
  height: 100%;
  line-height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon img {
  width: 28px;
  height: 26px;
}

.icon .count {
  width: 15px;
  height: 15px;
  background: #E93B3B;
  border-radius: 50%;
  font-family: PingFangSC-Medium;
  font-size: 8px;
  /*color: #000000;*/
  color: #FFFFFF;
  line-height: 15px;
  text-align: center;
}

.footer .price {
  display: block;
}

.footer .balance {
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

.product {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 50px;
  height: 50px;
}
</style>
