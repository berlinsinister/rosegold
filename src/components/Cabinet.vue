<template>
  <div class="cabinet">
    <h1 class="is-mb-40">
      <span class="is-capitalize is-mr-10">Cabinet</span>
      <!-- <span class="is-emerald is-ml-10 is-mr-10">*</span> -->
      <span class="is-gainsboro">{{ user || "guest" }} </span>
    </h1>
    <div class="is-uppercase is-font-size-13">
      <div v-if="user" @click="logoutHandler" class="logout">logout</div>
      <div v-else>
        <span class="is-mr-5">don't have an account yet?</span>
        <span
          @click="$router.push({ name: 'Register' })"
          class="register is-underline is-font-weight-500"
          >register</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    ...mapActions(["logout"]),
    async logoutHandler() {
      try {
        // await this.$store.dispatch("logout");
        await this.logout();
        this.$router.push("/");
      } catch (e) {}
    },
  },
};
</script>

<style lang="scss" scoped>
.cabinet {
  .logout,
  .register {
    &:hover {
      cursor: pointer;
    }
  }
}
</style>