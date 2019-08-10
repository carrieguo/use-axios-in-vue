<template>
</template>

//并发请求
<script>
  import axios from "axios";

  export default {
    name: 'axios2 并发请求',
    created: function() {
      axios.all([
        axios.get('../public/test.json'),
        axios.get('../public/test1.json')
      ]).then(
        axios.spread(
          (dataRes, data2Res) => {
            console.log('并发请求');
            console.log(dataRes, data2Res);
          }
        )
      );
    }
  }
</script>

<style>
</style>