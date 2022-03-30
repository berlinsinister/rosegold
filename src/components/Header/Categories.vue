<template>
  <div class="categories is-flex is-mt-20">
    <div
      v-for="(category, i) in categories"
      :key="i"
      :id="category.name"
      class="categories-item is-font-size-13 is-uppercase is-pr-17 is-mr-60"
      @mouseover="incRect(category.name)"
      @mouseleave="decRect(category.name)"
      @click="link(category.id)"
    >
      {{ category.name }}
      <!-- <img src="@/assets/images/icons/arrow.png" alt="arrow" class="is-ml-5" /> -->
      <span :id="'rect_' + category.name" class="rect"></span>
    </div>
    <div
      id="special-offer"
      class="
        categories-item
        is-font-size-13 is-font-weight-500 is-uppercase is-pr-17 is-emerald
      "
    >
      special offer
      <!-- <img src="@/assets/images/icons/arrow.png" alt="arrow" class="is-ml-5" /> -->
      <!-- <span id="rect_special-offer" class="rect"></span> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Categories",
  computed: {
    ...mapGetters(["categories"]),
  },
  methods: {
    incRect(name) {
      const item = document.getElementById(name);
      const rect = document.getElementById("rect_" + name);
      rect.style.width = item.clientWidth + "px";
    },
    decRect(name) {
      const rect = document.getElementById("rect_" + name);
      rect.style.width = 2 + "px";
    },
    link(category) {
      this.$router.push({ name: "Category", params: { category } });
    },
  },
};
</script>

<style lang="scss" scoped>
.categories {
  &-item {
    position: relative;
    .rect {
      display: inline-block;
      position: absolute;
      top: -2px;
      left: -5px;
      width: 2px;
      height: 2px;
      background: #00a189; // #eabfb9;
      transition: 0.2s ease-out;
    }
    img {
      transition: 0.2s ease-out;
    }
    &:hover {
      cursor: pointer;
      img {
        transform: rotate(180deg);
      }
    }
  }
}
</style>