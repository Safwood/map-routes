<script setup lang="ts"></script>

<template>
  <div class="side-panel">
    <div class="side-panel__header">
      <div class="side-panel__title">
        <slot name="title"></slot>
      </div>
    </div>
    <div class="side-panel__container">
      <slot></slot>
    </div>
  </div>
</template>

<style>
.side-panel {
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.side-panel__header {
  width: 100%;
  height: var(--side-panel-header-height);
}

.side-panel__container {
  width: 100%;
  height: calc(100% - var(--side-panel-header-height));
}

.side-panel__title {
  padding-top: 15px;
  height: var(--side-panel-header-height);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--green-background-1);
  font-size: 24px;
  font-weight: 500;
  color: var(--grey-4);
}
</style>
