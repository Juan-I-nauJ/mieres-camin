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
                <OptionCard :label-for="regime.header" radio-name="stay-options" :boxId="+regime.id"
                    :boxClicked="boxClicked">
                    <template #card-header>
                        {{ regime.header }}
                    </template>
                    <template #card-properties>
                        <ul class="property-list" v-for="item in regime.infoPoints" :key="item">
                            <li>{{ item }}</li>
                        </ul>
                    </template>
                    <template #label-input>
                        <div @click="handleClick(+regime.id)" style="width:100%">
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
import { ref } from 'vue';


const boxClicked = ref(0);

const handleClick = (elementId: number): void => {
    boxClicked.value = elementId;
    console.log('boxClicked tiene de valor', boxClicked.value);
};

</script>

<style scoped lang="scss">
.tab1-container {
    background-color: #ffffff;

    .tab1-container__header {
        text-align: center;
    }

    .tab1-container__title__rating svg {
        margin-left: 0.3rem;
    }

    .card-list-container {
        display: grid;
        //grid-template-columns: repeat(3, 1fr);
        grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
        gap: 0.4rem;
        margin: 0 2rem;

        .card-list-container__card-container {
           // grid-column: span 3;
        }
    }

}

.property-list {
    padding-left: 1rem;
}

@media (min-width: 33rem) {
    .tab1-container {
        .card-list-container {
          //  grid-template-columns: repeat(4, 1fr);

            .card-list-container__card-container {
             //   grid-column: span 2;
            }

            .card-list-container__card-container:last-child {
               // grid-column: 2/4
            }

        }
    }
}

@media (min-width: 40rem) {
    .tab1-container {
        .card-list-container {
            //grid-template-columns: repeat(8, 1fr);

            .card-list-container__card-container {
                //grid-column: span 2;
            }

            .card-list-container__card-container:last-child {
                //grid-column: 3/7
            }

        }
    }

}


@media (min-width: 72rem) {

    .tab1-container {
        .card-list-container {
            //grid-template-columns: repeat(10, 1fr);

            .card-list-container__card-container {
                //grid-column: span 2;
            }

            .card-list-container__card-container:last-child {
                //grid-column: span 2;
            }

        }
    }
}

.selected {
    border: 1px solid $light-blue;
}
</style>