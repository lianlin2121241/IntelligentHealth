<template>
<div>
  <div id="wrapper">
    <div class="int_title"><span class="int_pic" @click="back()"><img src="../images/jifen/left.png"/></span>商品详情</div>
    <div class="video details_back">
      <div class="deta_pic topline">
        <p class="deta_box"><img :src="currentGoods.imgUrl" /></p>
        <p class="deta_con">{{currentGoods.name}}</p>
        <p class="deta_con">规格：{{currentGoods.standard}}</p>
        <p class="deta_con deta_line deta_con-price">￥{{currentGoods.price}}</p>
      </div>
			<div class="perform topline">
				<div class="name_perf details_padding">
					<div class="name_box " style="display: block;">
						{{currentGoods.description}}
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="menu" class="detail_nav_main topline">
		<ul class="m_nav clearfix">
			<router-link to="/home"><li class="m_nav_1">
				<span class="m_nav_pic_main">
					<img src="../images/xqq/nav_icon.png" />
				</span>
			</li></router-link>
			<a @click="addShoppingCart()"><li class="m_nav_2">加入购物车</li></a>
			<a @click="goBuy()"><li class="m_nav_2 m_nav_fr ">立即购买</li></a>
		</ul>
	</div>
	<div id="back_top">
		<a href="#"><img src="images/xqq/the_top.png" /></a>
	</div>
</div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import HomeFooter from './homeFooter'
export default {
  name: 'details',
  computed: {
    ...mapState({
      currentGoods: state => state.home.currentGoods
    }) 
	},
	methods:{
		back(){
			this.$router.back()
		},
		addShoppingCart(){
			this.$message({
				showClose: false,
				message: '添加购物车成功',
				type: 'success'
			})
		},
		goBuy(){
			this.$router.push({name: 'fillOrder'})
		}
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
.details_back {
	height: 122% !important;
	background: #f2f2f2;
	padding-top: 1.8rem;
}
.deta_pic p.deta_con.deta_con-price{
	font-size: 1.2rem;
	padding: 4px 2%;
}
.name_perf .name_box {
	padding: 6px;
}
</style>


