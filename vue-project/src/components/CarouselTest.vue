<template>
    <Carousel :itemsToShow="3.95" :wrapAround="true" :transition="500">
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
      lieux: [
        {
          id: 1,
          titre: 'Lieux 1',
          image: '/images/eglise.jpg',
          description: 'Ceci est une courte description pour le lieux 1, on verra ce que je marque ici.',
          link: '#'
        },
        {
          id: 2,
          titre: 'Lieux 2',
          image: '/images/chateau.jpg',
          description: 'Ceci est une courte description pour le lieux 2, on verra ce que je marque ici.',
          link: '#'
        },
        {
          id: 3,
          titre: 'Lieux 3',
          image: '/images/musee.jpg',
          description: 'Ceci est une courte description pour le lieux 3, on verra ce que je marque ici.',
          link: '#'
        }
        // Ajoutez autant d'objets de lieux que nécessaire
      ]
    }
  }
  })
  </script>
  
  <style scoped>
  .carousel__slide {
    padding: 5px;
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
    transform: rotateY(-20deg) scale(0.9);
  }
  
  .carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.9);
  }
  
  .carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
  }
  
  .carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
  }
  
  .carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
  }
  </style>