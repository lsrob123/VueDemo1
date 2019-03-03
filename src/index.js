import Vue from 'vue';
import store from './store-modules/store';

import App from './app.vue';
import Highlights from "./components/highlights.vue";
import Listings from "./components/listings.vue";

Vue.component('highlights', Highlights);
Vue.component('listings', Listings);

new Vue({
  el: '#vue-demo-1-app',
  store,
  render: h => h(App)
});