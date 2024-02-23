<script setup>
    import { onMounted, ref } from 'vue'
    import SerieListDetailComponent from './SerieListDetailComponent.vue';
    import { serieService } from '../../services';
    onMounted(async ()=>{
        SerieList.value = await serieService.getSerie()
        console.log(SerieList.value)
    })
    let SerieList = ref()
    
</script>
<template>
    <SerieListDetailComponent v-bind:ListSerie="SerieList ? SerieList : []"/>
</template>
<style scoped>
</style>