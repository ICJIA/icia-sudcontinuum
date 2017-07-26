// import jquery from 'jquery'
// import tether from 'tether'
// import bootstrap from 'bootstrap'

// import lodash from 'lodash';
import './scss/style.scss';

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false



// import Meta from 'vue-meta'
// Vue.use(Meta)

////////////////////////////////////////////////////////////////////////////////////
// Custom Google Analytics injection. Modified from vue-ga
////////////////////////////////////////////////////////////////////////////////////
// window['NODE_ENV'] = process.env.NODE_ENV
// import googleAnalytics from './googleAnalytics.js'
// if (NODE_ENV === 'production') {
//   googleAnalytics ('UA-10798495-21','ICJIA Continuum | ', router)
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
