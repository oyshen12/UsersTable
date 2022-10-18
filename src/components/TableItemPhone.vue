<template>
  <v-list-item v-if="!user.employees.length">
    <v-list-item-title>{{ user.phone }}</v-list-item-title>
  </v-list-item>
  <v-list v-else>
    <v-list-item-title>{{ user.phone }}</v-list-item-title>
    <template v-if="user.activator">
      <table-item
        v-for="usr in user.employees"
        :user="getUser(usr)"
        :nesting="nesting + 15"
      ></table-item>
    </template>
  </v-list>
</template>


<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "TableItem",
  props: ["user", "nesting"],
  data() {
    return {};
  },
  computed: {
    ...mapState(["users"]),
  },
  methods: {
    ...mapMutations(["activatorChange"]),
    getUser(id) {
      return this.users.find((el) => el.id === id);
    },
    activator() {
      console.log("activator");
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
  outline: 1px solid grey;
}
.v-list-item__title {
  text-align: center;
  height: 56px !important;
  outline: 1px solid grey;
}
.v-list {
  padding: 0 !important;
}
</style>