<template>
<div style="height:100%;background: #f2f2f2;overflow:hidden;">
  <div id="wrapper" class="m_pwd">
    <ul class="info-wrap" style="margin-top:1.3rem;">
      <li class="info-item">
        <div class="info-item-left">{{userInfo.name}}</div>
        <div class="info-item-right">{{userInfo.sex}}&nbsp;&nbsp;&nbsp;&nbsp;{{userInfo.age}}岁</div>
      </li>
      <li class="info-item">
        <div class="info-item-left">身高：{{userInfo.height}}cm</div>
      </li>
    </ul>
    <ul class="info-wrap">
      <li class="info-item">
        <div class="info-item-left">{{userInfo.hospital}}</div>
        <div class="info-item-right">{{userInfo.classify}}&nbsp;&nbsp;{{userInfo.bedNumber}}</div>
      </li>
      <li class="info-item">
        <div class="info-item-left">入院日期</div>
        <div class="info-item-right">{{userInfo.inDate}}</div>
      </li>
      <li class="info-item">
        <div class="info-item-left">主治医生</div>
        <div class="info-item-right">{{userInfo.doctor}}</div>
      </li>
      <li class="info-item">
        <div class="info-item-left">诊断结果</div>
      </li>
      <li>
        {{userInfo.diagnosisResult}}
      </li>
    </ul>
  </div>
  <home-footer></home-footer>
</div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import HomeFooter from './homeFooter'
export default {
  name: 'payment',
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    }) 
  },
  components: { HomeFooter }
}
</script>
<style scoped>
.info-wrap{
  width: auto;
  border-radius: 0.4rem;
  background-color: #ffffff;
  margin: 0px 0.6rem 0.3rem;
  font-size: 0.6rem;
  margin-right: 0.6rem;
  padding: 0.2rem 0.4rem;
  color:#666666;
}
.info-item{
  height: 1.4rem;
  line-height: 1.4rem;
  display: flex;
  justify-content: space-between;
}
</style>


