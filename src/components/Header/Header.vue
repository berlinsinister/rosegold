<template>
  <div class="header is-pb-20" :class="scrollTop > 40 ? 'scroll-shadow' : ''">
    <div class="header-upper is-pt-60 is-pb-20">
      <img
        @click="$router.push({ name: 'Home' })"
        src="@/assets/images/logo/logo.png"
        alt="logo"
        class="logo"
      />
      <div class="icons is-flex is-vend is-mt-15">
        <SearchBar class="is-mr-25" />
        <CabinetIcon class="is-mr-5" />
        <LocationIcon class="is-mr-5" />
        <CartIcon class="is-mr-5" />
        <div class="is-ml-50 is-font-size-13 is-uppercase">
          <span
            v-if="this.user"
            @click="link"
            class="is-font-weight-500 is-emerald"
          >
            {{ this.user }}
          </span>
          <span v-else>guest</span>
        </div>
      </div>
    </div>
    <Categories />
  </div>
</template>

<script>
import SearchBar from "./SearchBar";
import CabinetIcon from "./CabinetIcon";
import LocationIcon from "./LocationIcon";
import CartIcon from "./CartIcon";
import Categories from "./Categories";
import scroll from "@/mixins/scrollTop";
import { mapGetters } from "vuex";

export default {
  name: "Header",
  components: { SearchBar, CabinetIcon, LocationIcon, CartIcon, Categories },
  mixins: [scroll],
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    link() {
      this.$router.push({ name: "Cabiner" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/vars.scss";

.header {
  // width: $screen-actual-width - ($margin * 2);
  width: $screen-actual-width - ($margin-left + $margin-right);
  position: fixed;
  top: 0;
  background: #fff;
  z-index: 100;
  border-bottom: 1px solid gainsboro;
  // border: 1px solid red;
  &-upper {
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: space-between;
    align-items: center;
    // border: 1px solid red;
    .logo {
      &:hover {
        cursor: pointer;
      }
    }
  }
}

.scroll-shadow {
  box-shadow: 0 7px 5px -5px gainsboro;
}
</style>