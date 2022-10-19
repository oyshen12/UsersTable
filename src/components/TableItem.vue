<template>
  <v-list-item
    v-if="!user.employees.length"
    :style="{
      marginLeft: `${nesting === 0 ? 0 : 10}px`,
    }"
  >
    <v-list-item-title>{{ user.name }} (id:{{ user.id }})</v-list-item-title>
  </v-list-item>
  <v-list-group
    v-else
    @click.capture.stop="activator"
    disabled
    :value="true"
    prepend-icon="mdi-account-circle"
    :style="{
      marginLeft: `${nesting === 0 ? 0 : 10}px`,
      color: user.activator ? 'inherit' : 'rgba(0, 0, 0, 0.87) !important',
    }"
    :class="{
      active: user.activator,
    }"
  >
    <template v-slot:activator>
      <v-icon class="mr-1">mdi-account-circle</v-icon>
      <v-list-item-title>{{ user.name }} (id:{{ user.id }})</v-list-item-title>
      <v-icon
        :style="{
          transform: user.activator ? 'rotate(180deg)' : 'rotate(0deg)',
        }"
        >mdi-chevron-down</v-icon
      >
    </template>
    <template v-if="user.activator">
      <table-item
        v-for="usr in user.employees"
        :user="getUser(usr)"
        :key="usr"
        :nesting="nesting + 1"
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

<style >
.v-list-group__header {
  outline: 1px solid grey;
}
.v-list-item {
  outline: 1px solid grey;
  margin-bottom: 1px;
}
.active {
  color: rgba(0, 0, 0, 0.87) !important;
}
.closed {
  color: inherit !important;
}
.v-list-item__icon {
  display: none !important;
}
</style>