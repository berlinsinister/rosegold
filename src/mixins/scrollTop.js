export default {
  data() {
    return {
      scrollTop: window.scrollY,
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.onScroll);
    });
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      this.scrollTop = window.scrollY; // document.documentElement.scrollTop;
      // console.log(this.scrollTop);
    },
  },
};
