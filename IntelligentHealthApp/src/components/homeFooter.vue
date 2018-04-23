<template>
	<div id="menu" class="menu">
    <ul>
      <li><router-link to="/home" exact-active-class="red"><font class="iconfont">&#xe612;</font><span class="inco_txt">首页</span></router-link></li>
      <li><router-link to="/shoppingCart" exact-active-class="red"><font class="iconfont index">&#xe63e;</font><span class="inco_txt">购物车</span></router-link></li>
      <li><router-link to="/orderList" exact-active-class="red"><font class="iconfont">&#xe660;</font><span class="inco_txt">订单</span></router-link></li>
      <li><router-link to="/selfInfo" exact-active-class="red"><font class="iconfont">&#xe62e;</font><span class="inco_txt">我的</span></router-link></li>
    </ul>
  </div> 
</template>
<script>
export default {
  name: 'homeFooter'
}
</script>
<style scoped>
.menu{
  width: 100%;
  height: 44px;
  position: fixed;
  left: 0px;
  bottom: 0px;
  background: #fff;
  box-shadow: 0 -3px 5px #ccc;
  z-index: 1000;
}
</style>


