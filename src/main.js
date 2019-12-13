// 引入reset.css消除浏览器样式差异
import './reset.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
// import stricky from './instruct/stricky'
// 引入Vant


Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576149505320&di=2bd82aa6bfbfe09a04113eaf69a4cc9a&imgtype=0&src=http%3A%2F%2Fpic72.nipic.com%2Ffile%2F20150714%2F10922672_064831133634_2.jpg',
  loading: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1576139383&di=9f06e09031c9c3bc290319b4dac479cb&src=http://hbimg.b0.upaiyun.com/67277dbe4fad041d641e207608eb36dd2933fdee8bbd-xqH6vu_fw658',
  attempt: 1
})
import { Swipe, SwipeItem, ImagePreview } from 'vant';
Vue.use(Swipe).use(SwipeItem);
Vue.use(ImagePreview);
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