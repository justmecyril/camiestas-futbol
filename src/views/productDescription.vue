<template>
  <div class="container mx-auto my-8">
    <nav class="w-full rounded-md ml-28 bg-grey-light">
      <ol class="flex list-reset">
        <li>
          <a href="#" class="text-blue-600">Home</a>
        </li>
        <li><span class="mx-2 text-gray-500">></span></li>
        <li>
          <a href="#" class="text-blue-600">England-Premier League</a>
        </li>
        <li><span class="mx-2 text-gray-500">></span></li>
        <li class="text-gray-500">Manchester United 21-22 Home Shirt</li>
      </ol>
    </nav>
    <section>
      <div class="grid grid-cols-12">
        <!-- <div class="col-span-1 col-start-1"></div> -->
        <div class="col-span-5 col-start-2">
          <section class="max-w-2xl mx-8 mt-12">
            <div class="relative shadow-2xl">
              <!-- large image on slides -->
              <div>
                <div class="object-cover w-full image1"></div>
              </div>
              <div class="hidden mySlides">
                <div class="object-cover w-full image2"></div>
              </div>
              <div class="hidden mySlides">
                <div class="object-cover w-full image3"></div>
              </div>
              <div class="hidden mySlides">
                <div class="object-cover w-full image4"></div>
              </div>
              <div class="hidden mySlides">
                <div class="object-cover w-full image5"></div>
              </div>

              <!-- image description -->
              <div
                class="py-2 font-light tracking-wider text-center text-white bg-gray-800 "
              >
                <p id="caption"></p>
              </div>

              <!-- smaller images under description -->
              <div class="flex">
                <div class="mt-2 mr-2">
                  <img
                    class="h-24 opacity-50 cursor-pointer  image1 description hover:opacity-100"
                    src="#"
                    onclick="currentSlide(1)"
                  />
                </div>
                <div class="mt-2 mr-2">
                  <img
                    class="h-24 opacity-50 cursor-pointer  image2 description hover:opacity-100"
                    src="#"
                    onclick="currentSlide(2)"
                  />
                </div>
                <div class="mt-2 mr-2">
                  <img
                    class="h-24 opacity-50 cursor-pointer  image3 description hover:opacity-100"
                    src="#"
                    onclick="currentSlide(3)"
                  />
                </div>
                <div class="mt-2 mr-2">
                  <img
                    class="h-24 opacity-50 cursor-pointer  image4 description hover:opacity-100"
                    src="#"
                    onclick="currentSlide(4)"
                  />
                </div>
                <div class="mt-2">
                  <img
                    class="h-24 opacity-50 cursor-pointer  image5 description hover:opacity-100"
                    src="#"
                    onclick="currentSlide(5)"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="col-span-5 col-start-7">
          <div class="container">
            <div>
              <h1 class="mt-8 text-2xl font-bold">
                Manchester United 21-22 Home Shirt
              </h1>
              <div class="flex justify-between mt-2">
                <span class="text-2xl font-bold">€30.00</span>
                <span class="mt-2 ml-2 text-sm text-red-500 line-through"
                  >€89.95</span
                >
                <span>
                  <a
                    href="#"
                    class="px-4 py-2 mt-6 ml-2 text-sm text-center text-white bg-green-400 "
                  >
                    Save 67%
                  </a></span
                >
                <span class="ml-8">
                  <button
                    class="px-4 py-2 text-sm text-center text-black bg-white border "
                  >
                    <!-- <img src="@/assets/icons/svg/heart-outline.svg" /> -->
                    Add to favorites
                  </button>
                </span>
              </div>
            </div>
            <div class="my-8">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                vero ipsum repellat, laboriosam suscipit odit at enim, numquam
                aut assumenda eaque nostrum voluptates alias, sint fugit
                repellendus. Quibusdam, assumenda quae?
              </p>
            </div>
            <purchase-form />
          </div>
        </div>
        <!-- <div class="col-span-1 col-start-12"></div> -->
      </div>
    </section>
    <div class="mt-8">
      <span><img src="@/assets/icons/svg/rewards-badge.svg" /></span>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import purchaseForm from "@/components/purchaseForm";
export default {
  components: { purchaseForm },
  setup() {
    return {};
  },
};
</script>

<style>
.image1 {
  content: url("../assets/images/product-medium.jpg");
}

.image2 {
  content: url("../assets/images/product-medium.jpg");
}

.image3 {
  content: url("../assets/images/product-medium.jpg");
}

.image4 {
  content: url("../assets/images/product-medium.jpg");
}

.image5 {
  content: url("../assets/images/product-medium.jpg");
}
</style>