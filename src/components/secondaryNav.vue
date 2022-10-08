<template>
  <div class="flex justify-between w-full h-12 bg-white border-b">
    <div class="ml-52">
      <button>All Category <img src="@/assets/icons/svg/down.svg" /></button>
    </div>
    <div class="flex justify-center border-l">
      <div>
        <div
          class="relative flex flex-wrap items-stretch w-full mb-4 input-group"
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
              bg-white
            "
            placeholder="What are you looking for?"
            aria-label="Search"
            aria-describedby="button-addon3"
          />
          <button
            class="inline-block px-6 py-2 text-xs font-medium leading-tight text-black bg-yellow-300 border-2 "
            type="button"
            id="button-addon3"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <span class="border-l"
      ><img src="@/assets/icons/svg/shopping-cart.svg"
    /></span>
    <div class="border-l">
      <span><img src="@/assets/icons/svg/user.svg" /></span>
      <img src="@/assets/icons/svg/down.svg" />
    </div>
  </div>
</template>
<script>
export default {
  name: "secondaryNav",
};
</script>