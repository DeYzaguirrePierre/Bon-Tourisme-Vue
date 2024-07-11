<template>
<section class="relative mb-10 md:my-10 bg-[#763538] bg-opacity-50 rounded-3xl">
  <a class="absolute z-10 top-1 right-1 hover:text-white md:top-4 md:right-4 md:rounded-md md:bg-[#763538] md:text-white md:hover:bg-white md:hover:text-[#763538] px-5 py-2.5 text-sm font-medium"
      href="#">
      En voir plus ...
    </a>
    <h1 class="oneLine italic font-extralight opacity-75 text-center py-10">
      Les Lieux Gastronomiques
    </h1>
  <Carousel :itemsToShow="itemsToShow" :wrapAround="true" :transition="500" class="pb-10">
    <Slide v-for="resto in restos" :key="resto.id">
      <div class="card text-center bg-[cyan] h-max mx-3">
        <h2 class="card-title">{{ resto.titre }}</h2>
        <img :src="resto.image" class="mx-auto" />
        <div class="card-content">
          <p>{{ resto.description }}</p>
          <a :href="resto.link" class="button">En Savoir plus ...</a>
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
      itemsToShow: 3.95, /* Valeur par défault du items show */
    };
  },
  mounted() {
    this.fetchData();
    this.updateItemsToShow();
    window.addEventListener('resize', this.updateItemsToShow); /* Mise a jour auto de l item shown */
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateItemsToShow); /* supprime l'écouteur d'événement lorsque le composant */
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('/DataRestos.json'); /* Appel du tableau de donnée du Json */
        this.restos = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    updateItemsToShow() {
      this.itemsToShow = window.innerWidth < 768 ? 1 : 3.95; /* Affiche un seul Element dans le carousel quand screen < 768px */
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