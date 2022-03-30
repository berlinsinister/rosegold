<template>
  <div class="cart">
    <span
      @click="$router.push({ name: 'Cart' })"
      class="lnr lnr-cart cart-icon is-font-size-20"
    ></span>
    <span class="toast"></span>
    <span class="cart-total is-font-size-12">{{ cartTotal }}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters(["cartTotal"]),
  },
  // watch: {
  //   cartTotal() {
  //     const cart = document.querySelector(".cart-total");
  //     cart.classList.add("boost");
  //     setTimeout(() => {
  //       cart.classList.remove("boost");
  //     }, 500);
  //   },
  // },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/design.scss";
$name: "cart";

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
  &-total {
    padding: 5px 10px;
    position: absolute;
    top: -25px;
    left: 15px;
    // background: linear-gradient(0deg, #00a189, #005640);
    background: linear-gradient(0deg, #f6cfca, #eabfb9);
    // background: linear-gradient(180deg, #7eb1a8, #d6f1e8);
    color: white;
    border-radius: 11px;
    transition: 0.2s ease-out;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>