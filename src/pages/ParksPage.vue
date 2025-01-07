<script setup>
import { useMapItemsStore } from "../stores/mapItems";

const { parks } = useMapItemsStore();
</script>

<template>
  <div class="parks-page">
    <h1>Парки</h1>
    <ul class="list">
      <li class="item" v-for="el in parks" :key="el.id">{{ el.name }}</li>
    </ul>
  </div>
</template>

<style scoped>
.parks-page {
  height: 100%;
  width: 500px;
  background-color: white;
  flex-shrink: 0;
}
</style>
