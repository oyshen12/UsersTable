<template>
  <div class="d-flex justify-center">
    <div class="d-flex flex-column ml-16">
      <v-btn
        @click="addUserModal = true"
        color="primary"
        width="300"
        class="align-self-end my-8"
        >Добавить</v-btn
      >
      <div class="d-flex pt-2">
        <v-card class="" width="300">
          <div class="table-name">Имя</div>
          <v-list class="pa-0">
            <table-item
              v-for="user in sortedUsers"
              :key="user.id"
              :user="user"
              :nesting="0"
            ></table-item>
          </v-list>
        </v-card>
        <v-card class="" width="300">
          <div class="table-name">Телефон</div>
          <v-list class="pa-0">
            <table-item-phone
              v-for="user in sortedUsers"
              :key="user.id"
              :user="user"
              :nesting="0"
            ></table-item-phone>
          </v-list>
        </v-card>
      </div>
    </div>
    <add-user
      v-if="addUserModal"
      @close="addUserModal = false"
      class="ml-16"
    ></add-user>
    <div v-else class="ml-16 empty__block"></div>
  </div>
</template>


<script>
import TableItem from "@/components/TableItem.vue";
import TableItemPhone from "@/components/TableItemPhone.vue";
import AddUser from "@/components/AddUser.vue";
import { mapGetters } from "vuex";

export default {
  components: { TableItem, TableItemPhone, AddUser },
  data() {
    return {
      search: "",
      addUserModal: false,
    };
  },
  computed: {
    ...mapGetters(["sortedUsers"]),
  },
};
</script>

<style scoped>
.table-name {
  height: 48px;
  display: flex;
  align-items: center;
  outline: 1px solid grey;
  padding-left: 16px;
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
  margin-bottom: 1px;
}
.empty__block {
  width: 306.05px;
}
</style>