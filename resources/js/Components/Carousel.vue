<template>
  <div class="carousel">
    <div v-if="images.length > 0" class="carousel-slide" :style="{ transform: 'translateX(' + (-currentIndex * 100) + '%)' }">
      <div v-for="(image, index) in images" :key="index" class="carousel-image">
        <img :src="image" alt="carousel-image" />
      </div>
    </div>
    <div class="carousel-controls">
      <button class="prev-btn" @click="prevSlide" :disabled="currentIndex === 0">
        <img src="https://img.icons8.com/?size=50&id=1806&format=png&color=FFFFFF" alt="Previous" />
      </button>
      <button class="next-btn" @click="nextSlide" :disabled="currentIndex === images.length - 1">
        <img src="https://img.icons8.com/?size=50&id=61&format=png&color=FFFFFF" alt="Next" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://study-eu.s3.eu-west-1.amazonaws.com/uploads/image/path/846/wide_fullhd_psychology-dp-378319420.jpg",
        "https://millstreamcms-01.imgix.net/2017.scotch.wa.edu.au/upload/pages/pastoral-care/scjuniorschool-946_print.jpg?version=1&fit=crop&crop=faces&w=1920&h=800&blend=00000000",
        "https://www.scitechseries.com/public/assets/admin/uploads/sliders/psychology-1766.png",
        "https://www.smumn.edu/wp-content/uploads/2023/04/Header_BS-AppPsych_1920x800.jpg"
      ],
      currentIndex: 0,
      intervalId: null
    };
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    this.stopAutoSlide();
  },
  methods: {
    startAutoSlide() {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 7000); // Troca de slide a cada 3 segundos
    },
    stopAutoSlide() {
      clearInterval(this.intervalId);
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.images.length - 1; // Volta para o último slide se estiver no primeiro
      }
    },
    nextSlide() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0; // Volta para o primeiro slide se estiver no último
      }
    }
  }
};
</script>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
}

.carousel-slide {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-image {
  flex: 0 0 100%;
  position: relative;
}

.carousel-image img {
  width: 100%;
  height: auto;
  max-height: 600px; /* Defina a altura máxima desejada aqui */
}

.carousel-controls {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.prev-btn, .next-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  transition: background-color 0.3s ease;
}

.prev-btn:hover, .next-btn:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.prev-btn img, .next-btn img {
  width: 100%;
}

.prev-btn {
  left: 10px;
}

.next-btn {
  right: 10px;
}
</style>
