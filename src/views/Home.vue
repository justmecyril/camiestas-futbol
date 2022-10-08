<template>
  <div class="container mx-auto">
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
        <div v-for="card in cards" :key="card.id" class="bg-yellow-300 card">
          <img :src="card.logo" class="w-8 h-32" />
          <div class="flex flex-col m-4">
            <span class="font-bold">{{ card.label }}</span>
            <span class="font-bold">{{ card.text }}</span>
          </div>
        </div>
      </div>
      <div class="mt-8">
        <span><img src="@/assets/icons/svg/rewards-badge.svg" alt="" /></span>
      </div>
    </section>
    <section id="wears">
      <div class="flex flex-col m-auto bg-white p-auto">
        <h1 class="flex px-5 py-5 mx-5 text-2xl font-bold text-gray-800">
          Most Popular T-shirt
        </h1>
        <div class="flex pb-10 overflow-x-scroll hide-scroll-bar">
          <div class="flex ml-10 flex-nowrap">
            <div class="inline-block px-3">
              <div class="max-w-xs overflow-hidden bg-white border">
                <div class="bg-white w-72">
                  <img
                    class="object-cover w-72"
                    src="@/assets/images/product-medium.jpg"
                  />
                  <div class="px-5 py-3 space-y-2">
                    <h3 class="text-lg">Super Computer 9064GB</h3>

                    <p class="space-x-2">
                      <span class="text-2xl font-semibold">€600</span>
                      <span class="text-sm text-red-500 line-through"
                        >€1000</span
                      >
                    </p>
                    <div class="flex items-center pt-3 pb-2 top-2">
                      <a
                        href="#"
                        class="px-4 py-2 text-sm text-center text-white bg-green-400 "
                      >
                        Save
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="inline-block px-3">
              <div class="max-w-xs overflow-hidden bg-white border">
                <div class="bg-white w-72">
                  <img
                    class="object-cover w-72"
                    src="@/assets/images/product-medium.jpg"
                  />
                  <div class="px-5 py-3 space-y-2">
                    <h3 class="text-lg">Super Computer 9064GB</h3>

                    <p class="space-x-2">
                      <span class="text-2xl font-semibold">€600</span>
                      <span class="text-sm text-red-500 line-through"
                        >€1000</span
                      >
                    </p>
                    <div class="flex items-center pt-3 pb-2 top-2">
                      <a
                        href="#"
                        class="px-4 py-2 text-sm text-center text-white bg-green-400 "
                      >
                        Save
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="inline-block px-3">
              <div class="max-w-xs overflow-hidden bg-white border">
                <div class="bg-white w-72">
                  <img
                    class="object-cover w-72"
                    src="@/assets/images/product-medium.jpg"
                  />
                  <div class="px-5 py-3 space-y-2">
                    <h3 class="text-lg">Super Computer 9064GB</h3>

                    <p class="space-x-2">
                      <span class="text-2xl font-semibold">€600</span>
                      <span class="text-sm text-red-500 line-through"
                        >€1000</span
                      >
                    </p>
                    <div class="flex items-center pt-3 pb-2 top-2">
                      <a
                        href="#"
                        class="px-4 py-2 text-sm text-center text-white bg-green-400 "
                      >
                        Save
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="inline-block px-3">
              <div class="max-w-xs overflow-hidden bg-white border">
                <div class="bg-white w-72">
                  <img
                    class="object-cover w-72"
                    src="@/assets/images/product-medium.jpg"
                  />
                  <div class="px-5 py-3 space-y-2">
                    <h3 class="text-lg">Super Computer 9064GB</h3>

                    <p class="space-x-2">
                      <span class="text-2xl font-semibold">€600</span>
                      <span class="text-sm text-red-500 line-through"
                        >€1000</span
                      >
                    </p>
                    <div class="flex items-center pt-3 pb-2 top-2">
                      <a
                        href="#"
                        class="px-4 py-2 text-sm text-center text-white bg-green-400 "
                      >
                        Save
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="inline-block px-3">
              <div class="max-w-xs overflow-hidden bg-white border">
                <div class="bg-white w-72">
                  <img
                    class="object-cover w-72"
                    src="@/assets/images/product-medium.jpg"
                  />
                  <div class="px-5 py-3 space-y-2">
                    <h3 class="text-lg">Super Computer 9064GB</h3>

                    <p class="space-x-2">
                      <span class="text-2xl font-semibold">€600</span>
                      <span class="text-sm text-red-500 line-through"
                        >€1000</span
                      >
                    </p>
                    <div class="flex items-center pt-3 pb-2 top-2">
                      <a
                        href="#"
                        class="px-4 py-2 text-sm text-center text-white bg-green-400 "
                      >
                        Save
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="inline-block px-3">
              <div class="max-w-xs overflow-hidden bg-white border">
                <div class="bg-white w-72">
                  <img
                    class="object-cover w-72"
                    src="@/assets/images/product-medium.jpg"
                  />
                  <div class="px-5 py-3 space-y-2">
                    <h3 class="text-lg">Super Computer 9064GB</h3>

                    <p class="space-x-2">
                      <span class="text-2xl font-semibold">€600</span>
                      <span class="text-sm text-red-500 line-through"
                        >€1000</span
                      >
                    </p>
                    <div class="flex items-center pt-3 pb-2 top-2">
                      <a
                        href="#"
                        class="px-4 py-2 text-sm text-center text-white bg-green-400 "
                      >
                        Save
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="inline-block px-3">
              <div class="max-w-xs overflow-hidden bg-white border">
                <div class="bg-white w-72">
                  <img
                    class="object-cover w-72"
                    src="@/assets/images/product-medium.jpg"
                  />
                  <div class="px-5 py-3 space-y-2">
                    <h3 class="text-lg">Super Computer 9064GB</h3>

                    <p class="space-x-2">
                      <span class="text-2xl font-semibold">€600</span>
                      <span class="text-sm text-red-500 line-through"
                        >€1000</span
                      >
                    </p>
                    <div class="flex items-center pt-3 pb-2 top-2">
                      <a
                        href="#"
                        class="px-4 py-2 text-sm text-center text-white bg-green-400 "
                      >
                        Save
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="inline-block px-3">
              <div class="max-w-xs overflow-hidden bg-white border">
                <div class="bg-white w-72">
                  <img
                    class="object-cover w-72"
                    src="@/assets/images/product-medium.jpg"
                  />
                  <div class="px-5 py-3 space-y-2">
                    <h3 class="text-lg">Super Computer 9064GB</h3>

                    <p class="space-x-2">
                      <span class="text-2xl font-semibold">€600</span>
                      <span class="text-sm text-red-500 line-through"
                        >€1000</span
                      >
                    </p>
                    <div class="flex items-center pt-3 pb-2 top-2">
                      <a
                        href="#"
                        class="px-4 py-2 text-sm text-center text-white bg-green-400 "
                      >
                        Save
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="countryLeagues">
      <h1 class="">country</h1>
      <div class="grid gap-10 mt-8 lg:grid-cols-5">
        <!-- cards -->
        <div v-for="league in leagues" :key="league.id" class="card">
          <img :src="league.image" class="object-cover w-full h-32" />
          <div class="m-4">
            <span class="font-bold">{{ league.league }}</span>
          </div>
        </div>
      </div>
    </section>
    <section id="otherCollections" class="my-24">
      <h1 class="">other collections</h1>
      <div class="grid gap-10 mt-8 lg:grid-cols-3">
        <!-- cards -->
        <div
          v-for="collection in collections"
          :key="collection.id"
          class="relative card"
        >
          <img :src="collection.image" class="object-cover w-full h-32" />

          <div
            class="absolute bottom-0 left-0 flex w-full px-5 py-3 text-white bg-black "
          >
            {{ collection.type }}
            <button class="h-full px-5 py-3 bg-yellow-400">
              <img src="@/assets/icons/svg/right.svg" />
            </button>
          </div>
        </div>
      </div>
    </section>
    <section id="others">
      <div class="grid gap-10 mt-8 lg:grid-cols-2">
        <!-- cards -->
        <div v-for="info in otherInfo" :key="info.id" class="relative card">
          <img :src="info.image" class="object-cover w-full h-32" />

          <h1 class="absolute font-bold text-white left-5 top-1/2">
            {{ info.caption }}
          </h1>
          <p class="absolute mt-8 text-sm text-white left-5 top-1/2">
            {{ info.details }}
          </p>
        </div>
      </div>
    </section>
    <footer class="text-center text-gray-600 bg-gray-50 lg:text-left">
      <div class="py-10 mx-6 mt-8 text-center md:text-left">
        <div class="grid gap-8 grid-1 md:grid-cols-2 lg:grid-cols-4">
          <div class="">
            <h6
              class="flex items-center justify-center mb-4 font-semibold uppercase  md:justify-start"
            >
              main menu
            </h6>
            <p class="mb-4">
              <a href="#!" class="text-gray-600">Home</a>
            </p>
            <p class="mb-4">
              <a href="#!" class="text-gray-600">T-shirt</a>
            </p>
            <p class="mb-4">
              <a href="#!" class="text-gray-600">NBA</a>
            </p>
            <p class="mb-4">
              <a href="#!" class="text-gray-600">Tracksuits</a>
            </p>
            <p class="mb-4">
              <a href="#!" class="text-gray-600">Product Delivery 1-2 days</a>
            </p>
            <p class="mb-4">
              <a href="#!" class="text-gray-600">Contact</a>
            </p>
            <p class="mb-4">
              <a href="#!" class="text-gray-600">Reviews</a>
            </p>
          </div>
          <div class="">
            <h6 class="flex justify-center mb-4 font-semibold md:justify-start">
              secondary menu
            </h6>
            <p class="mb-4">
              <a href="#!" class="text-gray-600">Search</a>
            </p>
            <p class="mb-4">
              <a href="#!" class="text-gray-600">Privacy Policy</a>
            </p>
            <p class="mb-4">
              <a href="#!" class="text-gray-600">Shipping Policy</a>
            </p>
            <p class="mb-4">
              <a href="#!" class="text-gray-600">Returns Policy</a>
            </p>
            <p class="mb-4">
              <a href="#!" class="text-gray-600">Terms of Policy</a>
            </p>
          </div>
          <div class="">
            <h6
              class="flex justify-center mb-4 font-semibold uppercase  md:justify-start"
            >
              Subscribe
            </h6>
            <p class="mb-4">
              Suscribe to our mailing list to receive the latest news
            </p>
            <div class="flex justify-center">
              <div class="mb-3 xl:w-96">
                <div
                  class="relative flex flex-wrap items-stretch w-full mb-4  input-group"
                >
                  <input
                    type="search"
                    class="
                      form-control
                      relative
                      flex-auto
                      min-w-0
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700
                      focus:bg-white
                      focus:border-blue-600
                      focus:outline-none
                    "
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                  />
                  <button
                    class="
                      btn
                      inline-block
                      px-6
                      py-2.5
                      bg-yellow-400
                      text-white
                      font-medium
                      text-xs
                      leading-tight
                      uppercase
                      rounded
                      shadow-md
                      hover:bg-blue-700 hover:shadow-lg
                      focus:bg-blue-700
                      focus:shadow-lg
                      focus:outline-none
                      focus:ring-0
                      active:bg-blue-800 active:shadow-lg
                      transition
                      duration-150
                      ease-in-out
                      flex
                      items-center
                    "
                    type="button"
                    id="button-addon2"
                  >
                    <img src="@/assets/icons/svg/right.svg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <h6
              class="flex justify-center mb-4 font-semibold uppercase  md:justify-start"
            >
              Follow us
            </h6>
            <div class="flex">
              <p class="">
                <img
                  class="bg-gray-900"
                  src="@/assets/icons/svg/facebook-f.svg"
                />
              </p>
              <p class="">
                <img class="bg-gray-900" src="@/assets/icons/svg/twitter.svg" />
              </p>
              <p class="">
                <img
                  class="bg-gray-900"
                  src="@/assets/icons/svg/instagram.svg"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between p-6 text-center border-t bg-gray-50">
        <span>© 2021 Copyright . All rights reserved</span>
        <img src="@/assets/images/payment-partners.png" />
      </div>
    </footer>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Carousel from "@/components/Carousel.vue";
import Slider from "@/components/Slider.vue";

export default {
  components: {
    Carousel,
    Slider,
  },
  setup() {
    const carouselSliders = ["hero"];
    const leagues = [
      {
        league: "Champions League",
        image: require("@/assets/images/country-leagues/champions-league.jpg"),
        id: 1,
      },
      {
        league: "Europa League",
        image: "@/assets/images/country-leagues/europa-league.jpg ",
        id: 2,
      },
      {
        league: "Copa America",
        image: "@/assets/images/country-leagues/copa-america.jpg ",
        id: 3,
      },
      {
        league: "Asian Cup",
        image: require("@/assets/images/country-leagues/asian-cup.jpg"),
        id: 4,
      },
      {
        league: "African Nations Cup",
        image: require("@/assets/images/country-leagues/caf.jpg"),
        id: 5,
      },
    ];
    const otherInfo = ref([
      {
        caption: "personalization",
        details:
          "Put a custom print on the football shirt of your choice with our Personalization service",
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
        image: "@/assets/images/other-collections/large-sizes.jpg ",
        id: 2,
      },
      {
        type: "GoalKeeper",
        image: "@/assets/images/other-collections/goalkeeper.jpg ",
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

    return { leagues, otherInfo, collections, carouselSliders, cards };
  },
};
</script>
