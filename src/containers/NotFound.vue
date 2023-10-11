<template>
    <section class="not-found">
        <header class="not-found__header">
    <h1 class="not-found__header--title">Page not found</h1>
</header>
    <p class="not-found__body">Please, go back to the main page and try again.</p>
</section>
</template>

<script setup lang="ts">
//...
</script>

<style scoped lang="scss">
@use "sass:map";
.not-found{
    background-color: map.get($colors, "white");
}
.not-found__header--title{
    font: $title-font;
    text-align: center;
    padding-top: 2rem;
}

.not-found__body{
    text-align: center;
    padding: 2rem;
}
</style>

