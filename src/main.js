// 引入reset.css消除浏览器样式差异
import './reset.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
// 引入Vant
Vue.use(VueLazyload)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '',
  loading: 'dist/loading.gif',
  attempt: 1
})
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.prototype.$http=axios 
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')