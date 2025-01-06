<script setup>
import MainMap from "../components/MainMap/MainMap.vue";
</script>

<template>
  <div class="map-page">
    <router-view />
    <MainMap />
  </div>
</template>

<style scoped>
.map-page {
  height: 100%;
  width: calc(100% - var(--vt-side-bar-width));
  display: flex;
}
</style>
