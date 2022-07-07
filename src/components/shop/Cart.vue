<template>
  <div class="footer">
    <div class="icon">
      <img src="../../../src/assets/basket.png">
      <span class="count">{{ total }}</span>
    </div>
    <span class="price">总计：￥128</span>
    <div class="balance">去结算</div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { computed, toRefs } from 'vue'

const useCartEffect = () => {
  const route = useRoute()
  const store = useStore()
  debugger
  const shopId = route.params.id
  // const { cartList } = toRefs(store.state)
  // const cartList = store.state.cartList
  // const { cartList } = toRefs(store.state)
  // const productList = cartList[shopId]
  // console.log(shopId, cartList)
  const total = computed(() => {
    debugger
    const cartList = store.state.cartList
    // const { cartList } = toRefs(store.state)
    const productList = cartList[shopId]
    console.log(productList)
    console.log(shopId, cartList)
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        console.log(product, i)
        count += product.count
      }
    }
    return count
  })
  return total
}
export default {
  name: 'Cart',
  setup () {
    const total = useCartEffect()
    return { total }
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
  width: 110px;
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
</style>
