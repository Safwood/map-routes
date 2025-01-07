<script setup lang="ts">
import EditIcon from "../icons/IconEdit.vue";
import LocationIcon from "../icons/IconLocation.vue";
//  onClick,
//  onMouseEnter,
//  onMouseLeave
</script>
<template>
  <li class="item">
    <!-- onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave} -->

    <div class="item__content">
      <div class="item__badge">
        <slot name="badge"></slot>
      </div>
      <div class="item__info">
        <div class="item__title">
          <slot></slot>
        </div>
        <div class="item__description">
          <slot name="description"></slot>
        </div>
      </div>
    </div>
    <div class="item__buttons">
      <div class="hidden-button">
        <UIconButton>
          <!-- onClick="{handleLocationButtonClick}" -->
          <LocationIcon class="medium-icon yellow-icon" />
        </UIconButton>
      </div>

      <UIconButton>
        <!-- onClick="{handleEditClick}" -->
        <!-- isDisabled="{shouldOpenTloPassportCard}" -->
        <EditIcon class="medium-icon purple-icon" />
      </UIconButton>
    </div>
  </li>
</template>

<style scoped lang="scss">
.item {
  margin-bottom: 4px;
  width: 100%;
  transition: background-color 0.6s;
  display: flex;
  align-items: center;
  padding: 0 13px 0 0;

  &:last-child {
    margin-bottom: 0;
  }
}

.item:hover {
  background-color: var(--hover-color);
  transition: background-color 0.6s;
}

.item:hover .hidden-button {
  visibility: visible;
}

.item:active {
  background-color: rgb(0 0 0 / 10%);
  transition: background-color 0.6s;
}

.item__content {
  padding: 10px 0 10px 15px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

.item__content:hover {
  background-color: transparent;
}

.item__badge {
  height: 23px;
  width: 23px;
  margin-right: 15px;
}

.item__info {
  flex: 1;
}

.item__title {
  font-size: var(--size-text-3);
  color: var(--purple-text);
  font-weight: 500;
}

.item__description {
  margin-top: 4px;
  font-size: var(--size-text-4);
  color: var(--grey-4);
  line-height: 1.3;
}

.item__buttons {
  margin-left: 10px;
  display: flex;
  align-items: center;
}

.hidden-button {
  visibility: hidden;
}
</style>
