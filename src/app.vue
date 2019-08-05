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
        //另一种写法
        axios({
          method: 'GET',
          url: "/public/test.json",
          params: {id: 12}
        })
    }
  }
</script>

<style>
  #test {
    color: red;
  }
</style>