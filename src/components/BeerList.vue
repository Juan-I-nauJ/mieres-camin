<template>
 <ul v-if="!(store.getBeer.length <= 0)">
            <li class="beer-li" v-for="beer in store.getBeer">

                <div class="image-control">
                    <img :src="beer.image_url" />
                </div>
                <div class="beer-data">
                <p>{{ beer.name }}</p>
                <p>{{ beer.description }}</p>
                </div>
                <span :class="getGraduation(beer.abv)">{{ beer.abv }}</span>

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

function getGraduation(abv:number):string{
return abv <=5 ? 'low-alcohol' : (abv < 10 ? 'mid-alcohol' : 'high-alcohol');
}

onMounted((): void => {
    store.requestBeer();
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
        }
        span{
            position: absolute;
            top: 0;
            right: 0;
            padding-right: 2rem;
        }
        
        }
    }

    .high-alcohol{
        background-color: $red;
    }
    .mid-alcohol{
        background-color: $orange;
    }
    .low-alcohol{
        background-color: yellow;
    }
</style>