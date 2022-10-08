<template>
  <div>
    <form class="w-full max-w-sm mt-4">
      <div class="mb-6 md:flex md:items-center">
        <div class="md:w-full">
          <label
            class="block pr-4 mb-1 font-bold text-gray-500 md:text-left md:mb-0"
            for="size"
          >
            Size
          </label>
        </div>
        <div class="md:w-full">
          <input
            class="w-full px-4 py-2 text-gray-700 border border-gray-200"
            id="size"
            placeholder=""
          />
        </div>
      </div>
      <div class="mb-6 md:flex md:items-center">
        <div class="md:w-full">
          <label
            class="block pr-4 mb-1 font-bold text-gray-500 md:text-left md:mb-0"
            for="inline-name"
          >
            Name
          </label>
        </div>
        <div class="md:w-full">
          <input
            class="w-full px-4 py-2 text-gray-700 border border-gray-200"
            id="inline-name"
            placeholder="What name would you want in the shirt?"
          />
        </div>
      </div>
      <div class="mb-6 md:flex">
        <div class="md:w-full md:items-center">
          <label
            class="block pr-4 mb-1 font-bold text-gray-500 md:text-left md:mb-0"
            for="inline-shirt-number"
          >
            Number on Shirt
          </label>
        </div>
        <div class="md:w-full">
          <input
            class="w-full px-4 py-2 text-gray-700 border border-gray-200"
            id="inline-shirt-number"
            placeholder="Enter a number between 0 and 99"
          />
        </div>
      </div>
      <div class="mb-6 md:flex md:items-center">
        <div class="md:w-full">
          <label
            class="block pr-4 mb-1 font-bold text-gray-500 md:text-left md:mb-0"
            for="inline-patch"
          >
            Patch
          </label>
        </div>
        <div class="md:w-full">
          <input
            class="w-full px-4 py-2 text-gray-700 border border-gray-200"
            id="inline-patch"
            placeholder=""
          />
        </div>
      </div>
      <div class="mb-6 md:flex md:items-center">
        <div class="md:w-full">
          <label
            class="block pr-4 mb-1 font-bold text-gray-500 md:text-left md:mb-0"
            for="inline-quantity"
          >
            Quantity
          </label>
        </div>
        <div class="md:w-full">
          <input
            class="w-full px-4 py-2 text-gray-700 border border-gray-200"
            id="inline-quantity"
            placeholder=""
          />
        </div>
      </div>
      <div class="mb-6 md:flex md:items-center">
        <!-- <div class="md:w-1/3"></div> -->
      </div>
      <div class="md:flex md:items-center">
        <!-- <div class="md:w-1/3"></div> -->
        <div class="md:w-full">
          <button
            class="px-4 py-2 font-bold text-black bg-yellow-300"
            type="button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "purchaseForm",
};
</script>

<style>
</style>