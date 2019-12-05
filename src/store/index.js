import Vue from 'vue'
import Vuex from 'vuex'
import creareLogger from 'vuex/dist/logger';

// 引入子模块
import detail from './modules/detail'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    detail
  },
  plugins: [creareLogger()]
})
