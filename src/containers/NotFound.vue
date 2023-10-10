<template>
    <section class="not-found">
        <header class="not-found__header">
    <h1 class="not-found__header__title">Page not found</h1>
</header>
    <p>Please, go back to the main page and try again.</p>
</section>
</template>

<script setup lang="ts">
//...
</script>

<style scoped lang="scss">
.not-found{
    background-color: map.get($colors, "white");
}
.not-found__header__title{
    font-family: $title-font;
}
</style>

