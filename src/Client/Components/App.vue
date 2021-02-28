<template>
  <section>
    <Navbar />
    <router-view></router-view>
    <Footer />
  </section>
</template>


<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>
