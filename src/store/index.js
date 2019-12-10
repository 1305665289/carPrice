import Vue from 'vue'
import Vuex from 'vuex'
import creareLogger from 'vuex/dist/logger';

// 引入子模块
import detail from './modules/detail'
import home from './modules/home'
import pic from './modules/pic'
<<<<<<< HEAD
import toColor from './modules/toColor'
import toKuan from './modules/toKuan'
=======
import price from './modules/price'
import city from './modules/city'
>>>>>>> szwt
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    city,
    detail,
    home,
<<<<<<< HEAD
<<<<<<< HEAD
    pic
>>>>>>> lyp
=======
    pic,
    toColor,
    toKuan
>>>>>>> lyp
=======
    pic,
    price
>>>>>>> szwt
  },
  plugins: [creareLogger()]
})
