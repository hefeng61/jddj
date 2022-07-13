<template>
  <div class="wrapper">
    <div class="personal_info">
      <div class="header">
        <span class="back" @click="handleBack">
          <left theme="filled" size="24" fill="#ffffff" strokeLinejoin="miter" strokeLinecap="square"/>
        </span>
        <span class="title">确认订单</span>
      </div>
      <div class="address">
        <div class="detail">
          <div class="get_address">收货地址</div>
          <div class="address_detail">
            北京理工大学国防科技园2号楼10层
          </div>
          <div>
            <span class="receiver">瑶妹（先生）</span>
            <span class="phone">18911024266</span>
          </div>
        </div>
        <div class="next">
          <right theme="outline" size="24" fill="#333" strokeLinejoin="miter" strokeLinecap="square"/>
        </div>
      </div>
    </div>
    <div class="shop_info">
      <div class="shop">
        <div style="padding-bottom: 16px">{{ shopName }}</div>
        <div :style="{maxHeight: maxHeight+'px',overflowY: isOverflow}">
        <template v-for="item in productList" :key="item.id" >
          <div style="display: flex;justify-content: space-between;padding-bottom: 16px;" v-if="item.count>0">
            <div style="display: flex">
              <img :src="item.imgUrl"
                   style="width: 46px; height: 46px;padding-right: 16px">
              <div>
                <span>{{ item.name }}</span>
                <span style="display: block">&yen;{{ item.price }} x {{ item.count }}</span>
              </div>
            </div>
            <div>
              &yen;{{ (item.price * item.count).toFixed(2) }}
            </div>
          </div>
        </template>
        </div>
        <div class="total_count" @click="handleCountClick">
          <span>共计{{totalCount}}件/1.4kg</span>
          <span>
            <span v-if="showArrow">
              <down theme="outline" size="24" fill="#999999" strokeLinejoin="miter" strokeLinecap="square"/>
            </span>
            <span v-else>
              <up theme="outline" size="24" fill="#999999" strokeLinejoin="miter" strokeLinecap="square"/>
            </span>

          </span>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="price">实付金额 &yen;{{ totalPrice }}</div>
      <div class="submit_btn">
        提交订单
      </div>
    </div>
  </div>
</template>

<script>
import { Left, Right, Down, Up } from '@icon-park/vue-next'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { computed, ref, toRefs } from 'vue'

const userCartListEffect = () => {
  const route = useRoute()
  const shopId = route.params.id
  const store = useStore()
  // const cartList = toRefs(store.state)
  // console.log(cartList)
  // const productList = computed(() => {
  //   const cartList = store.state.cartList
  //   const productList = cartList[shopId]?.productList || []
  //   return productList
  // })
  const { cartList } = toRefs(store.state)
  const productList = cartList.value[shopId]?.productList || []
  const shopName = cartList.value[shopId]?.shopName || ''
  const totalPrice = computed(() => {
    let total = 0
    for (const i in productList) {
      const product = productList[i]
      total += product.price * product.count
    }
    return total.toFixed(2)
  })
  const totalCount = computed(() => {
    let count = 0
    for (const i in productList) {
      const product = productList[i]
      count += product.count
    }
    // productList.forEach(item => {
    //   count += item.count
    // })
    return count
  })
  return {
    productList,
    shopName,
    totalPrice,
    totalCount
  }
}
const useCountEffect = () => {
  const maxHeight = ref(124)
  const isOverflow = ref('hidden')
  const showArrow = ref(true)
  const handleCountClick = () => {
    if (isOverflow.value === 'hidden') {
      maxHeight.value = 310
      isOverflow.value = 'scroll'
      showArrow.value = false
    } else {
      maxHeight.value = 124
      isOverflow.value = 'hidden'
      showArrow.value = true
    }
  }
  return { maxHeight, isOverflow, showArrow, handleCountClick }
}
export default {
  name: 'ConfirmOrder',
  components: {
    Left,
    Right,
    Down,
    Up
  },
  setup () {
    const {
      productList,
      shopName,
      totalPrice,
      totalCount
    } = userCartListEffect()

    const handleBack = () => {
      window.history.back()
    }
    const { maxHeight, isOverflow, showArrow, handleCountClick } = useCountEffect()
    return {
      productList,
      shopName,
      handleBack,
      totalPrice,
      totalCount,
      maxHeight,
      isOverflow,
      showArrow,
      handleCountClick
    }
  }
}
</script>

<style scoped>
.wrapper {
  background: #F5F5F5;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

}

.personal_info {
  height: 196px;
  width: 100%;
  background-image: linear-gradient(0deg, rgba(0, 145, 255, 0.00) 4%, #0091FF 50%);
  padding: 41px 18px 0 18px;
  box-sizing: border-box;
  margin-bottom: 16px;
}

.personal_info .header {
  width: 100%;
  padding-bottom: 22px;
  display: flex;
}

.personal_info .title {
  display: block;
  height: 22px;
  width: 100%;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #FFFFFF;
  text-align: center;

}

.personal_info .address {
  display: flex;
  height: 111px;
  box-sizing: border-box;
  background: #FFFFFF;
  border-radius: 4px;
  padding: 16px;
}

.detail {
  height: 100%;
}

.get_address {
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #333333;
}

.address_detail {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #333333;
  margin: 14px 0 6px 0
}

.receiver {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #666666
}

.phone {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #666666
}

.next {
  position: absolute;
  right: 34px;
  top: 132px
}

.shop_info {
  padding: 0 18px;
  margin-top: 16px;
  overflow-y: hidden;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 50px;
  top: 200px;
}

.shop {
  /*max-height: 222px;*/
  background: #fff;
  padding: 16px;
  box-sizing: border-box;
}

.total_count {
  width: 307px;
  height: 28px;
  background: #F5F5F5;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: PingFangSC-Light;
  font-size: 14px;
  color: #999999;
}

.footer {
  height: 49px;
  width: 100%;
  background: #FFFFFF;
  border-top: 1px solid #f1f1f1;
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}

.price {
  padding-left: 24px;
  line-height: 49px;
}

.submit_btn {
  width: 98px;
  line-height: 49px;
  text-align: center;
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #FFFFFF;
  background: #4FB0F9;
  position: absolute;
  right: 0;
}
</style>
