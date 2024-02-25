<script setup>
    import { onMounted, ref, watch } from 'vue'  
    import { filmService } from '../../services'
    import {useRoute} from "vue-router"
    const route = useRoute()
    const getFilm = () => {
        for(let film of FilmList.value){
            if(film.id == route.params.id){
                currentFilm.value = film
                break
            }
        }
    }
    onMounted(async ()=>{
        console.log("📨 - recupérations du film...")
        FilmList.value = await filmService.getFilm()
        getFilm()
    })
    let FilmList = ref()
    let currentFilm = ref()
    watch(currentFilm, ()=>{
        console.log("📩 - serie reçu")
    })
</script>
<template>
    <div>
        <h4 v-text="currentFilm ? currentFilm.nom : ''"></h4>
        <iframe v-bind:src="currentFilm ? currentFilm.video : ''"></iframe>
        <p v-text="currentFilm ? currentFilm.synospis : ''"></p>
    </div>
</template>
<style scoped>
    div{
        background-color: rgb(206, 206, 206);
        border-radius: 1em;
        margin:2%;
        width:80%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
    }
    div h4{
        width: 100%;
    }
    div p{
        width: 80%;
        text-align: center;
    }
    div h4{
        text-align: center;
    }
    div iframe{
        width: 90%;
        aspect-ratio:16/9;
    }

</style>