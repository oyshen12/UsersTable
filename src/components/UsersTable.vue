<template>
  <div class="d-flex">
    <v-card class="ml-auto" width="300">
      <v-list>
        <table-item
          v-for="user in rootUsers"
          :key="user.id"
          :user="user"
          :nesting="0"
        ></table-item>
      </v-list>
    </v-card>
    <v-card class="mr-auto" width="300">
      <v-list class="">
        <table-item-phone
          v-for="user in rootUsers"
          :key="user.id"
          :user="user"
          :nesting="0"
        ></table-item-phone>
      </v-list>
    </v-card>
  </div>
</template>


<script>
import TableItem from "@/components/TableItem.vue";
import TableItemPhone from "@/components/TableItemPhone.vue";

export default {
  props: ["rootUsers"],
  components: { TableItem, TableItemPhone },
  data() {
    return {
      admins: [
        ["Management", "mdi-account-multiple-outline"],
        ["Settings", "mdi-cog-outline"],
      ],
      cruds: [
        ["Create", "mdi-plus-outline"],
        ["Read", "mdi-file-outline"],
        ["Update", "mdi-update"],
        ["Delete", "mdi-delete"],
      ],
      search: "",
      expanded: [],
      singleExpand: false,

      headers: [
        {
          text: "Имя",
          align: "start",
          sortable: true,
          value: "name",
        },
        { text: "Телефон", value: "phone", sortable: true },
      ],
    };
  },
};
</script>