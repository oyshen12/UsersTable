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
          <div class="table-name" @click="sortByName">
            <div>Имя</div>
            <v-spacer></v-spacer>
            <v-icon
              v-if="sortedBy === 'nameDown' || sortedBy === 'nameUp'"
              color="black"
              :style="{
                transform:
                  sortedBy === 'nameUp' ? 'rotate(0deg)' : 'rotate(180deg)',
              }"
              class="mr-2"
              >mdi-arrow-up</v-icon
            >
          </div>
          <v-list class="pa-0">
            <table-item
              v-for="user in sortedUsers()"
              :key="user.id"
              :user="user"
              :nesting="0"
            ></table-item>
          </v-list>
        </v-card>
        <v-card class="" width="300">
          <div class="table-name" @click="sortByPhone">
            <div>Телефон</div>
            <v-spacer></v-spacer>
            <v-icon
              v-if="sortedBy === 'phoneDown' || sortedBy === 'phoneUp'"
              color="black"
              :style="{
                transform:
                  sortedBy === 'phoneUp' ? 'rotate(0deg)' : 'rotate(180deg)',
              }"
              class="mr-2"
              >mdi-arrow-up</v-icon
            >
          </div>
          <v-list class="pa-0">
            <table-item-phone
              v-for="user in sortedUsers()"
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
import UserMixin from "@/mixins/UserMixin";

export default {
  components: { TableItem, TableItemPhone, AddUser },
  mixins: [UserMixin],
  data() {
    return {
      search: "",
      addUserModal: false,
    };
  },
  computed: {},
  methods: {
    sortByPhone() {
      if (this.sortedBy === "phoneDown") {
        this.setSortedBy("phoneUp");
      } else if (this.sortedBy === "phoneUp") {
        this.setSortedBy("default");
      } else {
        this.setSortedBy("phoneDown");
      }
    },
    sortByName() {
      if (this.sortedBy === "nameDown") {
        this.setSortedBy("nameUp");
      } else if (this.sortedBy === "nameUp") {
        this.setSortedBy("default");
      } else {
        this.setSortedBy("nameDown");
      }
    },
  },
  mounted() {
    this.downloadState();
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
  cursor: pointer;
  background: white;
  transition: all 0.4s ease-in-out;
}
.table-name:hover {
  color: black;
  background: rgba(180, 180, 180, 0.5);
}
.empty__block {
  width: 306.05px;
}
</style>