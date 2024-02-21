<script setup>
    import { onMounted, ref } from 'vue'  
    import axios from 'axios'
    import FilmListDetailComponent from './FilmListDetailComponent.vue';
    const getFilm = async () => {
        await axios.get('https://vue-project-api-57ap.onrender.com/api/film/get').then((data)=>{
        console.log(data.data)
        FilmList.value = data.data
    })}
    onMounted(()=>{
        getFilm()
    })
    let FilmList = ref()
    
</script>
<template>
    <FilmListDetailComponent v-bind:ListFilm="FilmList ? FilmList : []"/>
</template>
<style scoped>
</style>