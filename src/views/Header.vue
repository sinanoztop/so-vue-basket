<template>
  <div id="app-header">
    <div class="app-container">
      <div class="h-c">
        <div class="h-l">
          <span class="logo">@so-vue-basket</span>
        </div>
        <div class="h-r">
          <div class="basket-btn-w">
            <span v-on:click="toggleBasketModal"
              >My Basket ({{ getBasketCount }})
              <em class="fas fa-angle-down"></em
            ></span>
          </div>
          <basketModal
            v-bind:fade="basketModalSt"
            v-bind:toggle="toggleBasketModal"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appMixin from "@/mixins/appMixin";
import basketModal from "@/components/basketModal";
export default {
  name: "Header",
  data() {
    return {
      basketModalSt: false,
    };
  },
  mixins: [appMixin],
  components: {
    basketModal,
  },
  methods: {
    toggleBasketModal() {
      this.basketModalSt = !this.basketModalSt;
    },
  },
};
</script>
