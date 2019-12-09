import Vue from 'vue'
import Vuex from 'vuex'
import creareLogger from 'vuex/dist/logger';

// 引入子模块
import detail from './modules/detail'
import home from './modules/home'
import pic from './modules/pic'
import toColor from './modules/toColor'
import toKuan from './modules/toKuan'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    detail,
<<<<<<< HEAD
    home
=======
    home,
<<<<<<< HEAD
    pic
>>>>>>> lyp
=======
    pic,
    toColor,
    toKuan
>>>>>>> lyp
  },
  plugins: [creareLogger()]
})
