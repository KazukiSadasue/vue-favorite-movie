import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import ja from 'vee-validate/dist/locale/ja';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VeeValidate);
Validator.localize('ja', ja);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
