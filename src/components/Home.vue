<template>
  <div class="home">
    <Swiper />
    <!-- <div class="is-font-size-36 is-font-weight-700 is-uppercase">hot sale!</div> -->
    <h1 class="is-mt-30 is-mb-10 is-font-size-40">
      <span class="is-capitalize">all products</span>
      <span class="is-emerald is-ml-10">**</span>
    </h1>
    <div class="products">
      <product-card
        v-for="(product, i) in products"
        :key="i"
        :id="product.id"
        :title="product.title"
        :url="product.url"
        :available="product.available"
        :amount="product.amount"
        :price="product.price"
      />
    </div>
  </div>
</template>

<script>
import Swiper from "@/components/Swiper/Swiper";
import { mapGetters } from "vuex";
import ProductCard from "./Products/ProductCard.vue";

export default {
  name: "Home",
  components: { Swiper, ProductCard },
  computed: {
    ...mapGetters(["products", "cartTotal"]),
  },
  mounted() {
    console.log(this.products);
  },
};
</script>

<style lang="scss" scoped>
.home {
  // background: gainsboro;
  .products {
    display: grid;
    grid-template-columns: repeat(5, auto);
    justify-content: start; // space-between;
    grid-gap: 4px;
    // > div {
    //   width: 292px;
    //   height: 450px;
    //   // background: gainsboro;
    //   // border: 1px solid green;
    // }
  }
}
</style>