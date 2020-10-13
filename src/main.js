import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Paginate from 'vuejs-paginate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import currencyFilter from './filters/currency.filter'
import localizeFilter from './filters/localize.filter'
import tooltipDirective from './directives/tooltip.directives'
import messagePlugin from './utils/message.plugin'
import Loader from './components/app/Loader'
import 'materialize-css/dist/js/materialize'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/analytics'


Vue.config.productionTip = false;

Vue.use(Vuelidate)
Vue.use(messagePlugin)

Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)

Vue.directive('tooltip', tooltipDirective)

Vue.component('Loader', Loader)
Vue.component('paginate', Paginate)

const firebaseConfig = {
  apiKey: "AIzaSyCVgV4aaMoppudbzlHJ0-3vrwnc31W9rPA",
  authDomain: "home-crmvue.firebaseapp.com",
  databaseURL: "https://home-crmvue.firebaseio.com",
  projectId: "home-crmvue",
  storageBucket: "home-crmvue.appspot.com",
  messagingSenderId: "803136731435",
  appId: "1:803136731435:web:248b43de98f235807bad6e",
  measurementId: "G-8S1THS5782"
};

firebase.initializeApp(firebaseConfig)
firebase.analytics()

let app
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


