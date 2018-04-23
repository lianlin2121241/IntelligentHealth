<template>
<div>
  <div id="wrapper" class="m_pwd">
    <div class="int_title"><span class="int_pic" @click="back"><img src="../images/jifen/pay_icon.png"/></span>支付成功<router-link to="/home" ><a class="pay_span">完成</a></router-link></div>
    <div class="pay_success topline">
      <div class="pay_s_box">
        <div class="pay_s_b_pic clearfix">
          <p class="pay_pic_img fl">
            <img src="../images/index/dd_03.png" />
          </p>
          <p class="pay_pic_text fr">
            <span>支付方式 : <font>万福卡支付</font></span>
            <span>订单金额 : <font>680.0积分</font></span>
          </p>
        </div>
        <div class="pay_btn clearfix">
          <router-link to="/home" ><a class="pay_a_btn p_money fr">
            返回首页
          </a></router-link>
        </div>
      </div>
    </div>
  </div>
  <div id="back_top">
    <a href="#"><img src="images/xqq/the_top.png" /></a>
  </div>
</div>
</template>
<script>
import HomeFooter from './homeFooter'
export default {
  name: 'payment',
  methods:{
		back(){
			this.$router.back()
    }
  },
  components: { HomeFooter }
}
</script>
<style scoped>
.pay_success .pay_btn a.pay_a_btn {
  float:none;
  margin-left: auto;
  margin-right: auto;
}
</style>


