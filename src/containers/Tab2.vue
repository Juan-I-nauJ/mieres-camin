<template>
    <div class="under-construction">
        <h1>Tab 2 is under construction</h1>
        <p>Please check back later.</p>
    </div>
    <section>
        <article class="cards-container">
            <header>
                <span @click="toggleBody" class="header-toggle-arrow" >
                    <font-awesome-icon :icon="['fas', 'chevron-down']" class="header-toggle-arrow__icon" size="sm" :class="[{rotateArrow:bodyShown}]"/>
                </span>
                Mejora tu estancia <span class="header--span">Opcional</span>
            </header>
            <div class="cards-height-toggler" :class="[{hideObject:bodyShown}]">
            <div class="card-container" v-for="card in textContent.hotelCardContent">
            <HotelCard>
                <template #card-title>
                    {{ card.header }}
                </template>
                <template #card-info>
                    {{ card.body }}
                </template>
                <template #extra-info-options>
                    <ul class="extra-info__info-list">
                        <li v-for="info of card.extraInfo">{{ info }}</li>
                    </ul>
                </template>
                </HotelCard>
                </div>
               <!-- <div class="card-container" >
                    <HotelCard>
                        <template #card-title>
                    Spas, aguas, etc
                </template>
                <template #card-info>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates omnis eveniet soluta magnam quasi maxime hic iure provident facere sint consectetur odio dolorem nesciunt delectus, eius a quae sequi? Nesciunt.
                </template>
                <template #extra-info-options>
                    <ul class="extra-info__info-list">
                        <li>Blablabla</li>
                        <li>blablablabla</li>
                        <li>blablablabla</li>
                        <li>blobloblo</li>
                        <li>blu</li>
                        <li>blaaaaaaa</li>
                    </ul>
                </template>
                    </HotelCard>
                </div> -->
                </div>
        </article>
    </section>
</template>

<script setup lang="ts">
import HotelCard from '../components/HotelCard.vue';
import textContent from '../constants/textContent';

import {ref} from 'vue';
const bodyShown = ref(false);

const toggleBody = ():void => {bodyShown.value = !bodyShown.value};
</script>

<style scoped lang="scss">
@use "sass:map";
.under-construction{
    background-color: map.get($colors, "white");
}

.cards-height-toggler{
    height: 100vh;
    transition: height 0.5s;
    overflow:hidden;
}
.cards-container{
    display: flex;
    flex-direction: column;
}

.card-container{
    overflow:hidden;
    transition: height 0.3s;
    margin-bottom: 2rem;
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

.extra-info__info-list {
    columns: 3;
}
</style>