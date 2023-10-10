<template>
    <article class="card-container">
        <div class="card-body">
            <div class="card-body__image-control">
            </div>
            <div class="card-body__text">
                <h2 class="card-body__title">
                    <slot name="card-title"></slot>
                </h2>
                <p>
                    <slot name="card-info"></slot>
                </p>
                <span>Mas información y condiciones<span class="header-toggle-arrow" @click="cardToggleBody">
                        <font-awesome-icon :icon="['fas', 'chevron-down']" size="sm"
                            :class="[{ rotateArrow: cardBodyShown }]" class="header-toggle-arrow--icon" />
                    </span></span>
                <div class="card-body__extra-info" :class="[{ hideObject: cardBodyShown }]">
                    <p class="extra-info__header">Incluye</p>
                    <slot name="extra-info-options">
                    <ul class="extra-info__info-list">
                        <li>Blablabla</li>
                        <li>blablablabla</li>
                        <li>blablablabla</li>
                        <li>blobloblo</li>
                        <li>blu</li>
                        <li>blaaaaaaa</li>
                    </ul>
                    </slot>
                </div>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const cardBodyShown = ref(false);

const cardToggleBody = (): void => { cardBodyShown.value = !cardBodyShown.value };
</script>

<style scoped lang="scss">
.card-container {
    border: 1px solid black;
    height: fit-content;
}

.card-title {
    border: 1px solid blue;
}

.card-body {
    border: 1px solid red;
    display: flex;
    flex-direction: row;


    .card-body__title {
        margin-bottom: 0rem;
    }

    .card-body__image-control {
        width: 15rem;
        height: 10rem;
        background-image: url(../assets/placeholder.jpeg);
        background-size: cover;
        background-repeat: no-repeat;
        margin-right: 1rem;
    }

    .card-body__text {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        padding: 0 1rem;
    }

}

.card-body__extra-info {
    transition: height 0.3s;
    height: 8em;
}

.extra-info__header {
    margin-top: 1.4rem;
}

.extra-info__info-list {
    columns: 3;
}

.hideObject {
    height: 0;
}

.header-toggle-arrow {
    margin-left: 1.5rem;
}

.header-toggle-arrow--icon{
    transition: transform 0.3s;
}

.rotateArrow {
    transform: rotate(180deg);
}</style>