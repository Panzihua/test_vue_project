import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import store from './store';
import router from './router';

'use strict'
Vue.config.productionTip = false
Vue.use(ElementUI);


new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
