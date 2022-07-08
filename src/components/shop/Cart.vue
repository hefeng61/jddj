<template>
  <div class="cart">
    <div class="allCheck" v-if="total>0">
      <span>
        <span @click="()=>{changeItemAllChecked(shopId,allChecked)}">
          <check-one theme="multi-color" size="20" :fill="['#333' ,'#2F88FF' ,'#FFF' ,'#43CCF8']" v-if="allChecked"/>
          <round theme="outline" size="20" fill="#333" strokeLinejoin="miter" strokeLinecap="square"
                 v-if="!allChecked"/>
        </span>
        <span style="margin-left: 10px">全选</span>
      </span>
      <span class="clearCart" @click="()=> clearCart(shopId)">清空购物车</span>
    </div>
    <template v-for="item in list" :key="item.id">

      <div class="product" v-if="item.count>0">
        <span class="select_item" @click="()=>{changeItemChecked(shopId,item.id)}">
          <check-one theme="multi-color" size="20" :fill="['#333' ,'#2F88FF' ,'#FFF' ,'#43CCF8']" v-if="item.checked"/>
          <round theme="outline" size="20" fill="#333" strokeLinejoin="miter" strokeLinecap="square"
                 v-if="!item.checked"/>
      </span>
        <div class="img">
          <img :src="item.imgUrl">
        </div>
        <div class="detail">
          <div class="product_name">{{ item.name }}</div>
          <div>
            <span class="price">{{ item.price }}</span>
            <span class="original_price">{{ item.originalPrice }}</span>
          </div>
        </div>
        <div class="operation">
        <span @click="changeItemToCart(shopId,item.id,item,-1)">
          <reduce-one theme="outline" size="20" fill="#333"/>
        </span>
          <span class="total">{{ item.count || 0 }}</span>
          <span @click="changeItemToCart(shopId,item.id,item,1)">
            <add-one theme="outline" size="20" fill="#333"/>
          </span>
        </div>
      </div>
    </template>
    <div class="footer">
      <div class="icon">
        <img src="../../../src/assets/basket.png">
        <span class="count">{{ total }}</span>
      </div>
      <div class="price">总计：￥{{ price }}</div>
      <div class="balance">去结算</div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { AddOne, ReduceOne, CheckOne, Round } from '@icon-park/vue-next'

const useCartDetailEffect = () => {
  const route = useRoute()
  const store = useStore()
  const shopId = route.params.id
  const cartList = store.state.cartList
  // const { cartList } = toRefs(store.state)

  const total = computed(() => {
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
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        if (product.checked) {
          count += (product.count * product.price)
        }
      }
    }
    return count.toFixed(2)
  })
  const list = computed(() => {
    const cartList = store.state.cartList
    console.log(cartList)
    return cartList[shopId] || []
  })

  const changeItemChecked = (shopId, productId) => {
    store.commit('changeItemChecked', {
      shopId,
      productId
    })
  }
  return {
    total,
    price,
    list,
    changeItemChecked
  }
}
const useCartEffect = () => {
  const store = useStore()
  // const { cartList } = toRefs(store.state)
  // debugger
  const route = useRoute()
  const shopId = route.params.id

  const changeItemToCart = (shopId, productId, product, num) => {
    store.commit('changeItemToCart', {
      shopId,
      productId,
      product,
      num
    })
  }
  const clearCart = (shopId) => {
    store.commit('clearCartItem', { shopId })
  }

  const changeItemAllChecked = (shopId) => {
    const allChecked = ref(true)
    console.log(allChecked)
    allChecked.value = !allChecked.value
    console.log(allChecked)
    store.commit('changeItemAllChecked', { shopId })
    return allChecked
  }
  return {
    clearCart,
    shopId,
    changeItemToCart,
    changeItemAllChecked
  }
}
export default {
  name: 'Cart',
  components: {
    AddOne,
    ReduceOne,
    CheckOne,
    Round
  },
  setup () {
    const {
      total,
      price,
      list,
      changeItemChecked
    } = useCartDetailEffect()

    const {
      clearCart,
      shopId,
      changeItemToCart,
      changeItemAllChecked
    } = useCartEffect()
    const { allChecked } = changeItemAllChecked()
    return {
      total,
      price,
      list,
      allChecked,
      changeItemChecked,
      clearCart,
      shopId,
      changeItemToCart,
      changeItemAllChecked
    }
  }
}
</script>

<style scoped>
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}

.allCheck {
  height: 52px;
  line-height: 52px;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  padding-left: 18px;
}

.clearCart {
  margin-left: 190px;
}

.footer {
  /*position: absolute;*/
  /*left: 0;*/
  /*right: 0;*/
  /*bottom: 0;*/
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
  color: #FFFFFF;
  line-height: 15px;
  text-align: center;
}

.footer .price {
  display: block;
}

.footer .balance {
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
  display: flex;
  background: #FFFFFF;
}

.product_name {
  text-overflow: ellipsis;
}

.select_item {
  padding-left: 18px;
  line-height: 65px;
  /*background-color: #0091FF;*/
}

.img img {
  height: 46px;
  width: 46px;
  /*padding: 12px 16px;*/
  padding: 16px 16px 0 16px;
}

.detail {
  width: 144px;
  padding: 12px 0;
  margin-right: 16px;
}

.detail .product_name {
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #333333;
}

.price {
  font-family: PingFangSC-Semibold;
  font-size: 14px;
  color: #000000;

}

.original_price {
  font-family: PingFangSC-Regular;
  font-size: 10px;
  color: #999999;
  text-decoration: line-through;
}

.operation {
  display: flex;
  align-items: end;
  padding-bottom: 12px;
  padding-right: 18px;
}

.total {
  display: block;
  width: 20px;
  text-align: center;
}
</style>
