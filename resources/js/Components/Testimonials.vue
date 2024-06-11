<template>
  <div class="swiper-container testimonial-carousel mt-8 overflow-x-hidden text-center">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(testimonial, index) in testimonials" :key="index">
        <p class="text-lg font-medium">{{ testimonial.text }} - {{ testimonial.author }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { ref, onMounted } from 'vue';

const testimonials = ref([
  { text: 'Estou muito satisfeito com o atendimento que recebi na Clínica Mentalis. Os médicos são extremamente competentes e atenciosos.', author: 'João Silva' },
  { text: 'Recomendo a Clínica Mentalis a todos que buscam um serviço médico de qualidade e confiança.', author: 'Maria Santos' },
  { text: 'Recomendo vivamente a Clínica Mentalis a todos que buscam cuidados psicológicos de alta qualidade.', author: 'Ana Rodrigues' },
  { text: 'Minha experiência na Clínica Mentalis foi incrível. Desde o primeiro contato, senti-me compreendido e apoiado.', author: 'Pedro Costa' },
  { text: 'A experiência na Clínica Mentalis superou todas as minhas expectativas.', author: 'Carlos Andrade' }
]);

onMounted(() => {
  new Swiper('.testimonial-carousel', {
    loop: true,
    autoplay: {
      delay: 3000, // trocar a cada 3 segundos
    },
  });
});
</script>

<style scoped>
</style>
