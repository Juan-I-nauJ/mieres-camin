<template>
<span class="title--span"><slot name="title-span"></slot></span>
<h1 class="title"><slot></slot></h1>
<span class="title--rating"><font-awesome-icon icon="fa-solid fa-star"
                    size="xs" /><font-awesome-icon icon="fa-solid fa-star" size="xs" /><font-awesome-icon
                    icon="fa-solid fa-star" size="xs" /><font-awesome-icon icon="fa-solid fa-star" size="xs" /></span>
</template>

<script setup lang="ts">
//...
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
        color: $yellow;
        text-wrap: nowrap;

    }

    @media (min-width: 32rem) {
    .title--rating {
        margin-left: 3rem;

    }
}

</style>