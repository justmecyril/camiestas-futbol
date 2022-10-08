<template>
  <div class="h-24">
    <div class="ml-52">
      <nav class="h-full">
        <ul class="flex h-full">
          <li class="flex h-full"><router-link to="/">Home</router-link></li>
          <li v-for="items in dropDownMenuItems" :key="items" class="flex ml-9">
            <router-link to="/"
              >{{ items }}<span><img src="@/assets/icons/svg/down.svg" /></span
            ></router-link>
          </li>
          <li v-for="items in menuItems" :key="items" class="flex ml-9">
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
      menuItems: ["Products Delivery 1-2 days", "contact", "Reviews"],
      dropDownMenuItems: ["T-Shirt", "NBA", "Tracksuits"],
    };
  },
};
</script>