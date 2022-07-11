<template>
  <div class="product">
    <div class="img">
      <img :src="item.imgUrl">
    </div>
    <div class="detail">
      <div class="product_name">{{ item.name }}</div>
      <div class="sales">月售{{ item.sales }}件</div>
      <div>
        <span class="price">{{ item.price }}</span>
        <span class="original_price">{{ item.originalPrice }}</span>
      </div>
    </div>
    <div class="operation">
        <span @click="changeItemToCart(shopId,item.id,item,-1)">
          <reduce-one theme="outline" size="20" fill="#333"/>
        </span>
      <span class="total">{{ cartList?.[shopId]?.[item.id]?.count || 0 }}</span>
      <span @click="changeItemToCart(shopId,item.id,item,1)">
            <add-one theme="outline" size="20" fill="#333"/>
          </span>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { AddOne, ReduceOne } from '@icon-park/vue-next'
import { toRefs } from 'vue'

const useCartEffect = () => {
  const store = useStore()
  const { cartList } = toRefs(store.state)
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
  return {
    cartList,
    shopId,
    changeItemToCart
  }
}

export default {
  name: 'ProductDetail',
  props: ['item'],
  components: {
    AddOne,
    ReduceOne
  },
  setup () {
    const {
      shopId,
      cartList,
      changeItemToCart
    } = useCartEffect()
    return {
      shopId,
      cartList,
      changeItemToCart
    }
  }
}
</script>

<style scoped>
.products {
  width: 80%;
}

.product {
  display: flex;
  border-bottom: 1px solid #f1f1f1;
}

.product_name {
  text-overflow: ellipsis;
}

.img img {
  height: 68px;
  width: 68px;
  padding: 12px 16px;
}

.detail {
  width: 90px;
  padding: 12px 0;
  margin-right: 16px;
}

.detail .product_name {
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #333333;
}

.sales {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #333333;
  margin: 6px 0;
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
