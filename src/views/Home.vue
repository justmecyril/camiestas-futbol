<template>
  <section id="hero">
    <carousel class="my-16">
      <slider v-for="(slide, i) in carouselSliders" :key="i">
        <div class="top-0 left-0 w-full">
          <img :src="require(`@/assets/images/${slide}.jpg`)" />
        </div>
      </slider>
    </carousel>

    <div class="grid gap-10 mt-8 lg:grid-cols-4">
      <!-- cards -->
      <div v-for="card in cards" :key="card.id" class="relative bg-yellow-300">
        <img
          :src="card.logo"
          class="absolute w-4 h-4 mb-12 bg-yellow-500 top-2 left-2"
        />
        <div class="flex flex-col mx-4 mt-12">
          <span class="font-bold text-md">{{ card.label }}</span>
          <span class="text-sm">{{ card.text }}</span>
        </div>
      </div>
    </div>
    <div class="mt-8">
      <span><img src="@/assets/icons/svg/rewards-badge.svg" /></span>
    </div>
  </section>
  <section id="product">
    <div class="flex flex-col m-auto bg-white p-auto">
      <h1 class="flex px-5 py-5 mx-5 text-2xl font-bold text-gray-800">
        Most Popular T-shirt
      </h1>
      <div class="flex pb-10 overflow-x-scroll hide-scroll-bar">
        <div
          class="relative flex ml-10 flex-nowrap"
          v-for="(detail, i) in shirtDetails"
          :key="i"
        >
          <router-link to="product-description/1" class="inline-block px-3">
            <div class="max-w-xs overflow-hidden bg-white border">
              <div class="bg-white w-72">
                <img
                  class="object-cover w-72"
                  src="@/assets/images/product-medium.jpg"
                />
                <div class="px-5 py-3 space-y-2">
                  <h3 class="text-sm">{{ detail.caption }}</h3>

                  <p class="space-x-2">
                    <span class="text-2xl font-semibold"
                      >€{{ detail.discountPrice }}</span
                    >
                    <span class="text-sm text-red-500 line-through"
                      >€{{ detail.price }}</span
                    >
                  </p>
                  <div
                    class="absolute top-0 bottom-0 flex items-center pt-3 pb-2"
                  >
                    <a
                      href="#"
                      class="px-4 py-2 text-sm text-center text-white bg-green-400 "
                    >
                      Save {{ detail.discount }}%
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
  <section id="countryLeagues" class="mt-32">
    <h1 class="text-2xl font-bold uppercase">country leagues</h1>
    <div class="grid gap-10 mt-8 lg:grid-cols-5">
      <!-- cards -->
      <div v-for="(league, i) in countryLeagues" :key="i" class="card">
        <div>
          
        <img v-if="league.image" :src="league.image" :alt="league.title" class="object-cover w-full" />
        <img v-else src="@/assets/images/country-leagues/images.jpg" alt="" class="object-cover w-full" />
        </div>
        <div class="m-4">
          <span class="font-bold">{{ league.title }}</span>
        </div>
      </div>
    </div>
  </section>
  <section id="otherCollections" class="mt-32">
    <h1 class="text-2xl font-bold uppercase">other collections</h1>
    <div class="grid gap-10 mt-8 lg:grid-cols-3">
      <!-- cards -->
      <div
        v-for="collection in collections"
        :key="collection.id"
        class="relative card"
      >
        <img :src="collection.image" class="object-cover w-full" />

        <div
          class="absolute bottom-0 flex justify-between w-full px-5 text-white opacity-60 "
        >
        <span>{{ collection.type }}</span>
          
          <span class="px-5 py-3 bg-yellow-400">
            <img src="@/assets/icons/svg/right.svg" />
          </span>
        </div>
      </div>
    </div>
  </section>
  <section id="others" class="mt-32">
    <div class="grid gap-10 mt-8 lg:grid-cols-2">
      <!-- cards -->
      <div v-for="info in otherInfo" :key="info.id" class="relative card">
        <img :src="info.image" class="object-cover w-full" />

        <h1 class="absolute font-bold text-white uppercase left-5 top-1/2">
          {{ info.caption }}
        </h1>
        <p class="absolute mt-8 text-sm text-white left-5 top-1/2">
          {{ info.details }}
        </p>
        <p class="absolute mt-16 text-sm text-white left-5 top-1/2">
          {{ info.requestDetails }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { ref,computed } from "@vue/reactivity";
import { useStore } from "vuex";
import Carousel from "@/components/Carousel.vue";
import Slider from "@/components/Slider.vue";

export default {
  components: {
    Carousel,
    Slider,
  },
  setup() {
    const store = useStore();
    
    const carouselSliders = ["hero"];
  
    const otherInfo = ref([
      {
        caption: "personalization",
        details:
          "Put a custom print on the football shirt of your choice with our Personalization service",
        requestDetails: "Tell us what name, what number and we put it. FREE!!!",
        image: require("@/assets/images/personalization.jpg"),
        id: 1,
      },
      {
        caption: "social networks",
        details: "Share your shirts with us with the #CamisetasFutbolSpainnn",
        image: require("@/assets/images/social-networks.jpg"),
        id: 2,
      },
    ]);
    const collections = [
      {
        type: "Kids",
        image: require("@/assets/images/other-collections/kids.jpg"),
        id: 1,
      },
      {
        type: "Large sizes",
        image: require("@/assets/images/other-collections/large-sizes.jpg"),
        id: 2,
      },
      {
        type: "GoalKeeper",
        image: require("@/assets/images/other-collections/goalkeeper.jpg"),
        id: 3,
      },
      {
        type: "Authentic/Pro Player",
        image: require("@/assets/images/other-collections/pro-player.jpg"),
        id: 4,
      },
      {
        type: "Shorts",
        image: require("@/assets/images/other-collections/shorts.jpg"),
        id: 5,
      },
      {
        type: "Socks",
        image: require("@/assets/images/other-collections/socks.jpg"),
        id: 6,
      },
    ];
    const cards = [
      {
        label: "Secure Shipping",
        text: "on all orders",
        logo: require("@/assets/icons/svg/truck.svg"),
        id: 1,
      },
      {
        label: "Telephone",
        text: "+123456789",
        logo: require("@/assets/icons/png/phone.png"),
        id: 2,
      },
      {
        label: "Chat WhatsApp",
        text: "Mon-Fri: 9:00-21:00 - Sat-Sun: 9:00 - 17:00",
        logo: require("@/assets/icons/png/whatsapp.png"),
        id: 3,
      },
      {
        label: "Quality Guarantee",
        text: "Verified Purchase Reviews",
        logo: require("@/assets/icons/svg/check-badge.svg"),
        id: 4,
      },
    ];
    const shirtDetails = [
      {
        caption: "Manchester United 21-22 Home Shirt",
        discountPrice: 30.0,
        price: 89.95,
        discount: 67,
      },
      {
        caption: "Manchester United 21-22 Home Shirt",
        discountPrice: 30.0,
        price: 89.95,
        discount: 67,
      },
      {
        caption: "Manchester United 21-22 Home Shirt",
        discountPrice: 30.0,
        price: 89.95,
        discount: 67,
      },
      {
        caption: "Manchester United 21-22 Home Shirt",
        discountPrice: 30.0,
        price: 89.95,
        discount: 67,
      },
      {
        caption: "Manchester United 21-22 Home Shirt",
        discountPrice: 30.0,
        price: 89.95,
        discount: 67,
      },
    ];
    
    store.dispatch("fetchCategories")
    const countryLeagues = computed(() => store.getters.fetchCategories);
    // console.log(countryLeagues)

    return {
     
      otherInfo,
      collections,
      carouselSliders,
      cards,
      shirtDetails,
      countryLeagues
    };
  },
};
</script>
