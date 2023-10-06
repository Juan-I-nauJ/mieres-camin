<template>
<section class="tab1-container">
    <header class="tab1-container__header">
    
        <span class="tab1-container__title__span--light">HOTEL</span><Tab1Title>Mieres del Camín Apartamentos</Tab1Title><span class="tab1-container__title__rating"><font-awesome-icon icon="fa-solid fa-star" size="xs" /><font-awesome-icon icon="fa-solid fa-star" size="xs" /><font-awesome-icon icon="fa-solid fa-star" size="xs" /><font-awesome-icon icon="fa-solid fa-star" size="xs" /></span>
   
    </header>
    <main class="card-list-container">
        <div class="card-list-container__card-container">
<OptionCard labelFor="solo-alojamiento" radioName="stay-options">
<template #card-header>
    Solo Alojamiento
</template>
<template #card-properties>
    <ul class="property-list">
        <li>Sin régimen.</li>
        <li>Botella de agua de bienvenida.</li>
    </ul>
</template>
<template #label-input>
    Solo Alojamiento
</template>
</OptionCard>
</div>
    </main>
    </section>
</template>

<script setup lang="ts">
import Tab1Title from '../components/Tab1Title.vue';
import OptionCard from '../components/OptionCard.vue';

//...
</script>

<style scoped lang="scss">
.tab1-container{
    background-color: #ffffff;

    .tab1-container__header{
        text-align: center;
    }
.tab1-container__title__span--light{
color: $light-blue;
font-style:normal;
text-align: center;
margin-right: 10px;
}
.tab1-container__title__rating{
    color: $yellow;
    text-wrap: nowrap;

}

.tab1-container__title__rating svg{
    margin-left: 0.3rem;
}

.card-list-container{
    display: grid;
    grid-template-columns: repeat(10, 1fr);

.card-list-container__card-container{
    grid-column: span 2;
}
}

}

.property-list{
    padding-left: 1rem;
}

@media (min-width: 47rem) {
    .tab1-container__title__rating{
    margin-left: 3rem;

}
}
</style>