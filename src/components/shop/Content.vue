<template>
  <div class="content">
    <div class="category">
      <div v-for="(item ,index) in categories" :key="index" @click="()=>getProductList(item.value)"
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
        <span @click="handleReduce" v-if="showReduce">
          <reduce-one theme="outline" size="20" fill="#333"/>
        </span>
          <span v-if="count>0" class="count">{{ count }}</span>
          <span @click="handleAdd">
            <add-one theme="outline" size="20" fill="#333"/>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AddOne, ReduceOne } from '@icon-park/vue-next'
import { reactive, ref, toRefs } from 'vue'
import { get } from '@/util/request'

const handleProductList = () => {
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
  const data = reactive({
    productList: [],
    currentTab: categories[0].value
  })
  const getProductList = (category) => {
    console.log(category)
    data.currentTab = category
    get('/api/shop/product', { category }).then(res => {
      let data
      if (category === 'all') {
        data = res.data
      } else {
        data = res.data.filter(item => item.category === category)
      }
      productList.value = data
    })
  }
  const {
    productList,
    currentTab
  } = toRefs(data)
  return {
    getProductList,
    productList,
    currentTab,
    categories
  }
}

const handleCount = () => {
  const showReduce = ref(false)
  const count = ref(0)
  const handleAdd = () => {
    console.log('11111')
    count.value = count.value + 1
    showReduce.value = true
  }
  const handleReduce = () => {
    count.value = count.value - 1
    if (count.value < 1) {
      showReduce.value = false
      count.value = 0
    }
    console.log(count.value)
  }
  return {
    handleAdd,
    handleReduce,
    showReduce,
    count
  }
}

export default {
  name: 'Content',
  components: {
    AddOne,
    ReduceOne
  },
  setup () {
    const {
      productList,
      getProductList,
      currentTab,
      categories
    } = handleProductList()

    getProductList('all')

    const {
      handleAdd,
      handleReduce,
      showReduce,
      count
    } = handleCount()

    return {
      productList,
      handleAdd,
      handleReduce,
      showReduce,
      count,
      categories,
      getProductList,
      currentTab
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
  /*justify-content: space-evenly;*/
  border-bottom: 1px solid #f1f1f1;
  /*margin: 12px 0;*/
  /*padding: 12px 0;*/
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

.count {
  display: block;
  width: 20px;
  text-align: center;
}
</style>
