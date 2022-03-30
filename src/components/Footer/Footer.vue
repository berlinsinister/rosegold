<template>
  <div class="footer is-mt-100 is-pt-40 is-pb-60 is-pl-20 is-pr-20">
    <div class="is-flex is-vcenter is-between">
      <div v-for="column in 5" :key="column">
        <div class="is-uppercase is-font-weight-500 is-mb-10">custom title</div>
        <div v-for="i in 5" :key="i" class="is-font-size-12 is-pt-5 is-pb-5">
          custom link {{ i }}
        </div>
      </div>
    </div>
    <div class="is-mt-40 is-font-size-12">
      (c) Rosegold Jewelry | Coded and designed by M. Efremova
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      footer: ["Title"],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid gainsboro;
  //   > :nth-child(2) {
  //     font-style: italic;
  //     color: gray;
  //   }
}
</style>