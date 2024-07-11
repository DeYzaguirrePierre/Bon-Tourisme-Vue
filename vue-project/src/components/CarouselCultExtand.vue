<template>
    <section class="mb-10 md:my-10 bg-[#763538] bg-opacity-50 rounded-3xl">
      <h1 class="oneLine italic font-extralight opacity-75 text-center">
        Les Lieux Gastronomiques
      </h1>
      
      <!-- Main Carousel for Displaying Lieux -->
      <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide" class="my-10 py-10">
        <Slide v-for="lieu in lieux" :key="lieu.id">
          <div class="card text-center bg-[cyan] h-max">
            <h2 class="card-title">{{ lieu.titre }}</h2>
            <img :src="lieu.image" class="mx-auto" />
            <div class="card-content">
              <p>{{ lieu.description }}</p>
              <a :href="lieu.link" class="button">En Savoir plus ...</a>
            </div>
          </div>
        </Slide>
      </Carousel>
  
      <!-- Thumbnails Carousel for Navigation -->
      <Carousel id="thumbnails" :items-to-show="4" :wrap-around="true" v-model="currentSlide" ref="carousel">
        <Slide v-for="lieu in lieux" :key="lieu.id">
          <div class="carousel__item" @click="slideTo(lieu.id - 1)">
            <img :src="lieu.image" class="thumbnail-image mx-auto" />
          </div>
        </Slide>
      </Carousel>
    </section>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { Carousel, Slide } from 'vue3-carousel';
  import axios from 'axios';
  import 'vue3-carousel/dist/carousel.css';
  
  export default defineComponent({
    components: {
      Carousel,
      Slide
    },
    data() {
      return {
        lieux: [],
        currentSlide: 0, // Adding currentSlide for v-model binding
        itemsToShow: 3.95 // Default value for itemsToShow
      };
    },
    mounted() {
      this.fetchData();
      this.updateItemsToShow();
      window.addEventListener('resize', this.updateItemsToShow);
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.updateItemsToShow);
    },
    methods: {
      async fetchData() {
        try {
          const response = await axios.get('/DataLieux.json');
          this.lieux = response.data;
        } catch (error) {
          console.error(error);
        }
      },
      updateItemsToShow() {
        this.itemsToShow = window.innerWidth < 768 ? 1 : 3.95;
      },
      slideTo(val) {
        this.currentSlide = val;
      }
    }
  });
  </script>
  
  <style scoped>
  .carousel__viewport {
    perspective: 2000px;
  }
  
  .carousel__slide--sliding {
    transition: 0.5s;
  }
  
  .carousel__slide {
    opacity: 0.9;
    transform: scale(0.7);
  }
  
  .carousel__slide--prev {
    opacity: 1;
    transform: scale(0.85);
  }
  
  .carousel__slide--active {
    opacity: 1;
    transform: scale(1);
  }
  
  .carousel__slide--next {
    opacity: 1;
    transform: scale(0.85) !important;
  }
  
  .carousel__slide--active~.carousel__slide {
    transform: scale(0.7);
  }
  
  .thumbnail-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  </style>
  