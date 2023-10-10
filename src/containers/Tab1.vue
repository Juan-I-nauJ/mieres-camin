<template>
    <section class="tab1-container">
        <header class="tab1-container__header">
            <Tab1Title :starNumber="+4">
                <template #title-span>
                    HOTEL
                </template>
                Mieres del Camín Apartamentos
            </Tab1Title>
        </header>
        <main class="card-list-container">
            <div class="card-list-container__card-container" v-for="(regime) in textContent.hotelCardContent"
                :key="regime.id">
                <OptionCard :label-for="regime.header" radio-name="stay-options" :boxId="+regime.id">
                    <template #card-header>
                        {{ regime.header }}
                    </template>
                    <template #card-properties>
                        <ul class="property-list" v-for="item in regime.infoPoints" :key="item">
                            <li>{{ item }}</li>
                        </ul>
                    </template>
                    <template #label-input>
                        <div @click="handleClick(+regime.id)" style="width:100%" class="label-clickable-div">
                        {{ regime.option }}
                    </div>
                    </template>
                </OptionCard>
            </div>
        </main>
    </section>
</template>

<script setup lang="ts">
import Tab1Title from '../components/Tab1Title.vue';
import OptionCard from '../components/OptionCard.vue';
import textContent from '../constants/textContent';
import { useOptionCardStore } from '../stores/OptionCardStore';


const store = useOptionCardStore();

const handleClick = (elementId: number): void => {
    store.setBoxClicked(elementId);
};


</script>

<style scoped lang="scss">
.tab1-container {

    .tab1-container__header {
        text-align: center;
        padding: 0.3rem 0 2rem 0;
        
    }

    .tab1-container__title__rating svg {
        margin-left: 0.3rem;
    }

    .card-list-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 0.4rem;
        

    }

}

.property-list {
    padding-left: 1rem;
}

.label-clickable-div{
    font: $option-card-title-font;
    padding: 0.8rem 1rem;

}

</style>