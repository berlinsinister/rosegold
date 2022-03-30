<template>
  <div
    class="
      product-card
      is-flex is-vflex is-vcenter is-pt-20 is-pr-30 is-pb-40 is-pl-30
    "
  >
    <img
      :src="
        url
          ? require('../../assets/images/products/' + url)
          : require('../../assets/images/products/no_photo.png')
      "
      alt="product card"
      class="product-card-image is-mt-20 is-mb-20"
      :class="!available ? 'no-image' : ''"
      @click="link"
    />
    <span :class="available ? 'product-card-toast' : ''"></span>
    <h5>{{ title }}</h5>
    <div
      v-if="available"
      class="stock is-flex is-vflex is-vcenter is-mt-20 is-mb-20"
    >
      <span class="is-mt-2 is-mb-2 is-font-weight-bold">${{ price }}</span>
      <span class="is-mt-2 is-mb-2">in stock: {{ amount }}</span>
    </div>
    <div v-else class="stock is-flex is-vflex is-vcenter is-mt-20 is-mb-20">
      not in stock
    </div>
    <button
      @click="add"
      class="is-p-10 is-uppercase"
      :class="!available ? 'not-allowed' : ''"
    >
      add
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Product Card",
  props: {
    id: String,
    title: String,
    url: {
      type: String,
      default: "no_photo.png",
    },
    available: Boolean,
    amount: Number,
    price: Number,
  },
  methods: {
    ...mapMutations(["addToCart"]),
    add() {
      this.addToCart(this.id);
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
.product-card {
  width: 292px; // 200px;
  background: #fff;
  // color: #2a2a2a;
  border: 1px solid gainsboro;
  position: relative;
  &-image {
    width: 170px;
    height: 170px;
    max-width: 100%;
    object-fit: contain;
    transition: 0.3s ease-out;
    &:hover {
      cursor: pointer;
      transform: scale(1.07);
      & ~ .product-card-toast {
        opacity: 1;
        transform: translate(-50%, -10px);
      }
    }
  }
  &-toast {
    opacity: 0;
    position: absolute;
    top: 200px;
    left: 80%;
    transform: translate(-50%);
    background: #000;
    color: #fff;
    padding: 5px 10px;
    font-size: 12px;
    // font-family: Verdana, sans-serif;
    transition: 0.3s ease-out;
    &::after {
      content: "details";
    }
  }
  h5 {
    height: 30px;
    font-size: 12px;
    text-align: center;
  }
  .stock {
    height: 40px;
    font-size: 13px;
  }
  button {
    width: 100px;
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
  .not-allowed {
    &:hover {
      background: #ccc;
      border: 1px solid #ccc;
      cursor: not-allowed;
    }
  }
}

.no-image {
  opacity: 0.3;
  filter: grayscale(1);
  &:hover {
    cursor: not-allowed;
  }
}
</style>