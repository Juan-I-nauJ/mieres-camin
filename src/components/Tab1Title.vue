<template>
<h1 class="title"><slot></slot></h1>
</template>

<script setup lang="ts">
//...
</script>

<style scoped lang="scss">
.title{
    text-align: center;
    font-family: $title-font;
    color: $dark-blue;
    display: inline-block;
   
}
</style>