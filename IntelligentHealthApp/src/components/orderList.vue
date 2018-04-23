<template>
<div style="height:100%;background: #f2f2f2;">
  <div id="wrapper" class="m_pwd">
    <!--<h2 class="int_title clearfix"><span class="int_pic"><img src="images/jifen/left.png"/></span>积分商城</h2>-->
    <!-- <div class="int_title"><span class="int_pic"><a href="My_info.html"><img src="../images/jifen/left.png"/></a></span>我的订单</div> -->
    <div class="int_title">
      <label for="" class="tab active">待付款</label>
      <label for="" class="tab">配送中</label>
      <label for="" class="tab">已完成</label>
    </div>
    <!--banner start-->	
    <div class="order-wrapper">
      <div class="order" v-for="item in orderList" :key="item.orderId">
        <p class="o_txt clearfix">
          编号 : {{item.orderId}}
        </p>
        <dl class="order_box topline clearfix" v-for="goodsItem in item.orderGoodsList" :key="goodsItem.id">
          <dt class="order_pic fl">
            <img src="../images/ddxq/img.png" />
          </dt>
          <dd class="order_txt fr">
            <p class="order_con">{{goodsItem.name}}</p>
            <span class="order_line">规格：{{goodsItem.standard}}</span>
            <p class="order_number clearfix">￥{{goodsItem.price}}<span class="order_add fr">x{{goodsItem.count}}</span></p>
          </dd>
        </dl>
        <div class="order_btn topline clearfix">
          <p class="order_t_box clearfix fr">
            <a href="#" class="p_money order_border order_style fl">订单详情</a>
            <a href="#" class="p_money order_border  fr">确认收货</a>
          </p>
        </div>
      </div>
    </div>
    <!--menu  start-->
    <home-footer></home-footer>
  </div>
</div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import HomeFooter from './homeFooter'
export default {
  name: 'orderList',
  computed: {
    ...mapState({
      orderList: state => state.order.orderList
    }) 
  },
  components: { HomeFooter }
}
</script>
<style scoped>
div.int_title {
	position: fixed;
	top: 0px;
	left: 0px;
	z-index: 1;
}
.order-wrapper{
  padding-top: 1.8rem;
  padding-bottom: 40px;
}
.int_title{
  display: flex;
  flex-wrap:nowrap;
}
.int_title .tab{
  width: 33.33333333%;
  font-weight: 100;
  font-size: 0.7rem;
  margin: 0px 1rem;
  color:#888888;
}
.int_title .tab.active{
  border-bottom: 2px solid #e87f13;
}
</style>


