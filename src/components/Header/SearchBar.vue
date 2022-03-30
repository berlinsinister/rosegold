<template>
  <div class="search">
    <!-- @input="input" -->
    <input
      type="text"
      placeholder="search"
      class="search-input is-font-size-10 is-uppercase"
      v-model="inputValue"
      @keypress.enter.exact="search"
    />
    <span
      class="lnr lnr-magnifier search-icon is-font-size-20"
      @click="search"
    ></span>
    <div @click="clearInput" class="search-close">
      <img src="@/assets/images/icons/close.png" alt="close" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      inputValue: "",
      searchQuery: "",
    };
  },
  methods: {
    search() {
      this.searchQuery = this.inputValue;
      this.inputValue = "";
      // console.log("search", this.searchQuery);

      document.querySelector(".search-input").blur();

      // action fn() from vuex for search?
      this.$router.push({
        name: "SearchResults",
        // params: { id: this.id },
        query: {
          search: this.searchQuery,
        },
      });
    },
    clearInput() {
      // console.log("clear input");
      this.inputValue = "";
    },
  },
  watch: {
    inputValue(value) {
      const close = document.querySelector(".search-close");
      if (value) {
        close.style.opacity = 1;
      } else {
        close.style.opacity = 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  position: relative;
  overflow: hidden;
  &-input {
    width: 300px;
    color: #000;
    padding: 15px 20px 15px 60px;
    border: 1px solid gainsboro;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: gainsboro;
      letter-spacing: 2px;
    }
    &:focus::placeholder {
      color: transparent;
    }
  }
  &-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0; // 15px;
    // background: #000;
    background: linear-gradient(0deg, #f6cfca, #eabfb9);
    color: #fff;
    padding: 14px;
    &:hover {
      cursor: pointer;
    }
  }
  &-close {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    opacity: 0;
    z-index: 1;
    // border: 1px solid red;
    transition: 0.2s ease-out;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>