import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["basket", "items"]),
    getBasketCount() {
      return this.basket.length;
    },
    getProductTotal() {
      let _result = this.basket.reduce((accumulator, item) => {
        return (
          accumulator + item.quantity * this.getProductData(item.id)[0].price
        );
      }, 0);
      return _result;
    },
  },
  methods: {
    getProductData(id) {
      let _result = this.items.filter((value) => {
        return value.id == id;
      });
      return _result;
    },
  },
};
