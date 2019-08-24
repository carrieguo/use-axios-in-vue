import Vue from 'vue';
import App from './src/app.vue';
import router from './router'



// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const root = document.createElement('div');
document.body.appendChild(root);
new Vue({
  router: router,
  render: (h) => h(App)
}).$mount(root)