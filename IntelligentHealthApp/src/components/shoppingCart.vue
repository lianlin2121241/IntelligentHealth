<template>
<div style="height:100%;background: #f2f2f2;">
  <div id="shopp_cart">
    <div class="int_title"><span class="int_pic"><img src="../images/jifen/left.png"/></span>购物车</div>
		<div class="supplier clearfix" v-for="item in shoppingCartGoodsList" :key="item.id">
			<h2 class="supp_title">{{item.name}}<span class="sprite-icon" @click="del(item)"></span></h2>
			<dl class="supp_main clearfix">
				<dt class="supp_pic_t">
					<img :src="item.imgUrl" />
				</dt>
				<dd class="supp_con">
					<span class="supp_c_txt">{{item.description}}</span>
					<span class="supp_c_money">规格：{{item.standard}}</span>
					<div class="supp_c_price clearfix"><span class="supp_box">￥{{item.price}}</span><p class="supp_c_inpt"><input type="button" value="-" id="reduce" @click="reduce(item)"/><input type="text" id="txt" v-model="item.count"><input type="button" value="+" id="plus" @click="plus(item)"/></p></div>
				</dd>
			</dl>
		</div>
		<div class="con_sub cart_che clearfix">
				<span class="con_color cart_main fl">
					合计:<font>￥{{totalPrice}}</font>
				</span>
				<a href="Fill_order.html" class="con_ti fr">确认提交</a>
		</div>
	</div>
	<home-footer></home-footer>
</div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import { MessageBox } from 'mint-ui';
import HomeFooter from "./homeFooter";
export default {
  name: "shoppingCart",
  data (){
    return {
      shoppingCartGoodsList: [
        {
          id: '1',
          imgUrl: '../images/shoppingcart/inter.png',
          name: '阿莫西林胶囊',
          description: 'Dior/迪奥小姐花漾淡香氛50ml 甜心女士淡香 EDT 清新甜美迪奥小姐花漾淡香氛50ml',
          standard: 50,
          price: 200,
          count: 1
        },
        {
          id: '2',
          imgUrl: '../images/shoppingcart/inter.png',
          name: '阿莫西林胶囊',
          description: 'Dior/迪奥小姐花漾淡香氛50ml 甜心女士淡香 EDT 清新甜美迪奥小姐花漾淡香氛50ml',
          standard: 50,
          price: 200,
          count: 1
        },
        {
          id: '3',
          imgUrl: '../images/shoppingcart/inter.png',
          name: '阿莫西林胶囊',
          description: 'Dior/迪奥小姐花漾淡香氛50ml 甜心女士淡香 EDT 清新甜美迪奥小姐花漾淡香氛50ml',
          standard: 50,
          price: 200,
          count: 1
        },
        {
          id: '4',
          imgUrl: '../images/shoppingcart/inter.png',
          name: '阿莫西林胶囊',
          description: 'Dior/迪奥小姐花漾淡香氛50ml 甜心女士淡香 EDT 清新甜美迪奥小姐花漾淡香氛50ml',
          standard: 50,
          price: 200,
          count: 1
        }
      ]
    }
  },
  computed: {
    totalPrice(){
      var total=0;
      this.shoppingCartGoodsList.forEach((item,index)=>{
        total+=item.price*item.count
      })
      return total;
    },
    ...mapState({
      shoppingCartGoodsList: state => state.home.shoppingCartGoodsList
    }) 
  },
  methods: {
    reduce:function(item){
      if(item.count>0){
        item.count--
      }
    },
    plus:function(item){
      item.count++
    },
    del(item){
      MessageBox.confirm('确定删除此商品?').then(action => {
        this.shoppingCartGoodsList.splice(this.shoppingCartGoodsList.indexOf(item),1)
      },(msg)=>{
        console.log(msg);
      })
    }
  },
  components: { HomeFooter }
};
</script>
<style scoped>
div.int_title {
	position: fixed;
	top: 0px;
	left: 0px;
	z-index: 1;
}
.cart_che .cart_main {
  line-height: 2rem;
  font-size: 0.7rem;
}
#shopp_cart {
	padding-top: 1.8rem;
  padding-bottom: 4.2rem;
}
.supplier dl.supp_main dd.supp_con span.supp_c_txt{
  display: -webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient: vertical;
  white-space: normal;
  height: auto;
  overflow: hidden;
}
</style>


