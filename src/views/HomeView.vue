<script setup lang="ts">
import { RouterLink } from "vue-router";
import ParkIcon from "../components/icons/IconPark.vue";
import StoreIcon from "../components/icons/IconStore.vue";
import AboutIcon from "../components/icons/IconAbout.vue";
</script>

<template>
  <div class="home-page">
    <div class="side-bar">
      <nav>
        <RouterLink to="/map/parks"
          ><ParkIcon class="icon white-icon"
        /></RouterLink>
        <RouterLink to="/map/stores"
          ><StoreIcon class="icon white-icon"
        /></RouterLink>
        <RouterLink to="/about"
          ><AboutIcon class="icon white-icon"
        /></RouterLink>
      </nav>
    </div>

    <router-view />
  </div>
</template>

<style>
.home-page {
  height: 100vh;
  width: 100%;
  display: flex;
}

.side-bar {
  height: 100%;
  width: 60px;
  background-color: var(--vt-c-black-mute);
}

.side-bar nav {
  display: flex;
  flex-direction: column;
  height: 60px;
  width: 100%;
  padding: 15px;
}

.icon {
  margin-bottom: 10px;
}

.icon:hover {
  color: white;
  transform: scale(1.2);
  transition: transform 0.2s;
  backface-visibility: hidden;
}
</style>
