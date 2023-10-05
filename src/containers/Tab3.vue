<template>
    <header>
        <h1>Bebidas</h1>
    </header>
    <section>
        <header>
            <h1>Cervezas</h1>
        </header>
        <BeerList />
    </section>
</template>

<script setup lang="ts">
import BeerList from './../components/BeerList.vue';
</script>

<style scoped lang="scss">
header {
    h1 {
        color: $light-blue;
        font-family: $title-font;
    }
}

section {
    background-color: #ffffff;
    color: $light-blue;

    header {
        h1 {
            font-family: $title-font;
        }
    }
  }
</style>