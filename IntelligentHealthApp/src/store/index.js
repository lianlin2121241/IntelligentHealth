import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import order from './modules/order'
import todos from './modules/todos'
import user from './modules/user'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    home,
    order,
    todos,
    user
  },
  strict: false,
  plugins: debug ? [createLogger()] : []
})
