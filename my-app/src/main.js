import Vue from 'vue';
import App from './App.vue'

import {GreenBlock} from "my-module";
Vue.component("green-block", GreenBlock);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
