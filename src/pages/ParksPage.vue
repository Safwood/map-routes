<script setup>
import { useMapItemsStore } from "../stores/mapItems";
import { computed, ref } from "vue";
import ParkIcon from "../components/icons/IconPark.vue";

const { parks } = useMapItemsStore();
const query = ref("");

const computedParks = computed(() => {
  const value = query.value.trim().toLowerCase();
  return parks.filter(
    ({ name, address }) =>
      name.toLowerCase().indexOf(value) !== -1 ||
      address.toLowerCase().indexOf(value) !== -1
  );
});
</script>

<template>
  <div class="parks-page">
    <USidePanelFilter v-model="query" />

    <USidePanelList>
      <USidePanelItem v-for="{ id, name, address } in computedParks" :key="id">
        <template #badge><ParkIcon class="yellow-icon" /></template>
        {{ name }}
        <template #description>{{ address }}</template>
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
