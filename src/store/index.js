import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {
        id: 0,
        name: "aaa",
        phone: "+",
        root: true,
        activator: true,
        employees: [],
      },
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
        phone: "89184818",
        activator: true,
        employees: [7],
      },
      {
        id: 7,
        name: "qqq",
        phone: "89180797997",
        activator: false,
        employees: [],
      },
      {
        id: 8,
        name: "zzz",
        phone: "3",
        activator: false,
        root: true,
        employees: [],
      },
      {
        id: 9,
        name: "aaa",
        phone: "11",
        activator: false,
        root: true,
        employees: [],
      },
      {
        id: 10,
        name: "aaa",
        phone: "0",
        activator: false,
        root: true,
        employees: [],
      },
    ],
    sortedBy: "default",
  },
  getters: {
    getRootUsers(state) {
      console.log("getRootUsers");
      return state.users.filter((el) => el.root);
    },
    getNewId(state) {
      return state.users.length + 1;
    },
    getUsers(state) {
      return state.users;
    },
  },
  mutations: {
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
