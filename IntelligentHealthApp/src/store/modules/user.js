import userApi from '../../api/user'
import _ from 'lodash'

const state = {
  userInfo: {
    name: '张三',
    sex: '女',
    age: '88',
    height: '157',
    hospital: '天津市第一医院',
    classify: '第一病房',
    bedNumber: '9床',
    inDate: '2018-2-25 12:00',
    doctor: '臧三',
    diagnosisResult: '诊断结果诊断结果诊断结果诊断结果诊断结果诊断结果诊断结果诊断结果诊断结果诊断结果诊断结果诊断结果诊断结果诊断结果诊断结果诊断结果诊断结果诊断结果诊断结果诊断结果诊断结果诊断结果诊断结果诊断结果诊断结果诊断结果诊断结果'
  },
  loginInfo: {
    username: '',
    password: ''
  },
  registerInfo: {
    username: '',
    password: '',
    email: ''
  }
}

const getters = {
}

const actions = {
  login: async ({ commit, state, dispatch }) => {
    const saveResult = await userApi.login(state.loginInfo)
    if (saveResult.data.success) {
      commit('updateUserInfo', saveResult.data.data)
    }
  },
  getUserInfo: async ({ commit, state, dispatch }) => {
    const saveResult = await userApi.getUserInfo()
    if (saveResult.data.success) {
      commit('updateUserInfo', saveResult.data.data)
    }
  },
  logout: async ({ commit, state, dispatch }) => {
    const saveResult = await userApi.logout()
    if (saveResult.data.success) {
      commit('removeUserInfo')
    }
  }
}

const mutations = {
  updateUserInfo(state, userInfo) {
    state.userInfo = userInfo
  },
  removeUserInfo(state) {
    state.userInfo = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
