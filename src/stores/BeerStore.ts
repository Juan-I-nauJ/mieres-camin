import { defineStore } from 'pinia'
import {ref, computed} from 'vue';
import axios from 'axios';

export const useBeersStore = defineStore('beers', ()=>{
    const beerList = ref([]);
    const getBeer = computed(()=>beerList.value);
    function requestBeer():void{
        axios.get('https://api.punkapi.com/v2/beers?per_page=10').then((response) => beerList.value = response.data);

    }
    return {beerList, getBeer, requestBeer};

});
