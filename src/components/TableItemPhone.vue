<template>
  <v-list-item v-if="!user.employees.length">
    <v-list-item-title style="height: 48px">{{ user.phone }}</v-list-item-title>
  </v-list-item>
  <v-list v-else>
    <v-list-item-title style="height: 48px">{{ user.phone }}</v-list-item-title>
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