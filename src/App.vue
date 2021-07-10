<template>
  <Header />
  <router-view />
</template>
<style lang="sass">
@import "./assets/base.scss";
</style>
<script>
import Header from "@/views/Header";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>
