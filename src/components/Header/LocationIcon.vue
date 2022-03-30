<template>
  <div class="location">
    <span
      @click="$router.push({ name: 'Location' })"
      class="lnr lnr-map-marker location-icon is-font-size-20"
    ></span>
    <span class="toast"></span>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/design.scss";
$name: "location";

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
}
</style>