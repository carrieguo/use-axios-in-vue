<template>
  <div id="test">{{text}}</div>
</template>

//控制显示内容如何变化
<script>
  import axios from "axios";
  export default {
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
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
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
    }
  }
</script>

<style>
  #test {
    color: red;
  }
</style>