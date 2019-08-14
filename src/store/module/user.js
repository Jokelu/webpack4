
import { login } from '@/api/index'
const user = {
  namespaced: true,
  state: {
    name: 'dada',
    token: ''
  },
  // 对于模块内部的 mutation 和 getter，接收的第一个参数是模块的局部状态对象。
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_NAME(state, name) {
      state.name = name
    }
  },
  actions: {
    login({ commit }, userinfo) {
      return new Promise((resolve, reject) => {
        login(userinfo).then((result) => {
          console.log(result)
        }).catch((err) => {
          console.log(err)
        })
      })
    }
  },
  getters: {
    getname(state) {
      return 'hello ' + state.name
    }
  }

}
export default user
