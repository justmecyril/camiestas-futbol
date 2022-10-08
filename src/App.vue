<template>
  <main-nav />
  <div class="container mx-auto">
    <router-view />
    <Footer />
  </div>
</template>

<script>
import mainNav from "@/components/mainNav";
import Footer from "@/components/Footer";

export default {
  components: { mainNav, Footer },
};
</script>
