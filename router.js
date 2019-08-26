import Vue from 'vue'
import VueRouter from 'vue-router'


 // 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter);

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
import ConcurrentRequest from "./src/2-concurrent-request.vue";
import AxiosExample from "./src/3-axios-example.vue";
import Project from "./src/4-project.vue"
const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/ConcurrentRequest', name: 'ConcurrentRequest', component: ConcurrentRequest },
  { path: '/AxiosExample', name: 'axios实例', component: AxiosExample },
  { path: '/Project', name: 'vantButton', component: Project },
  { path: '/user/:id', component: User,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'ConcurrentRequest',
          component: ConcurrentRequest
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'axios实例',
          component: AxiosExample
        }
      ]
    }
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
export default new VueRouter({
  mode: 'history',
  routes // (缩写) 相当于 routes: routes
});