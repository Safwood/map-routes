<script setup>
import { useMapItemsStore } from "../stores/mapItems";
import ParkIcon from "../components/icons/IconPark.vue";

const { parks } = useMapItemsStore();
</script>

<template>
  <div class="parks-page">
    <USidePanelFilter />

    <USidePanelList>
      <USidePanelItem v-for="el in parks" :key="el.id">
        <template #badge><ParkIcon class="yellow-icon" /></template>
        {{ el.name }}
        <template #description>{{ el.address }}</template>
      </USidePanelItem>
    </USidePanelList>
  </div>
</template>

<style scoped>
.parks-page {
  height: 100%;
  width: 100%;
  background-color: white;
}
</style>
