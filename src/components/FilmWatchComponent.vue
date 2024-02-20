<script setup>
    import { onMounted, ref } from 'vue'  
    import {useRoute} from "vue-router"
    import axios from 'axios'
    const route = useRoute()
    const getFilm = async () => {
        await axios.get('https://vue-project-api-57ap.onrender.com/api/film/get').then((data)=>{
        const AllFilm = data.data
        for(let film of AllFilm){
            if(film.id == route.params.id){
                Film.value = film
                break
            }
        }
    })}
    onMounted(()=>{
        getFilm()
    })
    let Film = ref()
</script>
<template>
    <div>
        <h4 v-text="Film ? Film.nom : ''"></h4>
        <iframe v-bind:src="Film ? Film.video : ''"></iframe>
        <p v-text="Film ? Film.synospis : ''"></p>
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