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
    }
  }
</script>

<style>
</style>