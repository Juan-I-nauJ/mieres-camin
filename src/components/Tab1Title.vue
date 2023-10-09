<template>
<span class="title--span"><slot name="title-span"></slot></span>
<h1 class="title" @click="tryArray"><slot></slot></h1>
<span class="title--rating">
    <font-awesome-icon icon="fa-solid fa-star" size="xs" v-for="star in starArray" :key="star" class="title--rating__star"/>
</span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
 starNumber:Number
})

const starArray = computed(():Number[]=>[...Array(props.starNumber).keys()]);
const tryArray = ()=>console.log(starArray.value);
</script>

<style scoped lang="scss">
.title--span{
    font: $title-font;
        color: $mid-blue;
        font-style: normal;
        font-weight:lighter;
        text-align: center;
        margin-right: 10px;
}
.title{
    text-align: center;
    font: $title-font;
    color: $dark-blue;
    display: inline-block;
   
   
}
.title--rating {
        color: $orange;
        text-wrap: nowrap;


        .title--rating__star{
        margin-left: 0.3rem;
    }
    }





    @media (min-width: 32rem) {
    .title--rating {
        margin-left: 2rem;

    }
}

</style>