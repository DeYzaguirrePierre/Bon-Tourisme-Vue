<template>
  <section class="mb-10 md:my-10 p-6">
    <div class="flex justify-between items-center mb-6">
      <h1
        class="oneLine italic font-extralight opacity-75 text-center mx-auto text-[#763538]"
      >
        Les Lieux Culturels
      </h1>
      <div>
        <button
          v-if="!isSearching"
          @click="isSearching = true"
          class="bg-[#763538] border border-[#763538] text-white rounded-md py-2 px-4 hover:bg-white hover:text-[#763538] transition-colors"
        >
          Rechercher
        </button>
        <input
          v-if="isSearching"
          v-model="searchQuery"
          @blur="isSearching = false"
          placeholder="Saisir votre recherche"
          class="bg-white text-black rounded-md p-2 px-4 w-60 transition-all border border-gray-300 duration-300 ease-in-out"
        />
      </div>
    </div>

    <Carousel
      id="gallery"
      :items-to-show="1"
      :wrap-around="false"
      v-model="currentSlide"
      class="my-4"
    >
      <Slide v-for="lieu in filteredLieux" :key="lieu.id">
        <div
          class="flex flex-col md:flex-row text-center mx-auto max-w-4xl p-4 text-[#763538]"
        >
          <div class="md:w-1/2 p-4">
            <h2 class="card-title text-2xl font-bold mb-4">{{ lieu.titre }}</h2>
            <img
              :src="lieu.image"
              class="w-full h-auto mb-4 rounded-lg max-h-96 object-cover"
            />
          </div>
          <div class="md:w-1/2 p-4 flex flex-col justify-center">
            <p class="text-lg mb-4">{{ lieu.description }}</p>
            <a
              :href="lieu.link"
              class="mt-2 inline-block bg-[#763538] border border-[#763538] text-white rounded-md py-3 px-6 hover:bg-white hover:text-[#763538] transition-colors"
              >En Savoir plus ...</a
            >
          </div>
        </div>
      </Slide>
    </Carousel>

    <Carousel
      id="thumbnails"
      :items-to-show="actualItemsToShow"
      :wrap-around="true"
      v-model="currentSlide"
      ref="carousel"
      class="mt-4"
    >
      <Slide v-for="lieu in filteredLieux" :key="lieu.id">
        <div class="cursor-pointer" @click="slideTo(lieu.id - 1)">
          <div
            class="relative text-center rounded-lg overflow-hidden w-32 h-24 mx-auto"
          >
            <img :src="lieu.image" class="w-full h-full object-cover" />
            <div
              class="absolute bottom-0 left-0 right-0 bg-opacity-75 bg-[#763538] text-white py-1 text-center"
            >
              <h2 class="text-sm font-bold">{{ lieu.titre }}</h2>
            </div>
          </div>
        </div>
      </Slide>
    </Carousel>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import axios from "axios";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      lieux: [],
      currentSlide: 0,
      itemsToShow: 5.95,
      isSearching: false,
      searchQuery: "",
    };
  },
  computed: {
    filteredLieux() {
      return this.lieux.filter((lieu) =>
        lieu.titre.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    actualItemsToShow() {
      return this.filteredLieux.length < this.itemsToShow
        ? this.filteredLieux.length
        : this.itemsToShow;
    },
  },
  mounted() {
    this.fetchData();
    this.updateItemsToShow();
    window.addEventListener("resize", this.updateItemsToShow);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateItemsToShow);
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get("/DataLieux.json");
        this.lieux = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    updateItemsToShow() {
      this.itemsToShow = window.innerWidth < 768 ? 1.95 : 5.95;
    },
    slideTo(val) {
      this.currentSlide = val;
    },
  },
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

.carousel__slide--active ~ .carousel__slide {
  transform: scale(0.7);
}
</style>
