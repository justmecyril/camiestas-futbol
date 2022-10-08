<template>
  <header class="w-full text-sm">
    <div class="relative left-0 w-full bg-white border-b h-28">
      <primary-nav />
      <span class="bg-yellow-300 h-28 w-36"> </span>
      <secondary-nav />
      <nav-bar />
    </div>
  </header>
</template>
<script>
import primaryNav from "@/components/primaryNav";
import secondaryNav from "@/components/secondaryNav";
import navBar from "@/components/navBar";
export default {
  name: "mainNav",
  components: { primaryNav, secondaryNav, navBar },
};
</script>