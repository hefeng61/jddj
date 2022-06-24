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
      <h3>附近店铺</h3>
      <div class="shop">
        <img src="http://www.dell-lee.com/imgs/vue3/near.png">
        <div class="content">
          <span class="shop_name">沃尔玛</span>
          <div class="desc">
            <span>月售1万+</span>
            <span>起送0</span>
            <span>基础运费5</span>
          </div>
          <p>VIP尊享满89元减4元运费券（每月3张）</p>
        </div>
      </div>
      <div class="shop">
        <img src="http://www.dell-lee.com/imgs/vue3/near.png">
        <div class="content">
          <span class="shop_name">沃尔玛</span>
          <div class="desc">
            <span>月售1万+</span>
            <span>起送0</span>
            <span>基础运费5</span>
          </div>
          <p>VIP尊享满89元减4元运费券（每月3张）</p>
        </div>
        <div class="line"></div>
      </div>
      <div class="shop">
        <img src="http://www.dell-lee.com/imgs/vue3/near.png">
        <div class="content">
          <span class="shop_name">沃尔玛</span>
          <div class="desc">
            <span>月售1万+</span>
            <span>起送0</span>
            <span>基础运费5</span>
          </div>
          <p>VIP尊享满89元减4元运费券（每月3张）</p>
        </div>
      </div>
      <!--      <div class="shop">-->
      <!--        <img src="http://www.dell-lee.com/imgs/vue3/near.png">-->
      <!--        <div class="content">-->
      <!--          <span class="shop_name">沃尔玛</span>-->
      <!--          <div class="desc">-->
      <!--            <span>月售1万+</span>-->
      <!--            <span>起送0</span>-->
      <!--            <span>基础运费5</span>-->
      <!--          </div>-->
      <!--          <p>VIP尊享满89元减4元运费券（每月3张）</p>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
    <div class="docker">
      <span class="docker_item">
        <div>
          <home theme="outline" size="20" fill="#333"/>
        </div>
        <span>首页</span>
      </span>
      <span class="docker_item"><div>
          <shopping theme="outline" size="20" fill="#333"/>
        </div>
        <span>购物车</span>
      </span>
      <span class="docker_item">
        <div>
          <order theme="outline" size="20" fill="#333"/>
        </div>
        <span>订单</span>
      </span>
      <span class="docker_item">
        <div>
          <user theme="outline" size="20" fill="#333"/>
        </div>
        <span>我的</span>
      </span>
    </div>
  </div>
</template>

<script>
import { Home, Shopping, Order, User, Local, Remind, Search } from '@icon-park/vue-next'

export default {
  name: 'indexView',
  components: {
    Home,
    Shopping,
    Order,
    User,
    Local,
    Remind,
    Search
  }
}
</script>

<style scoped>
.home {
  position: absolute;
  left: 0;
  top: 0;
  padding: 0 18px;
}

.address {
  display: flex;
  justify-content: space-around;
  height: 22px;
  margin: 16px 0;
}

.search {
  /*border-sizing: border-box;*/
}

.search span {
  /*position: absolute;*/
  /*left: 16px;*/
  /*top: 8px;*/
}

.search input {
  /*position: relative;*/
  width: 100%;
  border-radius: 16px;
  border: none;
  height: 32px;
  background-color: #f5f5f5;
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
  height: 230px;
  /*height: 100%;*/
  overflow: auto;
}

.nearby .shop {
  display: flex;
}

.nearby .shop .shop_name {
  font-size: 16px;
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
}

.shop p {
  font-size: 13px;
  color: #E93B3B;
}

/*.shop .content{*/
/*  flex: 1;*/
/*}*/
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
