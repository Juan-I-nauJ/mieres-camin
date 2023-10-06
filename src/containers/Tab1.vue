<template>
    <section class="tab1-container">
        <header class="tab1-container__header">

            <span class="tab1-container__title__span--light">HOTEL</span>
            <Tab1Title>Mieres del Camín Apartamentos</Tab1Title><span
                class="tab1-container__title__rating"><font-awesome-icon icon="fa-solid fa-star"
                    size="xs" /><font-awesome-icon icon="fa-solid fa-star" size="xs" /><font-awesome-icon
                    icon="fa-solid fa-star" size="xs" /><font-awesome-icon icon="fa-solid fa-star" size="xs" /></span>

        </header>
        <main class="card-list-container">
            <div class="card-list-container__card-container" >
                <OptionCard label-for="solo-alojamiento" radio-name="stay-options" >
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
                        Elegir régimen
                    </template>
                </OptionCard>
                </div>
                <div class="card-list-container__card-container">

                <OptionCard label-for="alojamiento-desayuno" radio-name="stay-options">
                    <template #card-header>
                        Alojamiento y Desayuno
                    </template>
                    <template #card-properties>
                        <ul class="property-list">
                            <li>Desayuno buffet completo.</li>
                        </ul>
                    </template>
                    <template #label-input>
                        Elegir régimen
                    </template>
                </OptionCard>
            </div>
            <div class="card-list-container__card-container">

<OptionCard label-for="media-pension" radio-name="stay-options" ref="input" @click="(e)=>console.log(e.target, input)">
    <template #card-header>
        Media Pensión
    </template>
    <template #card-properties>
        <ul class="property-list">
            <li>Desayuno buffet completo.</li>
            <li>Cena buffet.</li>
            <li>No incluye.</li>
        </ul>
    </template>
    <template #label-input>
        Elegir régimen
    </template>
</OptionCard>
</div>
<div class="card-list-container__card-container">

<OptionCard label-for="todo-incluido" radio-name="stay-options">
    <template #card-header>
        Todo Incluído
    </template>
    <template #card-properties>
        <ul class="property-list">
            <li>Dispondrás de comida y bebida todo el día y durante tu estancia.</li>
            <li>Restaurante buffet.</li>
            <li>Snack bar.</li>
            <li>Servicio de bares (marcas nacionales).</li>
        </ul>
    </template>
    <template #label-input>
        Elegir régimen
    </template>
</OptionCard>
</div>
<div class="card-list-container__card-container">

<OptionCard label-for="unlimited-services" radio-name="stay-options">
    <template #card-header>
        Unlimited Services
    </template>
    <template #card-properties>
        <ul class="property-list">
            <li>Restaurante buffet con bebidas premium.</li>
            <li>Restaurante a la carta (una cena por estancia).</li>
            <li>Snack bar con bebidas premium.</li>
            <li>Minibar incluído.</li>
            <li>Acceso a SPA y 45 minutos de masaje por persona.</li>
            <li>Actividades deportivas (acuáticas sin motor).</li>
            <li>Caja fuerte.</li>
            <li>Parking gratuito.</li>
            <li>Lavandería</li>
        </ul>
    </template>
    <template #label-input>
        Elegir régimen
    </template>
</OptionCard>
</div>
        </main>
    </section>
</template>

<script setup lang="ts">
import Tab1Title from '../components/Tab1Title.vue';
import OptionCard from '../components/OptionCard.vue';
import {ref} from 'vue';

const input = ref(null);


</script>

<style scoped lang="scss">
.tab1-container {
    background-color: #ffffff;

    .tab1-container__header {
        text-align: center;
    }

    .tab1-container__title__span--light {
        font: $title-font;
        color: $mid-blue;
        font-style: normal;
        font-weight:lighter;
        text-align: center;
        margin-right: 10px;
    }

    .tab1-container__title__rating {
        color: $yellow;
        text-wrap: nowrap;

    }

    .tab1-container__title__rating svg {
        margin-left: 0.3rem;
    }

    .card-list-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap:0.4rem;

        .card-list-container__card-container {
            grid-column: span 3;
        }
    }

}

.property-list {
    padding-left: 1rem;
}

@media (min-width: 33rem) {
    .tab1-container{
    .card-list-container {
        grid-template-columns: repeat(4, 1fr);

        .card-list-container__card-container {
            grid-column: span 2;
        }
        .card-list-container__card-container:last-child{
            grid-column: 2/4
        }

            }
        }

}

@media (min-width: 40rem) {
    .tab1-container{
    .card-list-container {
        grid-template-columns: repeat(8, 1fr);

        .card-list-container__card-container {
            grid-column: span 2;
        }
        .card-list-container__card-container:last-child{
            grid-column: 3/7
        }

            }
        }

}


@media (min-width: 72rem) {
    .tab1-container__title__rating {
        margin-left: 3rem;

    }
    .tab1-container{
    .card-list-container {
        grid-template-columns: repeat(10, 1fr);

        .card-list-container__card-container {
            grid-column: span 2;
        }
        .card-list-container__card-container:last-child{
            grid-column: span 2;
        }

            }
        }
}

.selected{
    border: 1px solid $light-blue;
}
</style>