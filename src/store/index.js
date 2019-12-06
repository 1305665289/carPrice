import Vue from 'vue'
import Vuex from 'vuex'
import creareLogger from 'vuex/dist/logger';

// 引入子模块
import detail from './modules/detail'
import home from './modules/home'
import pic from './modules/pic'
<<<<<<< HEAD

=======
>>>>>>> e1a42a389e16daa0f32806e0d5a65b5f910d50b2
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    detail,
<<<<<<< HEAD
    home
=======
    home,
    pic
>>>>>>> e1a42a389e16daa0f32806e0d5a65b5f910d50b2
  },
  plugins: [creareLogger()]
})
