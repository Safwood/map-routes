<script lang="ts" setup>
import { defineProps } from "vue";

defineProps({
  isDisabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  id: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<template>
  <button
    class="icon-button"
    :disabled="isDisabled"
    :id="id"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss">
.icon-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  text-align: center;
  flex: 0 0 auto;
  padding: 8px;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  outline: none;
  border: none;
}

.icon-button:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

.icon-button:active {
  background-color: rgb(0 0 0 / 10%);
  transition: background-color 0.6s;
}
</style>
