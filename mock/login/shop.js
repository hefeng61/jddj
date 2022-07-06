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

const productList = [
  {
    id: 1,
    name: '番茄250g/份',
    imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
    sales: 10,
    originalPrice: 33.8,
    price: 32.8,
    category: 'vegetable'
  },
  {
    id: 2,
    name: '提子250g/份',
    imgUrl: 'http://www.dell-lee.com/imgs/vue3/orange.png',
    sales: 10,
    originalPrice: 33.8,
    price: 32.8,
    category: 'fruit'
  },
  {
    id: 3,
    name: '香蕉250g/份',
    imgUrl: 'http://www.dell-lee.com/imgs/vue3/cherry.png',
    sales: 10,
    originalPrice: 33.8,
    price: 32.8,
    category: 'fruit'
  },
  {
    id: 4,
    name: '提子250g/份',
    imgUrl: 'http://www.dell-lee.com/imgs/vue3/crab.png',
    sales: 10,
    originalPrice: 13.8,
    price: 32.8,
    category: 'secKill'
  },
  {
    id: 5,
    name: '主体250g/份',
    imgUrl: 'http://www.dell-lee.com/imgs/vue3/crab.png',
    sales: 10,
    originalPrice: 33.8,
    price: 32.8,
    category: 'meat'
  },
  {
    id: 6,
    name: '鸡胸肉250g/份',
    imgUrl: 'http://www.dell-lee.com/imgs/vue3/cherry.png',
    sales: 10,
    originalPrice: 33.8,
    price: 32.8,
    category: 'meat'
  }
]

export default {
  'get|/api/shop/product': option => {
    const url = option.url
    console.log(url)
    const param = url.substr(url.lastIndexOf('=') + 1)
    console.log(param)
    let list
    if (param !== 'all') {
      list = productList.filter(item => item.category === param)
    } else {
      list = productList
    }
    return {
      code: 0,
      status: 200,
      data: list
    }
  },
  'get|/api/shop': option => {
    return {
      code: 0,
      status: 200,
      data: shopList
    }
  }

}
