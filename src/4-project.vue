<template>
  <div>
      <h1>vant button</h1>
      
  </div>
</template>

//并发请求
<script>
  import axios from "axios";
  import Vue from 'vue';
  import { Button } from 'vant';

  Vue.use(Button);

  export default {
    name: 'vantButton',
    components: {
        [Button.name]: Button
    }
  }
</script>

<style>
</style>