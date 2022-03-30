<template>
  <div class="swiper">
    <img :src="getImgUrl(pic)" alt="swiper" id="swiper" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      pic: "swiper-1.jpg",
    };
  },
  mounted() {
    setInterval(() => {
      this.changeImg();
    }, 3000);
  },
  methods: {
    getImgUrl(pic) {
      return require("../../assets/images/swiper/" + pic);
    },
    changeImg() {
      //   const swiper = document.getElementById("swiper");
      //   swiper.classList.add("fade");
      //   setTimeout(() => {
      //     swiper.classList.remove("fade");
      //   }, 1000);
      if (this.pic === "swiper-1.jpg") {
        this.pic = "swiper-2.jpg";
      } else {
        this.pic = "swiper-1.jpg";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  img {
    width: 100%;
    height: 600px;
    object-fit: cover;
  }
  .fade {
    animation: fade 1s ease-out;
  }
  @keyframes fade {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
}
</style>