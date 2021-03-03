<template>
  <div>
    <section class="docs-head bg-primary py-3">
      <div class="container grid">
        <div>
          <h1 class="xl">Aprende a usar Roque Tech</h1>
          <p class="lead">
            Aprender y enseñar nos encanta, esta es la introducción a nuestra
            herramienta
          </p>
        </div>
        <img src="../public/img/docs.png" alt="" />
      </div>
    </section>

    <section class="docs-main my-4">
      <div class="container grid">
        <div class="card bg-light p-3">
          <h3 class="my-2">Basicos</h3>
          <nav>
            <ul>
              <li>
                <router-link class="text-primary" to="#">Inicio</router-link>
              </li>
              <li><router-link to="/about">Nosotros</router-link></li>
              <li><router-link to="/">Lenguajes Soportados</router-link></li>
            </ul>
          </nav>

          <h3 class="my-2">Servicios</h3>
          <nav>
            <ul>
              <li>
                <router-link to="/services">Base de datos</router-link>
              </li>
              <li><router-link to="/services">Acceso</router-link></li>
              <li>
                <router-link to="/services">Subida de archivos</router-link>
              </li>
              <li>
                <router-link to="/services">Servidores cloud</router-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="card">
          <h2>Empieza a usar Roque Tech</h2>
          <p>
            Nuestro objetivo es que te familiarices con nuestra plataforma para
            que puedas usarla perfectamente e integrarla muy bien a tus
            proyectos. Empieza con nuestras herramienta de comando para que te
            conviertas un experto en Roque tech
          </p>

          <div class="alert alert-success">
            <i class="fas fa-info"></i> Recomendanmos que estes familiarizado
            con la consola o terminal para ejecutar los scripts correctamente.
          </div>

          <h3>¡Apoyo!</h3>
          <p>
            Estaremos atentos a responder cualquier duda y solucionar cualquier
            percance que te surja durante el tiempo que estés en Roque tech.
          </p>
          <router-link to="/" class="btn btn-primary">Contáctanos</router-link>

          <h3>¿Qué necesitas?</h3>
          <ul>
            <li>Sistema operativo: Windows 10, Mac OSX o Linux</li>
            <li>Versión de Nodejs 12 o superior.</li>
          </ul>

          <h3>Para instalarlo segun tu sistema gestor de paquetes</h3>
          <p>Mac (Homebrew)</p>
          <pre><code>$ brew install roque-tech</code></pre>
          <p>NPM</p>
          <pre><code>$ npm install -g roque-tech</code></pre>
          <p>Yarn</p>
          <pre><code>$ yarn install -g roque-tech</code></pre>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Learn",
};
</script>

<style>
</style>