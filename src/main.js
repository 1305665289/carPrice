// 引入reset.css消除浏览器样式差异
import './reset.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '',
  loading: 'dist/loading.gif',
  attempt: 1
})
// 引入Vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//引入自定义指令
import stricky from './directions/stricky'

Vue.prototype.$http=axios 
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')