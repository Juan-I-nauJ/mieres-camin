<template>
 <ul v-if="!(store.getBeer.length <= 0)">
            <li class="beer-li" v-for="beer in store.getBeer">

                <div class="image-control">
                    <img :src="beer.image_url" />
                </div>
                <div class="beer-data">
                <p>{{ beer.name }}</p>
                <p>{{ beer.description }}</p>
                <p><span class="dishes" v-for="dish in handleDishes(beer.food_pairing)">{{ `${dish} ` }}</span></p>
            </div>
                <span class="graduation" :class="getGraduation(beer.abv)">{{ beer.abv }}</span>

            </li>

        </ul>
        <p v-else>
            Loading...
        </p>
</template>

<script setup lang="ts">
import { useBeersStore } from './../stores/BeerStore';
import { onMounted } from 'vue';

const store = useBeersStore();
store.requestBeer();

const getGraduation = (abv:number):string =>{
return abv <=5 ? 'low-alcohol' : (abv < 10 ? 'mid-alcohol' : 'high-alcohol');
}

const handleDishes = (dishes:string[]):string[]=>{
return dishes.map((dish, i) => i === dishes.length-1 ? `y ${dish}` : dish);

}

onMounted((): void => {
    store.getBeer.length < 1 && store.requestBeer();
});

</script>

<style scoped lang="scss">
    ul {
        li {
            position: relative;
            display: flex;
            flex-direction: row;
            border: 1px solid lightgrey;
            width: 100%;

            .image-control {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                width: 15%;
                height: 20%;

                img {
                    width: 10rem;
                    height: 10rem;
                    object-fit: contain;
                }
            }
        .beer-data{
            display: flex;
            flex-direction: column;
            color: $black;
            .dishes{
                color: $light-blue;
            }
      
        }
        .graduation{
            position: absolute;
            top: 0;
            right: 0;
            padding-right: 2rem;
        }

        
        }
    }

    .high-alcohol{
        background-color: $red;
        color: #ffffff;
    }
    .mid-alcohol{
        background-color: $orange;
        color: $black;
    }
    .low-alcohol{
        background-color: yellow;
        color: $black;
    }
</style>