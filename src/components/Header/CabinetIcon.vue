<template>
  <div class="cabinet">
    <span
      @click="$router.push({ name: 'Cabinet' })"
      @mouseenter="showForm"
      @mouseleave="hideForm"
      class="lnr lnr-user cabinet-icon is-font-size-20"
    ></span>
    <span class="toast"></span>
    <div v-show="isFormVisible" @mouseenter="showForm" class="ancor"></div>
    <div
      v-show="isFormVisible && !user"
      @mouseleave="hideForm"
      class="form is-flex is-vflex is-vcenter"
    >
      <p
        class="
          is-font-size-12 is-font-weight-bold is-capitalize is-mt-10 is-mb-20
        "
      >
        login to your account
      </p>
      <form @submit.prevent="loginHandler">
        <!-- @mouseleave="enter_form = true" -->
        <input
          type="text"
          name="email"
          id="email"
          placeholder="enter your email"
          autocomplete="off"
          v-model.trim="email"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="enter your password"
          v-model.trim="password"
        />
        <input type="submit" value="login" />
      </form>
      <p class="is-mt-25 is-font-size-12 is-capitalize is-font-weight-bold">
        don't have an account?
      </p>
      <router-link
        @click="hideForm"
        class="
          is-emerald
          is-mt-10
          is-none-decoration
          is-font-size-13
          is-font-weight-500
          is-uppercase
        "
        to="/register"
      >
        register
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      isFormVisible: false,
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    ...mapActions(["login"]),
    showForm() {
      this.isFormVisible = true;
    },
    hideForm() {
      this.isFormVisible = false;
    },
    async loginHandler() {
      const formData = {
        email: this.email,
        password: this.password,
      };
      try {
        await this.login(formData);
        this.email = "";
        this.password = "";
        this.$router.push("/");
      } catch (e) {}
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/design.scss";
$name: "cabinet";

.#{$name} {
  position: relative;
  &-icon {
    transition: 0.2s ease-out;
    &:hover {
      cursor: pointer;
      opacity: 0.7;
      & ~ .toast {
        opacity: 1;
        transform: translate(-10px, 0);
      }
    }
  }
  .toast {
    @include toast($title: $name);
  }
  .ancor {
    position: absolute;
    top: 20px;
    left: 0px;
    width: 40px;
    height: 40px;
    // border: 1px solid lime;
  }
  .form {
    position: absolute;
    top: 30px;
    left: 0px;
    /** */
    // border: 1px solid red;
    padding: 30px 40px 40px 40px;
    background: #fff;
    box-shadow: 0 0 20px rgba(#000, 0.1);
    input[type="text"],
    input[type="password"],
    input[type="submit"] {
      width: 220px;
      margin: 5px 0;
      padding: 10px 20px;
      background: #fff;
      color: #000;
      font-size: 12px;
      text-transform: uppercase;
      box-sizing: border-box;
      &:focus {
        outline: none;
      }
    }
    input[type="text"],
    input[type="password"] {
      border: 1px solid gainsboro;
      &::placeholder {
        color: gainsboro;
      }
      &:focus::placeholder {
        color: transparent;
      }
    }
    input[type="submit"] {
      border: 1px solid #000;
      border-radius: 2px;
      transition: 0.3s ease-out;
      &:hover {
        cursor: pointer;
        background: #000;
        color: #fff;
      }
    }
  }
}
</style>