<script setup>
    import { onMounted, ref } from 'vue'
    import FilmListDetailComponent from './FilmListDetailComponent.vue';
    import { filmService } from '../../services';
    onMounted(async ()=>{
        FilmList.value = await filmService.getFilm()
    })
    let FilmList = ref()
    
</script>
<template>
    <FilmListDetailComponent v-bind:ListFilm="FilmList ? FilmList : []"/>
</template>
<style scoped>
</style>