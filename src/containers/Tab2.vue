<template>
    <div>
        <h1>Tab 2 is under construction</h1>
        <p>Please check back later.</p>
    </div>
    <section>
        <article>
            <header>
                <span @click="toggleBody" class="header-toggle-arrow" >
                    <font-awesome-icon :icon="['fas', 'chevron-down']" class="header-toggle-arrow__icon" size="sm" :class="[{rotateArrow:bodyShown}]"/>
                </span>
                Mejora tu estancia
            </header>
            <div class="card-container" :class="[{hideObject:bodyShown}]">
            <HotelCard>
                <template #card-title>
                    Olvídese de la rutina
                </template>
                <template #card-info>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates omnis eveniet soluta magnam quasi maxime hic iure provident facere sint consectetur odio dolorem nesciunt delectus, eius a quae sequi? Nesciunt.
                </template>
                </HotelCard>
                </div>
        </article>
    </section>
</template>

<script setup lang="ts">
import HotelCard from '../components/HotelCard.vue';

import {ref} from 'vue';
const bodyShown = ref(false);

const toggleBody = ():void => {bodyShown.value = !bodyShown.value};
</script>

<style scoped lang="scss">
@use "sass:map";
div{
    background-color: map.get($colors, "white");
}

.card-container{
    overflow:hidden;
    height: 17.5rem;
    transition: height 0.3s;
}

.hideObject{
    height: 0;
}



.header-toggle-arrow__icon{
    transition: transform 0.3s;

}

.rotateArrow{
    transform: rotate(180deg);
}


</style>