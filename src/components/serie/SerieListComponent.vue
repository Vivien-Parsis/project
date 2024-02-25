<script setup>
    import { onMounted, ref, watch } from 'vue'
    import SerieListDetailComponent from './SerieListDetailComponent.vue';
    import { serieService } from '../../services';
    onMounted(async ()=>{
        console.log("📨 - recupérations des séries...")
        SerieList.value = await serieService.getSerie()
    })
    let SerieList = ref()
    watch(SerieList, ()=>{
        console.log("📩 - series reçus")
    })
    
</script>
<template>
    <SerieListDetailComponent v-bind:ListSerie="SerieList ? SerieList : []"/>
</template>
<style scoped>
</style>