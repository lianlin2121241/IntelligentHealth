<template>
  <div id="wrapper" style="height:100%;background: #f2f2f2;">
		<div class="int_title"><span class="int_pic" @click="back()"><img src="../images/jifen/left.png"/></span>订单详情</div>
		<div class="m_pwd topline" style="height: auto;">
			<div class="fill_order clearfix">
				<ul class="fill_box">
					<li class="fill_left fill_list fl">
						<span class="fill_span">{{orderInfo.clientInfo.name}}  {{orderInfo.clientInfo.phone}}</span>
						<p class="fill_pic clearfix">
							<span class="span_pic fl"><img src="../images/ddxq/icon.png"></span>
							<span class="span_text fr">{{orderInfo.clientInfo.address}}</span>
						</p>
						<span class="small-info">下单时间：{{orderInfo.clientInfo.time}}</span>
					</li>
				</ul>
			</div>
			<div class="fill_main">
				<dl v-for="item in orderInfo.orderGoodsList" :key="item.id" class="fill_dl clearfix">
					<dt class="fill_p_pic fl">
						<img src="../images/shoppingcart/inter.png" />
					</dt>
					<dd class="fill_p_text fr">
						<span class="fill_p_con">{{item.name}}</span>
						<p class="fill_p">规格：{{item.standard}}<span class="f_right fr">x{{item.count}}</span></p>
						<span class="fill_int">￥{{item.price}}</span>
					</dd>
				</dl>
			</div>
			<div class="con_sub clearfix">
				<span class="con_color fill_style fl all_style">实付款:￥{{orderInfo.orderPrice}}</span>
				<a @click="commit()" class="con_ti fr">确认提交</a>
			</div>
		</div>
	</div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'fillOrder',
	methods:{
		back(){
			this.$router.back()
    },
    commit(){
			this.$router.push({name: 'payment'})
    }
  },
  computed: {
    ...mapState({
      orderInfo: state => state.order.orderInfo
    }) 
  }
}
</script>
<style scoped>
div.int_title {
	position: fixed;
	top: 0px;
	left: 0px;
	z-index: 1;
}
.m_pwd {
  padding-top: 1.8rem;
}
.small-info{
  float: right;
}
.fill_order ul.fill_box li.fill_list {
    height: auto;
}
.fill_order ul.fill_box li.fill_list p.fill_pic {
	overflow: hidden;
}
.fill_order ul.fill_box li.fill_left {
	width: 98%;
}
</style>


