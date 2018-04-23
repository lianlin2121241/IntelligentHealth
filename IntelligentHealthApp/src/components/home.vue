<template>
<div id="wrapper">
  <!--头部搜索框 start-->
  <div class="wf-search" id="search">
    <header>
      <div class="search">
        <form>	
          <span class="sprite-icon"></span>
          <input type="search" placeholder="请输入要购买的商品">
        </form>
      </div>
      <a class="search-enter">搜索</a>
    </header>
  </div>
  <!--头部搜索框 end-->
  <div class="supplier-list">
    <div @click="goDetail(item)" v-for='item in goodsList' :key='item.id' class="supplier clearfix">
      <dl class="supp_main clearfix">
        <dt class="supp_pic_t">
          <img :src="item.imgUrl" />
        </dt>
        <dd class="supp_con supp-con-home">
          <span class="supp_c_txt ellipsis">{{item.name}}</span>
          <span class="supp_c_txt ellipsis line2">{{item.description}}</span>
          <span class="supp_c_money">规格：{{item.standard}}</span>
          <div class="supp_c_price"><span class="supp_box">{{item.price}}元</span></div>
        </dd>
      </dl>
    </div>
  </div>
  <!--menu  start-->
  <home-footer></home-footer>
  <!--menu  end-->
</div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import HomeFooter from './homeFooter'
export default {
  name: 'home',
  computed: {
    ...mapState({
      goodsList: state => state.home.goodsList
    }) 
  },
  methods:{
    goDetail(item){
        this.$router.push({name: 'details', params:{id:item.id}})
    }
  },
  components: { HomeFooter }
}
</script>
<style scoped>
.search-enter{
  position: absolute;
  right: .4rem;
  top: .4rem;
  font-size: 0.7rem;
  width: auto;
  color: #666666;
}
.supp_c_txt{
  display: block;
}
.ellipsis{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.supplier dl.supp_main dd.supp_con span.supp_c_txt.line2{
  display: -webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient: vertical;
  white-space: normal;
  height: auto;
}
.supp_c_price{
  float: right;
}
.supp-con-home{
  position: relative;
  height: 95px;
}
.supplier dl.supp_main dd.supp_con span.supp_c_money{
  line-height: initial;
  position: absolute;
  bottom: 2px;
  left: 0px;
}
.supplier dl.supp_main dd.supp_con div.supp_c_price{
  width: auto;
  position: absolute;
  bottom: 0px;
  right: 10px;
}
</style>


