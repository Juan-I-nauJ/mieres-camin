<template>
    <article class="card-container">
        <h1 class="card-title" @click="toggleBody">Mejora tu estancia</h1>
        <div class="card-body" :class="[{hideObject:bodyShown}]">
            <div class="card-body__image-control">
            <img src="../assets/placeholder.jpeg" alt="lorem" />
            </div>
            <div class="card-body__text">
                <h2>Olvídese de la rutina</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora mollitia repellat amet rerum quia ab consequuntur sapiente eius vel et fugit cupiditate saepe aliquam libero nesciunt, placeat, minima aspernatur voluptatibus?</p>
                <span>Mas información</span>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
import {ref} from 'vue';
const bodyShown = ref(false);

const toggleBody = ():void => {bodyShown.value = !bodyShown.value};
</script>

<style scoped lang="scss">

.card-container{
    border: 1px solid black;
   
}

.card-title{
    border: 1px solid blue;
}

.card-body{
    border: 1px solid red;
}


.hideObject{
    height: 0;
}
</style>