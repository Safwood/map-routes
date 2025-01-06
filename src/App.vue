<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";

html,
body,
#app {
  height: 100%;
  width: 100%;
}

.white-icon {
  color: white;
}

.icon {
  height: 30px;
  width: 30px;
}
</style>
