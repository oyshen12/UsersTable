import { mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["sortedBy", "users"]),
  },
  methods: {
    ...mapMutations(["setSortedBy", "setUsers"]),
    getRootUsers() {
      return this.users.filter((el) => el.root);
    },
    sortedUsers(payload) {
      const byPhone = (value) => {
        const parseFloat = (val) => Number.parseFloat(val.phone);
        if (value === "up") {
          return (a, b) => (parseFloat(a) < parseFloat(b) ? 1 : -1);
        }
        return (a, b) => (parseFloat(a) > parseFloat(b) ? 1 : -1);
      };
      const byName = (value) => {
        const toLowerCase = (val) => val.name.toLocaleLowerCase();
        if (value === "up") {
          return (a, b) => (toLowerCase(a) < toLowerCase(b) ? 1 : -1);
        }
        return (a, b) => (toLowerCase(a) > toLowerCase(b) ? 1 : -1);
      };

      let users = [];
      if (payload?.length) {
        users = this.users.filter((el) => payload.includes(el.id));
      } else {
        users = this.getRootUsers();
      }

      if (this.sortedBy === "default") {
        return users;
      }
      if (this.sortedBy === "phoneUp") {
        return users.sort(byPhone("up"));
      }
      if (this.sortedBy === "phoneDown") {
        return users.sort(byPhone("down"));
      }
      if (this.sortedBy === "nameUp") {
        return users.sort(byName("up"));
      }
      if (this.sortedBy === "nameDown") {
        return users.sort(byName("down"));
      }
      return [];
    },
    downloadState() {
      const users = JSON.parse(localStorage.getItem("users"));
      if (users) {
        this.setUsers(users);
      } else {
        localStorage.setItem("users", JSON.stringify(this.users));
      }
    },
  },
};
