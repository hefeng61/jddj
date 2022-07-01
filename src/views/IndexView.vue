<template>
  <div class="home">
    <div class="address">
      <span>
        <local theme="outline" size="20" fill="#333"/>
      </span>
      <span>
        宜昌市三峡云计算大厦
      </span>
      <span>
        <remind theme="outline" size="20" fill="#333"/>
      </span>
    </div>
    <div class="search">
      <span>
        <search theme="outline" size="20" fill="#333"/>
      </span>
      <input placeholder="山姆会员商店优惠商品">
    </div>
    <div class="banner">
      <img
        src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
      />
    </div>
    <div class="menu">
      <div>
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png">
        <p>超市便利</p>
      </div>
      <div>
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png">
        <p>超市便利</p>
      </div>
      <div>
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png">
        <p>超市便利</p>
      </div>
      <div>
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png">
        <p>超市便利</p>
      </div>
      <div>
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png">
        <p>超市便利</p>
      </div>
      <div>
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png">
        <p>超市便利</p>
      </div>
      <div>
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png">
        <p>超市便利</p>
      </div>
      <div>
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png">
        <p>超市便利</p>
      </div>
    </div>
    <div class="gap"></div>
    <div class="nearby">
      <span class="header">附近店铺</span>
      <ShopInfo v-for="item in shopList" :key="item.id" :item="item" @click="handleDetail"/>
    </div>
  </div>

  <Dock/>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Local, Remind, Search } from '@icon-park/vue-next'
import { get } from '../util/request'
import Dock from '@/components/home/Dock'
import ShopInfo from '@/components/home/ShopInfo'

const handleShopEffect = () => {
  const shopList = ref([])
  const getShopInfo = () => {
    get('/api/shop').then(res => {
      shopList.value = res.data
    })
  }
  return {
    shopList,
    getShopInfo
  }
}

const handleDetailEffect = () => {
  const router = useRouter()
  const handleDetail = () => {
    router.push({ path: '/detail' })
  }
  return { handleDetail }
}

export default {
  name: 'indexView',
  components: {
    ShopInfo,
    Dock,
    Local,
    Remind,
    Search
  },
  setup () {
    const {
      shopList,
      getShopInfo
    } = handleShopEffect()
    getShopInfo()

    const { handleDetail } = handleDetailEffect()
    return {
      shopList,
      handleDetail
    }
  }
}
</script>

<style scoped>
.home {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 50px;
  right: 0;
  padding: 0 18px;
}

.address {
  display: flex;
  justify-content: space-between;
  height: 22px;
  margin: 16px 0;
}

.search {
  position: relative;
}

.search span {
  position: absolute;
  left: 5px;
  top: 5px;
}

.search input {
  width: 100%;
  border-radius: 16px;
  border: none;
  height: 32px;
  background-color: #f5f5f5;
  padding-left: 40px;
  box-sizing: border-box;
}

.banner img {
  display: block;
  height: 86px;
  width: 100%;
  margin-top: 12px;
  margin-bottom: 16px;
}

.menu {
  display: flex;
  flex-wrap: wrap;

}

.menu div {
  width: 25%;
}

.menu img {
  width: 40px;
  height: 40px;
  display: block;
  margin: 0 auto;
}

.menu p {
  font-size: 12px;
  margin-top: 6px;
  text-align: center;
}

.gap {
  height: 10px;
  width: 100%;
  background-color: #f1f1f1;
  padding: 0;
}

.nearby {
  height: 260px;
  /*height: 100%;*/
  overflow: auto;
  /*overflow-y: auto;*/

}

.nearby .header {
  display: block;
  padding-top: 16px;
  padding-bottom: 12px;
}

.nearby .shop {
  display: flex;
  padding-bottom: 12px;
}

.nearby .shop .shop_name {
  font-size: 16px;
  padding-bottom: 8px;
}

.nearby img {
  display: block;
  width: 56px;
  height: 56px;
  margin-right: 16px;
}

.shop .desc {
  font-size: 13px;
  padding-top: 8px;
  padding-bottom: 8px;
}

.shop .desc span {

  padding-right: 16px;
}

.shop p {
  font-size: 13px;
  color: #E93B3B;
  padding-bottom: 12px;
  margin: 0;
}

.shop .content {
  border-bottom: 1px solid #f5f5f5;
}

.docker {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 49px;
  border-top: 1px solid #f1f1f1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f5f5f5;
}

.docker_item {
  font-size: 10px;
}
</style>
