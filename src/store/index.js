import Vue from 'vue'
import Vuex from 'vuex'
import creareLogger from 'vuex/dist/logger';

// 引入子模块
import detail from './modules/detail'
import home from './modules/home'
import pic from './modules/pic'
<<<<<<< HEAD
<<<<<<< HEAD
import toColor from './modules/toColor'
import toKuan from './modules/toKuan'
=======
import price from './modules/price'
import city from './modules/city'
>>>>>>> szwt
=======
import price from './modules/price'
import city from './modules/city'
=======
import toColor from './modules/toColor'
import toKuan from './modules/toKuan'
>>>>>>> 1ee28b14a43bca76c28bde51d5f0273b8cbace32
>>>>>>> szwt
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    city,
    detail,
    home,
<<<<<<< HEAD
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
<<<<<<< HEAD
    price
>>>>>>> szwt
=======
    pic,
=======
<<<<<<< HEAD
    price
=======
>>>>>>> szwt
    toColor,
    toKuan
>>>>>>> 1ee28b14a43bca76c28bde51d5f0273b8cbace32
  },
  plugins: [creareLogger()]
})
