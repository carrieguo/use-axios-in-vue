import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './src/app.vue';

Vue.use(VueRouter)

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
  render: (h) => h(App)
}).$mount(root)