<template>
  <section class="showcase">
    <div class="container grid">
      <div class="showcase-text">
        <h1>Easier Deployment</h1>
        <p>
          Deploy web apps of all kinds, from large scale enterprise APIs to
          static websites for individuals. Fill out the form to try a demo of
          our platform
        </p>
        <router-link to="/services" class="btn btn-outline"
          >Servicios</router-link
        >
      </div>

      <div class="showcase-form card">
        <h2>Request a Demo</h2>
        <form
          @submit.prevent="Submit"
          name="contact"
          netlify-honeypot="bot-field"
          method="POST"
        >
          <input
            v-model.trim="contact.name"
            type="hidden"
            name="form-name"
            value="contact"
          />
          <p class="hidden">
            <label
              >Don’t fill this out if you're human: <input name="bot-field"
            /></label>
          </p>
          <div class="form-control">
            <input
              v-model.trim="contact.name"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
          </div>
          <div class="form-control">
            <input
              v-model.trim="contact.company"
              type="text"
              name="company"
              placeholder="Company Name"
              required
            />
          </div>
          <div class="form-control">
            <input
              v-model.trim="contact.email"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <input type="submit" value="Send" class="btn btn-primary" />
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