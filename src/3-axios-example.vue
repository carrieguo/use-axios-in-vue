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
      });
      instance.get('../public/test.json').then(res => {
          console.log(res);
      });
    }
  }
</script>

<style>
</style>