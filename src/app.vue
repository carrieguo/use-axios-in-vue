<template>
  <div id="app">
    {{text}}
    <van-button type="default">默认按钮</van-button>
    <router-link to="/ConcurrentRequest">Go to  第二章</router-link>
    <router-link to="/AxiosExample">Go to 第三章</router-link>
    <router-link to="/Project">Go to project</router-link>
    <router-view/>
  </div>
</template>

//控制显示内容如何变化
<script>
  import axios from "axios";
  import ConcurrentRequest from "./2-concurrent-request.vue";
  import AxiosExample from "./3-axios-example.vue";
  import Project from "./4-project.vue";
  import Vue from 'vue';
  import { Button } from 'vant';

  Vue.use(Button);

  export default {
    components: {
      ConcurrentRequest,
      AxiosExample,
      Project,
      [Button.name]: Button
    },
    data() {
      return {
        text: 'abc'
      }
    },
    created: function() {
      //get 请求
      // HTTP://localhost:8080/data.json?id=12
      axios.get('../public/test.json', {
        params: {id: 12}
      }).then(function (response) {
          console.log(response);
        }).catch(function (error) {
          console.log(error);
        });
        //get请求的另一种写法
        axios({
          method: 'GET',
          url: "/public/test.json",
          params: {id: 12}
        });

        //post 请求
        let data = {id: 12};
        axios.post('/post', data).then(function(response) {
          console.log(response);
          });
        //post请求的另一种写法
        axios({
          method: 'post',
          url: '/post',
          data: data
        }).then(function(res) {
          console.log(res);
        });
        //post 请求，传递formData
        let fd = new FormData();
        for(let key in data) {
          fd.append(key, data[key]);
        }
        axios.post('/post', fd).then((res) => console.log(res));
        //put 请求
        axios.put('/put', data).then((res) => console.log(res));
        //patch 请求
        axios.patch('/patch', data).then((res) => console.log(res));
        //delete 请求
        //参数放在URL上
        axios.delete('/del', {
          params: {id:12}
        }).then(res=> {
          console.log(res);
        });
        //参数放在请求体的Request Payload上
        axios.delete('/del', {
          data: {id:12}
        }).then(res=> {
          console.log(res);
        });
    },
    computed: {
      username () {
        // 我们很快就会看到 `params` 是什么
        return this.$route.params.username
      }
    },
    methods: {
      goBack () {
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/')
      }
    }
  }
</script>

<style>
  #test {
    color: red;
  }
</style>