<template>
  <footer class="footer bg-dark py-2">
    <div class="container grid grid-3">
      <div>
        <h1>Roque Tech</h1>
        <p>Copyright &copy; 2020</p>
      </div>
      <nav>
        <ul>
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/services">Servicios</router-link></li>
          <li><router-link to="/learn">Aprende</router-link></li>
          <li><router-link to="/about">Nosotros</router-link></li>
        </ul>
      </nav>
      <div class="social">
        <a href="https://roquetech.com" target="__blank"
          ><i class="fab fa-github fa-2x"></i
        ></a>
        <a href="https://roquetech.com" target="__blank"
          ><i class="fab fa-facebook fa-2x"></i
        ></a>
        <a href="https://roquetech.com" target="__blank"
          ><i class="fab fa-instagram fa-2x"></i
        ></a>
        <a href="https://roquetech.com" target="__blank"
          ><i class="fab fa-twitter fa-2x"></i
        ></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
</style>