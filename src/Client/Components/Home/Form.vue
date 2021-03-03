<template>
  <section class="home">
    <div class="container grid">
      <div class="home-text">
        <h1>Soluciones modernas para problemas modernos</h1>
        <p>
          Roque tech es una empresa dedicada a simplificar tus problemas, es por
          ellos que te ayudamos con el alojamiento de tu página web.
        </p>
        <router-link to="/services" class="btn btn-outline"
          >Ver Servicios</router-link
        >
      </div>

      <div class="home-form card">
        <h2>Contáctanos</h2>
        <form @submit.prevent="Submit" method="POST">
          <div class="form-control">
            <input
              v-model.trim="contact.name"
              type="text"
              name="name"
              placeholder="Escribe Tu Nombre"
              required
            />
          </div>
          <div class="form-control">
            <input
              v-model.trim="contact.company"
              type="text"
              name="company"
              placeholder="Nombre De Tu Empresa"
              required
            />
          </div>
          <div class="form-control">
            <input
              v-model.trim="contact.email"
              type="email"
              name="email"
              placeholder="correo@email.com"
              required
            />
          </div>
          <input type="submit" value="Unirme" class="btn btn-primary" />
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      contact: {
        name: "",
        email: "",
        company: "",
      },
    };
  },
  methods: {
    clean() {
      this.contact = {
        name: "",
        email: "",
        company: "",
      };
    },
    validate() {
      const { name, email, company } = this.contact;
      return name === "" || email === "" || company === "" ? false : true;
    },
    Submit() {
      const response = this.validate();
      response ? this.contactPost() : alert("Todos los datos son necesarios");
    },
    async contactPost() {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(this.contact),
      });
      const msg = await response.json();
      alert(msg);
      this.clean();
    },
  },
};
</script>

<style>
</style>