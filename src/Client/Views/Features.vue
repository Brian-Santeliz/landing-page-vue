<template>
  <div>
    <Hero />
    <Head />
    <sub-features></sub-features>
  </div>
</template>

<script>
import Hero from "../Components/Featured/Hero.vue";
import Head from "../Components/Featured/Head.vue";
import Features from "../Components/Featured/Features.vue";
export default {
  name: "Features",
  components: {
    Hero,
    subFeatures: Features,
    Head,
  },
};
</script>

<style>
</style>