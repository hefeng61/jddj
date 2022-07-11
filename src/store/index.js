import { createStore } from 'vuex'

const setLocalStorage = (state) => {
  const { cartList } = state
  localStorage.cartList = JSON.stringify(cartList)
}

const getLocalStorage = () => {
  // console.log(localStorage.getItem('cartList'))
  // console.log(typeof localStorage.getItem('cartList'))
  // debugger
  // if (localStorage.cartList) {
  //   return JSON.parse(localStorage.cartList)
  // } else {
  //   return {}
  // }
  // console.log(localStorage.cartList)
  return JSON.parse(localStorage.cartList) || {}
  // return {}
}

export default createStore({
  state: {
    cartList: getLocalStorage()
    // cartList: {
    //   shopId:{
    //    shopName:'',
    //    productList:{
    //     productId:{
    //       item
    //     }
    //   }
    // }
    // }
  },
  getters: {},
  mutations: {
    changeItemToCart (state, payload) {
      const {
        shopId,
        productId,
        product,
        num,
        shopName
      } = payload
      console.log(shopName)
      debugger
      const shopInfo = state.cartList[shopId] || {
        shopName: '', productList: {}
      }
      shopInfo.shopName = shopName
      let productInfo = shopInfo.productList[productId]
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
      shopInfo.productList[productId] = productInfo
      state.cartList[shopId] = shopInfo
      setLocalStorage(state)
      debugger
      console.log(state.cartList)
    },
    changeItemChecked (state, payload) {
      const {
        shopId,
        productId
      } = payload
      console.log(shopId, productId)
      const product = state.cartList[shopId].productList[productId]
      product.checked = !product.checked
      setLocalStorage(state)
    },
    clearCartItem (state, payload) {
      const { shopId } = payload
      state.cartList[shopId] = {}
      setLocalStorage(state)
    },
    changeItemAllChecked (state, payload) {
      const {
        shopId,
        allChecked
      } = payload
      const productList = state.cartList[shopId].productList
      for (const i in productList) {
        const product = productList[i]
        if (product.checked !== allChecked.value) {
          product.checked = allChecked.value
        }
      }
      setLocalStorage(state)
    }
  },
  actions: {},
  modules: {}
})
