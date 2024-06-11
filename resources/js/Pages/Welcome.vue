<template>
  <div class="page-container">
    <Navbar />
    <Header />
    <Carousel />
    <Sections />
    <Testimonials />
    <ContactForm />
    <div class="flex justify-center mt-8">
      <h1 class="ml-2 text-4xl font-bold">Saiba como chegar</h1>
    </div>
    <div class="flex justify-center mt-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.797460099954!2d-47.12323768935718!3d-22.920840238286456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c81213c32101%3A0x1410fca482f86567!2sPUC-Campinas%20-%20Pontif%C3%ADcia%20Universidade%20Cat%C3%B3lica%20de%20Campinas!5e0!3m2!1spt-BR!2sbr!4v1716298915480!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../Components/Header.vue';
import Carousel from '../Components/Carousel.vue';
import Sections from '../Components/Sections.vue';
import Testimonials from '../Components/Testimonials.vue';
import ContactForm from '../Components/ContactForm.vue';
import Footer from '../Components/Footer.vue';
import { Head } from '@inertiajs/inertia-vue3';
</script>

<style scoped>
.page-container {
  background-color: #f7fbfc; /* bg-gray-100 */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>