<template>
  <div class="shop">
    <img :src="item.imgUrl">
    <div class="content">
      <span class="shop_name">{{ item.name }}</span>
      <div class="desc">
        <span>月售{{ item.sales }}万+</span>
        <span>起送{{ item.expressLimit }}</span>
        <span>基础运费{{ item.expressPrice }}</span>
      </div>
      <p>{{ item.slogan }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shop',
  props: ['item']
  // setup () {
  //   const {
  //     shopList,
  //     getShopList
  //   } = handleShopInfo()
  //
  //   getShopList()
  //
  //   return {
  //     shopList,
  //     getShopList
  //   }
  // }

}
</script>

<style scoped>
.shop {
  display: flex;
  padding-bottom: 12px;
}

.shop .shop_name {
  font-size: 16px;
  padding-bottom: 8px;
}

img {
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
</style>
