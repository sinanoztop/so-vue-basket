<template>
  <div v-if="fade == true" id="basket-modal">
    <div v-on:click="toggle" id="overlay"></div>
    <div id="basket-c">
      <div class="s-t">
        <span>Sepete Eklenen Ürünler</span>
        <span v-on:click="toggle">
          <em class="fas fa-times"></em>
        </span>
      </div>
      <div class="s-l">
        <div v-for="value in basket" v-bind:key="value.id">
          <span class="img">
            <img v-bind:src="getProductData(value.id)[0].image" alt="" />
          </span>
          <span class="text">
            <span class="title">{{ getProductData(value.id)[0].title }}</span>
            <span class="price"
              >${{ getProductData(value.id)[0].price }} /
              {{ value.quantity }} qty</span
            >
          </span>
        </div>
      </div>
      <div class="s-b">
        <span>
          Basket Total:
          <b>${{ parseFloat(getProductTotal).toFixed(2) }}</b></span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import appMixin from "@/mixins/appMixin";
export default {
  name: "basketModal",
  mixins: [appMixin],
  props: ["fade", "toggle"],
  computed: {
    ...mapState(["basket", "items"]),
  },
  methods: {},
  mounted() {},
};
</script>
