<template>
  <v-card class="pa-4 add__user-card" height="400" width="307">
    <v-system-bar color="white">
      <v-spacer></v-spacer>
      <v-btn @click="closeModal" right icon><v-icon>mdi-close</v-icon></v-btn>
    </v-system-bar>
    <v-card-title class="pl-0">Добавление пользователя</v-card-title>
    <v-text-field
      v-model="name"
      label="Имя"
      :rules="[rules.required]"
      autocomplete="off"
      class="mt-2"
    ></v-text-field>
    <v-text-field
      v-model="phone"
      type="number"
      :rules="[rules.required, rules.phone]"
      label="Телефон"
      autocomplete="off"
      class="mt-4 inputPhone"
    ></v-text-field>
    <v-select
      v-model="chief"
      label="Начальник"
      :items="users"
      :item-text="selectItem"
      return-object
      clearable
      class="mt-4"
    ></v-select>
    <v-btn @click="save" width="100%" color="primary" class="mt-4"
      >Сохранить</v-btn
    >
  </v-card>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      name: "",
      phone: "",
      chief: {},
      rules: {
        required: (value) => !!value || "Обязательное поле",
        phone: (value) => {
          const regV = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
          const phone = regV.test(value);
          return phone ? phone : "Некорректный номер телефона";
        },
      },
    };
  },
  computed: {
    ...mapState(["users"]),
    ...mapGetters(["getNewId"]),
  },
  methods: {
    ...mapMutations(["addUser", "addEmployee"]),
    selectItem(user) {
      return `${user.name} (id: ${user.id})`;
    },
    closeModal() {
      this.$emit("close");
    },
    save() {
      const regV = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
      if (this.name !== "" && this.phone !== "" && regV.test(this.phone)) {
        const newId = this.getNewId;
        const chiefChoosen = this.chief && Object.keys(this.chief).length !== 0;
        const user = {
          id: newId,
          name: this.name,
          phone: this.phone,
          activator: false,
          employees: [],
          root: chiefChoosen ? false : true,
        };
        this.addUser(user);
        if (chiefChoosen) {
          this.addEmployee({
            id: this.chief.id,
            idEmployee: newId,
          });
        }
        localStorage.setItem("users", JSON.stringify(this.users));
        this.closeModal();
      }
    },
  },
};
</script>

<style scoped>
.v-list {
  padding: 0 !important;
}
.add__user-card {
  margin-top: 105px;
}
.inputPhone >>> input[type="number"] {
  -moz-appearance: textfield;
}
.inputPhone >>> input::-webkit-outer-spin-button,
.inputPhone >>> input::-webkit-inner-spin-button {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>