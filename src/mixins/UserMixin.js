import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["sortedBy", "users"]),
    ...mapGetters(["getRootUsers"]),
  },
  methods: {
    ...mapMutations(["setSortedBy"]),
    sortedUsers(payload) {
      const byPhone = (value) => {
        const parseFloat = (val) => Number.parseFloat(val.phone);

        if (value === "up") {
          return (a, b) => (parseFloat(a) < parseFloat(b) ? 1 : -1);
        }
        return (a, b) => (parseFloat(a) > parseFloat(b) ? 1 : -1);
      };
      const byName = (value) => {
        if (value === "up") {
          return (a, b) => (a.name < b.name ? 1 : -1);
        }
        return (a, b) => (a.name > b.name ? 1 : -1);
      };

      let users = [];
      if (payload?.length) {
        users = this.users.filter((el) => payload.includes(el.id));
      } else {
        users = this.getRootUsers;
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
  },
};
