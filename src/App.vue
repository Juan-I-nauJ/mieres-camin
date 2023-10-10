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
@use "sass:map";

*{
  font: $main-font;
  box-sizing: border-box;
}

html{
  max-width: 80rem;
  margin: 0 auto;
}
body{
  background-color: map.get($colors, "background");
}

.page-view{

  width: 100%;
  margin-top: 4.5rem;
}

  </style>
