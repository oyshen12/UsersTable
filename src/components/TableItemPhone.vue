<template>
  <v-list-item v-if="!user.employees.length">
    <v-list-item-title style="height: 48px">{{ user.phone }}</v-list-item-title>
  </v-list-item>
  <v-list v-else>
    <v-list-item-title style="height: 48px">{{ user.phone }}</v-list-item-title>
    <template v-if="user.activator">
      <table-item-phone
        v-for="usr in sortedUsers(user.employees)"
        :user="usr"
        :id="usr.id"
      ></table-item-phone>
    </template>
  </v-list>
</template>


<script>
import { mapMutations } from "vuex";
import UserMixin from "@/mixins/UserMixin";

export default {
  name: "TableItemPhone",
  props: ["user"],
  mixins: [UserMixin],
  data() {
    return {};
  },

  methods: {
    ...mapMutations(["activatorChange"]),
    activator() {
      this.activatorChange({
        id: this.user.id,
        activator: !this.user.activator,
      });
    },
  },
};
</script>

<style scoped>
.v-list-item {
  padding: 0 !important;
  margin: 0 !important;
  outline: none !important;
}
.v-list-item__title {
  display: flex;
  align-items: center;
  outline: 1px solid grey;
  margin-bottom: 1px;
  padding-left: 16px;
}
.v-list {
  padding: 0 !important;
}
</style>