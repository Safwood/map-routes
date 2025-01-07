<script setup lang="ts">
import { RouterLink } from "vue-router";
import ParkIcon from "../components/icons/IconPark.vue";
import StoreIcon from "../components/icons/IconStore.vue";
import AboutIcon from "../components/icons/IconAbout.vue";
import MainMap from "../components/MainMap.vue";
</script>

<template>
  <div class="home-page">
    <div class="home-page__side-bar">
      <header class="home-page__header">
        <nav>
          <RouterLink to="/parks">
            <ParkIcon class="xxl-icon dark-green-icon" />
          </RouterLink>
          <RouterLink to="/stores">
            <StoreIcon class="xxl-icon dark-green-icon" />
          </RouterLink>
          <RouterLink to="/about">
            <AboutIcon class="xxl-icon dark-green-icon" />
          </RouterLink>
        </nav>
      </header>

      <div class="home-page__main">
        <router-view />
      </div>
    </div>

    <MainMap />
  </div>
</template>

<style>
.home-page {
  height: 100%;
  width: 100%;
  display: flex;
}

.home-page__side-bar {
  height: 100%;
  width: var(--side-bar-width);
}

.home-page__header {
  background-color: var(--green-background-1);
}

.home-page__side-bar nav {
  height: 100%;
  width: 100%;
  display: flex;
}

.home-page__side-bar a {
  height: 100%;
  width: 100%;
  padding: 15px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.xxl-icon:hover {
  transform: scale(1.2);
  transition: transform 0.2s;
  backface-visibility: hidden;
}

.home-page__main {
  height: calc(100% - var(--side-panel-header-height));
}
</style>
