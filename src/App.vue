<script setup lang="ts">
import TheHeader from './components/TheHeader.vue';
</script>

<template>
  <TheHeader />
  <div class="page-view">
  <router-view />
  </div>
</template>

<style lang="scss">
*{
  font: $main-font;
}
body{
  background-color: $background;
}

.page-view{
  margin-top: 4.5rem;
}

  </style>
