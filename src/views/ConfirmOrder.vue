<template>
  <div class="wrapper">
    <div class="personal_info">
      <div class="header">
        <span class="back">
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
        <div style="padding-bottom: 16px">沃尔玛</div>
        <div style="display: flex;justify-content: space-between;padding-bottom: 16px">
          <div style="display: flex">
            <img src="http://www.dell-lee.com/imgs/vue3/tomato.png"
                 style="width: 46px; height: 46px;padding-right: 16px">
            <div>
              <span>番茄250g/份</span>
              <span style="display: block">¥33.6 x 3</span>
            </div>
          </div>
          <div>
            &yen;99.9
          </div>
        </div>
        <div style="display: flex;justify-content: space-between;padding-bottom: 16px">
          <div style="display: flex">
            <img src="http://www.dell-lee.com/imgs/vue3/tomato.png"
                 style="width: 46px; height: 46px;padding-right: 16px">
            <div>
              <span>番茄250g/份</span>
              <span style="display: block">¥33.6 x 3</span>
            </div>
          </div>
          <div>
            &yen;99.9
          </div>
        </div>
        <div class="total_count">
          <span>共计3件/1.4kg</span>
          <span>
            <down theme="outline" size="24" fill="#999999" strokeLinejoin="miter" strokeLinecap="square"/>
          </span>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="price">实付金额 &yen;624</div>
      <div class="submit_btn">
        提交订单
      </div>
    </div>
  </div>
</template>

<script>
import { Left, Right, Down } from '@icon-park/vue-next'

export default {
  name: 'ConfirmOrder',
  components: {
    Left,
    Right,
    Down
  }
}
</script>

<style scoped>
.wrapper {
  /*padding: 0 18px;*/
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
  /*width: 90%;*/
  box-sizing: border-box;
  background: #FFFFFF;
  border-radius: 4px;
  padding: 16px;
  /*padding: 16px 16px 0 16px;*/
  /*border: 1px solid #aa0303;*/
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
  /*box-sizing: border-box;*/
}

.shop {
  height: 222px;
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
