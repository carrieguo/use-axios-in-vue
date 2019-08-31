<template>
  <div>
    <!-- 联系人卡片 -->
    <van-contact-card
      :type="cardType"
      :name="currentContact.name"
      :tel="currentContact.tel"
      @click="showList = true"
    />
    <!-- 联系人列表 -->
    <van-popup v-model="showList" position="bottom">
      <van-contact-list
        v-model="chosenContactId"
        :list="list"
        @add="onAdd"
        @edit="onEdit"
        @select="onSelect"
      />
    </van-popup>
    <!-- 联系人编辑 -->
    <van-popup v-model="showEdit" position="bottom">
      <van-contact-edit
        :contact-info="editingContact"
        :is-edit="isEdit"
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>
  </div>
</template>

//并发请求
<script>
import axios from "axios";
import Vue from "vue";
import { Popup, ContactCard, ContactList, ContactEdit, Toast } from "vant";

Vue
  .use(ContactCard)
  .use(ContactList)
  .use(ContactEdit);

export default {
  name: "contactList",
  components: {
    [Popup.name]: Popup,
    [Toast.name]: Toast,
    [ContactCard.name]: ContactCard,
    [ContactList.name]: ContactList,
    [ContactEdit.name]: ContactEdit
  },
  created: function() {
    this.instance = axios.create({
      baseURL: "http://localhost:9000/api",
      timeout: 1000,
      method: [],
      params: {}, //请求参数拼接在url上
      data: {} //请求参数放在请求体
    });
    this.instance
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
  },
  computed: {
    cardType() {
      return this.chosenContactId !== null ? 'edit' : 'add';
    },

    currentContact() {
      const id = this.chosenContactId;
      return id !== null ? this.list.filter(item => item.id === id)[0] : {};
    }
  },
  methods: {
    // 添加联系人
    onAdd() {
      this.editingContact = { id: this.list.length };
      this.isEdit = false;
      this.showEdit = true;
    },

    // 编辑联系人
    onEdit(item) {
      this.isEdit = true;      
      this.showEdit = true;
      this.editingContact = item;
    },

    // 选中联系人
    onSelect() {
      this.showList = false;
    },

    // 保存联系人
    onSave(info) {
      this.showEdit = false;
      this.showList = false;
      
      if (this.isEdit) {
        this.list = this.list.map(item => item.id === info.id ? info : item);
        this.instance
          .put('contact/edit', info)
          .then(res => {
            Toast('保存成功');
          });
      } else {
        this.list.push(info);
        this.instance
          .post('/contact/new/json', info)
          .then(res => {
            Toast('添加成功');
          });
      }
      this.chosenContactId = info.id;
    },

    // 删除联系人
    onDelete(info) {
      this.showEdit = false;
      this.list = this.list.filter(item => item.id !== info.id);
      if (this.chosenContactId === info.id) {
        this.chosenContactId = null;
      }
      this.instance
      .delete('/contact?id=' + info.id)
      .then(res => {
        Toast('删除成功');
      });
    }
  }
}
</script>

<style>
</style>