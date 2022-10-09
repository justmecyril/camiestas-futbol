<template>
  <div class="flex justify-between w-full h-12 bg-white border-b">
    <div class="flex mr-10 ml-52">
      <button>All Category</button>
      <img class="w-2 ml-2" src="@/assets/icons/svg/down.svg" />
    </div>

    <div class="flex w-full my-2 border-l flex-nowrap input-group">
      <input
        type="search"
        class="w-full px-3 py-1.5 font-normal text-gray-700 bg-white"
        placeholder="What are you looking for?"
      />
      <button
        class="inline-block px-6 py-2 text-xs font-medium text-black bg-yellow-300 border-2 "
        type="button"
      >
        Search
      </button>
    </div>
    <img class="w-8 m-2 border-l" src="@/assets/icons/svg/shopping-cart.svg" />
    <div class="flex border-l">
      <img class="w-8 ml-4" src="@/assets/icons/svg/user.svg" />
      <img class="w-2 ml-2" src="@/assets/icons/svg/down.svg" />
    </div>
  </div>
</template>
<script>
export default {
  name: "secondaryNav",
};
</script>