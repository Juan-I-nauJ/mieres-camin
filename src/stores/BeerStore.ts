import { defineStore } from 'pinia'
import {ref, computed} from 'vue';
import { AxiosResponse } from 'axios';
import beerService from './../services/beerService';

export const useBeersStore = defineStore('beers', ()=>{
    const beerList = ref([]);
    const getBeer = computed(():any=>beerList.value);
    const requestBeer = ():void => {
        beerService.requestBeer().then((response:AxiosResponse) => beerList.value = response.data);
    };

    return {beerList, getBeer, requestBeer};

});
