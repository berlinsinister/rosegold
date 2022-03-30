<template>
  <div class="search-results">
    <!-- if correct query -->
    <div v-if="this.$route.query.search">
      <h1 class="is-mb-40">
        <span class="is-capitalize">
          search results for {{ this.$route.query.search }}
        </span>
        <!-- <span class="is-emerald is-ml-10">*</span> -->
      </h1>
      <div v-if="searchResults.length" class="products">
        <product-card
          v-for="(product, i) in searchResults"
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
        nothing found. try again
      </div>
    </div>
    <div v-else class="is-font-style-italic is-gray">wrong query</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProductCard from "@/components/Products/ProductCard";

export default {
  name: "Category",
  components: { ProductCard },
  data() {
    return {
      query: "",
    };
  },
  mounted() {
    this.query = this.$route.query.search;
    // console.log("MOU ***", this.query);
  },
  updated() {
    this.query = this.$route.query.search;
    // console.log("UPD ***", this.query);
  },
  methods: {
    ...mapActions(["getSearchResults"]),
  },
  computed: {
    ...mapGetters(["searchResults"]),
  },
  watch: {
    query(value) {
      this.getSearchResults(value);
      // console.log("watch", value, "watch *** ", this.category);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-results {
  .products {
    display: grid;
    grid-template-columns: repeat(5, auto);
    justify-content: start;
    grid-gap: 4px;
  }
}
</style>
