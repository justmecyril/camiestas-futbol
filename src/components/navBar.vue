<template>
  <div class="h-24">
    <div class="ml-52">
      <nav class="h-full">
        <ul class="flex h-full">
          <li class="flex h-full mt-2 mr-8">
            <router-link to="/">Home</router-link>
          </li>
          <li
            v-for="items in dropDownMenuItems"
            :key="items"
            class="flex mt-2 mr-8"
          >
            <router-link to="/">{{ items }}</router-link>
            <span class="mx-2 mt-2"
              ><img src="@/assets/icons/svg/down.svg"
            /></span>
          </li>
          <li v-for="items in menuItems" :key="items" class="flex mx-8 mt-2">
            <router-link to="/">{{ items }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: "navBar",
  data() {
    return {
      menuItems: ["Products Delivery 1-2 days", "Contact", "Reviews"],
      dropDownMenuItems: ["T-Shirt", "NBA", "Tracksuits"],
    };
  },
};
</script>