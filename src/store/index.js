import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {
        id: 1,
        name: "qwe",
        phone: "+7918111111",
        root: true,
        activator: true,
        employees: [2, 3, 4],
      },
      {
        id: 2,
        name: "asd",
        phone: "+7918222222",
        activator: false,
        employees: [],
      },
      {
        id: 3,
        name: "zxc",
        phone: "+7918333333",
        activator: false,
        employees: [],
      },
      {
        id: 4,
        name: "tyu",
        phone: "+7918444444",
        activator: true,
        employees: [5],
      },
      {
        id: 5,
        name: "uio",
        phone: "+7918555555",
        activator: true,
        employees: [6],
      },
      {
        id: 6,
        name: "hhh",
        phone: "+791866666",
        activator: true,
        employees: [7],
      },
      {
        id: 7,
        name: "qqq",
        phone: "+79187777",
        activator: false,
        employees: [],
      },
      {
        id: 8,
        name: "zzz",
        phone: "+7918888",
        activator: false,
        root: true,
        employees: [],
      },
    ],
  },
  getters: {
    getRootUsers(state) {
      return state.users.filter((el) => el.root);
    },
  },
  mutations: {
    activatorChange(state, payload) {
      console.log("activatorChange ", payload.id, " value ", payload.activator);
      const findIndex = state.users.findIndex((el) => el.id === payload.id);
      state.users[findIndex].activator = payload.activator;
    },
  },
  actions: {},
  modules: {},
});
