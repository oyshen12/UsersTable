import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {
        id: 0,
        name: "Иван",
        phone: "+7918000000",
        root: true,
        activator: true,
        employees: [],
      },
      {
        id: 1,
        name: "Петр",
        phone: "+7918111111",
        root: true,
        activator: true,
        employees: [2, 3, 4],
      },
      {
        id: 2,
        name: "Алексей",
        phone: "+7918222222",
        activator: false,
        employees: [],
      },
      {
        id: 3,
        name: "Александр",
        phone: "+7918333333",
        activator: false,
        employees: [],
      },
      {
        id: 4,
        name: "Сергей",
        phone: "+7918444444",
        activator: true,
        employees: [5],
      },
      {
        id: 5,
        name: "Дмитрий",
        phone: "+7918555555",
        activator: true,
        employees: [6],
      },
      {
        id: 6,
        name: "Владимир",
        phone: "+7918666666",
        activator: true,
        employees: [7],
      },
      {
        id: 7,
        name: "Владислав",
        phone: "+7918777777",
        activator: false,
        employees: [],
      },
      {
        id: 8,
        name: "Никита",
        phone: "+7918888888",
        activator: false,
        root: true,
        employees: [],
      },
      {
        id: 9,
        name: "Арсен",
        phone: "+7918999999",
        activator: false,
        root: true,
        employees: [],
      },
      {
        id: 10,
        name: "Ярослав",
        phone: "+7918101010",
        activator: false,
        root: true,
        employees: [],
      },
    ],
    sortedBy: "default",
  },
  getters: {
    getNewId(state) {
      return state.users.length + 1;
    },
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
    activatorChange(state, payload) {
      const findIndex = state.users.findIndex((el) => el.id === payload.id);
      state.users[findIndex].activator = payload.activator;
    },
    addUser(state, payload) {
      state.users.push(payload);
    },
    addEmployee(state, payload) {
      const findIndex = state.users.findIndex((el) => el.id === payload.id);
      state.users[findIndex].employees.push(payload.idEmployee);
    },
    setSortedBy(state, payload) {
      state.sortedBy = payload;
    },
  },
  actions: {},
  modules: {},
});
