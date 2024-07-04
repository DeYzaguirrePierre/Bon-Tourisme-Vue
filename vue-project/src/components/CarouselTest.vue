<template>
  <Carousel :itemsToShow="3.95" :wrapAround="true" :transition="500" class="my-10">
    <Slide v-for="lieu in lieux" :key="lieu.id">
      <div class="card text-center bg-[cyan]">
        <h2 class="card-title">{{ lieu.titre }}</h2>
        <img :src="lieu.image" class="mx-auto" />
        <div class="card-content">
          <p>{{ lieu.description }}</p>
          <a :href="lieu.link" class="button">En Savoir plus ...</a>
        </div>
      </div>
    </Slide>

    ...
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import axios from 'axios'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      lieux: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('/DataLieuxCult.json');
        this.lieux = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
})
</script>

<style scoped>
.carousel__slide {
  padding-left: 25px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(1);
}

.carousel__slide--active~.carousel__slide {
  transform: rotateY(20deg) scale(1);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(1);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(1);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}
</style>