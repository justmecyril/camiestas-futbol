<template>
  <div class="flex justify-between w-full h-8 bg-gray-600">
    <div class="flex ml-8">
      <img class="w-4" src="@/assets/icons/svg/globe.svg" />
      <h4 class="mt-2 ml-2 text-white uppercase">en</h4>
      <img class="w-2 ml-2 text-white" src="@/assets/icons/svg/down.svg" />
    </div>
    <h1 class="mt-2 text-white uppercase">
      sales begin . free shipping on all orders
    </h1>
    <div class="flex justify-end bg-green-400">
      <img class="w-4 mx-2" src="@/assets/icons/svg/whatsapp.svg" />
      <span class="mx-2 mt-2 text-white"> Chat with us</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "primaryNav",
};
</script>