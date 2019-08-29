<template>
  <div>
    <!-- 联系人列表 -->
    <van-contact-list
      v-model="chosenContactId"
      :list="list"
    />
  </div>
</template>

//并发请求
<script>
import axios from "axios";
import Vue from "vue";
import { ContactList } from "vant";

Vue.use(ContactList);

export default {
  name: "contactList",
  components: {
    [ContactList.name]: ContactList
  },
  created: function() {
    let instance = axios.create({
      baseURL: "http://localhost:9000/api",
      timeout: 1000,
      method: [],
      params: {}, //请求参数拼接在url上
      data: {} //请求参数放在请求体
    });
    instance
      .get("/contactList", {
        timeout: 5000
      })
      .then(res => {
        this.list = res.data.data;
      });
  },
  data() {
    return {
      chosenContactId: null,
      editingContact: {},
      showList: false,
      showEdit: false,
      isEdit: false,
      list: this.list
    }
  }
}
</script>

<style>
</style>