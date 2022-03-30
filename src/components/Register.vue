<template>
  <div class="register">
    <h1>Register</h1>
    <div class="form is-mt-20">
      <form class="is-flex is-vflex" @submit.prevent="registerHandler">
        <div class="is-mb-10">
          <div class="is-flex">
            <p class="is-font-size-13 is-uppercase">name</p>
            <span class="is-dirtypink is-ml-5">*</span>
          </div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="enter your name"
            autocomplete="off"
            v-model.trim="name"
          />
        </div>
        <div class="is-mb-10">
          <div class="is-flex">
            <p class="is-font-size-13 is-uppercase">email</p>
            <span class="is-dirtypink is-ml-5">*</span>
          </div>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="enter your email"
            autocomplete="off"
            v-model.trim="email"
          />
        </div>
        <div class="is-mb-5">
          <div class="is-flex">
            <p class="is-font-size-13 is-uppercase">password</p>
            <span class="is-dirtypink is-ml-5">*</span>
          </div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="enter your password"
            v-model.trim="password"
          />
        </div>
        <input type="submit" value="register" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["register"]),
    async registerHandler() {
      const formData = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      try {
        await this.register(formData);
        this.$router.push("/");
      } catch (e) {}
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
  .form {
    input[type="text"],
    input[type="password"],
    input[type="submit"] {
      width: 300px;
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