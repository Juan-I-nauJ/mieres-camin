<template>
    <article class="card" :class="handleSelectedProp ? 'selected' : ''">
        <header class="card-header">
            <slot name="card-header"></slot>
        </header>
        <hr>
        <div class="card-body">
            <div class="card-body__card-properties">
                <slot name="card-properties"></slot>
            </div>
            <div class="card-body__card-input">
                <label class="radio-label" :for='labelFor' :class="handleSelectedProp ? 'selected' : ''">
                    <slot name="label-input"></slot>
                    <input type="radio" :name="radioName" :id="labelFor" class="radio-label__radio" @click="handleRadioClick">
                </label>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useOptionCardStore } from '../stores/OptionCardStore';

const store = useOptionCardStore();

const props = defineProps({
  labelFor: String,
  radioName: String,
  boxId: Number,
})

const handleSelectedProp = computed(():boolean=> store.getBoxClicked === props.boxId);

const handleRadioClick = ():void=>{store.setBoxClicked(props.boxId || 0)};

</script>

<style scoped lang="scss">
@use "sass:map";
.card {
    min-height: 80vh;
    border: 0.6px solid map.get($colors, "light-blue");
    @include flex-column;
    background-color: map.get($colors, "white");
}

.card-header {
    text-align: center;
    font: $option-card-title-font;
    color: lighten(map.get($colors, "mid-blue"), 10%);
    padding-top: 2rem; 
    font-weight: bold;
    
}

hr {
    width: 33%;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    text-align: center;
    border: 0.01px solid lighten(map.get($colors, "light-blue"), 25%);  
}

.card-body {
    @include flex-column;
    justify-content: space-between;
    flex-grow: 1;
    font: $option-card-regular-font;
}

.card-body__card-properties{
    padding-right: 1rem;
    padding-left: 0.5rem;
}

.radio-label {
    display: flex;
    flex-direction: row-reverse;
    width: 90%;
    height: 100%;
    margin: 0.5rem 0.5rem 1rem 0.8rem;
    align-items: center;
    justify-content: center;
    border: 0.5px solid map.get($colors, "background");
    background-color: map.get($colors, "background");


    .radio-label__radio {
        padding: 0;
        margin: 0 1rem;

    }
    .radio-label__radio:checked{
        accent-color: green;
    }

}
.selected{
    border: 0.5px solid lighten(map.get($colors, "mid-blue"), 10%);
}
</style>