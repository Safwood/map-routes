<script lang="ts" setup></script>

<template>
  <ul>
    <PerfectScrollbar class="scrollbar">
      <slot></slot>
    </PerfectScrollbar>
  </ul>
</template>

<style>
.list {
  width: 100%;
  height: calc(100% - 0);
  overflow-x: hidden;
  overflow-y: auto;
  padding: 2px;
  display: flex;
  flex-direction: column;
}
</style>
