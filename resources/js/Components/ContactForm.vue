<template>
  <section class="contact-form mt-8 container mx-auto text-center">
    <h2 class="text-3xl font-semibold mb-4">Formulário de Contato</h2>
    <form @submit.prevent="submitContactForm">
      <div class="form-group">
        <label for="name" class="block mb-2 font-medium text-lg">Nome:</label>
        <input type="text" id="name" v-model="contactForm.name" required class="form-input block w-64 mb-4 mx-auto text-lg">
      </div>
      <div class="form-group">
        <label for="email" class="block mb-2 font-medium text-lg">E-mail:</label>
        <input type="email" id="email" v-model="contactForm.email" required class="form-input block w-64 mb-4 mx-auto text-lg">
      </div>
      <button type="submit" class="btn text-white bg-gray-900 rounded-full w-28">Enviar</button>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const contactForm = ref({
  name: '',
  email: ''
});

const submitContactForm = () => {
  console.log('Formulário de contato enviado:', contactForm.value);
};
</script>

<style scoped>
</style>