<template>
  <div class="cart">
    <h1 class="is-mb-40">
      Cart
      <span>({{ cartTotal }})</span>
    </h1>
    <transition-group v-show="cartTotal" tag="div" name="cart" appear>
      <cart-product-card
        v-for="(product, i) in cartProducts"
        :key="i"
        :id="product.id"
        :title="product.title"
        :url="product.url"
        :price="product.price"
        :count="product.count"
      />
    </transition-group>
    <div v-if="cartTotal" class="total is-flex is-vflex is-mt-30">
      <div>
        total count:
        <span class="is-font-weight-bold">{{ cartTotal }}</span> items
      </div>
      <div>
        total price:
        <span class="is-font-weight-bold">{{ totalPrice }}</span
        >$
      </div>
    </div>
    <div v-else class="is-font-size-13 is-uppercase">cart is empty</div>
    <button v-show="cartTotal" class="is-mt-60 is-mb-100 is-p-10 is-uppercase">
      proceed to payment
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartProductCard from "./CartProductCard.vue";

export default {
  components: {
    CartProductCard,
  },
  computed: {
    ...mapGetters(["cartTotal", "cartProducts"]),

    totalPrice() {
      return this.cartProducts
        .reduce((sum, product) => {
          return sum + product.price * product.count;
        }, 0)
        .toFixed(2);
    },
  },
  mounted() {
    console.log("cart products", this.cartProducts);
  },
};
</script>

<style lang="scss" scoped>
.cart {
  button {
    width: 300px;
    background: #fff;
    color: #000;
    border: 1px solid #000;
    border-radius: 2px;
    transition: 0.2s ease-out;
    &:hover {
      cursor: pointer;
      background: #000;
      color: #fff;
    }
  }
  .cart-enter-active {
    animation: cart-products 1.1s ease-out;
  }
  @keyframes cart-products {
    0% {
      opacity: 0;
      transform: translate(-100%);
    }
    70% {
      opacity: 1;
      transform: translate(3%);
    }
    80% {
      transform: translate(-2%);
    }
    90% {
      transform: translate(1%);
    }
    100% {
      transform: translate(0);
    }
  }
}
</style>