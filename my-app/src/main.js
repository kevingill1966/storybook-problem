import Vue from 'vue';

import {GreenBlock} from "my-module";
Vue.component("green-block", GreenBlock);
import RedBlock from "./RedBlock";
Vue.component("red-block", RedBlock);

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
