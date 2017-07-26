// import jquery from 'jquery'
import tether from 'tether'
import bootstrap from 'bootstrap'


import './scss/style.scss';


import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


import VueDirectiveMarkdown from 'vue-directive-markdown'
Vue.directive('md', VueDirectiveMarkdown)

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
