<template>
  <section class="relative mb-10 md:my-10 bg-[#763538] bg-opacity-50 rounded-3xl">
    <RouterLink to="/restoExtand" class="absolute z-10 top-1 right-1 hover:text-white md:top-4 md:right-4 md:rounded-md md:bg-[#763538] md:text-white md:hover:bg-white md:hover:text-[#763538] px-5 py-2.5 text-sm font-medium">
        En voir plus ...
    </RouterLink>
    <h1 class="oneLine italic font-extralight opacity-75 text-center py-10">
      Les Lieux Gastronomiques
    </h1>
    <Carousel :itemsToShow="itemsToShow" :wrapAround="true" :transition="500" class="pb-10">
      <Slide v-for="resto in restos" :key="resto.id">
        <div class="relative text-center rounded-lg overflow-hidden w-64 h-48">
          <img :src="resto.image" class="w-full h-48 object-cover" />
          <div class="absolute bottom-0 left-0 right-0 bg-opacity-75 bg-black text-white py-2 text-center">
            <h2 class="text-xl font-bold">{{ resto.titre }}</h2>
            <a :href="resto.link" class="mt-2 inline-block bg-[#763538] text-white rounded-md py-2 px-4 hover:bg-white hover:text-[#763538] transition-colors">En Savoir plus ...</a>
          </div>
        </div>
      </Slide>
    </Carousel>
  </section>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { Carousel, Slide } from 'vue3-carousel'
  import axios from 'axios'
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    components: {
      Carousel,
      Slide,
    },
    data() {
      return {
        restos: [],
        itemsToShow: 5.95, /* Valeur par défaut du items show */
      };
    },
    mounted() {
      this.fetchData();
      this.updateItemsToShow();
      window.addEventListener('resize', this.updateItemsToShow); /* Mise à jour auto de l'item shown */
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.updateItemsToShow); /* Supprime l'écouteur d'événement lorsque le composant */
    },
    methods: {
      async fetchData() {
        try {
          const response = await axios.get('/DataRestos.json'); /* Appel du tableau de données du JSON */
          this.restos = this.getRandomRestos(response.data, 10);
        } catch (error) {
          console.error(error);
        }
      },
      getRandomRestos(restos, count) {
        // Mélange le tableau des restos
        for (let i = restos.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [restos[i], restos[j]] = [restos[j], restos[i]];
        }
        // Retourne les 'count' premiers éléments
        return restos.slice(0, count);
      },
      updateItemsToShow() {
        this.itemsToShow = window.innerWidth < 768 ? 1 : 5.95; /* Affiche un seul élément dans le carousel quand screen < 768px */
      }
    },
  })
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
  </style>
  