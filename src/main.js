import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import Autosize from 'autosize'

Vue.use(Buefy);

Vue.directive('autosize', {
  inserted: function (el) {
    const textarea = el.querySelector('textarea')
    Autosize(textarea)
  }
})

// import VueJsonSchemaForm from 'vue-json-schema-form'
import 'buefy/dist/buefy.css'
// Vue.use(VueJsonSchemaForm)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
