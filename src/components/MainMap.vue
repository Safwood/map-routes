<script setup lang="ts">
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import { Map } from "leaflet";
import { ref } from "vue";

import "leaflet/dist/leaflet.css";

const map = ref<Map | null>(null);

const setMap = (mapLayer: Map) => {
  map.value = mapLayer;
};
</script>

<template>
  <div class="map">
    <l-map ref="setMap" :zoom="11" :min-zoom="2" :center="[55.75222, 37.61556]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
    </l-map>
  </div>
</template>

<style scoped>
.map {
  height: 100%;
  width: calc(100% - var(--side-bar-width));
}
</style>
