<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <main>
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/map/parks">Parks</RouterLink>
          <RouterLink to="/map/stores">Stores</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>

    <router-view />
  </main>
</template>
