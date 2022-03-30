<template>
  <div class="product-details">
    <h1>Product Details ***</h1>
    <div
      class="back is-uppercase is-font-size-13 is-mt-40"
      @click="$router.back"
    >
      back
    </div>
    <div class="product-details-content is-flex is-center is-mt-20">
      <!-- left part -->
      <div class="is-flex is-vflex is-center is-vcenter is-relative">
        <img
          :src="require('../../assets/images/products/' + productDetails.url)"
          alt="product details"
          class="product-details-image"
          @mouseenter="zoomIn"
        />
        <transition name="zoom">
          <div v-show="zoom" class="product-details-zoom" @mouseleave="zoomOut">
            <img
              :src="
                require('../../assets/images/products/' + productDetails.url)
              "
              alt="product details zoom"
            />
          </div>
        </transition>
        <div class="shipping is-flex is-mt-40">
          <div
            v-for="(detail, i) in shipping"
            :key="i"
            class="is-font-size-11 is-pl-15 is-pr-15 is-text-center"
            :style="
              i < shipping.length - 1
                ? { borderRight: '1px solid gainsboro' }
                : ''
            "
          >
            {{ detail }}
          </div>
        </div>
      </div>

      <!-- right part -->
      <div class="is-flex is-vflex is-vcenter">
        <h2 class="title is-mt-60 is-mb-40 is-text-center">
          {{ productDetails.title }}
        </h2>
        <span class="is-font-weight-bold is-font-size-18">
          ${{ productDetails.price }}
        </span>
        <span class="price is-font-size-14">
          in stock: {{ productDetails.amount }}
        </span>
        <div class="buttons is-flex is-between is-mt-50 is-mb-30">
          <div
            class="
              add-remove
              is-flex is-vcenter is-between is-font-size-20 is-font-weight-200
            "
          >
            <span @click="add" class="add is-mr-30">
              <img src="../../assets/images/icons/plus.png" alt="add" />
            </span>
            <span class="is-font-size-30 is-font-weight-400">{{
              amountToBeAddedToCart
            }}</span>
            <span @click="remove" class="remove is-ml-30">
              <img src="../../assets/images/icons/minus.png" alt="remove" />
            </span>
          </div>
          <button class="is-uppercase is-p-10 is-font-size-14">
            add to cart
          </button>
        </div>
        <h4 class="is-mt-15 is-mb-20">Product Information</h4>
        <p class="is-pr-20 is-mb-60 is-font-size-12">
          <strong>Lorem ipsum</strong>
          Dolor sit, amet consectetur adipisicing elit. Aut minima expedita, rem
          alias, ipsum commodi cupiditate, facere atque adipisci et totam
          accusantium odio vel quas mollitia! Sequi molestias incidunt
          cupiditate! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Corrupti consequuntur quo omnis hic velit quod delectus eaque eveniet
          perspiciatis necessitatibus mollitia optio, qui molestias numquam,
          itaque minus voluptate tenetur impedit. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Aut minima expedita, rem alias, ipsum
          commodi cupiditate, facere atque adipisci et totam accusantium odio
          vel quas mollitia! Sequi molestias incidunt cupiditate! Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Corrupti consequuntur quo
          omnis hic velit quod delectus eaque eveniet perspiciatis
          necessitatibus mollitia optio, qui molestias numquam, itaque minus
          voluptate tenetur impedit.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Product Details",
  data() {
    return {
      shipping: [
        "Free Shipping on Orders $55 & Over",
        "Free & Easy Returns (Excluding Final Sale)",
        "Estimated delivery: within 7 business days",
      ],
      amountToBeAddedToCart: 0,
      zoom: false,
      x: 0,
      y: 0,
      top: -100,
      left: 0,
    };
  },
  // was mounted();
  created() {
    this.getProductDetails(this.$route.params.id);
    // console.log("details", this.productDetails);
  },
  methods: {
    ...mapActions(["getProductDetails"]),

    add() {
      if (this.productDetails.amount) {
        this.amountToBeAddedToCart++;
        this.productDetails.amount--;
      }
    },
    remove() {
      if (this.amountToBeAddedToCart) {
        this.amountToBeAddedToCart--;
        this.productDetails.amount++;
      }
    },

    zoomIn() {
      this.zoom = true;
      const zoom = document.querySelector(".product-details-zoom");
      const imageZoom = document.querySelector(".product-details-zoom > img");

      // console.log("*** zoom in");

      zoom.addEventListener("mousemove", (event) => {
        // console.log("mousemove");
        // if previous x is greater than current x
        if (this.x > event.clientX) {
          // this.x - event.clientX
          // console.log("prev");
          this.left++;
          imageZoom.style.left = this.left + "px";
        }
        if (event.clientX > this.x) {
          // event.clientX - this.x;
          // console.log("next");
          this.left--;
          imageZoom.style.left = this.left + "px";
        }
        if (this.y > event.clientY) {
          this.top++; // this.y - event.clientY;
          imageZoom.style.top = this.top + "px";
        }
        if (event.clientY > this.y) {
          this.top--; // event.clientY - this.y;
          imageZoom.style.top = this.top + "px";
        }
        this.x = event.clientX;
        this.y = event.clientY;
      });
    },
    zoomOut() {
      // back to default settings
      this.zoom = false;
      this.x = 0;
      this.y = 0;
      this.top = -100;
      this.left = 0;

      // console.log("*** zoom out");

      const imageZoom = document.querySelector(".product-details-zoom > img");
      imageZoom.style.top = -100 + "px";
      imageZoom.style.left = 0 + "px";
    },
  },
  computed: {
    ...mapGetters(["productDetails"]),
  },
};
</script>

<style lang="scss" scoped>
@mixin scrollbar {
  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-track {
    background: gainsboro;
  }
  ::-webkit-scrollbar-thumb {
    background: black;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: gray;
  }
}

.product-details {
  .back {
    $left: 23px;
    position: relative;
    margin-left: $left;
    width: fit-content;
    transition: 0.3s ease-out;
    &::before {
      content: "";
      position: absolute;
      left: -$left;
      top: 50%;
      transform: translateY(-50%);
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
      border-right: 15px solid #000; // #00a189; // #000;
      transition: 0.3s ease-out;
    }
    &:hover {
      cursor: pointer;
      transform: translate(-4px);
      // &::before {
      //   border-top: 7px solid transparent;
      //   border-bottom: 7px solid transparent;
      //   border-right: 20px solid red;
      //   left: -30px;
      // }
    }
  }
  &-content {
    // box-shadow: 0 7px 5px 0 gainsboro;
    border: 1px solid gainsboro;
    border-bottom: none;
    position: relative;
    background: #fff;
    &::before,
    &::after {
      z-index: -1;
      position: absolute;
      content: "";
      bottom: 15px;
      left: 10px;
      width: 50%;
      top: 80%;
      max-width: 300px;
      background: #777;
      box-shadow: 0 15px 10px #777;
      transform: rotate(-3deg);
    }
    &::after {
      transform: rotate(3deg);
      right: 10px;
      left: auto;
    }
    > div {
      width: 50%;
      // border: 1px solid green;
    }
  }
  &-image {
    width: 350px;
    height: 350px;
    max-width: 100%;
    object-fit: cover;
    transition: 0.3s ease-out;
    // border: 1px solid gainsboro;
  }
  &-zoom {
    position: absolute;
    // top: 0;
    // left: 0;
    width: 700px;
    height: 700px;
    // border: 1px solid red;
    border: 1px solid gainsboro;
    background: #fff;
    overflow: hidden;
    cursor: zoom-in;
    z-index: 10;
    img {
      width: auto; // 900px;
      height: auto; // 900px;
      // max-width: 100%;
      // object-fit: cover;
      // border: 1px solid lime;
      position: absolute;
      top: -100px;
      left: 0;
      transition: 0.2s ease-out;
    }
  }
  .shipping {
    width: 90%;
    // border: 1px solid red;
  }
  .title {
    width: 80%;
  }
  .price {
    color: gray;
    font-style: italic;
  }
  .buttons {
    width: 70%;
    .add-remove {
      width: fit-content;
      align-items: flex-end;
      .add,
      .remove {
        transition: 0.2s ease-out;
        &:hover {
          cursor: pointer;
          // transform: scale(1.07);
        }
      }
    }
    button {
      // @include button($width: 16rem);
      width: 160px;
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
      &:focus {
        outline: none;
      }
    }
  }
  p {
    width: 70%;
    height: 130px;
    overflow-y: scroll;
  }

  .zoom-enter-from,
  .zoom-leave-to {
    transform: scale(0.95);
  }
  .zoom-enter-active,
  .zoom-leave-active {
    transition: 0.2s ease-out;
  }
}

@include scrollbar;
</style>


