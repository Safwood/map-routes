<script setup lang="ts">
import { defineModel } from "vue";

const model = defineModel();
</script>

<template>
  <div class="filter">
    <input
      type="search"
      class="filter__search"
      v-model="model"
      placeholder="Поиск..."
    />
  </div>
</template>

<style lang="scss">
.filter {
  width: 100%;
  height: var(--filter-height);
  background-color: var(--green-background-2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
}

.filter__search {
  width: 300px;
  padding: 3px 8px;
}
</style>
