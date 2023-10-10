<template>
    <ul class="beer-ul" v-if="!(store.getBeer.length <= 0)">
        <li class="beer-li" v-for="(beer, i) in store.getBeer" :key="i">
            <div class="beer-li__image-control">
                <img class="beer-li__image-control__image" :src="beer.image_url" />
            </div>
            <div class="beer-li__beer-data">
                <p class="beer-li__beer-data--title">{{ beer.name }}</p>
                <p class="beer-li__beer-data--p">{{ beer.description }}</p>
                <p><span class="beer-li__dishes" v-for="dish in handleDishes(beer.food_pairing)">{{ `${dish} ` }}</span></p>
            </div>
            <span class="beer-li__graduation" :class="getGraduation(beer.abv)">{{ beer.abv }}</span>
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

const getGraduation = (abv: number): string => {
    return abv <= 5 ? 'beer-li__graduation--low-alcohol' : (abv < 10 ? 'beer-li__graduation--mid-alcohol' : 'beer-li__graduation--high-alcohol');
}

const handleDishes = (dishes: string[]): string[] => {
    return dishes.map((dish, i) => i === dishes.length - 1 ? `y ${dish}` : dish);

}

onMounted((): void => {
    store.getBeer.length < 1 && store.requestBeer();
});

</script>

<style scoped lang="scss">
.beer-ul {
    padding: 0;
}

.beer-li {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
    border: 1px solid $border-grey;
    width: 100%;


    .beer-li__image-control {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 20%;
        padding: 1rem 1rem;

        .beer-li__image-control__image {
            width: 10rem;
            height: 12.7rem;
            object-fit: scale-down;
        }
    }

    .beer-li__beer-data {
        display: flex;
        flex-direction: column;
        color: $black;
        padding-right: 2rem;
        padding-left: 1rem;

        .beer-li__beer-data--title {
            font: $subtitle-font;
            color: $dark-blue;
        }

        .beer-li__dishes {
            color: $light-blue;
            font: $beer-card-dishes-font;

        }

    }

    .beer-li__graduation {
        position: absolute;
        top: 1.1rem;
        right: 0;
        padding: 0.3rem 3rem 0.3rem 0.5rem;
        
        font: $subtitle-font;
   
    }
}

.beer-li__graduation--high-alcohol {
    background-color: $red;
    color: #ffffff;
}

.beer-li__graduation--mid-alcohol {
    background-color: $orange;
    color: $black;
}

.beer-li__graduation--low-alcohol {
    background-color: yellow;
    color: $black;
}

@media (min-width: 47rem) {
    .beer-li {
        flex-direction: row;
    }

    .beer-li__beer-data {
        padding-left: 0rem;
    }
}
</style>