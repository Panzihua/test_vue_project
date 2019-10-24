import VueRouter from 'vue-router';
import Vue from 'vue';
import login from '../components/LoginPage';

Vue.use(VueRouter);

  export default new VueRouter({
      routes : [
        { path: '/', component: login }
      ]
  });