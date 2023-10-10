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
@use "sass:map";
.tab-header {
    .tab-header__title {
        color: map.get($colors, "light-blue");
        font: $blue-title-font;
        text-align: center;
        padding: 2rem 0 4rem 0;
    }
}

.beer-list-container {
    background-color: map.get($colors, "white");
    color: map.get($colors, "light-blue");
    border: 1px solid map.get($colors, "border-grey");
    padding-left: 1.5rem;
    width: 100%;


   
        .beer-list-container__title {
            text-align: center;
           padding: 3rem 1rem 1rem 0;
         
 
            font: $blue-title-font;
        }
    
  }

  @media (min-width: 47rem) {
  
  .tab-header{
    .tab-header__title{
        text-align: left;
        margin: 0;
        margin-left: 1.36rem;
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