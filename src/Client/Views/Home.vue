<template>
  <div>
    <Form />
    <stats></stats>
    <Cli />
    <Cloud />
    <Languages />
  </div>
</template>

<script>
import Form from "../Components/Home/Form.vue";
import Stats from "../Components/Home/Stats.vue";
import Cli from "../Components/Home/Cli-example.vue";
import Cloud from "../Components/Home/Cloud.vue";
import Languages from "../Components/Home/Languages.vue";
export default {
  name: "Home",
  components: {
    Form,
    Cli,
    Languages,
    Cloud,
    stats: Stats,
  },
};
</script>

<style>
</style>