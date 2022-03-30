<template>
  <div class="category">
    <!-- if correct path -->
    <div v-if="category">
      <h1 class="is-mb-40">
        <!-- {{ $route.params.category }} -->
        <span class="is-capitalize">{{ category }}</span>
        <!-- <span class="is-emerald is-ml-10">*</span> -->
        <!-- <span class="is-dirtypink is-ml-10">*</span> -->
      </h1>
      <div v-if="categoryProducts.length" class="products">
        <product-card
          v-for="(product, i) in categoryProducts"
          :key="i"
          :id="product.id"
          :title="product.title"
          :url="product.url"
          :available="product.available"
          :amount="product.amount"
          :price="product.price"
        />
      </div>
      <div v-else class="is-font-style-italic is-gray">
        nothing found. try later
      </div>
    </div>
    <div v-else class="is-font-style-italic is-gray">wrong path</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProductCard from "@/components/Products/ProductCard";

// if path not found (id doesn't exist, see in categories arr in state, return undefined) redirect to error
// this.$router.push({ name: 'Error' })

export default {
  name: "Category",
  components: { ProductCard },
  data() {
    return {
      path: "",
    };
  },
  mounted() {
    // console.log("MOU *** url");
    this.path = this.$route.params.category;
  },
  updated() {
    // console.log("UPD *** url");
    this.path = this.$route.params.category;
  },
  methods: {
    ...mapActions(["getCategoryProducts", "getCategory"]),
  },
  computed: {
    ...mapGetters(["categoryProducts", "category"]),
  },
  watch: {
    path(value) {
      this.getCategoryProducts(value);
      this.getCategory(value);
      console.log("watch", value, "watch *** ", this.category);
    },
  },
};
</script>

<style lang="scss" scoped>
.category {
  .products {
    display: grid;
    grid-template-columns: repeat(5, auto);
    justify-content: start;
    grid-gap: 4px;
  }
}
</style>