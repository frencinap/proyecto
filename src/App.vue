<template>
  <div id="app">
    <div>
      <Navbar />
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  created() {
    this.$store.dispatch("infoJuegos");
  },
};
</script>

<style lang="scss"></style>
