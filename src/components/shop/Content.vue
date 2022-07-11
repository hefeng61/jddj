<template>
  <div class="content">
    <div class="category">
      <div v-for="(item ,index) in categories" :key="index" @click="()=>handleTabClick(item.value)"
           :class="{active: currentTab === item.value}">
        {{ item.label }}
      </div>
    </div>
    <div class="products">
      <div class="product" v-for="item in productList" :key="item.id">
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
        <span @click="changeItemToCart(shopId,item.id,item,-1,shopName)">
          <reduce-one theme="outline" size="20" fill="#333"/>
        </span>
          <span class="total">{{ cartList?.[shopId] ?. productList[item.id]?.count || 0 }}</span>
          <span @click="changeItemToCart(shopId,item.id,item,1,shopName)">
            <add-one theme="outline" size="20" fill="#333"/>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs, watchEffect } from 'vue'
import { get } from '@/util/request'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { AddOne, ReduceOne } from '@icon-park/vue-next'

const categories = [
  {
    label: '全部商品',
    value: 'all'
  },
  {
    label: '秒杀',
    value: 'secKill'
  },
  {
    label: '新鲜水果',
    value: 'fruit'
  },
  {
    label: '时令蔬菜',
    value: 'vegetable'
  },
  {
    label: '肉蛋家禽',
    value: 'meat'
  }
]

const useTabEffect = () => {
  const currentTab = ref(categories[0].value)
  const handleTabClick = (tab) => {
    currentTab.value = tab
  }
  return {
    currentTab,
    handleTabClick
  }
}

const useCurrentTabListEffect = (tab) => {
  const data = reactive({ productList: [] })
  const getProductList = () => {
    get('/api/shop/product', { tab: tab.value }).then(res => {
      data.productList = res.data
    })
  }
  watchEffect(() => {
    getProductList()
  })
  const { productList } = toRefs(data)
  return { productList }
}
const useCartEffect = () => {
  const store = useStore()
  const { cartList } = toRefs(store.state)
  const route = useRoute()
  const shopId = route.params.id
  const changeItemToCart = (shopId, productId, product, num, shopName) => {
    store.commit('changeItemToCart', {
      shopId,
      productId,
      product,
      num,
      shopName
    })
  }
  return {
    cartList,
    shopId,
    changeItemToCart
  }
}
export default {
  name: 'Content',
  props: ['shopName'],
  components: { AddOne, ReduceOne },
  setup () {
    const {
      currentTab,
      handleTabClick
    } = useTabEffect()
    const { productList } = useCurrentTabListEffect(currentTab)
    const {
      shopId,
      cartList,
      changeItemToCart
    } = useCartEffect()

    return {
      currentTab,
      handleTabClick,
      productList,
      shopId,
      cartList,
      categories,
      changeItemToCart
    }
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
  overflow-y: scroll;
}

.category {
  width: 76px;
  /*height: 100%;*/
  background: #F5F5F5;
}

.active {
  background: #FFFFFF;
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
