import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Details from '@/components/details'
import ShoppingCart from '@/components/shoppingCart'
import FillOrder from '@/components/fillOrder'
import Payment from '@/components/payment'
import OrderList from '@/components/orderList'
import SelfInfo from '@/components/selfInfo'
import Register from '@/components/register'
import Login from '@/components/login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/details/:id',
      name: 'details',
      component: Details
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: ShoppingCart
    },
    {
      path: '/fillOrder',
      name: 'fillOrder',
      component: FillOrder
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment
    },
    {
      path: '/orderList',
      name: 'orderList',
      component: OrderList
    },
    {
      path: '/selfInfo',
      name: 'selfInfo',
      component: SelfInfo
    },
    {
      path: '/reg',
      name: 'reg',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
