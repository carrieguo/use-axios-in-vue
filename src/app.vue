<template>
  <div id="test">{{text}}</div>
</template>

//控制显示内容如何变化
<script>
  export default {
    data() {
      return {
        text: 'abc'
      }
    }
  }
</script>

<style>
  #test {
    color: red;
  }
</style>