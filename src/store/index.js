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
      if (productInfo.count < 0) {
        productInfo.count = 0
      }
      shopInfo[productId] = productInfo
      state.cartList[shopId] = shopInfo
      console.log(state.cartList)
    }
  },
  actions: {},
  modules: {}
})
