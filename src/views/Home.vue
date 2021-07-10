<template>
  <div class="home">
    <div class="app-container">
      <div class="loading-text" v-if="loading == false && error == true">
        We can not list the products because of <b>fake api</b>
      </div>
      <div class="loading-text" v-if="loading == true && error == false">
        Products is loading...
      </div>
      <div
        v-if="loading == false && items.length > 0 && error == false"
        class="items"
      >
        <bItem
          v-for="value in items"
          v-bind:item="value"
          v-bind:key="value.id"
          class="item"
        >
          <h1>{{ value.title }}</h1>
        </bItem>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import axios from "axios";
import bItem from "@/components/bItem";
export default {
  name: "Home",
  data() {
    return {
      loading: true,
      error: false,
    };
  },
  components: {
    bItem,
  },
  computed: mapState(["items"]),
  methods: {
    ...mapActions(["setItem"]),
    async getData() {
      await axios
        .get("https://fakestoreapi.com/products?limit=20")
        .then((res) => {
          let _result = res.data;
          this.setItem(_result);
        })
        .catch(() => {
          this.error = true;
        });
    },
  },
  async mounted() {
    await this.getData();
    this.loading = false;
  },
};
</script>
