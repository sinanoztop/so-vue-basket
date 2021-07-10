<template>
  <div class="item">
    <div class="image">
      <img v-bind:src="item.image" />
    </div>
    <div class="name">
      <h1>{{ item.title }}</h1>
    </div>
    <div class="price-w">
      <div class="price">${{ item.price }}</div>
      <div class="category">{{ item.category }}</div>
    </div>
    <div class="buttons">
      <span
        v-bind:class="{ passive: basketCount == 0 }"
        v-on:click="appBasket('decrease', item.id, basketCount)"
      >
        <em class="fas fa-minus"></em>
      </span>
      <span> {{ basketCount }} </span>
      <span v-on:click="appBasket('increase', item.id, basketCount)">
        <em class="fas fa-plus"></em>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "bItem",
  props: ["item"],
  computed: {
    ...mapState(["basket"]),
    basketCount() {
      if (this.basket != null) {
        let _result = this.basket.filter((value) => {
          return value.id == this.item.id;
        });
        if (_result.length > 0) {
          return _result[0].quantity;
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    },
  },
  methods: {
    ...mapActions(["toggleBasket"]),
    appBasket(type, id, count) {
      if (type != "increase" && count == 0) {
        alert("The qty of product can not be less than zero ) ");
      } else {
        let _result = {
          type: type,
          id: id,
        };
        this.toggleBasket(_result);
      }
    },
  },
  mounted() {},
};
</script>
