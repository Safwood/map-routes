<script lang="ts" setup></script>

<template>
  <ul class="list">
    <PerfectScrollbar class="scrollbar">
      <slot></slot>
    </PerfectScrollbar>
  </ul>
</template>

<style>
.list {
  width: 100%;
  height: 100%;
}

.scrollbar {
  width: 100%;
  height: 100%;
  padding: 2px;
  display: flex;
  flex-direction: column;
}
</style>
