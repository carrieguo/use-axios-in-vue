<template>
</template>

//创建axios实例
<script>
  import axios from "axios";

  export default {
    name: 'axios实例',
    created: function() {
      let instance = axios.create({
          baseURL: 'http://localhost:8080',
          timeout: 1000,
          url: '/test.json',
          method: [],
          headers: {
            token: ''
          },//请求头
          params: {},//请求参数拼接在url上
          data: {},//请求参数放在请求体
      });
      
      //1.全局配置
      axios.defaults.timeout = 1000;
      //2.实例配置
      instance.defaults.timeout = 3000;
      //3.axios请求配置
      instance.get('/public/test.json', {
        timeout: 5000
      }).then(res => {
          console.log('3-axios-example' + res);
      });

      //实际开发
      //有两种请求接口
      //http:localhost:9090
      //http:localhost:9091
      //对应两个不同的后端服务
      /*
      let instance = axios.create({
        baseURL: 'http://localhost:9090',
        timeout: 1000
      });
      let instance1 = axios.create({
        baseURL: 'http:localhost:9091',
        timeout: 3000
      });
      instance.get('/contactList').then(res => console.log(res));
      instance1.get('/orderList').then(res => console.log(res));
      */

      //请求拦截器
      axios.interceptors.request.use(
        
        config => {
          //在请求前做些什么
          return config;
        }, 
        err => {
          //在请求错误时做些什么
          return Promise.reject(err);
        }
      );

      //响应拦截器
      axios.interceptors.response.use(
        res => {
        //请求成功对响应数据做处理
        return res;
        },
        err => {
          //响应错误做些什么
          return Promise.reject(err);
        }
      );

      //取消拦截器
      let cancelInterceptors = axios.interceptors.request.use(
        config => {
          config.headers= {auth: true};
          return config;
        }
      );
      axios.interceptors.request.eject(cancelInterceptors);

      //拦截器例子 登录状态（token:''）
      let loginInstance = axios.create({});
      loginInstance.interceptors.request.use(
        config => {
          config.headers.token = '';
          return config; 
        }
      );
      loginInstance.get('/public/testheader.json', {
        timeout: 5000
      }).then(res => {
          console.log('登陆头拦截器' + res);
      });
      //移动端开发
      let waitInstance = axios.create({});
      waitInstance.interceptors.request.use(
        config => {
          //$('#loadModal').show('正在加载');
          return config;
        },
        (err => {
          console.log('3-请求错误');
          //$('#errorModal').show('请求错误');
          setTimeout(() => {
            //$('#errorModal').hide();
          }, 2000);
          return Promise.reject(err);
        })
      );
      waitInstance.interceptors.response.use(
        res => {
          //$('#loadModal').hide();
          return res;
        },
        err => {
          //$('#errorModal').show('响应错误');
          setTimeout(() => {
            //$('#errorModal').hide();
          }, 2000);
          return Promise.reject(err);
        }
      );
      //console.log('3-请求错误');
      waitInstance.get('/publeader.json', {
        timeout: 5000
      }).then(res => {
          console.log('请求成功' + res);
      }).catch(err => {
        console.log('请求失败' + err);
      });

      //取消请求
      let source = axios.CancelToken.source();
      axios.get('/data.json', {
        cancelToken: source.token
      }).then(res => {
        console.log(res);
      }).catch(err => {
        //'cancel http'
        console.log(err);
      });
      source.cancel('cancel http');
      
    }
  }
</script>

<style>
</style>