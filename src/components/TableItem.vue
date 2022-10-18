<template>
  <v-list-item
    v-if="!user.employees.length"
    :style="{
      marginLeft: `${nesting}px`,
    }"
  >
    <v-list-item-title>{{ user.name }}</v-list-item-title>
  </v-list-item>
  <v-list-group
    v-else
    @click.capture.stop="activator"
    disabled
    :value="activator"
    prepend-icon="mdi-account-circle"
    :style="{
      marginLeft: `${nesting}px`,
    }"
  >
    <template v-slot:activator>
      <v-list-item-title>{{ user.name }}</v-list-item-title>
    </template>
    <template v-if="user.activator">
      <table-item
        v-for="usr in user.employees"
        :user="getUser(usr)"
        :nesting="nesting + 5"
      ></table-item>
    </template>
  </v-list-group>
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