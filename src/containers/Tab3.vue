<template>
    <header class="tab-header">
        <h1 class="tab-header__title">Bebidas</h1>
    </header>
    <section class="beer-list-container">
        <header>
            <h1 class="beer-list-container__title">Cervezas</h1>
        </header>
        <BeerList />
    </section>
</template>

<script setup lang="ts">
import BeerList from './../components/BeerList.vue';
</script>

<style scoped lang="scss">
.tab-header {
    .tab-header__title {
        color: $light-blue;
        font: $blue-title-font;
        text-align: center;
        padding: 1rem;
        margin-left: 2rem;
    }
}

.beer-list-container {
    background-color: #ffffff;
    color: $light-blue;

   
        .beer-list-container__title {
            text-align: center;
            padding: 1rem;
            margin-left: 2rem;
            font: $blue-title-font;
        }
    
  }

  @media (min-width: 47rem) {
  
  .tab-header{
    .tab-header__title{
        text-align: left;
        margin: 0;
    }
  }
  
    .beer-list-container{
    
  .beer-list-container__title{
    text-align: left;
    margin: 0;
    
  }

  }
}
</style>