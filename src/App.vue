<template>
  <Header />
  <router-view class="is-mt-240" />
  <Footer />
</template>

<script>
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default {
  name: "App",
  components: { Header, Footer },
  mounted() {
    console.log("document", document.documentElement.clientWidth);
    console.log("window", window.innerWidth);
    console.log("$screen", this.$screen.width);
  },
};
</script>

<style lang="scss">
@import "@/assets/sass/vars.scss";

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
#app {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  // border: 1px solid salmon;

  // $margin: 152px;
  // $screen-actual-width: 1903px;

  // width: $screen-actual-width - ($margin * 2);
  // margin: 0 $margin !important;

  width: $screen-actual-width - ($margin-left + $margin-right);
  margin: 0 $margin-right 0 $margin-left !important;

  // width: 1599px; // 1600px;
  // margin: 0 auto; // --- causes shifting!!!
  // margin: 0 152px !important;
}
</style>
