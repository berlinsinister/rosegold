<template>
  <div class="cart-product-card is-flex is-vcenter is-between">
    <div class="is-flex is-vcenter">
      <img
        :src="require('../../assets/images/products/' + url)"
        alt="cart product card"
        class="cart-product-card-image is-p-20"
        @click="link"
      />
      <h5 class="is-ml-30 is-mr-30">{{ title }}</h5>
      <div class="is-ml-20">
        count:
        <span class="is-font-weight-bold"> {{ count }}</span>
      </div>
      <div class="is-ml-20">
        unit price:
        <span class="is-font-weight-bold">{{ price }}</span
        >$
      </div>
      <div class="is-ml-20">
        total price:
        <span class="is-font-weight-bold">
          {{ (price * count).toFixed(2) }}</span
        >$
      </div>
    </div>
    <button @click="remove" class="is-flex is-center is-vcenter">
      <img src="@/assets/images/icons/plus.png" alt="remove" />
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Cart Product Card",
  props: {
    id: String,
    title: String,
    url: String,
    price: Number,
    count: Number,
  },
  methods: {
    ...mapMutations(["removeFromCart"]),

    remove() {
      // this.removeFromCart(this.id);
    },
    link() {
      this.$router.push({
        name: "ProductDetails",
        params: { id: this.id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-product-card {
  border-bottom: 1px solid black;
  &-image {
    width: 100px;
    height: 100px;
    max-width: 100%;
    object-fit: contain;
    &:hover {
      cursor: pointer;
    }
  }
  h5 {
    width: 200px;
  }
  button {
    width: 40px;
    height: 40px;
    background: #eabfb9;
    border: none;
    border-radius: 2px;
    transition: 0.2s ease-out;
    img {
      display: inline-block;
      transform: rotate(45deg);
      filter: invert(100%);
      transition: 0.2s ease-out;
    }
    &:hover {
      cursor: pointer;
      background: #000;
      img {
        transform: rotate(225deg);
      }
    }
  }
}
</style>