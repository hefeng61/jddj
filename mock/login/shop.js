const shopList = [
  {
    id: 1,
    name: '沃尔玛',
    imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
    sales: 100,
    expressLimit: 0,
    expressPrice: 5,
    slogan: 'VIP尊享满89元减4元运费券（每月3张）'
  }, {
    id: 2,
    name: '家乐福',
    imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
    sales: 100,
    expressLimit: 0,
    expressPrice: 5,
    slogan: 'VIP尊享满89元减4元运费券（每月3张）'
  }, {
    id: 3,
    name: '美乐乐',
    imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
    sales: 100,
    expressLimit: 0,
    expressPrice: 5,
    slogan: 'VIP尊享满89元减4元运费券（每月3张）'
  }
]

export default {
  'get|/api/shop': option => {
    return {
      code: 0,
      status: 200,
      data: shopList
    }
  }
}
