<script setup>
import { useMapItemsStore } from "../stores/mapItems";
import ParkIcon from "../components/icons/IconPark.vue";

const { parks } = useMapItemsStore();
</script>

<template>
  <div class="parks-page">
    <USidePanel>
      <template #title>Парки</template>
      <USidePanelList>
        <USidePanelItem v-for="el in parks" :key="el.id">
          <template #badge><ParkIcon class="yellow-icon" /></template>
          {{ el.name }}
          <template #description>{{ el.address }}</template>
        </USidePanelItem>
      </USidePanelList>
    </USidePanel>
  </div>
</template>

<style scoped>
.parks-page {
  height: 100%;
  width: 400px;
  background-color: white;
  flex-shrink: 0;
}
</style>
