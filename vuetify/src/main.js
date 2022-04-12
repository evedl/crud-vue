import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

Vue.use(VueAxios, axios)
//url base de la api
axios.defaults.baseURL = 'http://localhost:3000/api';

Vue.config.productionTip = false



new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
