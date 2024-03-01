<script setup>
    const { imgSrc } = defineProps({
        imgSrc : String
    })
</script>
<template>
    <img :src="imgSrc">
</template>
<style scoped>
    img{
        width: 1.5em;
    }
</style>