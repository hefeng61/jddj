import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {}
    // cartList: {
    //   shopId:{
    //     productId:{
    //       item
    //     }
    //   }
    // }
  },
  getters: {},
  mutations: {
    changeItemToCart (state, payload) {
      const {
        shopId,
        productId,
        product,
        num
      } = payload
      // debugger
      let shopInfo = state.cartList[shopId]
      if (!shopInfo) {
        shopInfo = {}
      }
      let productInfo = shopInfo[productId]
      if (!productInfo) {
        productInfo = product
        productInfo.count = 0
      }
      productInfo.count += num
      if (productInfo.count > 0) {
        productInfo.checked = true
      }
      if (productInfo.count < 0) {
        productInfo.count = 0
      }
      shopInfo[productId] = productInfo
      state.cartList[shopId] = shopInfo
      console.log(state.cartList)
    },
    changeItemChecked (state, payload) {
      const {
        shopId,
        productId
      } = payload
      console.log(shopId, productId)
      const product = state.cartList[shopId][productId]
      product.checked = !product.checked
    },
    clearCartItem (state, payload) {
      const { shopId } = payload
      state.cartList[shopId] = {}
    },
    changeItemAllChecked (state, payload) {
      const {
        shopId,
        allChecked
      } = payload
      const productList = state.cartList[shopId]
      for (const i in productList) {
        const product = productList[i]
        if (product.checked !== allChecked.value) {
          product.checked = allChecked.value
        }
      }
    }
  },
  actions: {},
  modules: {}
})
