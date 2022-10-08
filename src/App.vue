<template>
  <main-nav/>
  <router-view />
</template>

<script>
import mainNav from "@/components/mainNav";
export default {
  components: { mainNav },
};
</script>
