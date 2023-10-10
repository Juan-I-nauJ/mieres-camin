import { defineStore } from 'pinia'
import {ref, computed} from 'vue';

export const useOptionCardStore = defineStore('optionCards', ()=>{
    const boxClicked = ref(0);
    const getBoxClicked = computed(():number => boxClicked.value);
    const setBoxClicked = (id:number):void => {boxClicked.value = id};


    return {boxClicked, getBoxClicked, setBoxClicked};

});
