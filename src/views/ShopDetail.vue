<template>
  <div class="content">
    <div class="search">
      <span class="back">
        <left theme="outline" size="20" fill="#333"/>
      </span>
      <div class="search_item">
        <span>
          <search theme="outline" size="20" fill="#333"/>
        </span>
        <input placeholder="请输入商品名称搜索">
      </div>
    </div>
    <Shop :item="item"/>

    <div class="goods">
      <div class="sidebar">
        <ul>
          <li>全部商品</li>
          <li>秒杀</li>
          <li>新鲜水果</li>
          <li>休闲食品</li>
          <li>时令蔬菜</li>
          <li>肉蛋家禽</li>
        </ul>
      </div>
      <div class="detail">
        <img src="http://www.dell-lee.com/imgs/vue3/near.png">
        <div>
          <h5>番茄250g/份</h5>
          <span>月售10件</span>
          <div class="price">
            <span>33.6</span>
            <span>33.6</span>
          </div>
        </div>

      </div>
      <add-one theme="outline" size="20" fill="#333"/>
    </div>

  </div>

  <div class="footer">
    <shopping theme="outline" size="20" fill="#333"/>
    <span>购物车是空的</span>
    <div>去结算</div>
  </div>
</template>

<script>
import { Search, Left, Shopping, AddOne } from '@icon-park/vue-next'
import Shop from '@/components/home/ShopInfo'

export default {
  name: 'ShopDetail',
  components: {
    Shop,
    Search,
    Left,
    Shopping,
    AddOne
  },
  setup () {
    const item = {
      id: 1,
      name: '沃尔玛',
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      sales: 100,
      expressLimit: 0,
      expressPrice: 5,
      slogan: 'VIP尊享满89元减4元运费券（每月3张）'
    }
    return { item }
  }
}
</script>

<style scoped>
.content {
  padding: 0 18px;
}

.search {
  height: 32px;
  margin: 16px 0;
  width: 100%;
  display: flex;
  /*justify-content: center;*/
  align-items: center;
}
.search .back{
  margin-right: 8px;
}

.search_item {
  position: relative;
  height: 100%;
  width: 100%;

}
.search_item span{
  position: absolute;
  top: 4px;
  left: 5px;
}
.search_item input {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border-radius: 16px;
  background: #F5F5F5;
  border: none;
  padding-left: 40px;
}

.shop {
  display: flex;
}

.shop img {
  width: 56px;
  height: 56px;
  padding-right: 16px;
  padding-bottm: 16px;
}

.shop .shop_name {
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #333333;
}

.shop .desc {
  margin: 8px 0;
}

.shop .desc span {

  font-family: PingFangSC-Regular;
  font-size: 13px;
  color: #333333;
}

.shop p {
  margin: 0;
  font-family: PingFangSC-Regular;
  font-size: 13px;
  color: #E93B3B;
}

.goods {
  display: flex;
}

.sidebar {
  width: 76px;
  height: 100%;
}

.sidebar ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sidebar ul li {
  height: 40px;
  text-align: center;
  line-height: 40px;
  background: #F5F5F5;
  border-radius: 2px;
  border-radius: 2px;
}

.detail {
  display: flex;
}

.detail img {
  width: 68px;
  height: 68px;
  margin: 0 16px 16px 12px;
}

.detail h5 {
  margin: 0;
}

.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 49px;
  line-height: 49px;
  background: #FFFFFF;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f1f1f1;
}

.footer div {
  height: 100%;
  width: 98px;

  background: #4FB0F9;
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #FFFFFF;
  text-align: center;
}
</style>
