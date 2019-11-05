import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.scss';

Vue.config.productionTip = false;

Vue.filter('truncate', function (text, stop, clamp) {
  return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '')
});

Vue.filter('currencyRub', function (value) {
  if (!value) {
    return '';
  }
  return value.toString().split('.')[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
