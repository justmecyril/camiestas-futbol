<template>
  <div class="text-center text-gray-600 bg-gray-50 lg:text-left">
    <div class="py-10 mx-6 mt-8 text-center md:text-left">
      <div class="grid gap-8 grid-1 md:grid-cols-2 lg:grid-cols-4">
        <div class="">
          <h6
            class="flex items-center justify-center mb-4 font-bold capitalize md:justify-start"
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
          <h6
            class="flex justify-center mb-4 font-bold capitalize md:justify-start"
          >
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
            class="flex justify-center mb-4 font-bold capitalize md:justify-start"
          >
            Subscribe
          </h6>
          <p class="mb-4">
            Subscribe to our mailing list to receive the latest news
          </p>
          <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
              <div class="flex flex-wrap items-stretch w-full mb-4">
                <input
                  type="search"
                  class="
                    min-w-0
                    block
                    w-3/4
                    px-3
                    py-1.5
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    m-0
                  "
                  placeholder="Email Address"
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
                    items-center
                  "
                  type="button"
                >
                  <img src="@/assets/icons/svg/right.svg" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <h6
            class="flex justify-center mb-4 font-bold capitalize md:justify-start"
          >
            Follow us
          </h6>
          <div class="flex">
            <p class="mr-2">
              <img
                class="bg-gray-900"
                src="@/assets/icons/svg/facebook-f.svg"
              />
            </p>
            <p class="mr-2">
              <img class="bg-gray-900" src="@/assets/icons/svg/twitter.svg" />
            </p>
            <p class="">
              <img class="bg-gray-900" src="@/assets/icons/svg/instagram.svg" />
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between p-6 text-center border-t bg-gray-50">
      <span>© 2021 Copyright . All rights reserved</span>
      <img src="@/assets/images/payment-partners.png" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>