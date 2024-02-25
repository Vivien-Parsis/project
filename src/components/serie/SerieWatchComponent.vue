<script setup>
    import { onMounted, ref } from 'vue'  
    import { serieService } from '../../services'
    import {useRoute} from "vue-router"
    const route = useRoute()
    const getSerie = () => {
        for(let serie of SerieList.value){
            if(serie.id == route.params.id){
                currentSerie.value = serie
                break
            }
        }
    }
    onMounted(async ()=>{
        console.log("📨 - recupérations de la série...")
        SerieList.value = await serieService.getSerie()
        getSerie()
    })
    let SerieList = ref()
    let currentSerie = ref()
    watch(currentSerie, ()=>{
        console.log("📩 - serie reçu")
    })
</script>
<template>
    <div>
        <h4 v-text="currentSerie ? currentSerie.nom : ''"></h4>
        <iframe v-bind:src="currentSerie ? currentSerie.video : ''"></iframe>
        <p v-text="currentSerie ? currentSerie.synospis : ''"></p>
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