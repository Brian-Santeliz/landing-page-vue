<template>
  <div class="navbar">
    <div class="container flex">
      <h1 class="logo">Roque Tech.</h1>
      <nav>
        <ul>
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/services">Servicios</router-link></li>
          <li><router-link to="/learn">Aprender</router-link></li>
          <li><router-link to="/about">Nosotros</router-link></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
</style>