<script setup>
    import { onMounted, ref, watch } from 'vue'
    import FilmListDetailComponent from './FilmListDetailComponent.vue';
    import { useFilmStore } from '../../store/film.store'
    const filmStore = useFilmStore()
    onMounted(async ()=>{
        console.log("📨 - recupérations des films...")
        FilmList.value = await filmStore.getFilm()
    })
    let FilmList = ref()
    watch(FilmList, ()=>{
        console.log("📩 - films reçus")
    })
    
</script>
<template>
    <FilmListDetailComponent v-bind:ListFilm="FilmList ? FilmList : []"/>
</template>
<style scoped>
</style>