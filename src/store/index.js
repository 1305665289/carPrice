import Vue from 'vue'
import Vuex from 'vuex'
import creareLogger from 'vuex/dist/logger';

// 引入子模块
import detail from './modules/detail'
import home from './modules/home'
import pic from './modules/pic'
import price from './modules/price'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    detail,
    home,
    pic,
    price
  },
  plugins: [creareLogger()]
})
