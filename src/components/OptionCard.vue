<template>
    <article class="card">
        <header class="card-header">
            <slot name="card-header"></slot>
        </header>
        <hr>
        <div class="card-body">
            <div class="card-body__card-properties">
                <slot name="card-properties"></slot>
            </div>
            <div class="card-body__card-input">
                <!--  <slot name="card-input"></slot> -->
                <label class="radio-label" :for='labelFor'>
                    <slot name="label-input"></slot>
                    <input type="radio" :name="radioName" :id="labelFor">
                </label>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
const props = defineProps({
    labelFor: String,
    radioName: String
})
</script>

<style scoped lang="scss">
.card {
    min-height: 60vh;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
}

.card-header {
    text-align: center;
    color: $light-blue;
    padding-top: 1rem;
}

hr {
    width: 33%;
    text-align: center;
}

.card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;

}

.radio-label {
    display: flex;
    flex-direction: row-reverse;
    width: 90%;
    margin: 0.5rem 0.5rem 0.5rem 0.33rem;
    align-items: center;
    justify-content: center;
    border: 1px solid $mid-blue;


    input {
        padding: 0;

    }
}
</style>