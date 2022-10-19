<template>
  <v-app>
    <v-app-bar app color="primary" dark> UsersTable </v-app-bar>
    <v-main>
      <users-table></users-table>
    </v-main>
  </v-app>
</template>

<script>
import UsersTable from "@/components/UsersTable.vue";

export default {
  name: "App",
  components: { UsersTable },
};
</script>

<style>
.v-data-table.elevation-1 {
  width: 100vw;
}
.v-main__wrap {
  max-width: 100vw;
}
</style>
